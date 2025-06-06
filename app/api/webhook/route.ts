import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    console.log("Received webhook data:", data)

    const supabase = createServerSupabaseClient()

    // Extract device type from user agent with enhanced mobile detection
    const userAgent = data.userAgent || ""
    // More comprehensive mobile detection pattern
    const isMobile = /mobile|android|iphone|ipad|ipod|tablet|phone|touch/i.test(userAgent.toLowerCase())
    const deviceType = data.deviceType || (isMobile ? "mobile" : "desktop")

    // Enhanced logging for device detection
    console.log(`Device detection: userAgent=${userAgent.substring(0, 100)}...`)
    console.log(`Device type detected: ${deviceType} (isMobile: ${isMobile})`)

    // Prepare data for Zapier with consistent format
    const zapierData = {
      // User information
      name: data.name || (data.source === "hero" ? "Prospect" : ""),
      email: data.email,
      company: data.company || (data.source === "hero" ? "Unknown" : ""),
      properties: data.properties || (data.source === "hero" ? "Unknown" : ""),

      // Source tracking
      source: data.source,
      url: data.url,

      // Device information
      deviceType: deviceType,
      userAgent: userAgent,
      ipAddress: data.ip || "",

      // UTM parameters
      utmSource: data.utmSource || "",
      utmMedium: data.utmMedium || "",
      utmCampaign: data.utmCampaign || "",

      // Timestamp
      submittedAt: data.submittedAt || new Date().toISOString(),

      // Additional tracking for hero > get-started flow
      isFromHero: data.source === "get-started" && data.url && data.url.includes("email=") ? "yes" : "no",
    }

    console.log("Sending to Zapier:", zapierData)

    // Always send to Zapier regardless of duplicate status
    const zapierResponse = await fetch("https://hooks.zapier.com/hooks/catch/22588169/2xfcitk/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(zapierData),
    })

    if (!zapierResponse.ok) {
      console.error("Error sending to Zapier:", await zapierResponse.text())
    } else {
      console.log("Successfully sent to Zapier")
    }

    // For Supabase, check for duplicates before inserting
    let skipDatabaseInsert = false

    // If this is a hero form submission, check if the email already exists in the database
    if (data.source === "hero") {
      const { data: existingSubmissions, error: checkError } = await supabase
        .from("jv_gc_e")
        .select("id")
        .eq("email", data.email)
        .limit(1)

      if (checkError) {
        console.error("Error checking for existing submissions:", checkError)
      } else if (existingSubmissions && existingSubmissions.length > 0) {
        // This email already exists in the database, don't create a duplicate from hero form
        console.log("Hero form: Email already exists, skipping database insert")
        skipDatabaseInsert = true
      }
    }

    // Check if this is a duplicate submission (within the last 10 seconds with the same email and source)
    if (!skipDatabaseInsert) {
      const tenSecondsAgo = new Date(Date.now() - 10000).toISOString()
      const { data: recentSubmissions, error: checkError } = await supabase
        .from("jv_gc_e")
        .select("id")
        .eq("email", data.email)
        .eq("form_source", data.source)
        .gt("submitted_at", tenSecondsAgo)

      if (checkError) {
        console.error("Error checking for recent submissions:", checkError)
      } else if (recentSubmissions && recentSubmissions.length > 0) {
        // This is likely a duplicate submission, don't store it again
        console.log("Detected duplicate submission, skipping database insert")
        skipDatabaseInsert = true
      }
    }

    // Store in Supabase if not a duplicate
    if (!skipDatabaseInsert) {
      // For hero form, ensure we have default values for required fields
      const name = data.name || (data.source === "hero" ? "Prospect" : null)
      const company = data.company || (data.source === "hero" ? "Unknown" : null)
      const properties = data.properties || (data.source === "hero" ? "Unknown" : null)

      console.log("Inserting into Supabase:", {
        name,
        email: data.email,
        company,
        properties,
        form_source: data.source,
        source: "jv_gc_e",
        url: data.url,
        user_agent: userAgent,
        ip_address: data.ip || null,
        utm_source: data.utmSource || null,
        utm_medium: data.utmMedium || null,
        utm_campaign: data.utmCampaign || null,
      })

      // Store submission in Supabase
      const { error: supabaseError } = await supabase.from("jv_gc_e").insert({
        name: name,
        email: data.email,
        company: company,
        properties: properties,
        form_source: data.source, // Store the original source (hero, homepage, get-started) in form_source
        source: "jv_gc_e", // Set the source to your identifier
        url: data.url,
        user_agent: userAgent,
        ip_address: data.ip || null,
        utm_source: data.utmSource || null,
        utm_medium: data.utmMedium || null,
        utm_campaign: data.utmCampaign || null,
        status: "pending",
        submitted_at: new Date().toISOString(),
      })

      if (supabaseError) {
        console.error("Error storing in Supabase:", supabaseError)
        return NextResponse.json({ success: false, error: "Failed to store in database" }, { status: 500 })
      } else {
        console.log("Successfully stored in Supabase")
      }
    }

    // Return success if Zapier worked
    if (zapierResponse.ok) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, error: "Failed to send to Zapier" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error processing submission:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

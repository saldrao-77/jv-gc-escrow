"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { getUtmParams, getUserDeviceInfo } from "@/lib/utm-utils"

export default function GetStartedPage() {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [properties, setProperties] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const utmParams = getUtmParams()
  const { isMobile, userAgent } = getUserDeviceInfo()
  const isFromHero = searchParams.get("from") === "hero"

  useEffect(() => {
    const emailParam = searchParams.get("email")
    if (emailParam) {
      setEmail(emailParam)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      console.log("Get-started form submission started")

      // Get client IP address (this will be replaced by the server)
      let ipAddress = ""
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json")
        if (ipResponse.ok) {
          const ipData = await ipResponse.json()
          ipAddress = ipData.ip
        }
      } catch (ipError) {
        console.error("Error getting IP:", ipError)
        // Continue without IP if there's an error
      }

      // Get hero submission data if available
      let heroData = null
      try {
        const heroSubmissionStr = sessionStorage.getItem("heroSubmission")
        if (heroSubmissionStr) {
          heroData = JSON.parse(heroSubmissionStr)
        }
      } catch (e) {
        console.error("Error parsing hero submission:", e)
      }

      // Create the submission data
      const formData = {
        name,
        email,
        company,
        properties,
        source: "get-started",
        submittedAt: new Date().toISOString(),
        url: window.location.href,
        userAgent,
        ip: ipAddress,
        utmSource: utmParams.utmSource,
        utmMedium: utmParams.utmMedium,
        utmCampaign: utmParams.utmCampaign,
        deviceType: isMobile ? "mobile" : "desktop",
        isFromHero: isFromHero || !!heroData,
        heroSubmissionTime: heroData?.timestamp ? new Date(heroData.timestamp).toISOString() : null,
      }

      console.log("Sending get-started form data:", formData)

      // Send to our API route
      const response = await fetch("/api/webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error("API response error:", errorText)
        throw new Error(`Failed to submit form: ${errorText}`)
      }

      console.log("Get-started form submission successful")

      // Store submission in sessionStorage to check on calendar page
      sessionStorage.setItem(
        "lastSubmission",
        JSON.stringify({
          ...formData,
          timestamp: Date.now(),
        }),
      )

      // Clear hero submission data after successful get-started submission
      sessionStorage.removeItem("heroSubmission")

      // Redirect to the calendar page with the submitted parameter
      router.push("/calendar?submitted=true")
    } catch (error) {
      console.error("Error in get-started form submission:", error)
      setError("There was an error submitting the form. Please try again.")
      // Still redirect even if notification fails
      setTimeout(() => {
        router.push("/calendar?submitted=true")
      }, 1000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-heading">GET STARTED WITH JOBVAULT</h1>
        <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">
          Fill out the form below to get started with JobVault and eliminate deposit payment risks with your
          subcontractors.
        </p>

        <div className="max-w-md mx-auto bg-zinc-900 p-8 rounded-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name *
              </label>
              <Input
                id="name"
                placeholder="John Smith"
                className="bg-zinc-800 border-zinc-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="bg-zinc-800 border-zinc-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-1">
                Company Name *
              </label>
              <Input
                id="company"
                placeholder="Your GC Company"
                className="bg-zinc-800 border-zinc-700"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="properties" className="block text-sm font-medium mb-1">
                How many active job sites do you typically manage? *
              </label>
              <select
                id="properties"
                className="w-full rounded-md bg-zinc-800 border-zinc-700 p-2"
                value={properties}
                onChange={(e) => setProperties(e.target.value)}
                required
                disabled={isSubmitting}
              >
                <option value="">Select an option</option>
                <option value="1-5">1-5 job sites</option>
                <option value="6-15">6-15 job sites</option>
                <option value="16-30">16-30 job sites</option>
                <option value="30+">30+ job sites</option>
              </select>
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Start Saving Today"}
            </Button>

            <p className="text-center text-white/60 text-sm mt-2">We'll reach out to you shortly after submission.</p>

            <div className="text-center mt-4">
              <p className="text-white/60 text-sm">Or</p>
              <Link
                href="/calendar"
                className="text-blue-400 hover:text-blue-300 inline-block mt-2 bg-transparent border border-blue-400 rounded-md px-4 py-2 text-sm transition-colors hover:bg-blue-400/10"
              >
                Book a demo with our team now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

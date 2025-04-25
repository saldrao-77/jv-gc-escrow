"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Building, Shield, BadgeCheck } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ContactButtons } from "./contact-buttons"
import { getUtmParams, getUserDeviceInfo } from "@/lib/utm-utils"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const utmParams = getUtmParams()
  const { isMobile, userAgent } = getUserDeviceInfo()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setError(null)

    try {
      console.log("Hero form submission started")

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

      // Create the submission data
      const formData = {
        email,
        source: "hero",
        submittedAt: new Date().toISOString(),
        url: window.location.href,
        userAgent,
        ip: ipAddress,
        utmSource: utmParams.utmSource,
        utmMedium: utmParams.utmMedium,
        utmCampaign: utmParams.utmCampaign,
        deviceType: isMobile ? "mobile" : "desktop",
      }

      console.log("Sending hero form data:", formData)

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

      console.log("Hero form submission successful")

      // Store the hero submission in sessionStorage to track the journey
      sessionStorage.setItem(
        "heroSubmission",
        JSON.stringify({
          ...formData,
          timestamp: Date.now(),
        }),
      )

      // Redirect to get-started page with email prefilled and source tracking
      router.push(`/get-started?email=${encodeURIComponent(email)}&from=hero`)
    } catch (error) {
      console.error("Error in hero form submission:", error)
      setError("There was an error submitting the form. Please try again.")
      // Still redirect even if API call fails
      setTimeout(() => {
        router.push(`/get-started?email=${encodeURIComponent(email)}&from=hero`)
      }, 1000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-16">
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/images/PM.webp"
          alt="General Contractor"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Solid background for mobile */}
      <div className="absolute inset-0 z-0 bg-black md:hidden"></div>

      <div className="container relative z-10 mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto font-heading tracking-tight">
          Protect your cash from risky sub deposits
        </h1>

        <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          No more risky cash advances or vanished deposits. JobVault lets you preload materials money for subs into
          escrow, lock spend by vendor, and only release funds after real-time verification—protecting your cash flow
          and building trust with subs while keeping the job moving.
        </p>

        <div className="max-w-md mx-auto mb-8">
          <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              className="bg-white text-black hover:bg-white/90 whitespace-nowrap font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Get started today"}
            </Button>
          </form>

          {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}

          {/* Contact buttons added below email box */}
          <ContactButtons />
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-400" />
            SOC 2 compliant security
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-blue-400" />
            AI-led trust & safety
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <Building className="h-4 w-4 text-blue-400" />
            100% real-time verification
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
    </section>
  )
}

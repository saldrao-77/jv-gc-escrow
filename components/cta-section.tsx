"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function CtaSection() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [properties, setProperties] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create the new submission
    const newSubmission = {
      id: Date.now().toString(),
      name,
      email,
      company,
      properties,
      status: "pending",
      date: new Date().toISOString(),
      source: "homepage",
      notes: "",
    }

    try {
      // Get existing submissions or initialize empty array
      const existingSubmissions = JSON.parse(localStorage.getItem("formSubmissions") || "[]")

      // Add new submission and save back to localStorage
      localStorage.setItem("formSubmissions", JSON.stringify([...existingSubmissions, newSubmission]))

      // For email notifications, you would call your email service here
      // For now, we'll just log to console
      console.log("New submission - would send email:", newSubmission)

      // Redirect to the calendar page with the submitted parameter
      router.push("/calendar?submitted=true")
    } catch (error) {
      console.error("Error processing submission:", error)
      // Still redirect even if notification fails
      router.push("/calendar?submitted=true")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Update the CTA section content
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/paperwork.jpg"
              alt="Messy paperwork and receipts"
              width={600}
              height={500}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">LET'S MAKE SUB PAYMENTS EASY</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="cta-name" className="block text-sm font-medium mb-1">
                  Full Name *
                </label>
                <Input
                  id="cta-name"
                  placeholder="John Smith"
                  className="bg-zinc-800 border-zinc-700"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="cta-email" className="block text-sm font-medium mb-1">
                  Email Address *
                </label>
                <Input
                  id="cta-email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-zinc-800 border-zinc-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="cta-company" className="block text-sm font-medium mb-1">
                  Company Name *
                </label>
                <Input
                  id="cta-company"
                  placeholder="Your GC Company"
                  className="bg-zinc-800 border-zinc-700"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="cta-properties" className="block text-sm font-medium mb-1">
                  How many active job sites do you typically manage? *
                </label>
                <select
                  id="cta-properties"
                  className="w-full rounded-md bg-zinc-800 border-zinc-700 p-2"
                  value={properties}
                  onChange={(e) => setProperties(e.target.value)}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="1-5">1-5 job sites</option>
                  <option value="6-15">6-15 job sites</option>
                  <option value="16-30">16-30 job sites</option>
                  <option value="30+">30+ job sites</option>
                </select>
              </div>

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
      </div>
    </section>
  )
}

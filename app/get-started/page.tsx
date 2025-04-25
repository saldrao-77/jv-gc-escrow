"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function GetStartedPage() {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [properties, setProperties] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const emailParam = searchParams.get("email")
    if (emailParam) {
      setEmail(emailParam)
    }
  }, [searchParams])

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
      source: "get-started",
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

      // In a real implementation with EmailJS, you would do something like:
      /*
      import emailjs from '@emailjs/browser';
      
      await emailjs.send(
        "your_service_id",
        "your_template_id",
        {
          name,
          email,
          company,
          properties,
          message: "New form submission from Get Started page",
        },
        "your_user_id"
      );
      */

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

  // Update the get started page title and description
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
    </main>
  )
}

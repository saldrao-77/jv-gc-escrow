"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Building, Shield, BadgeCheck } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ContactButtons } from "./contact-buttons"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      router.push(`/get-started?email=${encodeURIComponent(email)}`)
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
            />
            <Button type="submit" className="bg-white text-black hover:bg-white/90 whitespace-nowrap font-medium">
              Get started today
            </Button>
          </form>

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

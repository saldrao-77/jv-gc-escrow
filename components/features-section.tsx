"use client"

import { useState } from "react"
import { Shield, CreditCard, Receipt, BarChart, DollarSign } from "lucide-react"

const features = [
  {
    id: "escrow",
    icon: <Shield className="h-8 w-8" />,
    emoji: "🔒",
    title: "AI-Powered Risk Prevention",
    description:
      "Our AI Trust & Safety algorithms identify high-risk vendors and transactions before you spend a dime, analyzing thousands of data points to protect your funds from fraud and misuse.",
  },
  {
    id: "verification",
    icon: <CreditCard className="h-8 w-8" />,
    emoji: "✅",
    title: "Real-Time Vendor Verification",
    description:
      "When your sub makes a purchase, our AI system automatically verifies with the vendor in real-time, confirming materials match your project specifications and validating delivery locations match your job site at the point of purchase.",
  },
  {
    id: "protection",
    icon: <Receipt className="h-8 w-8" />,
    emoji: "🛡️",
    title: "Protect Your Cash Flow",
    description:
      "Your money stays secure in escrow until purchases are verified. Only pay for confirmed materials from verified vendors, eliminating deposit risks and ensuring your funds are used as intended.",
  },
  {
    id: "tracking",
    icon: <BarChart className="h-8 w-8" />,
    emoji: "📊",
    title: "Maximize Tax Deductions",
    description:
      "Every transaction is automatically categorized by job site, subcontractor, and vendor. Export detailed reports for requisitions and tax preparation to maximize your deductions.",
  },
  {
    id: "trust",
    icon: <DollarSign className="h-8 w-8" />,
    emoji: "🤝",
    title: "End Payment Timeline Disputes",
    description:
      "Many jobs stall because GCs and subs can't agree on deposit terms. JobVault eliminates this friction point, allowing projects to start faster while protecting both parties' interests.",
  },
]

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(features[0].id)

  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-heading">
          SECURE FUNDING, VERIFIED RESULTS
        </h2>
        <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">
          JobVault's AI-powered escrow system eliminates deposit risks while building trust with your subcontractors.
        </p>

        <div className="grid md:grid-cols-1 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="p-6 rounded-lg cursor-pointer feature-card bg-zinc-900 hover:bg-zinc-800">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{feature.emoji}</span>
                <h3 className="text-xl font-bold font-heading">{feature.title}</h3>
              </div>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

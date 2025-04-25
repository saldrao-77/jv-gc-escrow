"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { CreditCard, Smartphone, Receipt, Activity } from "lucide-react"

const carouselItems = [
  {
    id: "escrow-setup",
    icon: <CreditCard className="h-6 w-6" />,
    emoji: "🔒",
    title: "Secure Escrow Account",
    description:
      "Create a secure escrow account and fund it based on your subcontractor's quote. Upload the quote and our system auto-suggests funding amounts and vendor details. ACH transfers are always free.",
    image: "/images/issue-card.png",
  },
  {
    id: "card-issuance",
    icon: <Smartphone className="h-6 w-6" />,
    emoji: "💳",
    title: "Controlled Payment Cards",
    description:
      "Issue virtual or physical cards to your subcontractors with AI-enforced controls for materials purchases. Set limits by amount, vendor, and location for maximum security.",
    image: "/images/card-1.png",
  },
  {
    id: "vendor-verification",
    icon: <Receipt className="h-6 w-6" />,
    emoji: "✅",
    title: "Real-Time Vendor Verification",
    description:
      "Our AI system verifies purchases in real-time with vendors, validating job site delivery details at the point of purchase. Subs are prompted to text receipts after purchase. Receipts are automatically processed, matched to transactions, and stored digitally, eliminating fraud risk and paper receipt tracking.",
    image: "/images/card-2.png",
  },
  {
    id: "expense-tracking",
    icon: <Activity className="h-6 w-6" />,
    emoji: "📊",
    title: "Complete Transaction Tracking",
    description:
      "Track every transaction in our detailed dashboard, broken down by job site, subcontractor, and vendor. Digital receipts are automatically organized for easy requisitions and maximizing tax deductions.",
    image: "/images/analytics.png",
  },
]

export function CarouselSection() {
  const [activeItem, setActiveItem] = useState(carouselItems[0].id)

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((current) => {
        const currentIndex = carouselItems.findIndex((item) => item.id === current)
        const nextIndex = (currentIndex + 1) % carouselItems.length
        return carouselItems[nextIndex].id
      })
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading">SEE IT IN ACTION</h2>

        <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-2xl">
          <div className="p-2 bg-zinc-800 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2 space-y-4">
                {carouselItems.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-md cursor-pointer transition-all ${
                      activeItem === item.id
                        ? "bg-blue-900/20 border border-blue-800/50"
                        : "bg-zinc-800 hover:bg-zinc-700"
                    }`}
                    onClick={() => setActiveItem(item.id)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.emoji}</span>
                      <h3 className="font-medium font-heading">{item.title}</h3>
                    </div>
                    <p className="text-sm text-white/70">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="md:col-span-3 bg-zinc-800 rounded-md p-4 flex items-center justify-center">
                <div className="relative w-full h-[550px] flex items-center justify-center">
                  {carouselItems.map((item) => (
                    <div
                      key={item.id}
                      className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center ${
                        activeItem === item.id ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      {item.id === "vendor-verification" ? (
                        <div className="h-full w-full flex items-center justify-center">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={300}
                            height={550}
                            className="h-full w-auto max-h-[550px] rounded-lg object-contain"
                            priority
                          />
                        </div>
                      ) : (
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={600}
                          height={400}
                          className="max-w-full max-h-[550px] rounded-lg object-contain"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

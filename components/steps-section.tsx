"use client"

import { CreditCard, Receipt, Shield, BarChart } from "lucide-react"

export function StepsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading">HOW IT WORKS</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="bg-zinc-900 p-8 rounded-lg text-center relative">
            <div className="w-12 h-12 bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 font-heading">Fund based on quote</h3>
            <p className="text-white/70">
              Create a secure escrow account and fund it based on your subcontractor's quote. Upload the quote and our
              system auto-suggests funding amounts and vendor details. ACH transfers from your bank account are always
              free.
            </p>
            <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="lg:hidden mt-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg text-center relative">
            <div className="w-12 h-12 bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 font-heading">AI-powered protection</h3>
            <p className="text-white/70">
              Issue a controlled card to your sub with spending limits by amount, vendor, and location. Our AI Trust &
              Safety algorithms analyze vendors and transactions to identify risks before money is spent.
            </p>
            <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="lg:hidden mt-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg text-center relative">
            <div className="w-12 h-12 bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Receipt className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 font-heading">Real-time vendor verification</h3>
            <p className="text-white/70">
              Our AI system automatically verifies purchases with vendors in real-time, confirming materials match the
              sub's quote and validating job site delivery details at the point of purchase, eliminating fraud or fund
              misuse risk.
            </p>
            <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="lg:hidden mt-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg text-center">
            <div className="w-12 h-12 bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 font-heading">Complete visibility</h3>
            <p className="text-white/70">
              Track every transaction in our detailed dashboard, broken down by job site, subcontractor, and vendor.
              Digital receipts are automatically organized for easy requisitions and maximizing tax deductions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

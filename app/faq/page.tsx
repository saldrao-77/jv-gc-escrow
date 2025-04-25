"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ContactButtons } from "@/components/contact-buttons"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-heading">FREQUENTLY ASKED QUESTIONS</h1>
        <p className="text-center text-white/70 mb-8 max-w-2xl mx-auto">
          Everything you need to know about JobVault's AI-powered escrow system and how it can transform your
          subcontractor payment process.
        </p>

        {/* Contact buttons added beneath subhero */}
        <div className="flex justify-center mb-8">
          <ContactButtons />
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">How does JobVault's escrow system work?</AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                JobVault provides a secure escrow account where you can deposit funds for your subcontractor's
                materials. Instead of giving a deposit directly to the sub, you fund the escrow based on their material
                quote. We then issue a controlled payment card to your sub that can only be used at approved vendors.
                Our AI-powered verification system confirms purchases in real-time with suppliers before releasing
                funds, ensuring your money is only spent on legitimate materials for your project.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">How quickly can we get started?</AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                Most customers are up and running within 48 hours. We'll help you set up your escrow account, create
                your first controlled payment cards, and configure our AI verification system for your specific needs.
                Our onboarding specialists will guide you through the entire process, including setting up vendor
                verification protocols and configuring your dashboard for maximum visibility. ACH transfers to fund your
                escrow account are always free.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">How does the AI vendor verification work?</AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                Our proprietary AI vendor verification system works in real-time when your subcontractor makes a
                purchase. The system automatically contacts the vendor to confirm purchase details, verifies the
                materials match your project specifications, and validates the delivery location matches your job site
                at the point of purchase. This creates a secure triple-verification process before funds are released.
                Our AI also analyzes transaction patterns to flag any unusual activity, providing an additional layer of
                protection against fraud.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">
                How does JobVault's AI Trust & Safety system protect me?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                Our AI Trust & Safety algorithms analyze thousands of data points to identify high-risk transactions and
                vendors BEFORE you spend money there. The system evaluates vendor reputation, transaction patterns,
                pricing anomalies, and other risk factors in real-time. If a potential issue is detected, the
                transaction is flagged for review or automatically declined, preventing potential fraud or misuse of
                funds. This proactive approach helps you avoid problematic vendors and ensures your escrow funds are
                only used for legitimate materials purchases.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">How secure is my financial data?</AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                We take security seriously. JobVault uses bank-level encryption, is SOC 2 compliant, and never stores
                sensitive payment information on our servers. All transactions are processed through our secure payment
                partners, and your escrow funds are held in FDIC-insured accounts. We implement multi-factor
                authentication, regular security audits, and maintain strict data access controls. Our AI security
                systems continuously monitor for unusual activity to provide additional protection.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">
                Can I set spending limits and restrictions?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                Yes, JobVault gives you granular control over spending. You can set specific spending limits for each
                card issued to subcontractors based on their material quotes. You can also restrict cards to specific
                vendors or merchant categories, ensuring funds are only used for approved materials and services. For
                additional control, you can enable geolocation restrictions to ensure purchases are made at the intended
                supplier locations. All these controls are reinforced by our AI verification system for maximum
                security.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">How are the escrow accounts managed?</AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                JobVault's escrow accounts are fully managed through our secure platform. You fund the account via ACH
                directly from your bank account (always free) and maintain complete control over disbursements. Funds
                are only released when purchases are verified through our AI vendor verification system. All
                transactions are tracked and reconciled in real-time, giving you complete visibility into your escrow
                funds at all times. You can create multiple escrow accounts for different projects or subcontractors as
                needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">
                Can I integrate with my accounting software?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                Absolutely. JobVault integrates seamlessly with popular accounting software like QuickBooks, Xero,
                Procore, and BuilderTrend, allowing for automatic syncing of financial data and simplified bookkeeping
                for all your escrow transactions and material purchases. Our AI-powered system automatically categorizes
                and organizes transactions by job site, subcontractor, and vendor, making it easy to track expenses and
                maximize tax deductions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">What kind of support do you offer?</AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                We provide comprehensive support through multiple channels. All customers have access to email support
                with guaranteed response times based on your plan tier. Premium plans include dedicated account managers
                and priority phone support. Our knowledge base contains detailed guides, video tutorials, and best
                practices. We also offer regular webinars and training sessions to help you get the most out of
                JobVault's AI-powered escrow system.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">Can I try JobVault before committing?</AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                Yes, we offer a 14-day free trial that includes all features of our Professional plan. During the trial,
                you can set up your escrow account, issue controlled payment cards, and test the AI vendor verification
                functionality. Our onboarding team will guide you through the setup process and answer any questions you
                have. There's no obligation to continue after the trial, and no credit card is required to start.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  )
}

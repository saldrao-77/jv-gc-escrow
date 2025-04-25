import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-heading">ABOUT US</h1>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 font-heading">Why We Started This</h2>
          <div className="text-white/80 space-y-4">
            <p>
              We started this company because we've seen what happens when construction businesses don't have financial
              control. <strong>Subcontractors need deposits, but GCs are afraid of getting burned.</strong> And the
              result? <strong>Delayed projects, strained relationships, and lost opportunities.</strong>
            </p>
            <p>
              Our mission is to give small operators the kind of tools big companies take for granted —{" "}
              <strong>secure, transparent escrow accounts</strong> that help you fund materials without the risk. We're
              building modern fintech products for{" "}
              <strong>general contractors, builders, and other construction professionals</strong> — not Silicon Valley
              tech bros.
            </p>
            <p>
              This isn't just software. It's how you finally{" "}
              <strong>build trust with your subs, eliminate payment disputes, and get back to building.</strong>
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-zinc-800 rounded-lg p-8 mb-12 border border-zinc-700">
            <h2 className="text-2xl font-bold mb-6 font-heading text-center">Stanford University-Backed</h2>
            <p className="text-white/80 text-center mb-8">
              JobVault is proud to be a Stanford University-backed team with a research grant focused on helping impact
              small businesses across America. Our work is supported by leading institutions committed to innovation and
              economic empowerment.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="relative w-64 h-20 bg-white rounded-lg p-2">
                <Image
                  src="/images/stanford-university-logo.png"
                  alt="Stanford University"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-64 h-20 bg-white rounded-lg p-2">
                <Image
                  src="/images/hasso-plattner-logo.png"
                  alt="Hasso Plattner Institute of Design at Stanford"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/images/sal-rao.jpeg"
                alt="Sal Rao, Founder & CEO"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: "50% 35%" }}
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 font-heading">Meet the Founder</h2>
            <h3 className="text-xl font-bold mb-4">Sal Rao, Founder & CEO</h3>
            <div className="text-white/80 space-y-4">
              <p>
                Sal started this company to bring <strong>smart, intuitive financial tools</strong> to the people who
                need them most: small businesses trying to grow without drowning in back-office chaos.
              </p>
              <p>
                Before founding JobVault, Sal was <strong>Head of Commerce at GlossGenius</strong>, where she built and
                scaled a comprehensive payments infrastructure processing over <strong>$2 billion annually</strong>. She
                pioneered innovative financial products including micro-loans, specialized bank accounts, and secure
                payment systems that transformed how small businesses manage cash flow. Her work in developing
                AI-powered fraud detection systems protected thousands of businesses from financial risk.
              </p>
              <p>
                Prior to that, Sal advised <strong>Fortune 500 companies at McKinsey & Company</strong>, where she
                focused on real estate, technology, and asset management. She previously{" "}
                <strong>worked at the White House and Senate</strong>.
              </p>
              <p>
                Her passion for serving small businesses comes from personal experience — watching family members build
                small businesses from the ground up, and spending her career bringing order to messy, manual problems.
                Today, she's on a mission to bring{" "}
                <strong>modern fintech and AI into the hands of people who need it most</strong>. The ones doing the
                real work.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-lg text-center h-full">
              <h3 className="text-xl font-bold mb-4 font-heading">Trust</h3>
              <p className="text-white/70">
                We believe in creating trust between GCs and subcontractors. Our AI-powered escrow system ensures both
                parties can work together with confidence, knowing funds are secure and will be used as intended.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-lg text-center h-full">
              <h3 className="text-xl font-bold mb-4 font-heading">Transparency</h3>
              <p className="text-white/70">
                We're committed to providing complete visibility into your material purchases, with real-time AI
                verification and tracking that helps you make informed decisions and prevent disputes.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-lg text-center h-full">
              <h3 className="text-xl font-bold mb-4 font-heading">Innovation</h3>
              <p className="text-white/70">
                We're constantly pushing the boundaries of what's possible in construction finance, leveraging AI
                technology to solve the age-old problem of deposit risk with elegant, practical solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

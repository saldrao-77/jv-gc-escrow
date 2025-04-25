import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Script from "next/script"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Update the metadata
export const metadata: Metadata = {
  title: "JobVault for General Contractors",
  description:
    "No more risky cash advances or vanished deposits. JobVault lets you preload materials money for subs into escrow, lock spend by vendor, and only release funds after real-time verification.",
  metadataBase: new URL("https://jobvault.co"),
  openGraph: {
    title: "JobVault for General Contractors",
    description:
      "No more risky cash advances or vanished deposits. JobVault lets you preload materials money for subs into escrow, lock spend by vendor, and only release funds after real-time verification.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JobVault for General Contractors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JobVault for General Contractors",
    description:
      "No more risky cash advances or vanished deposits. JobVault lets you preload materials money for subs into escrow, lock spend by vendor, and only release funds after real-time verification.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>

        {/* Updated Zapier webhook script with better error handling and logging */}
        <Script id="zapier-webhook-trigger" strategy="afterInteractive">
          {`
    (function() {
      console.log("Zapier script initialized");
      
      // Check if URL contains ?submitted=true
      if (window.location.href.includes('?submitted=true')) {
        console.log("Detected submitted=true in URL");
        
        // Check if this hasn't been triggered already in this browser session
        if (!sessionStorage.getItem('zapierTriggered')) {
          console.log('Preparing to send data to Zapier webhook');
          
          // Prepare data for the webhook
          const data = {
            event: "form_submission_script",
            submittedAt: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            referrer: document.referrer || "direct"
          };
          
          console.log('Sending data to Zapier webhook:', data);
          
          // Send POST request to Zapier webhook
          fetch('https://hooks.zapier.com/hooks/catch/22588169/2xfcitk/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          })
          .then(response => {
            if (response.ok) {
              console.log('Zapier webhook triggered successfully');
              // Set flag in sessionStorage to prevent duplicate triggers
              try {
                sessionStorage.setItem('zapierTriggered', 'true');
                console.log('Session storage flag set to prevent duplicates');
              } catch (e) {
                console.error('Error setting sessionStorage flag:', e);
              }
            } else {
              console.error('Failed to trigger Zapier webhook:', response.status, response.statusText);
            }
          })
          .catch(error => {
            console.error('Error triggering Zapier webhook:', error);
          });
        } else {
          console.log('Webhook already triggered in this session, preventing duplicate');
        }
      } else {
        console.log('URL does not contain ?submitted=true, webhook not triggered');
      }
    })();
  `}
        </Script>
      </body>
    </html>
  )
}

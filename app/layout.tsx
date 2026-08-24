import type React from "react"
import type { Metadata } from "next"
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { LOCAL_BUSINESS_SCHEMA, ORGANIZATION_SCHEMA, FAQ_SCHEMA } from "@/lib/seo-metadata"
import "./globals.css"

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ronak Dave - The Turban Man of India | No. 1 Safawala | Premium Wedding Safa & Pagdi",
  description:
    "Ronak Dave - The Turban Man of India & No. 1 Safawala in India. 40+ years heritage, 4.5 Lakh+ clients, Guinness World Record holder. Expert safa, pagdi, turban, sehra tying for weddings. Serving 500+ cities across India. Book now: +91-9725295691",
  keywords:
    "ronak dave, turban man of india, safawala, wedding safa, wedding turban, pagdi tying, groom turban, safa for groom, rajasthani safa, jodhpuri safa, barati safa, turban tying service, wedding pagdi, safa on rent, designer safa, royal wedding turban, destination wedding turban, safa tying service near me, best safa service india",
  authors: [{ name: "Ronak Dave - The Turban Man of India" }],
  creator: "Ronak Dave - The Turban Man of India",
  publisher: "Ronak Dave - The Turban Man of India",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://ronakdave.com"),
  alternates: {
    canonical: "https://ronakdave.com",
  },
  openGraph: {
    title: "Ronak Dave - The Turban Man of India | No. 1 Safawala in India",
    description:
      "Guinness World Record holder. 4.5 Lakh+ satisfied clients. Expert safa, pagdi, turban & sehra tying for weddings across India and international destinations.",
    url: "https://ronakdave.com",
    siteName: "Ronak Dave - The Turban Man of India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ronakdave.com/image.webp",
        width: 1200,
        height: 630,
        alt: "Ronak Dave - The Turban Man of India - Premium Wedding Safa & Turban Service",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronak Dave - The Turban Man of India | No. 1 Safawala",
    description: "40+ years heritage. Guinness World Record. 4.5 Lakh+ clients. Premium wedding safa & turban service across India.",
    images: ["https://ronakdave.com/image.webp"],
    creator: "@safawalaofficial",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "aa85c2bfdac045c3",
  },
  category: "Wedding Services",
  classification: "Wedding Turban & Safa Service",
  applicationName: "Ronak Dave - The Turban Man of India",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Ronak Dave - The Turban Man of India",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${dmSerifDisplay.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/icon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/icon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/icon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#AA8C3F" />
        
        {/* Google Search Console & Analytics */}
        <meta name="google-site-verification" content="aa85c2bfdac045c3" />
        
        {/* Local Business Structured Data */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
        
        {/* Organization Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        
        {/* FAQ Structured Data */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />

        {/* Person Schema */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ronak Dave",
            jobTitle: "Master Safawala & Wedding Turban Specialist",
            description: "India's No.1 Safawala with 40+ years of heritage. Guinness World Record holder for fastest turban tying. 1 million+ safas tied across India and 30+ countries.",
            url: "https://ronakdave.com",
            telephone: "+91-9725295691",
            image: "https://ronakdave.com/image.webp",
            sameAs: [
              "https://www.instagram.com/safawalaofficial",
              "https://www.youtube.com/@safawala"
            ],
            knowsAbout: ["Wedding Safa", "Turban Tying", "Rajasthani Pagdi", "Indian Wedding Traditions"],
            award: "Guinness World Record — Fastest Turban Tying",
            nationality: { "@type": "Country", name: "India" }
          }) }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

/**
 * Local Business Schema Component
 * Adds structured data for better local SEO in footer
 */

import Script from "next/script"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ronakdave.com",
  name: "Ronak Dave - Wedding Turban Service",
  image: "https://ronakdave.com/image.webp",
  description: "India's most trusted wedding turban specialists with 40+ years of heritage.",
  telephone: "+91-9725295691",
  email: "care@ronakdave.com",
  url: "https://ronakdave.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vadodara Head Office",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390001",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.3072",
    longitude: "73.1812"
  },
  areaServed: {
    "@type": "Country",
    name: "India"
  },
  sameAs: [
    "https://www.facebook.com/people/Safawalacom/61579176513014/",
    "https://www.instagram.com/safawalaofficial/",
    "https://wa.me/919725295691"
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "5000"
  }
}

export function LocalBusinessSchema() {
  return (
    <Script
      id="local-business-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  )
}

// Contact information for schema
export const contactInfo = {
  phone: "+91-9725295691",
  email: "care@ronakdave.com",
  address: "Vadodara Head Office, Vadodara, Gujarat – 390001, India",
  hours: "9 AM - 9 PM (Daily)",
  whatsapp: "https://wa.me/919725295691",
}

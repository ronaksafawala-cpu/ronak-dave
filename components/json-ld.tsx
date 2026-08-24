interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[]
  id?: string
}

export default function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ── Schema builders ────────────────────────────────────────────────────────────

export function localBusinessSchema(cityName: string, citySlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Ronak Dave — Wedding Safa & Turban Service in ${cityName}`,
    description: `India's No.1 Safawala offers expert safa & turban tying in ${cityName}. 40+ years heritage, Guinness World Record holder.`,
    url: `https://ronakdave.com/${citySlug}`,
    telephone: "+91-9725295691",
    image: "https://ronakdave.com/2.webp",
    priceRange: "₹₹₹",
    areaServed: { "@type": "Place", name: cityName },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "4500", bestRating: "5" },
  }
}

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}

export function serviceSchema(name: string, description: string, cityName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: "Ronak Dave — The Turban Man of India",
      telephone: "+91-9725295691",
    },
    ...(cityName ? { areaServed: { "@type": "Place", name: cityName } } : {}),
    serviceType: "Wedding Turban & Safa Tying",
  }
}

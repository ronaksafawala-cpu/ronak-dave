/**
 * SEO Metadata and Structured Data for Ronak Dave - The Turban Man of India
 * SEO optimization for India-wide wedding turban services
 */

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ronakdave.com",
  name: "Ronak Dave - The Turban Man of India",
  image: "https://ronakdave.com/image.webp",
  description: "India's most trusted wedding turban specialist. Guinness World Record holder, 40+ years family heritage, 4.5 Lakh+ satisfied clients. Expert safa, pagdi, turban & sehra tying for weddings across India.",
  url: "https://ronakdave.com",
  telephone: "+91-9725295691",
  email: "care@ronakdave.com",
  alternateName: ["Ronak Dave", "The Turban Man of India", "No. 1 Safawala in India", "Ronak Dave Safawala"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  priceRange: "₹500-₹25000",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceArea: {
    "@type": "Country",
    name: "India",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "450000",
    bestRating: "5",
    worstRating: "1",
  },
  hasMap: "https://maps.google.com/?q=Ronak+Dave+Safawala",
  sameAs: [
    "https://www.facebook.com/people/Safawalacom/61579176513014/",
    "https://www.instagram.com/safawalaofficial/",
    "https://wa.me/919725295691",
  ],
  foundingDate: "1985",
  founder: {
    "@type": "Person",
    name: "Ronak Dave",
  },
  knowsAbout: [
    "Wedding Turban Tying",
    "Safa Tying",
    "Pagdi Design",
    "Rajasthani Turbans",
    "Jodhpuri Safa",
    "Groom Styling",
    "Traditional Turban Art",
    "Destination Wedding Turbans",
  ],
  opens: "09:00",
  closes: "21:00",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "20:00",
    },
  ],
}

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ronak Dave - The Turban Man of India",
  url: "https://ronakdave.com",
  logo: "https://ronakdave.com/image.webp",
  description: "India's No. 1 wedding turban specialist with 40+ years of heritage. Guinness World Record holder. 4.5 Lakh+ clients served across 500+ cities.",
  sameAs: [
    "https://www.facebook.com/people/Safawalacom/61579176513014/",
    "https://www.instagram.com/safawalaofficial/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+91-9725295691",
    email: "care@ronakdave.com",
    areaServed: "IN",
    availableLanguage: ["hi", "en", "gu"],
  },
}

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is the best wedding turban specialist in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ronak Dave is India's most trusted wedding turban specialist, known as The Turban Man of India. With a Guinness World Record, 40+ years family heritage, and 4.5 Lakh+ satisfied clients, he provides premium safa, pagdi & turban tying services across 500+ cities in India.",
      },
    },
    {
      "@type": "Question",
      name: "How much does wedding safa tying service cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ronak Dave's wedding safa service starts from ₹500 per barati and ₹15,000+ for premium groom packages. Custom pricing available for destination weddings and bulk bookings. Call +91-9725295691 for exact quotes.",
      },
    },
    {
      "@type": "Question",
      name: "Does Ronak Dave provide turban service across India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Ronak Dave provides professional wedding turban tying service across 500+ cities in India and 15+ countries internationally. Contact +91-9725295691 or WhatsApp for booking.",
      },
    },
    {
      "@type": "Question",
      name: "Which cities does Ronak Dave serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ronak Dave serves 500+ cities across India including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Ahmedabad, Pune, Kolkata, Jaipur, Vadodara, Surat, and all major wedding destinations.",
      },
    },
    {
      "@type": "Question",
      name: "Can Ronak Dave customize turban designs for my wedding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Ronak Dave specializes in custom turban designs that match your wedding theme, outfit, and décor. From traditional Rajasthani safa to modern designer turbans — every piece is crafted to perfection.",
      },
    },
  ],
}

export const BREADCRUMB_SCHEMA = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const PRODUCT_SCHEMA = (serviceName: string, serviceUrl: string, description: string, price: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  url: serviceUrl,
  description: description,
  provider: {
    "@type": "LocalBusiness",
    name: "Ronak Dave - The Turban Man of India",
    url: "https://ronakdave.com",
    telephone: "+91-9725295691",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  priceRange: price,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "450000",
  },
})

export const IndiaLocalizations = {
  india: {
    name: "India",
    topCities: [
      "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Ahmedabad",
      "Pune", "Kolkata", "Jaipur", "Vadodara", "Surat", "Lucknow",
      "Chandigarh", "Indore", "Udaipur", "Jodhpur", "Bhopal", "Nagpur"
    ],
    topStates: ["Gujarat", "Rajasthan", "Maharashtra", "Delhi NCR", "Karnataka", "Tamil Nadu", "Uttar Pradesh"],
  }
}

// Dynamic SEO metadata generator
export function generateServiceMetadata(
  serviceName: string,
  serviceDescription: string,
  keywords: string[],
  slug: string
) {
  return {
    title: `${serviceName} by Ronak Dave | The Turban Man of India`,
    description: `${serviceDescription} Get professional ${serviceName.toLowerCase()} by Ronak Dave - The Turban Man of India. Guinness World Record holder, 4.5 Lakh+ clients. Book now: +91-9725295691`,
    keywords: [
      ...keywords,
      `${serviceName.toLowerCase()} by ronak dave`,
      "ronak dave turban",
      "wedding turban service india",
      "best safa service india",
      "turban man of india",
    ].join(", "),
    openGraph: {
      title: `${serviceName} - Ronak Dave | The Turban Man of India`,
      description: `Expert ${serviceName.toLowerCase()} by Ronak Dave. 40+ years heritage, Guinness World Record, premium quality across India.`,
      url: `https://ronakdave.com/${slug}`,
      type: "website",
    },
  }
}

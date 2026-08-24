import Link from "next/link"
import { INDIA_CITIES } from "@/lib/seo-city-data-india"
import { INDIA_KEYWORDS } from "@/lib/seo-keywords-matrix"
import { INTERNATIONAL_CITIES } from "@/lib/seo-city-data-international"

interface InternalLinksProps {
  currentSlug?: string
  type?: "cities" | "keywords" | "international"
  limit?: number
}

export default function InternalLinks({ currentSlug, type = "cities", limit = 20 }: InternalLinksProps) {
  if (type === "cities") {
    const cities = INDIA_CITIES.filter((c) => c.slug !== currentSlug).slice(0, limit)
    return (
      <section className="py-10 bg-white border-t border-amber-100">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="font-serif text-xl text-amber-800 mb-5 text-center">Also Serving These Cities</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="text-xs bg-amber-50 text-amber-800 hover:bg-amber-600 hover:text-white px-3 py-1.5 rounded-full border border-amber-200 transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (type === "keywords") {
    const keywords = INDIA_KEYWORDS.filter((k) => k.slug !== currentSlug).slice(0, limit)
    return (
      <section className="py-10 bg-white border-t border-amber-100">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="font-serif text-xl text-amber-800 mb-5 text-center">Related Services</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {keywords.map((kw) => (
              <Link
                key={kw.slug}
                href={`/services/${kw.slug}`}
                className="text-xs bg-amber-50 text-amber-800 hover:bg-amber-600 hover:text-white px-3 py-1.5 rounded-full border border-amber-200 transition-colors"
              >
                {kw.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const intlCities = INTERNATIONAL_CITIES.filter((c) => c.slug !== currentSlug).slice(0, limit)
  return (
    <section className="py-10 bg-white border-t border-amber-100">
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="font-serif text-xl text-amber-800 mb-5 text-center">Other International Destinations</h3>
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {intlCities.map((city) => (
            <Link
              key={city.slug}
              href={`/international/${city.slug}`}
              className="text-xs bg-amber-50 text-amber-800 hover:bg-amber-600 hover:text-white px-3 py-1.5 rounded-full border border-amber-200 transition-colors"
            >
              {city.name}, {city.country}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Legacy named exports for seo-page-template compatibility ──────────────────

export function RelatedServices({ links }: { links: { href: string; label: string }[] }) {
  if (!links.length) return null
  return (
    <section className="py-8 border-t border-amber-100">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-serif text-xl text-amber-800 mb-4">Related Services</h2>
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-xs bg-amber-50 text-amber-800 hover:bg-amber-600 hover:text-white px-3 py-1.5 rounded-full border border-amber-200 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BreadcrumbNav({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-gray-500 mb-6 flex-wrap container mx-auto px-4 md:px-8 pt-4">
      <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span>/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-amber-700 transition-colors">{item.label}</Link>
          ) : (
            <span className="text-amber-700 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

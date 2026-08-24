import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { INTERNATIONAL_CITIES } from "@/lib/seo-city-data-international"
import { intlCityMetaDesc, intlCityH1, intlCityHeroParagraph, canonicalIntlCity } from "@/lib/seo-content-engine"
import CityServicePage from "@/components/city-service-page"

export async function generateStaticParams() {
  return INTERNATIONAL_CITIES.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params
  const data = INTERNATIONAL_CITIES.find((c) => c.slug === city)
  if (!data) return {}

  const title = `Wedding Safa & Turban Service in ${data.name}, ${data.country} | Ronak Dave — India's No.1 Safawala`
  const description = intlCityMetaDesc(data)
  const canonical = canonicalIntlCity(data)

  return {
    title,
    description,
    keywords: `wedding safa ${data.name}, turban ${data.country}, NRI wedding safa, Indian wedding turban ${data.name}, Ronak Dave ${data.country}, destination wedding turban`,
    openGraph: {
      title, description, url: canonical,
      siteName: "Ronak Dave — The Turban Man of India",
      locale: "en_IN", type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical },
  }
}

export default async function IntlCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const data = INTERNATIONAL_CITIES.find((c) => c.slug === city)
  if (!data) notFound()

  return (
    <CityServicePage
      cityName={`${data.name}, ${data.country}`}
      citySlug={data.slug}
      h1={intlCityH1(data)}
      heroParagraph={intlCityHeroParagraph(data)}
      venues={data.venueTypes}
    />
  )
}

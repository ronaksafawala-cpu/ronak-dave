import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { INDIA_CITIES } from "@/lib/seo-city-data-india"
import {
  cityMetaTitle,
  cityMetaDesc,
  cityH1,
  cityHeroParagraph,
  whyChoosePoints,
  canonicalCity,
} from "@/lib/seo-content-engine"
import CityServicePage from "@/components/city-service-page"

export async function generateStaticParams() {
  return INDIA_CITIES.map((city) => ({ city: city.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const data = INDIA_CITIES.find((c) => c.slug === city)
  if (!data) return {}

  const title = cityMetaTitle(data)
  const description = cityMetaDesc(data)
  const canonical = canonicalCity(data)

  return {
    title,
    description,
    keywords: `wedding safa ${data.name}, turban ${data.name}, safawala ${data.name}, pagdi ${data.name}, Ronak Dave ${data.name}, safa tying ${data.name}, groom turban ${data.name}`,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Ronak Dave — The Turban Man of India",
      locale: "en_IN",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical },
  }
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const data = INDIA_CITIES.find((c) => c.slug === city)
  if (!data) notFound()

  return (
    <CityServicePage
      cityName={data.name}
      citySlug={data.slug}
      h1={cityH1(data)}
      heroParagraph={cityHeroParagraph(data)}
      whyPoints={whyChoosePoints(data)}
      venues={data.venues}
      areas={data.areas}
      weddingStyle={data.weddingStyle}
    />
  )
}

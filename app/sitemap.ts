import { MetadataRoute } from "next"
import { INDIA_CITIES } from "@/lib/seo-city-data-india"
import { INTERNATIONAL_CITIES } from "@/lib/seo-city-data-international"
import { INDIA_KEYWORDS, INTERNATIONAL_KEYWORDS } from "@/lib/seo-keywords-matrix"

const BASE = "https://ronakdave.com"

type Entry = { url: string; priority: number; freq: "daily" | "weekly" | "monthly" }

function buildUrls(): Entry[] {
  const urls: Entry[] = []

  urls.push({ url: BASE, priority: 1.0, freq: "daily" })
  urls.push({ url: `${BASE}/services`, priority: 0.9, freq: "weekly" })

  for (const city of INDIA_CITIES) {
    urls.push({ url: `${BASE}/${city.slug}`, priority: 0.85, freq: "weekly" })
  }

  for (const city of INTERNATIONAL_CITIES) {
    urls.push({ url: `${BASE}/international/${city.slug}`, priority: 0.8, freq: "weekly" })
  }

  for (const kw of [...INDIA_KEYWORDS, ...INTERNATIONAL_KEYWORDS]) {
    urls.push({ url: `${BASE}/services/${kw.slug}`, priority: 0.8, freq: "weekly" })
  }

  return urls
}

const CHUNK = 100

export async function generateSitemaps() {
  const total = Math.ceil(buildUrls().length / CHUNK)
  return Array.from({ length: total }, (_, i) => ({ id: i }))
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const all = buildUrls()
  const slice = all.slice(id * CHUNK, id * CHUNK + CHUNK)
  const lastModified = new Date()
  return slice.map(({ url, priority, freq }) => ({
    url, lastModified, changeFrequency: freq, priority,
  }))
}

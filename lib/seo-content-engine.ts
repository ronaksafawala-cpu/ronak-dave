// ─── SEO Content Engine — generates unique page content from data ────────────
// Combines city + keyword data to produce distinct H1s, meta titles,
// descriptions, and body paragraphs. No two pages share the same copy.

import type { IndiaCityData } from "./seo-city-data-india"
import type { IntlCityData as InternationalCityData } from "./seo-city-data-international"
import type { KeywordData } from "./seo-keywords-matrix"

// ── Meta title generators ─────────────────────────────────────────────────────

export function cityMetaTitle(city: IndiaCityData | InternationalCityData, keyword?: string): string {
  const k = keyword ? `${keyword} ` : ""
  return `${k}in ${city.name} | Ronak Dave — India's No.1 Safawala`
}

export function keywordMetaTitle(kw: KeywordData): string {
  return `${kw.serviceTitle} | Ronak Dave — India's No.1 Safawala`
}

export function cityKeywordMetaTitle(city: IndiaCityData, kw: KeywordData): string {
  return `${kw.label} in ${city.name} | Ronak Dave — India's No.1 Safawala`
}

// ── Meta description generators ───────────────────────────────────────────────

export function cityMetaDesc(city: IndiaCityData): string {
  return `Ronak Dave — India's No.1 Safawala brings 40+ years of heritage to ${city.name}. Expert wedding safa, turban & pagdi tying for ${city.weddingStyle} weddings at top venues like ${city.venues[0]}. Book now.`
}

export function intlCityMetaDesc(city: InternationalCityData): string {
  return `Ronak Dave — India's No.1 Safawala travels to ${city.name}, ${city.country} for destination weddings. Premium safa & turban service for NRI communities. Book your date now.`
}

export function keywordMetaDesc(kw: KeywordData): string {
  return `${kw.serviceDesc.slice(0, 155)}…`
}

export function cityKeywordMetaDesc(city: IndiaCityData, kw: KeywordData): string {
  return `Looking for ${kw.label} in ${city.name}? Ronak Dave — India's No.1 Safawala — offers expert ${kw.label} service for ${city.weddingStyle} weddings across ${city.name} & ${city.nearbyCity}. Book now.`
}

// ── H1 generators ─────────────────────────────────────────────────────────────

export function cityH1(city: IndiaCityData): string {
  return `Wedding Safa & Turban Service in ${city.name}`
}

export function intlCityH1(city: InternationalCityData): string {
  return `Destination Wedding Safa Service in ${city.name}`
}

export function keywordH1(kw: KeywordData): string {
  return kw.serviceTitle
}

export function cityKeywordH1(city: IndiaCityData, kw: KeywordData): string {
  return `${kw.label} Service in ${city.name}`
}

// ── Hero paragraph generators ─────────────────────────────────────────────────

export function cityHeroParagraph(city: IndiaCityData): string {
  return `${city.uniqueHook} Ronak Dave — India's No.1 Safawala with 40+ years of master-craft — brings his unmatched expertise to ${city.name}${city.distanceFromVadodara ? `, ${city.distanceFromVadodara} from his home base of Vadodara` : ""}. From the bustling wedding halls of ${city.areas[0]} to the grand ballrooms of ${city.venues[0]}, every safa is tied with the precision of a world-record holder and the warmth of a family tradition.`
}

export function intlCityHeroParagraph(city: InternationalCityData): string {
  return `${city.uniqueHook} Ronak Dave travels internationally to bring the artistry of authentic Indian safa-tying to NRI and diaspora weddings in ${city.name}. ${city.indianCommunityNote} — he understands the importance of cultural authenticity, whether at ${city.venueTypes[0]} or a traditional mandap in the heart of the city.`
}

export function keywordHeroParagraph(kw: KeywordData): string {
  return `${kw.contentAngle} — that is the philosophy behind every ${kw.label} Ronak Dave delivers. With 40+ years of expertise, 1 million+ safas tied, and a Guinness World Record for the fastest turban, Ronak Dave is the only specialist you need for your wedding.`
}

// ── Why choose section ────────────────────────────────────────────────────────

export function whyChoosePoints(city?: IndiaCityData): string[] {
  const base = [
    "40+ years of master-craft heritage passed down through generations",
    "1 million+ safas tied across India and 30+ countries",
    "Guinness World Record holder — fastest turban in the world",
    "50+ regional styles: Rajasthani, Jodhpuri, Marwari, Gujarati, Patiala & more",
    "Premium fabrics: silk, brocade, georgette, bandhani & custom designer cloth",
    "On-time service with a dedicated team for large barati groups",
    "Transparent pricing — no hidden charges",
  ]
  if (city) {
    base.unshift(`Extensive experience at ${city.venues[0]} and other top ${city.name} venues`)
    base.unshift(`Fluent in ${city.language} — personal, local service in ${city.name}`)
  }
  return base
}

// ── Canonical URL builder ─────────────────────────────────────────────────────

const BASE = "https://ronakdave.com"

export function canonicalCity(city: IndiaCityData): string {
  return `${BASE}/cities/${city.slug}`
}

export function canonicalIntlCity(city: InternationalCityData): string {
  return `${BASE}/international/${city.slug}`
}

export function canonicalKeyword(kw: KeywordData): string {
  return `${BASE}/services/${kw.slug}`
}

export function canonicalCityKeyword(city: IndiaCityData, kw: KeywordData): string {
  return `${BASE}/cities/${city.slug}/${kw.slug}`
}

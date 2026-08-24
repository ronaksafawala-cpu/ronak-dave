import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { INDIA_KEYWORDS, INTERNATIONAL_KEYWORDS } from "@/lib/seo-keywords-matrix"
import {
  keywordMetaTitle,
  keywordMetaDesc,
  keywordH1,
  keywordHeroParagraph,
  canonicalKeyword,
} from "@/lib/seo-content-engine"
import KeywordServicePage from "@/components/keyword-service-page"

const ALL_KEYWORDS = [...INDIA_KEYWORDS, ...INTERNATIONAL_KEYWORDS]

export async function generateStaticParams() {
  return ALL_KEYWORDS.map((kw) => ({ keyword: kw.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ keyword: string }>
}): Promise<Metadata> {
  const { keyword } = await params
  const data = ALL_KEYWORDS.find((k) => k.slug === keyword)
  if (!data) return {}

  const title = keywordMetaTitle(data)
  const description = keywordMetaDesc(data)
  const canonical = canonicalKeyword(data)

  return {
    title,
    description,
    keywords: data.relatedKeywords.join(", "),
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

export default async function KeywordPage({
  params,
}: {
  params: Promise<{ keyword: string }>
}) {
  const { keyword } = await params
  const data = ALL_KEYWORDS.find((k) => k.slug === keyword)
  if (!data) notFound()

  return (
    <KeywordServicePage
      keywordName={data.label}
      keywordSlug={data.slug}
      h1={keywordH1(data)}
      heroParagraph={keywordHeroParagraph(data)}
      richFaqs={data.faqs}
      relatedKeywords={data.relatedKeywords}
      serviceDesc={data.serviceDesc}
    />
  )
}

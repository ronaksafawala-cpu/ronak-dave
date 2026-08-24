"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import JsonLd, { faqSchema } from "@/components/json-ld"

interface FAQ { q: string; a: string }

interface FaqSectionProps {
  faqs: FAQ[]
  title?: string
}

export default function FaqSection({ faqs, title = "Frequently Asked Questions" }: FaqSectionProps) {
  return (
    <section className="py-12 bg-amber-50/40">
      <JsonLd data={faqSchema(faqs)} id="faq-section-schema" />
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl text-amber-800 mb-8 text-center">{title}</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-white rounded-xl border border-amber-100 px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-amber-700 py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

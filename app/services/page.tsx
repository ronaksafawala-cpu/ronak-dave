import type { Metadata } from "next"
import Link from "next/link"
import { Crown, ChevronRight, Phone, MessageCircle, Star, Trophy, Users, Globe, Sparkles, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SAFA_KEYWORDS, INDIAN_CITIES, RONAK_DAVE_INFO } from "@/lib/ronak-dave-seo"
import { INDIA_KEYWORDS, INTERNATIONAL_KEYWORDS } from "@/lib/seo-keywords-matrix"
import { INDIA_CITIES } from "@/lib/seo-city-data-india"

export const metadata: Metadata = {
  title: "All Safa & Turban Services | Ronak Dave - The Turban Man of India | No. 1 Safawala in India",
  description: "Explore all wedding safa, turban, and pagdi services by Ronak Dave - The Turban Man of India | No. 1 Safawala in India. 100+ service types, 200+ cities covered. Groom safa, barati pagdi, destination wedding turbans, designer safas. Book: +91-9725295691",
  keywords: "wedding safa services, turban services, pagdi services, The Turban Man of India, No 1 Safawala in India, Ronak Dave services, groom safa, barati turban, wedding turban, safa rental, turban tying service",
}

export default function ServicesPage() {
  const serviceCategories = [
    {
      icon: Crown,
      title: "Groom Services",
      description: "Premium safa & turban for the groom",
      services: ["safa for groom", "groom turban", "dulha safa", "groom pagdi", "groom safa", "dulha pagdi", "wedding turban for groom"]
    },
    {
      icon: Users,
      title: "Barati Services",
      description: "Coordinated safas for wedding guests",
      services: ["safa for barati", "wedding turban for barati", "barati safa on rent", "wedding safa for barati", "safa design for barati"]
    },
    {
      icon: Sparkles,
      title: "Regional Styles",
      description: "Traditional regional turban styles",
      services: ["rajasthani safa", "jodhpuri safa", "marwari safa", "gujarati pagdi", "marathi pheta", "rajputi safa", "jodhpuri pagdi"]
    },
    {
      icon: Star,
      title: "Premium Services",
      description: "Luxury and designer options",
      services: ["designer wedding safa", "luxury wedding turban", "royal wedding safa", "custom wedding safa", "royal groom turban for destination wedding"]
    },
    {
      icon: Heart,
      title: "Wedding Accessories",
      description: "Sehra, kalgi, and accessories",
      services: ["sehra", "sehra for groom", "dulhe ka sehra", "sehrabandi", "groom sehra", "dulha sehra"]
    },
    {
      icon: Globe,
      title: "Destination Services",
      description: "International and destination weddings",
      services: ["destination wedding turban", "hand-tied turban for international wedding", "premium wedding safa for international groom", "wedding pagdi for destination wedding"]
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-24 md:pt-28 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/2.webp" alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-amber-100/70 to-amber-200/75" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-gray-500 text-sm mb-8">
            <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-amber-700">Services</span>
          </nav>
          
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-amber-600 text-white">100+ Service Types</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6">
              All <span className="text-amber-700">Safa & Turban</span> Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore our complete range of wedding turban services. From traditional Rajasthani safas 
              to designer destination wedding turbans - we have it all.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full" asChild>
                <a href={`tel:${RONAK_DAVE_INFO.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full" asChild>
                <a href="https://wa.me/919725295691" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="font-serif text-2xl md:text-4xl text-amber-800 mb-4">
              Service Categories
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, idx) => (
              <Card key={idx} className="border-amber-200 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-50 to-amber-600 flex items-center justify-center mb-4">
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-serif text-xl text-amber-800 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.services.slice(0, 4).map((service, i) => (
                      <Link
                        key={i}
                        href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}-by-ronak-dave-safawala`}
                        className="text-xs bg-amber-100 text-amber-800 hover:bg-amber-600 hover:text-white px-3 py-1 rounded-full transition-colors capitalize"
                      >
                        {service}
                      </Link>
                    ))}
                    {category.services.length > 4 && (
                      <span className="text-xs text-amber-700 px-2 py-1">+{category.services.length - 4} more</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-6 md:mb-12">
            <Badge variant="outline" className="mb-4 text-amber-700 border-amber-700">Browse All</Badge>
            <h2 className="font-serif text-2xl md:text-4xl text-amber-800 mb-4">
              All Wedding Turban Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on any service to learn more and book
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {[...INDIA_KEYWORDS, ...INTERNATIONAL_KEYWORDS].map((kw) => (
              <Link
                key={kw.slug}
                href={`/services/${kw.slug}`}
                className="text-sm bg-amber-50 text-amber-800 hover:bg-amber-600 hover:text-white px-4 py-2 rounded-full border border-amber-200 transition-colors capitalize"
              >
                {kw.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-10 md:py-16 bg-amber-50/60">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-6 md:mb-12">
            <Badge className="mb-4 bg-amber-600 text-white">200+ Cities</Badge>
            <h2 className="font-serif text-2xl md:text-4xl text-gray-800 mb-4">
              Cities We <span className="text-amber-700">Serve</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {INDIA_CITIES.slice(0, 40).map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="text-sm bg-white text-amber-800 hover:bg-amber-600 hover:text-white px-4 py-2 rounded-full border border-amber-300 transition-colors"
              >
                {city.name}
              </Link>
            ))}
            <span className="text-sm text-amber-700 px-4 py-2">+{INDIA_CITIES.length - 40} more cities</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Crown className="h-16 w-16 text-amber-600 mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-4xl text-amber-800 mb-4">
              Ready to Book Your Royal Safa?
            </h2>
            <p className="text-gray-600 mb-8">
              Contact Ronak Dave - The Turban Man of India for a personalized consultation. 
              Available across 200+ cities in India and 15+ countries worldwide.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full" asChild>
                <a href={`tel:${RONAK_DAVE_INFO.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {RONAK_DAVE_INFO.phone}
                </a>
              </Button>
              <Button size="lg" className="bg-green-500 hover:bg-green-600 font-semibold rounded-full" asChild>
                <a href="https://wa.me/919725295691" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp: {RONAK_DAVE_INFO.whatsapp}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="h-8 w-8 text-amber-700" />
            <div>
              <h4 className="font-serif text-xl text-amber-700">Ronak Dave</h4>
              <p className="text-sm text-gray-600">The Turban Man of India</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">© 2024 Ronak Dave - The Turban Man of India. All Rights Reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/919725295691"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors animate-bounce"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </a>
    </main>
  )
}

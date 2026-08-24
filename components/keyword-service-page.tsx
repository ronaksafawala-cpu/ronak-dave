"use client"

import Link from "next/link"
import { Phone, MessageCircle, Star, Crown, CheckCircle2, MapPin, Clock, Trophy, ChevronRight, Users, Globe, Award, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RONAK_DAVE_INFO, SAFA_KEYWORDS, INDIAN_CITIES } from "@/lib/ronak-dave-seo"
import InternalLinks from "@/components/internal-links"

interface KeywordServicePageProps {
  keywordName: string
  keywordSlug: string
  h1?: string
  heroParagraph?: string
  richFaqs?: { q: string; a: string }[]
  relatedKeywords?: string[]
  serviceDesc?: string
}

export default function KeywordServicePage({ keywordName, keywordSlug, h1, heroParagraph, richFaqs, relatedKeywords: relatedKeywordSlugs, serviceDesc }: KeywordServicePageProps) {
  const capitalizedKeyword = keywordName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  // Schema data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ronakdave.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://ronakdave.com/services" },
      { "@type": "ListItem", position: 3, name: capitalizedKeyword, item: `https://ronakdave.com/services/${keywordSlug}` }
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${capitalizedKeyword} by Ronak Dave`,
    description: `Premium ${keywordName} services by Ronak Dave - The Turban Man of India. Guinness World Record holder, 40+ years legacy, 4.5 Lakh+ satisfied clients.`,
    provider: {
      "@type": "LocalBusiness",
      name: "Ronak Dave - The Turban Man of India",
      telephone: "+91-9725295691",
      url: "https://ronakdave.com",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "4500", bestRating: "5" }
    },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: capitalizedKeyword
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: `What is the price of ${keywordName}?`, acceptedAnswer: { "@type": "Answer", text: `${capitalizedKeyword} by Ronak Dave starts from ₹500 per piece for barati and ₹15,000+ for premium groom packages. Call +91-9725295691 for exact pricing.` } },
      { "@type": "Question", name: `Where can I get ${keywordName} service?`, acceptedAnswer: { "@type": "Answer", text: `Ronak Dave provides ${keywordName} service across 500+ cities in India and 15+ countries internationally. Book at +91-9725295691.` } },
      { "@type": "Question", name: `Why choose Ronak Dave for ${keywordName}?`, acceptedAnswer: { "@type": "Answer", text: `Ronak Dave is The Turban Man of India & No. 1 Safawala — Guinness World Record holder, styled Ambani & celebrity weddings, 40+ year family legacy, 4.5 Lakh+ clients.` } }
    ]
  }

  // Related keywords for internal linking
  const currentIndex = SAFA_KEYWORDS.indexOf(keywordName)
  const relatedKeywords = SAFA_KEYWORDS.filter((_, i) => i !== currentIndex).slice(0, 12).map(kw => ({
    label: kw.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    href: `/services/${kw.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}-by-ronak-dave-safawala`
  }))

  // City links for internal linking
  const topCities = INDIAN_CITIES.slice(0, 20).map(c => ({
    label: `${capitalizedKeyword} in ${c}`,
    href: `/${c.toLowerCase().replace(/\s+/g, '-')}`
  }))

  const features = [
    {
      icon: Crown,
      title: "Premium Quality",
      description: `Finest fabrics and craftsmanship for your ${keywordName}. Royal look guaranteed.`
    },
    {
      icon: Users,
      title: "Expert Stylists",
      description: `Professional team trained in all ${keywordName} styles and techniques.`
    },
    {
      icon: Globe,
      title: "200+ Cities",
      description: `${capitalizedKeyword} service available across India and 15+ countries.`
    },
    {
      icon: Trophy,
      title: "World Record",
      description: `Guinness World Record holder - World's Largest Turban creator.`
    }
  ]

  const benefits = [
    `Premium quality ${keywordName} in various fabrics`,
    "Expert on-site styling and professional tying",
    "Customization to match your outfit and theme",
    "Bulk packages for barati and guests",
    "Same-day service available",
    "Pan-India delivery and international shipping",
    "Celebrity-approved designs and styles",
    "100% satisfaction guaranteed"
  ]

  const faqs = [
    {
      question: `What is the price of ${keywordName}?`,
      answer: `${capitalizedKeyword} prices range from ₹500 for standard styles to ₹50,000+ for premium designer options. Pricing depends on fabric quality, design complexity, and customization. Contact +91-9725295691 for exact quotes.`
    },
    {
      question: `How to book ${keywordName} service?`,
      answer: `To book ${keywordName} service, call +91-9725295691 or WhatsApp +91-9725295691. You can also fill our online booking form. Advance booking of 2-4 weeks is recommended during wedding season.`
    },
    {
      question: `Is ${keywordName} available on rent?`,
      answer: `Yes, we offer ${keywordName} rental services with professional on-site tying. Both individual and bulk rental options are available. Rental includes styling, accessories, and touch-up services.`
    },
    {
      question: `Can ${keywordName} be customized?`,
      answer: `Absolutely! We specialize in customizing ${keywordName} to match your wedding theme, outfit, and personal preferences. Options include custom embroidery, color matching, and personalized motifs.`
    },
    {
      question: `In which cities is ${keywordName} service available?`,
      answer: `Our ${keywordName} service is available in 200+ cities across India including Mumbai, Delhi, Jaipur, Ahmedabad, Vadodara, Bangalore, Chennai, Kolkata, and all major cities. We also serve international locations.`
    },
    {
      question: `Why choose Ronak Dave for ${keywordName}?`,
      answer: `Ronak Dave is a Guinness World Record holder with 40+ years of experience. With 4.5 Lakh+ satisfied clients and 500+ celebrity weddings, we're India's most trusted ${keywordName} service provider.`
    }
  ]

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value
    const pkg = (form.elements.namedItem('package') as HTMLSelectElement).value
    const city = (form.elements.namedItem('city') as HTMLInputElement).value
    const date = (form.elements.namedItem('date') as HTMLInputElement).value
    const message = `Hi, I want to book ${capitalizedKeyword} by Ronak Dave Safawala.\n\nName: ${name}\nPhone: ${phone}\nPackage: ${pkg}\nCity: ${city}\nDate: ${date}`
    window.open(`https://wa.me/919725295691?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <main className="min-h-screen">
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-28 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/2.webp" alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-amber-100/70 to-amber-200/75" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-gray-500 text-sm mb-8">
            <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/services" className="hover:text-amber-700 transition-colors">Services</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-amber-700">{capitalizedKeyword}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                <div className="inline-flex items-center gap-2 bg-amber-200 border border-amber-300 rounded-full px-4 py-2">
                  <Crown className="h-4 w-4 text-amber-700" />
                  <span className="text-amber-600 text-sm font-medium">The Turban Man of India</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 rounded-full px-4 py-2">
                  <Trophy className="h-4 w-4 text-amber-700" />
                  <span className="text-amber-600 text-sm font-medium">No. 1 Safawala in India</span>
                </div>
              </div>
              
              <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-5xl text-gray-800 mb-4 leading-tight">
                Premium <span className="text-amber-700">{capitalizedKeyword}</span> by Ronak Dave
              </h1>
              <p className="text-lg text-amber-700 font-semibold mb-6">The Turban Man of India | No. 1 Safawala in India</p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the finest {keywordName} crafted by <strong>"The Turban Man of India"</strong> - 
                Guinness World Record holder with <strong>40+ years family legacy</strong>. Trusted by 
                <strong> 4.5 Lakh+ clients</strong> and <strong>500+ celebrities</strong>.
              </p>
              
              {/* Stats */}
              <div className="hidden md:flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-700">4.9/5</div>
                  <div className="text-gray-500 text-sm flex items-center gap-1 justify-center">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-700" />)}
                  </div>
                </div>
                <div className="w-px bg-amber-300" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-700">200+</div>
                  <div className="text-gray-500 text-sm">Cities</div>
                </div>
                <div className="w-px bg-amber-300" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-700">40+</div>
                  <div className="text-gray-500 text-sm">Years</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-row justify-center lg:justify-start gap-3 md:gap-4 mb-4 lg:mb-0">
                <Button 
                  className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-4 text-sm sm:text-base rounded-full"
                  asChild
                >
                  <a href={`tel:${RONAK_DAVE_INFO.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-4 text-sm sm:text-base rounded-full"
                  asChild
                >
                  <a href="https://wa.me/919725295691" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Right Content - Booking Form */}
            <div className="w-full max-w-full md:max-w-md mx-auto lg:mx-0">
              <div className="bg-white backdrop-blur-md rounded-2xl p-4 sm:p-5 md:p-6 border border-amber-300 shadow-2xl">
                <div className="text-center mb-6">
                  <Crown className="h-8 w-8 text-amber-700 mx-auto mb-2" />
                  <h3 className="font-serif text-xl text-gray-800">Book {capitalizedKeyword}</h3>
                  <p className="text-amber-600 text-sm">Get instant quote from The Turban Man of India</p>
                </div>
                
                <form className="space-y-4" onSubmit={handleBookingSubmit}>
                  {/* Name */}
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name *" 
                      required
                      className="w-full px-4 py-3 bg-white border border-amber-300 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="WhatsApp Number *" 
                      required
                      className="w-full px-4 py-3 bg-white border border-amber-300 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  
                  {/* Select Package */}
                  <div>
                    <select 
                      name="package"
                      required
                      className="w-full px-4 py-3 bg-white border border-amber-300 rounded-xl text-gray-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23F59E0B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                    >
                      <option value="" className="bg-white text-gray-800">Select Package *</option>
                      <option value="Royal Gold - 50 Barati + 1 Groom (₹2.5 Lakhs)" className="bg-white text-gray-800">Royal Gold - 50 Barati + 1 Groom (₹2.5L)</option>
                      <option value="Royal Platinum - 100 Barati + 1 Groom (₹4 Lakhs)" className="bg-white text-gray-800">Royal Platinum - 100 Barati + 1 Groom (₹4L)</option>
                      <option value="Royal Emperor - 200 Barati + 1 Groom (₹8 Lakhs)" className="bg-white text-gray-800">Royal Emperor - 200 Barati + 1 Groom (₹8L)</option>
                      <option value="Custom Package" className="bg-white text-gray-800">Custom Package (Get Quote)</option>
                    </select>
                  </div>
                  
                  {/* City */}
                  <div>
                    <input 
                      type="text" 
                      name="city"
                      placeholder="Wedding City *" 
                      required
                      className="w-full px-4 py-3 bg-white border border-amber-300 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  
                  {/* Event Date */}
                  <div>
                    <input 
                      type="date" 
                      name="date"
                      required
                      className="w-full px-4 py-3 bg-white border border-amber-300 rounded-xl text-gray-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl text-lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Get Instant Quote
                  </Button>
                </form>
                
                <p className="text-center text-gray-500 text-xs mt-4">
                  Or call: <a href="tel:+919725295691" className="text-amber-700 hover:underline">+91-9725295691</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About This Service */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 text-amber-700 border-amber-700">About {capitalizedKeyword}</Badge>
            <h2 className="font-serif text-2xl md:text-4xl text-amber-800 mb-6">
              Why Our <span className="text-amber-600">{capitalizedKeyword}</span> is Unmatched
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Ronak Dave - The Turban Man of India, we bring decades of expertise to every {keywordName} we create. 
              Our {keywordName} collection represents the pinnacle of Indian craftsmanship, combining 
              traditional techniques with modern aesthetics. Whether you're looking for a classic Rajasthani 
              style or a contemporary designer look, our {keywordName} services cater to every preference and occasion.
            </p>
            
            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <Card key={idx} className="border-amber-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-7 w-7 text-black" />
                    </div>
                    <h3 className="font-semibold text-amber-800 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 md:py-16 bg-amber-50/60">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 md:mb-12">
              <Badge className="mb-4 bg-amber-600 text-white">What You Get</Badge>
              <h2 className="font-serif text-2xl md:text-4xl text-gray-800 mb-4">
                {capitalizedKeyword} <span className="text-amber-700">Benefits</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white rounded-xl p-4">
                  <CheckCircle2 className="h-6 w-6 text-amber-700 flex-shrink-0" />
                  <span className="text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Packages */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-[#F5EFE6] via-[#FFFDF8] to-[#F5EFE6]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-6 md:mb-12">
            <Badge className="mb-4 bg-amber-600 text-white">Premium Packages</Badge>
            <h2 className="font-serif text-2xl md:text-4xl text-gray-800 mb-4">
              Royal <span className="text-amber-700">Wedding Packages</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All-inclusive premium safa packages by The Turban Man of India. Travel & accommodation not included.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Package 1 - Royal Gold */}
            <div className="bg-white border border-amber-300 rounded-2xl p-6">
              <div className="text-center mb-4">
                <Crown className="h-10 w-10 text-amber-700 mx-auto mb-3" />
                <h3 className="font-serif text-xl text-gray-800">Royal Gold</h3>
                <p className="text-amber-700 text-sm">50 Barati + 1 Groom</p>
              </div>
              <div className="text-center mb-4">
                <div className="text-amber-700 text-xs mb-1">Starting From</div>
                <div className="text-3xl font-bold text-gray-800">₹2,50,000</div>
                <div className="text-gray-500 text-xs">+ GST</div>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />1 Premium Groom Safa</li>
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />50 Coordinated Barati Safas</li>
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />Sehra, Kalgi & Accessories</li>
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />On-Site Tying Team</li>
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />Event Coordination</li>
              </ul>
              <Button className="w-full bg-amber-200 hover:bg-amber-500 text-amber-700 hover:text-black border border-amber-500 rounded-full" asChild>
                <a href={`tel:${RONAK_DAVE_INFO.phone}`}><Phone className="mr-2 h-4 w-4" />Book Now</a>
              </Button>
            </div>
            
            {/* Package 2 - Royal Platinum (Popular) */}
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-700/20 border-2 border-amber-500 rounded-2xl p-6 scale-105 relative">
              <div className="absolute top-0 right-0 bg-amber-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">MOST POPULAR</div>
              <div className="text-center mb-4">
                <Crown className="h-10 w-10 text-amber-700 mx-auto mb-3" />
                <h3 className="font-serif text-xl text-gray-800">Royal Platinum</h3>
                <p className="text-amber-700 text-sm">100 Barati + 1 Groom</p>
              </div>
              <div className="text-center mb-4">
                <div className="text-amber-700 text-xs mb-1">Starting From</div>
                <div className="text-3xl font-bold text-gray-800">₹4,00,000</div>
                <div className="text-gray-500 text-xs">+ GST</div>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />1 Luxury Groom Safa</li>
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />100 Premium Barati Safas</li>
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />Complete Accessories Set</li>
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />2 Professional Tying Teams</li>
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />VIP Family Styling (10)</li>
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />Emergency Backup Safas</li>
              </ul>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full" asChild>
                <a href={`tel:${RONAK_DAVE_INFO.phone}`}><Phone className="mr-2 h-4 w-4" />Book Now</a>
              </Button>
            </div>
            
            {/* Package 3 - Royal Emperor */}
            <div className="bg-white border border-amber-300 rounded-2xl p-6">
              <div className="text-center mb-4">
                <Crown className="h-10 w-10 text-amber-700 mx-auto mb-3" />
                <h3 className="font-serif text-xl text-gray-800">Royal Emperor</h3>
                <p className="text-amber-700 text-sm">200 Barati + 1 Groom</p>
              </div>
              <div className="text-center mb-4">
                <div className="text-amber-700 text-xs mb-1">Starting From</div>
                <div className="text-3xl font-bold text-gray-800">₹8,00,000</div>
                <div className="text-gray-500 text-xs">+ GST</div>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />1 Bespoke Groom Safa</li>
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />200 Luxury Barati Safas</li>
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />Premium Gold Accessories</li>
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />4 Professional Teams</li>
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />Ronak Dave Personal</li>
                <li className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="h-4 w-4" />24/7 On-Site Support</li>
              </ul>
              <Button className="w-full bg-amber-200 hover:bg-amber-500 text-amber-700 hover:text-black border border-amber-500 rounded-full" asChild>
                <a href={`tel:${RONAK_DAVE_INFO.phone}`}><Phone className="mr-2 h-4 w-4" />Book Now</a>
              </Button>
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-sm mt-8">
            *Travel & accommodation not included. Custom packages available. Contact for personalized quotations.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-6 md:mb-12">
            <Badge variant="outline" className="mb-4 text-amber-700 border-amber-700">FAQs</Badge>
            <h2 className="font-serif text-2xl md:text-4xl text-amber-800 mb-4">
              {capitalizedKeyword} - Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`faq-${idx}`}
                  className="border border-amber-200 rounded-xl px-6 bg-amber-50/50 data-[state=open]:bg-amber-50"
                >
                  <AccordionTrigger className="text-left font-semibold text-amber-800 hover:text-amber-700 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-amber-50 to-amber-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Crown className="h-16 w-16 text-amber-700 mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-4xl text-gray-800 mb-4">
              Book Your {capitalizedKeyword} Today!
            </h2>
            <p className="text-gray-500 mb-8 text-lg">
              Get the royal treatment with India's most trusted {keywordName} service. 
              Limited availability during wedding season - book now!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-6 text-lg rounded-full"
                asChild
              >
                <a href={`tel:${RONAK_DAVE_INFO.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call: {RONAK_DAVE_INFO.phone}
                </a>
              </Button>
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg rounded-full"
                asChild
              >
                <a href="https://wa.me/919725295691" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links - Related Services */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-6">Related Safa & Turban Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {relatedKeywords.map(link => (
              <Link key={link.href} href={link.href} className="text-amber-700 hover:text-amber-900 hover:underline text-sm p-2 rounded-lg hover:bg-amber-50 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <h3 className="font-serif text-xl text-gray-800 mt-8 mb-4">Available in Top Cities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {topCities.map(link => (
              <Link key={link.href} href={link.href} className="text-amber-700 hover:text-amber-900 hover:underline text-xs p-2 rounded-lg hover:bg-amber-50 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InternalLinks currentSlug={keywordSlug} type="keywords" limit={24} />

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Crown className="h-8 w-8 text-amber-700" />
              <div>
                <h4 className="font-serif text-xl text-amber-700">Ronak Dave</h4>
                <p className="text-sm text-amber-600 font-semibold">The Turban Man of India</p>
                <p className="text-xs text-gray-600">No. 1 Safawala in India</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-600 text-sm">© 2024 Ronak Dave - The Turban Man of India | No. 1 Safawala in India</p>
              <p className="text-amber-700 text-sm mt-1">Premium {capitalizedKeyword} Services Pan India</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/919725295691"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </a>
    </main>
  )
}

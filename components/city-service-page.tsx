"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, MessageCircle, Star, Award, Users, Globe, Crown, Sparkles, MapPin, Clock, CheckCircle2, ArrowRight, Trophy, Heart, Calendar, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RONAK_DAVE_INFO, INDIAN_CITIES, SAFA_KEYWORDS } from "@/lib/ronak-dave-seo"
import InternalLinks from "@/components/internal-links"

interface CityServicePageProps {
  cityName: string
  citySlug: string
  h1?: string
  heroParagraph?: string
  whyPoints?: string[]
  venues?: string[]
  areas?: string[]
  weddingStyle?: string
}

export default function CityServicePage({ cityName, citySlug, h1, heroParagraph, whyPoints, venues, areas, weddingStyle }: CityServicePageProps) {
  // Schema data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ronakdave.com" },
      { "@type": "ListItem", position: 2, name: cityName, item: `https://ronakdave.com/${citySlug}` }
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Ronak Dave - Wedding Safa & Turban Service in ${cityName}`,
    description: `Best wedding turban, safa, pagdi tying service in ${cityName} by Ronak Dave - The Turban Man of India. Guinness World Record holder. 40+ years legacy. 4.5 Lakh+ clients.`,
    url: `https://ronakdave.com/${citySlug}`,
    telephone: "+91-9725295691",
    image: "https://ronakdave.com/2.webp",
    priceRange: "₹₹₹",
    areaServed: { "@type": "Place", name: cityName },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "4500", bestRating: "5" }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Wedding Safa & Turban Service in ${cityName}`,
    description: `Professional wedding safa, turban, pagdi tying service in ${cityName} by Ronak Dave.`,
    provider: { "@type": "LocalBusiness", name: "Ronak Dave - The Turban Man of India", telephone: "+91-9725295691" },
    areaServed: { "@type": "Place", name: cityName },
    serviceType: "Wedding Turban & Safa Tying"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: `What is the cost of safa tying service in ${cityName}?`, acceptedAnswer: { "@type": "Answer", text: `Ronak Dave offers premium safa tying packages in ${cityName} starting from ₹15,000 for groom safa and ₹500-1500 per barati safa. Contact +91-9725295691 for custom quotes.` } },
      { "@type": "Question", name: `Does Ronak Dave provide turban service in ${cityName}?`, acceptedAnswer: { "@type": "Answer", text: `Yes, Ronak Dave - The Turban Man of India provides full wedding turban services in ${cityName} including groom safa, barati turbans, designer pagdi, and on-site tying at your venue.` } },
      { "@type": "Question", name: `How to book wedding safa service in ${cityName}?`, acceptedAnswer: { "@type": "Answer", text: `Call +91-9725295691 or WhatsApp to book Ronak Dave's wedding safa service in ${cityName}. Advance booking recommended for peak wedding season.` } }
    ]
  }

  // All keyword links for footer SEO
  const allKeywordLinks = SAFA_KEYWORDS.map(kw => ({
    label: kw.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    href: `/services/${kw.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}-by-ronak-dave-safawala`
  }))

  // Related keyword links for internal linking
  const relatedKeywords = SAFA_KEYWORDS.slice(0, 12).map(kw => ({
    label: kw.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    href: `/services/${kw.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}-by-ronak-dave-safawala`
  }))

  // Nearby cities for internal linking
  const cityIndex = INDIAN_CITIES.indexOf(cityName)
  const nearbyCities = INDIAN_CITIES.filter((_, i) => i !== cityIndex).slice(0, 20).map(c => ({
    label: `Safa Service ${c}`,
    href: `/${c.toLowerCase().replace(/\s+/g, '-')}`
  }))

  const services = [
    {
      icon: Crown,
      title: `Groom Safa in ${cityName}`,
      description: `Exclusive designer groom safas with royal maharaja look. On-site professional tying at any venue in ${cityName}.`,
      features: ["Premium Fabrics", "Custom Design", "Sehra Included", "Photo Shoot Ready"]
    },
    {
      icon: Users,
      title: `Barati Turban Service ${cityName}`,
      description: `Coordinated safas for all wedding guests and family members in ${cityName}. Bulk packages available.`,
      features: ["Color Matched", "Bulk Discounts", "Quick Tying", "Theme Based"]
    },
    {
      icon: Sparkles,
      title: `Designer Safa ${cityName}`,
      description: `Bespoke designer safas crafted by Ronak Dave's expert team for weddings in ${cityName}.`,
      features: ["Personal Consultation", "Fabric Selection", "Unique Patterns", "Premium Quality"]
    },
    {
      icon: Heart,
      title: `Wedding Package ${cityName}`,
      description: `Complete wedding turban package covering groom, barati and all styling needs in ${cityName}.`,
      features: ["Full Coverage", "Multiple Stylists", "All Accessories", "Touch-ups"]
    }
  ]

  const safaStyles = [
    "Rajasthani Safa", "Jodhpuri Pagdi", "Marwari Turban", "Royal Maharaja Safa",
    "Bandhej Safa", "Gota Patti Safa", "Marathi Pheta", "Gujarati Pagdi",
    "Designer Feta", "Traditional Pagri", "Modern Fusion Safa", "Luxury Wedding Turban"
  ]

  const faqs = [
    {
      question: `What is the cost of safa tying service in ${cityName}?`,
      answer: `Ronak Dave's safa tying services in ${cityName} range from ₹500 for standard barati safas to ₹50,000+ for premium designer groom safas. Contact +91-9725295691 for customized quotes based on your specific requirements.`
    },
    {
      question: `Do you provide home service for safa tying in ${cityName}?`,
      answer: `Yes, Ronak Dave provides on-site safa tying service at any venue in ${cityName} including homes, hotels, wedding halls, resorts, and destination venues. Our expert team comes fully equipped to your location.`
    },
    {
      question: `How to book Ronak Dave's safa service in ${cityName}?`,
      answer: `To book safa service in ${cityName}, call +91-9725295691 or WhatsApp +91-9725295691. Advance booking of 2-4 weeks is recommended during wedding season. Same-day service may be available based on availability.`
    },
    {
      question: `What types of safas are available in ${cityName}?`,
      answer: `We offer all traditional and designer styles in ${cityName} including Rajasthani Safa, Jodhpuri Pagdi, Marwari Turban, Bandhej Safa, Gota Patti Safa, Royal Maharaja Safa, and custom designer creations.`
    },
    {
      question: `Is safa rental available in ${cityName}?`,
      answer: `Yes, Ronak Dave provides premium safa rental services in ${cityName} with professional on-site tying. Both individual and bulk rental options are available for weddings of all sizes.`
    },
    {
      question: `Can you match safa with my wedding theme in ${cityName}?`,
      answer: `Absolutely! We specialize in creating custom safas that perfectly match your wedding theme, décor, and outfit in ${cityName}. Our team provides consultation for fabric, color, and design selection.`
    }
  ]

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value
    const pkg = (form.elements.namedItem('package') as HTMLSelectElement).value
    const date = (form.elements.namedItem('date') as HTMLInputElement).value
    const message = `Hi, I want to book wedding safa service in ${cityName} by Ronak Dave.\n\nName: ${name}\nPhone: ${phone}\nPackage: ${pkg}\nDate: ${date}`
    window.open(`https://wa.me/919725295691?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <main className="min-h-screen">
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
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
            <span className="text-amber-700">{cityName}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Left Content */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="inline-flex items-center gap-2 bg-amber-200 border border-amber-300 rounded-full px-4 py-2">
                  <Crown className="h-4 w-4 text-amber-700" />
                  <span className="text-amber-600 text-sm font-medium">The Turban Man of India</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 rounded-full px-4 py-2">
                  <Trophy className="h-4 w-4 text-amber-700" />
                  <span className="text-amber-600 text-sm font-medium">No. 1 Safawala in India</span>
                </div>
              </div>
              
              <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-gray-800 mb-4 leading-tight">
                Best <span className="text-amber-700">Wedding Safa & Turban</span> Service in {cityName}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Ronak Dave - <strong>"The Turban Man of India"</strong> & <strong>No. 1 Safawala in India</strong> brings 
                premium wedding turban services to {cityName}. With <strong>40+ years family legacy</strong>, 
                <strong> 4.5 Lakh+ clients</strong>, and <strong>500+ celebrity weddings</strong>, we deliver unmatched elegance.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">4.5L+</div>
                  <div className="text-gray-500 text-sm">Happy Clients</div>
                </div>
                <div className="w-px bg-amber-300 hidden md:block" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">500+</div>
                  <div className="text-gray-500 text-sm">Celebrity Weddings</div>
                </div>
                <div className="w-px bg-amber-300 hidden md:block" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">40+</div>
                  <div className="text-gray-500 text-sm">Years Legacy</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-6 text-lg rounded-full"
                  asChild
                >
                  <a href={`tel:${RONAK_DAVE_INFO.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: {RONAK_DAVE_INFO.phone}
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-green-400 text-green-600 hover:bg-green-500 hover:text-white font-semibold px-8 py-6 text-lg rounded-full"
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
              <div className="bg-white backdrop-blur-md rounded-2xl p-6 border border-amber-300 shadow-2xl">
                <div className="text-center mb-6">
                  <Crown className="h-8 w-8 text-amber-700 mx-auto mb-2" />
                  <h3 className="font-serif text-xl text-gray-800">Book Your Royal Safa in {cityName}</h3>
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

      {/* About Ronak Dave */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-amber-700 border-amber-700">
              <MapPin className="h-3 w-3 mr-1" />
              Now Serving {cityName}
            </Badge>
            <h2 className="font-serif text-2xl md:text-4xl text-amber-800 mb-6">
              Why Choose <span className="text-amber-600">Ronak Dave</span> for Your Wedding in {cityName}?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Ronak Dave, known as "The Turban Man of India," is India's most celebrated wedding turban specialist. 
              A <strong>Guinness World Record holder</strong> for creating the World's Largest Turban, 
              he brings his legendary expertise to {cityName}. From styling turbans for Bollywood celebrities 
              like Virat Kohli, Ranbir Kapoor, and MS Dhoni to gracing destination weddings across 15+ countries, 
              Ronak Dave's craftsmanship is unparalleled.
            </p>
            
            {/* Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Trophy, title: "Guinness Record", desc: "World's Largest Turban" },
                { icon: Star, title: "500+ Celebrities", desc: "Styled by Us" },
                { icon: Users, title: "4.5 Lakh+ Clients", desc: "Pan India" },
                { icon: Globe, title: "15+ Countries", desc: "International Service" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <item.icon className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="font-semibold text-amber-800 text-sm">{item.title}</div>
                  <div className="text-xs text-gray-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 md:py-16 bg-amber-50/60">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-6 md:mb-12">
            <Badge className="mb-4 bg-amber-600 text-white">Our Services</Badge>
            <h2 className="font-serif text-2xl md:text-4xl text-gray-800 mb-4">
              Wedding Turban Services in <span className="text-amber-700">{cityName}</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Comprehensive safa and turban services for all your wedding needs in {cityName}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="bg-white backdrop-blur-sm border-amber-300 hover:bg-white transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="font-serif text-lg text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{service.description}</p>
                  <div className="space-y-1">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-amber-600">
                        <CheckCircle2 className="h-3 w-3" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Packages */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-[#F5EFE6] via-[#FFFDF8] to-[#F5EFE6]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-6 md:mb-12">
            <Badge className="mb-4 bg-amber-600 text-white">Premium Packages</Badge>
            <h2 className="font-serif text-2xl md:text-4xl text-gray-800 mb-4">
              Royal Wedding Packages in <span className="text-amber-700">{cityName}</span>
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

      {/* Safa Styles */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-6 md:mb-12">
            <Badge variant="outline" className="mb-4 text-amber-700 border-amber-700">Safa Styles</Badge>
            <h2 className="font-serif text-2xl md:text-4xl text-amber-800 mb-4">
              Safa & Turban Styles Available in <span className="text-amber-600">{cityName}</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {safaStyles.map((style, idx) => (
              <Badge 
                key={idx} 
                variant="outline"
                className="px-4 py-2 text-sm border-amber-700 text-amber-800 hover:bg-amber-600 hover:text-white cursor-pointer transition-colors"
              >
                {style}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-6 md:mb-12">
            <Badge variant="outline" className="mb-4 text-amber-700 border-amber-700">FAQs</Badge>
            <h2 className="font-serif text-2xl md:text-4xl text-amber-800 mb-4">
              Frequently Asked Questions - {cityName}
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`faq-${idx}`}
                  className="border border-amber-200 rounded-xl px-6 bg-white data-[state=open]:bg-amber-50"
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
              Book Your Wedding Safa in {cityName} Today!
            </h2>
            <p className="text-gray-500 mb-8 text-lg">
              Don't miss the chance to have India's #1 turban specialist style your wedding. 
              Limited dates available during wedding season.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
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
            
            <div className="flex justify-center items-center gap-6 text-gray-500 text-sm">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-700" />
                Mon-Sat: 10AM-7PM
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-700" />
                Serving all {cityName} areas
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links - Related Services */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-6">Popular Safa & Turban Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {relatedKeywords.map(link => (
              <Link key={link.href} href={link.href} className="text-amber-700 hover:text-amber-900 hover:underline text-sm p-2 rounded-lg hover:bg-amber-50 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <h3 className="font-serif text-xl text-gray-800 mt-8 mb-4">Safa Service in Other Cities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {nearbyCities.map(link => (
              <Link key={link.href} href={link.href} className="text-amber-700 hover:text-amber-900 hover:underline text-xs p-2 rounded-lg hover:bg-amber-50 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InternalLinks currentSlug={citySlug} type="cities" limit={24} />

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-800 py-12">
        <div className="container mx-auto px-4 md:px-8">
          {/* Keyword Links for SEO */}
          <div className="mb-10">
            <h3 className="font-serif text-lg text-amber-800 mb-4">Our Services in {cityName}</h3>
            <div className="flex flex-wrap gap-2">
              {allKeywordLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-xs text-gray-600 hover:text-amber-700 hover:underline px-2 py-1 bg-white rounded border border-gray-200 transition-colors">
                  {link.label} in {cityName}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
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
              <p className="text-amber-700 text-sm mt-1">Serving {cityName} and 500+ cities across India</p>
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

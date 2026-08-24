"use client"

import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { ArrowRight, Crown, Users, Zap, Award } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "Wedding Safa Tying",
      description: "Professional traditional safa tying for grooms and wedding guests",
      href: "/wedding-safa-tying",
      icon: Crown,
      seoTitle: "Expert Wedding Safa Tying Service by Ronak Dave",
    },
    {
      title: "Groom Styling",
      description: "Complete groom appearance with pagdi, sehra, and feta coordination",
      href: "/groom-pagdi-tying-service",
      icon: Award,
      seoTitle: "Professional Groom Pagdi Tying by Ronak Dave",
    },
    {
      title: "Group Services",
      description: "Professional turban service for barati and guest groups",
      href: "/barati-safa-pagdi",
      icon: Users,
      seoTitle: "Barati Safa Pagdi Service by Ronak Dave",
    },
    {
      title: "Designer Safas",
      description: "Bespoke custom turban designs for trend-setting grooms",
      href: "/designer-wedding-safa",
      icon: Zap,
      seoTitle: "Designer Wedding Safa by Ronak Dave",
    },
  ]

  // Structured data for service listings
  const serviceListingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `https://ronakdave.com${service.href}`,
      description: service.description,
    })),
  }

  return (
    <>
      <Script
        id="service-listing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListingSchema) }}
      />
      <section className="py-20 bg-gradient-to-b from-white to-secondary/10" itemScope itemType="https://schema.org/Service">
        <div className="container mx-auto px-4">
          {/* Section Header with Enhanced SEO */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-4" itemProp="name">
              Premium Wedding Turban Services Across India
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" itemProp="description">
              Ronak Dave offers a comprehensive range of professional turban tying services for all your wedding needs across India. 
              From traditional Rajasthani designs to contemporary styles, our master specialists provide expert safa, pagdi, feta & sehra tying. 
              Same-day service available in C-Scheme, Vaishali Nagar, Mansarovar, Raja Park, Civil Lines, and all major cities across India.
            </p>
            <meta itemProp="areaServed" content="India" />
            <meta itemProp="serviceType" content="Wedding Turban Tying Service" />
            <meta itemProp="telephone" content="+91-9725295691" />
          </div>

          {/* Services Grid with Local SEO */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.title} href={service.href}>
                  <article 
                    className="h-full bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6 hover:-translate-y-2"
                    itemScope 
                    itemType="https://schema.org/Service"
                  >
                    <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-xl font-bold text-primary mb-2" itemProp="name">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed" itemProp="description">
                      {service.description}
                    </p>
                    <meta itemProp="areaServed" content="India" />
                    <meta itemProp="url" content={`https://ronakdave.com${service.href}`} />
                    <div className="flex items-center text-accent font-semibold group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>

          {/* Content Section with Enhanced Local SEO */}
          <div className="bg-secondary/10 rounded-lg p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">India's Most Trusted Turban Specialist - Ronak Dave - 40+ Years Heritage</h2>

              <div className="prose prose-lg text-gray-700 space-y-4 mb-8">
                <p>
                  At <strong>Ronak Dave</strong>, we believe that every wedding is a celebration of love, tradition, and heritage. Your turban is not just a piece of clothing—it's a representation of your cultural pride, your status, and your identity. For over <strong>20 years, we have been India's most trusted partner</strong> in creating perfect turban moments that last a lifetime.
                </p>

                <p>
                  Our journey began <strong>40+ years ago</strong> with a simple mission: to preserve the authentic art of Rajasthani turban tying while providing the highest quality service to every client. Over the decades, we've evolved into a full-service turban styling company, serving <strong>grooms, families, and guests across India and internationally</strong>. Our success is measured not just in numbers, but in the smiling faces of satisfied customers and the countless positive reviews we receive.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-8">Why Choose Ronak Dave for Turban Services across India?</h3>

                <p>
                  <strong>Expert Master Specialists:</strong> Our team consists of master turban specialists with 15-25 years of individual experience. They have perfected traditional Rajasthani turban tying techniques and understand the nuances of different regional styles. Whether you want an authentic Rajasthani pagdi, a Jodhpur turban, or a modern fusion design, our experts can create it perfectly. All our specialists are available across all major Indian cities including Mumbai, Delhi, Bangalore, Ahmedabad, Jaipur, Pune, Chennai, Hyderabad, Kolkata, and 500+ more cities.
                </p>

                <p>
                  <strong>Comprehensive Service Range:</strong> We don't just serve grooms. Our comprehensive services include styling for entire wedding parties, guest turban coordination, barati (wedding procession) services, pre-wedding event styling, and everything in between. We can handle everything from single-person styling to complete wedding party coordination with same-day service availability.
                </p>

                <p>
                  <strong>Premium Quality & Customization:</strong> We work with premium fabrics including silk, designer brocades, and hand-embroidered materials. Every turban is customized to match your preferences, wedding theme, and personal style. We offer unlimited consultations to ensure perfect satisfaction. Our pricing is competitive, ranging from ₹500-₹3000 depending on complexity.
                </p>

                <p>
                  <strong>Professional & Punctual:</strong> Your wedding schedule is tight, and we respect that. Our specialists arrive on time, work efficiently, and ensure you're ready when you need to be. We're known in the Indian wedding industry for our reliability and professional conduct. Same-day service is available across all Indian cities.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-8">Our Service Philosophy</h3>

                <p>
                  We believe in three core principles: <strong>Excellence in every turban, respect for your traditions, and commitment to your complete satisfaction</strong>. Before we tie any turban, we take time to understand your vision, preferences, and wedding theme. We offer detailed consultations, design recommendations, and multiple fittings to ensure perfect results.
                </p>

                <p>
                  Every client receives personalized attention. Whether you're getting a simple traditional turban or an elaborate designer creation, you receive the same high level of expertise and care. We adjust our approach based on your needs—some clients want classical authenticity, others want modern innovation, and some want a beautiful blend of both.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-8">Serving All of India & Rajasthan</h3>

                <p>
                  Our professional turban service is available across all major cities across India including:
                </p>
                <p className="text-sm">
                  <strong>North India:</strong> Delhi, Jaipur, Lucknow, Chandigarh, Amritsar, Dehradun
                </p>
                <p className="text-sm">
                  <strong>West India:</strong> Mumbai, Pune, Ahmedabad, Vadodara, Surat, Goa
                </p>
                <p className="text-sm">
                  <strong>South India:</strong> Bangalore, Chennai, Hyderabad, Kochi, Coimbatore
                </p>
                <p className="text-sm">
                  <strong>East India:</strong> Kolkata, Bhubaneswar, Patna, Ranchi
                </p>
                <p className="text-sm">
                  <strong>Central India:</strong> Indore, Bhopal, Nagpur, Udaipur, Jodhpur, and all destination wedding locations
                </p>
                <p className="text-sm">
                  We also serve <strong>destination weddings</strong> across India. No matter where your celebration is, Ronak Dave is ready to serve you with the same quality and professionalism.
                </p>

                <p>
                  Contact us today to book your perfect turban experience. Whether you're planning a grand wedding or a small family celebration, <strong>Ronak Dave is your trusted partner</strong> in creating beautiful, memorable moments. Call us at <strong>+91-9725295691</strong>, WhatsApp us, or visit us in person—our team is always ready to help you look your absolute best!
                </p>
              </div>

              <div className="flex gap-4 flex-wrap justify-center mt-8">
                <Link href="/services">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                    View All Services
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </Button>
                </Link>
                <a href="https://wa.me/919725295691" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

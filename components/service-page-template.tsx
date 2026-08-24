"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Star, CheckCircle, MessageCircle, Clock } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface ServicePageProps {
  title: string
  description: string
  shortDescription: string
  mainImage: string
  galleryImages: string[]
  areas: string[]
  keyFeatures: string[]
  seoKeywords: string[]
  content: string
  faqs: Array<{ question: string; answer: string }>
}

export function ServicePageTemplate({
  title,
  description,
  shortDescription,
  mainImage,
  galleryImages,
  areas,
  keyFeatures,
  seoKeywords,
  content,
  faqs,
}: ServicePageProps) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    city: "",
    count: "",
    preference: "",
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleWhatsAppSubmit = () => {
    const message = `Hi Ronak Dave, I'm interested in your ${title} service. Name: ${formData.name}, Date: ${formData.date}, City: ${formData.city}, Quantity: ${formData.count}, Preference: ${formData.preference}`
    window.open(`https://wa.me/919725295691?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/2.webp" alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 to-primary/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{title}</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">{shortDescription}</p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:+919725295691">
                  <Button className="bg-accent hover:bg-secondary text-black px-8 py-6 text-lg font-semibold shadow-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Book Service Now
                  </Button>
                </a>
                <a href="https://wa.me/919725295691?text=Hi%20Ronak%20Dave%20I%20want%20to%20get%20a%20free%20quote%20for%20your%20services" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-secondary hover:bg-accent text-white px-8 py-6 text-lg font-semibold border-2 border-white shadow-lg">
                    Get Free Quote
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image src={mainImage} alt={title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Meta Content */}
      <section className="py-12 px-4 hidden sr-only">
        {seoKeywords.map((keyword) => (
          <span key={keyword}>{keyword}</span>
        ))}
        {areas.map((area) => (
          <span key={area}>{area}</span>
        ))}
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <style jsx>{`
              .content-section h2 {
                font-size: 1.875rem;
                font-weight: bold;
                color: #8b1a1a;
                margin-top: 2rem;
                margin-bottom: 1rem;
                border-bottom: 3px solid #d4a574;
                padding-bottom: 0.5rem;
              }
              .content-section h3 {
                font-size: 1.5rem;
                font-weight: 600;
                color: #8b1a1a;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
              }
              .content-section h4 {
                font-size: 1.25rem;
                font-weight: 600;
                color: #8b1a1a;
                margin-top: 1.25rem;
                margin-bottom: 0.5rem;
              }
              .content-section p {
                color: #4b5563;
                line-height: 1.8;
                margin-bottom: 1rem;
                font-size: 1.0625rem;
              }
              .content-section ul {
                margin: 1rem 0 1rem 2rem;
                color: #4b5563;
              }
              .content-section ul li {
                margin-bottom: 0.75rem;
                line-height: 1.6;
              }
              .content-section strong {
                color: #8b1a1a;
                font-weight: 600;
              }
            `}</style>
            <div className="content-section prose prose-lg max-w-none text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Why Choose Ronak Dave</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {galleryImages.length > 0 && (
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">Gallery</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image src={image} alt={`Gallery ${index + 1}`} fill className="object-cover hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Service Areas across India</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <div key={index} className="flex items-center gap-3 bg-accent/10 p-4 rounded-lg">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-700 font-semibold">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {faqs.length > 0 && (
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-white p-6 rounded-lg shadow-md cursor-pointer">
                  <summary className="font-bold text-lg text-primary flex items-center">
                    <Star className="w-5 h-5 mr-3 text-accent" />
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-gray-700 ml-8">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your {title}?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contact Ronak Dave today for the most professional turban tying service across India
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-accent hover:bg-secondary text-black px-8 py-6 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91-9725295691
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form and Details Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Book Now</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Event / Wedding Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Event / Destination City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleFormChange}
                      placeholder="e.g., Mumbai, Delhi, Ahmedabad"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">No. of Safas / Turbans Required *</label>
                    <input
                      type="text"
                      name="count"
                      value={formData.count}
                      onChange={handleFormChange}
                      placeholder="e.g., 1, 5, 10"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Design / Colour / Fabric Preference</label>
                    <textarea
                      name="preference"
                      value={formData.preference}
                      onChange={handleFormChange}
                      placeholder="e.g., Traditional red & gold, silk fabric, royal Rajasthani design"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      rows={3}
                    />
                  </div>
                  <Button
                    onClick={handleWhatsAppSubmit}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send Enquiry via WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="md:col-span-2 space-y-6">
              {/* Call Us */}
              <div className="bg-primary text-white rounded-lg shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-accent rounded-full p-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Call Us</h4>
                    <p className="text-white/80 mb-3">Available 9 AM - 9 PM</p>
                    <a href="tel:+919725295691" className="text-accent text-lg font-semibold hover:text-secondary transition-colors">
                      +91 9725295691
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-green-500 text-white rounded-lg shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-4">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">WhatsApp</h4>
                    <p className="text-white/80 mb-3">Quick response guaranteed</p>
                    <a
                      href="https://wa.me/919725295691?text=Hi%20Ronak%20Dave"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-lg font-semibold hover:text-gray-200 transition-colors"
                    >
                      Chat Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h4 className="text-2xl font-bold text-primary mb-6">Why Contact Ronak Dave?</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">Free consultation and design guidance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">Instant quotes on WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">Same-day response to all queries</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">Flexible appointment scheduling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer hideMainNavigation={true} />
      <WhatsAppFloat />
    </main>
  )
}

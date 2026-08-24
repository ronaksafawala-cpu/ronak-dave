import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Crown, CheckCircle2, Phone, MessageCircle, Sparkles, Star, Trophy, Users, Globe, ArrowRight, ShieldCheck, Heart, Camera, MapPin, Sparkle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RONAK_DAVE_INFO } from "@/lib/ronak-dave-seo"

export const metadata: Metadata = {
  title: "Safawala Royal Groom Styling | Transform from Groom to Maharaja | Ronak Dave",
  description: "More than a Safa. More than a Sherwani. We curate a royal identity for the modern groom. Complete heritage styling, accessories, pre-wedding consultation & wedding-day dressing by Guinness Record Holder Ronak Dave. Packages start from ₹25,000.",
  keywords: "groom styling, royal groom styling, safawala groom styling, wedding groom styling, groom makeover, sherwani draping, safa draping, wedding day personal stylist, Ronak Dave styling",
}

export default function RoyalGroomStylingPage() {
  const stylingServices = [
    {
      title: "Royal Groom Consultation",
      tagline: "Every Maharaja deserves a look as unique as his story.",
      description: "We understand your personality, wedding theme, complexion, body type, and vision to create a signature royal appearance."
    },
    {
      title: "Heritage Safa Selection",
      tagline: "The crown of a groom is not worn, it is crafted.",
      description: "Bespoke fabric selection, custom color matching, regional turban styles (Rajwadi, Jodhpuri, Mewari, Marwari), and contemporary designs coordinated for you and your family."
    },
    {
      title: "Professional Safa Draping & Tying",
      tagline: "A perfectly draped Safa transforms a groom into a Maharaja.",
      description: "Expert on-site traditional and contemporary luxury draping. Every fold is shaped with perfection for long-lasting, camera-ready presentation."
    },
    {
      title: "Groom Look Styling",
      tagline: "Creating unforgettable first impressions.",
      description: "Holistic styling combining sherwani coordination, dupatta/stole matching, shawl draping, and layering consultation to ensure absolute harmony."
    },
    {
      title: "Royal Dupatta & Stole Draping",
      tagline: "Every fold tells a story of elegance.",
      description: "From the Maharaja drape to the Royal Shoulder drape. Photo-friendly, secure, and comfortable styling tailored for key ceremonies."
    },
    {
      title: "Kalgi & Brooch Consultation",
      tagline: "Details create distinction.",
      description: "Curating your look with premium accessories. Recommendations for kalgi selection, sarpech styling, brooch placement, and custom royal pins."
    },
    {
      title: "Groom Jewellery Styling",
      tagline: "Jewellery should complement royalty, not overpower it.",
      description: "Select the perfect mala, explore pearl layering styles, coordinate emerald and ruby-inspired necklaces, and receive heritage jewelry guidance."
    },
    {
      title: "Footwear & Accessories Consultation",
      tagline: "Royalty is completed from head to toe.",
      description: "Personal curation of mojari, jutti coordination, silk pocket squares, cufflinks, watches, and complementary accessories."
    },
    {
      title: "Signature Fragrance Styling",
      tagline: "A groom should be remembered long after he leaves the room.",
      description: "Occasion-based luxury perfume recommendations, scent pairing, and fragrance consultation for day and evening functions."
    },
    {
      title: "Pocket Square & Boutonniere Styling",
      tagline: "Small details, grand impact.",
      description: "Color harmony consultation, custom fold pocket squares, and floral boutonniere styling matching the bride's details."
    },
    {
      title: "Wedding Garland & Floral Styling",
      tagline: "Designed to complement the royal attire.",
      description: "Expert suggestions for varmala length, floral accessories, colors, and textures that highlight the groom's sherwani during entry."
    },
    {
      title: "Family & Baraat Coordination",
      tagline: "When the groom looks royal, the family should look equally distinguished.",
      description: "Coordinating safa planning, color themes, VIP guest styling, and baraati turbans to create a visually coherent royal entourage."
    },
    {
      title: "Face Shape & Personality Styling",
      tagline: "Not every style suits every groom.",
      description: "Scientific face-mapping, height/build analysis, beard style advice, and wedding theme alignment to find your perfect turban silhouette."
    },
    {
      title: "Heritage Groom Transformation",
      tagline: "From Groom to Maharaja.",
      description: "Attire inspiration based on iconic Rajput royalty, Mewar heritage, Marwar traditions, Jaipur royal families, or international luxury."
    },
    {
      title: "Wedding Day Personal Stylist",
      tagline: "Your personal royal attendant for the most important day.",
      description: "Dedicated on-site assistant for final dressing, safa adjustments, dupatta flow setting, accessory check, and photography touch-ups."
    }
  ]

  const experiences = [
    {
      title: "Pre-Wedding Groom Styling Consultation",
      desc: "Wedding vision planning, outfits coordination, color psychology, and heritage styling recommendations."
    },
    {
      title: "Complete Groom Dressing Assistance",
      desc: "On-site sherwani dressing, layering arrangement, dupatta setting, button check, and final mirror presentation."
    },
    {
      title: "Royal Finishing & Detailing Service",
      desc: "Meticulous preparation including thread trimming, outfit steaming inspection, and embroidery finishing checks."
    },
    {
      title: "Destination Wedding Groom Styling",
      desc: "Dedicated travel support across India and international destinations (Udaipur to Dubai) with on-location team deployment."
    },
    {
      title: "Baraat Entry Styling",
      desc: "Last-minute adjustments to safa, dupatta flow, and kalgi positioning right before your grand entrance."
    },
    {
      title: "Wedding Photography Styling Support",
      desc: "Camera-friendly styling, pose consultation, safa angle adjustments, and dupatta alignment during photo shoots."
    },
    {
      title: "Signature Heritage Look Creation",
      desc: "Custom looks inspired by Rajput Royal, Mewar Heritage, Jodhpur Maharaja, and Jaipur Royal legacies."
    },
    {
      title: "Groom Presence & Personality Styling",
      desc: "Walking posture suggestions, entry confidence guidance, and royal etiquette recommendations for a confident entry."
    },
    {
      title: "Luxury Groom Accessory Curation",
      desc: "Bespoke selection and matching of kalgi, sarpech, mala, pocket squares, brooches, and custom mojari."
    },
    {
      title: "Signature Fragrance Experience",
      desc: "Curating a custom scent profile with high-end day and evening perfume suggestions that match your wedding theme."
    },
    {
      title: "Couple Styling Harmony",
      desc: "Attire matching with the bridal outfit, ensuring color balance, jewelry coordination, and theme harmony."
    },
    {
      title: "Family Heritage Styling",
      desc: "Father's safa styling, brothers' attire coordination, VIP guest grooming, and complete baraati planning."
    },
    {
      title: "Emergency Groom Support",
      desc: "Last-minute styling emergency corrections, fast safa re-tying, accessory adjustments, and fabric repair."
    }
  ]

  const packages = [
    {
      name: "Heritage Turban Curation & Styling",
      price: "₹51,000",
      sub: "Bespoke Styling Map",
      features: [
        "Pre-Wedding style consultation & blueprinting",
        "Heritage Safa selection & custom color matching",
        "Professional Safa Tying & Draping on-site by Senior Stylist",
        "Sehra, Kalgi & decorative ornament placement setting",
        "Completing outfit checks & alignment for groom",
        "Styling coverage for 1 main wedding event"
      ],
      whatsappMsg: "Hi, I am interested in the Heritage Turban Curation & Styling package (₹51k). Please share details."
    },
    {
      name: "Royal Maharaja Groom Styling",
      price: "₹1,21,000",
      sub: "Complete Groom Wardrobe & Makeover",
      features: [
        "Everything in the Heritage Styling package",
        "Complete Outfit & Sherwani Coordination",
        "Royal Dupatta & Stole draping styling (Maharaja/Shoulder)",
        "Groom Jewellery layer styling & Footwear selection advice",
        "Signature fragrance profile pairing consultation",
        "Garland color & Pocket square/boutonniere matching",
        "On-site dressing styling for up to 2 events"
      ],
      whatsappMsg: "Hi, I am interested in the Royal Maharaja Groom Styling package (₹1.21L). Please check availability."
    },
    {
      name: "Guinness-Grade Signature Makeover",
      price: "₹2,51,000",
      popular: true,
      sub: "Tied Personally by Ronak Dave",
      features: [
        "Everything in the Royal Maharaja package",
        "Safa tying & draping personally by Ronak Dave",
        "On-site event attendance & styling by Ronak Dave",
        "Face Shape, beard, and posture styling mapping",
        "Family VIP Safa planning & styling coordination (up to 5 members)",
        "Photography styling support (camera-friendly angle set)",
        "Last-minute entry touch-ups & look assurance"
      ],
      whatsappMsg: "Hi, I want to book the Guinness-Grade Signature Makeover with Ronak Dave (₹2.51L). Let's connect."
    },
    {
      name: "The Imperial Safawala Transformation",
      price: "₹4,50,000",
      sub: "The Absolute Royal Curation",
      features: [
        "Everything in the Guinness-Grade package",
        "Bespoke personal attendant for the entire wedding day",
        "Destination Wedding travel support included (Senior team + Ronak)",
        "Family heritage styling & coordination (up to 15 members)",
        "Royal Finishing & Detailing (thread trimming, steaming inspection)",
        "Couple Styling Harmony check (bride & groom attire balance)",
        "24/7 on-call support & emergency backup safas"
      ],
      whatsappMsg: "Hi, I want to enquire about the Imperial Safawala Transformation package (₹4.5L). Let's schedule a call."
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white font-sans antialiased">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/80 py-4">
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Crown className="h-6 w-6 text-[#C4A882]" />
            <span className="font-serif text-lg tracking-widest text-[#FAF6F1]">SAFAWALA</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[11px] tracking-widest uppercase font-medium text-white/60 hover:text-white transition-colors">Home</Link>
            <Link href="/services" className="text-[11px] tracking-widest uppercase font-medium text-white/60 hover:text-white transition-colors">Services</Link>
            <Link href="#services-list" className="text-[11px] tracking-widest uppercase font-medium text-white/60 hover:text-white transition-colors">Styling Services</Link>
            <Link href="#packages" className="text-[11px] tracking-widest uppercase font-medium text-white/60 hover:text-white transition-colors">Packages</Link>
          </nav>
          <div className="flex items-center gap-4">
            <a href={`tel:${RONAK_DAVE_INFO.phone}`} className="flex items-center gap-2 border border-[#C4A882] text-[#C4A882] hover:bg-[#C4A882] hover:text-black text-[11px] tracking-widest uppercase font-semibold px-4 py-2 transition-all">
              <Phone className="h-3 w-3" /> Call
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 overflow-hidden bg-gradient-to-b from-[#111] via-black to-[#111]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="/2.webp" alt="Royal Groom Attire Background" className="w-full h-full object-cover filter grayscale contrast-125" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0" />
        
        <div className="max-w-5xl mx-auto px-5 md:px-10 relative z-10 text-center py-20">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 border border-[#C4A882]/30 px-4 py-1.5 rounded-full bg-black/40">
              <Crown className="h-4 w-4 text-[#C4A882]" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C4A882] font-semibold">SAFAWALA ROYAL GROOM STYLING™️</span>
            </div>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-[#FAF6F1] leading-none mb-6">
            More than a Safa.<br/>
            <span className="italic font-light text-[#C4A882]">More than a Sherwani.</span>
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed mb-8 font-mono">
            We curate a royal identity for the modern groom. From heritage turban styling and regal accessories 
            to complete wedding-day grooming, Safawala transforms every groom into a Maharaja worthy of his grand entrance.
          </p>
          
          <p className="text-sm tracking-[0.25em] uppercase text-[#C4A882] font-bold mb-10">
            "More Than Styling. A Royal Transformation."
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#packages" className="bg-[#C4A882] hover:bg-[#FAF6F1] text-black text-xs tracking-widest uppercase font-bold px-8 py-4 transition-all">
              View Styling Packages
            </Link>
            <a href={`https://wa.me/919725295691?text=${encodeURIComponent("Hi Ronak, I want to discuss Royal Groom Styling packages.")}`} target="_blank" rel="noopener noreferrer" className="border border-white/20 hover:border-[#C4A882] text-white hover:text-[#C4A882] text-xs tracking-widest uppercase font-bold px-8 py-4 transition-all flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Consultation Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-black border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-[#C4A882] font-semibold mb-3">The Safawala Difference</p>
              <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-white mb-6">
                Why Choose <span className="italic text-[#C4A882]">Safawala Groom Styling?</span>
              </h2>
              <div className="h-px w-20 bg-gradient-to-r from-[#C4A882] to-transparent mb-8" />
              
              <p className="text-white/80 text-lg font-light leading-relaxed mb-6 font-mono">
                Because a groom deserves more than a turban.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                At Safawala, we don't simply tie a Safa — we craft a royal identity. Every fold, every accessory, 
                every detail is carefully curated to reflect your personality, heritage, and wedding vision.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                From selecting the perfect Safa and styling your Sherwani to coordinating jewellery, fragrances, 
                and family attire, our experts ensure that when you walk into your wedding, you don't just look 
                prepared — you look unforgettable.
              </p>
              
              <div className="flex gap-8 border-t border-white/10 pt-8">
                <div>
                  <p className="font-serif text-3xl text-white">40+ Yrs</p>
                  <p className="text-[9px] tracking-widest uppercase text-white/40 mt-1">Heritage Legacy</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-white">4.5L+</p>
                  <p className="text-[9px] tracking-widest uppercase text-white/40 mt-1">Styled Grooms</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-white">Guinness</p>
                  <p className="text-[9px] tracking-widest uppercase text-white/40 mt-1">World Record</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="img-zoom aspect-[4/5] border border-white/10 relative">
                <img src="/SAFAWALA LOGO.webp" alt="Safawala Royal Groom Brand Seal" className="w-full h-full object-cover filter grayscale contrast-110" />
              </div>
              <div className="absolute -bottom-5 -right-5 w-2/3 h-2/3 border border-[#C4A882]/20 -z-10" />
              <div className="absolute bottom-6 left-6 bg-white text-black px-6 py-4 shadow-xl">
                <p className="text-[10px] tracking-widest uppercase font-bold">Safawala Groom Curation</p>
                <p className="text-xs text-[#9A7458] font-serif italic mt-0.5">Crafting Royal Stories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Royal Groom Styling Services List */}
      <section id="services-list" className="py-20 bg-[#FAF6F1] text-black">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <p className="text-[10px] tracking-widest uppercase text-[#9A7458] font-bold mb-3">15 Bespoke Chapters</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight mb-6">
              Safawala Royal Groom Styling Services
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#D9C4A8]" />
              <Crown className="h-4 w-4 text-[#9A7458]" />
              <div className="h-px w-12 bg-[#D9C4A8]" />
            </div>
            <p className="text-black/60 text-sm md:text-base leading-relaxed font-mono">
              Every single element of your attire, posture, accessories, and grooming coordinated to form an impeccable regal presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D9C4A8]">
            {stylingServices.map((service, index) => (
              <div key={index} className="bg-white p-8 hover:bg-[#FAF6F1] transition-all duration-300">
                <div className="w-10 h-10 border border-[#C4A882] flex items-center justify-center mb-6">
                  <span className="font-serif text-sm text-[#9A7458] font-bold">{(index + 1).toString().padStart(2, '0')}</span>
                </div>
                <h3 className="font-sans font-bold text-base tracking-tight mb-2 uppercase text-gray-900">{service.title}</h3>
                <p className="text-xs text-[#9A7458] italic mb-3 font-serif">"{service.tagline}"</p>
                <p className="text-[13px] text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 13-Step Royal Experience */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[10px] tracking-widest uppercase text-[#C4A882] font-semibold mb-3">The Timeline of Perfection</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-white mb-6">
              The Safawala Royal Groom Experience
            </h2>
            <div className="h-px w-20 bg-[#C4A882] mx-auto mb-6" />
            <p className="text-white/50 text-sm font-mono">
              A comprehensive journey from the initial style blueprints to the final wedding day checklist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-4 border-b border-white/5 pb-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-[#C4A882] text-xs font-mono font-bold mt-1">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white font-normal mb-1">{exp.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-[#FAF6F1] text-black">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[10px] tracking-widest uppercase text-[#9A7458] font-bold mb-3">Pricing & Inclusions</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight mb-6">
              Royal Groom Styling Packages
            </h2>
            <div className="h-px w-16 bg-[#C4A882] mx-auto mb-6" />
            <p className="text-black/60 text-sm font-mono">
              Choose the level of royal curation that matches your wedding destination, timeline, and vision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white p-6 border-2 transition-all flex flex-col justify-between ${pkg.popular ? "border-[#9A7458] shadow-2xl scale-105" : "border-gray-200"}`}>
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#9A7458] text-white px-4 py-1 text-[10px] tracking-widest uppercase font-bold">
                    Most Selected
                  </div>
                )}
                
                <div>
                  <div className="mb-6">
                    <p className="text-[10px] tracking-widest uppercase text-[#9A7458] font-bold mb-1">{pkg.sub}</p>
                    <h3 className="font-serif text-xl font-normal text-gray-900 mb-2 leading-snug">{pkg.name}</h3>
                    <div className="h-px w-12 bg-[#FAF6F1] mb-3" />
                    <p className="text-3xl font-light font-serif text-[#9A7458]">{pkg.price}</p>
                    <p className="text-[9px] text-gray-400 mt-0.5 uppercase tracking-wide">Starting from + GST</p>
                  </div>
                  
                  <ul className="space-y-2.5 mb-6 border-t border-gray-100 pt-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] text-gray-600 leading-normal">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#9A7458] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a href={`https://wa.me/919725295691?text=${encodeURIComponent(pkg.whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className={`w-full text-center text-xs tracking-widest uppercase font-bold py-4 transition-all block ${pkg.popular ? "bg-[#9A7458] hover:bg-black text-white" : "border border-[#9A7458] hover:bg-[#9A7458] hover:text-white text-[#9A7458]"}`}>
                  Enquire for {pkg.name}
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xs text-gray-500 font-mono">
              *Travel, visa, and accommodation arrangements are additional for destination weddings outside the primary base.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-black border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-5">
          <Crown className="h-12 w-12 text-[#C4A882] mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-white mb-6">
            Begin Your Royal Makeover
          </h2>
          <p className="text-white/60 text-base font-light mb-8 max-w-lg mx-auto">
            Book a consultation session with Ronak Dave's team to map out your look, coordinate outfits, and begin your journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`tel:${RONAK_DAVE_INFO.phone}`} className="bg-[#C4A882] hover:bg-[#FAF6F1] text-black text-xs tracking-widest uppercase font-bold px-8 py-4 transition-all">
              Call {RONAK_DAVE_INFO.phone}
            </a>
            <a href={`https://wa.me/919725295691?text=${encodeURIComponent("Hello, I am interested in booking Safawala Royal Groom Styling service. Let's connect.")}`} target="_blank" rel="noopener noreferrer" className="border border-white/20 hover:border-[#C4A882] text-white hover:text-[#C4A882] text-xs tracking-widest uppercase font-bold px-8 py-4 transition-all flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer copyright */}
      <footer className="bg-black border-t border-white/10 py-8 text-center text-xs text-white/30">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Ronak Dave — The Turban Man of India · All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/services" className="hover:text-white transition-colors">All Services</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, MessageCircle, Star, Award, Users, Globe, ChevronRight, Crown, Sparkles, MapPin, Clock, CheckCircle2, ArrowRight, Trophy, Heart, Camera, Calendar, Menu, X } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RONAK_DAVE_INFO } from "@/lib/ronak-dave-seo"

// ─── Safawala Logo SVG (recreated from brand) ────────────────────────────────
function SafawalaLogo({ dark = false }: { dark?: boolean }) {
  const fill = dark ? "#FFFFFF" : "#111111"
  return (
    <img
      src="https://safawala.com/wp-content/uploads/2025/09/Untitled-design-13.png"
      alt="Safawala — Ronak Dave"
      className="h-10 md:h-12 w-auto"
      style={{ filter: dark ? "invert(0) brightness(10)" : "invert(1) brightness(0)" }}
    />
  )
}

// ─── Announcement Bar ────────────────────────────────────────────────────────
function AnnouncementBar() {
  const messages = [
    "✦  India's Most Trusted Wedding Turban Specialist",
    "✦  Guinness World Record Holder",
    "✦  4.5 Lakh+ Happy Clients Across India & 15+ Countries",
    "✦  500+ Celebrity Weddings Styled",
    "✦  Book Now: +91-9725295691",
    "✦  3rd Generation Heritage · 40+ Years of Excellence",
  ]
  const text = messages.join("     ")
  return (
    <div className="bg-black text-white overflow-hidden py-2.5 text-[10px] tracking-widest uppercase font-sans">
      <div className="marquee-track">
        {[text, text].map((t, i) => (
          <span key={i} className="pr-16">{t}</span>
        ))}
      </div>
    </div>
  )
}

// ─── Header ──────────────────────────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Groom Styling", href: "/royal-groom-styling" },
    { label: "Packages", href: "#packages" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "top-0 backdrop-blur-xl border-b py-3" : "top-[36px] bg-transparent py-5"}`}
      style={scrolled ? { background: "var(--nude-50)", borderColor: "var(--nude-200)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
        {/* Safawala Logo */}
        <a href="#" className="flex items-center">
          <SafawalaLogo dark={false} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="text-[11px] tracking-[0.14em] uppercase font-medium text-black/60 hover:text-black transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a href={`https://wa.me/919725295691`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] tracking-widest uppercase font-semibold text-green-700 hover:text-green-900 transition-colors">
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
          </a>
          <a href={`tel:${RONAK_DAVE_INFO.phone}`}
            className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white text-[11px] tracking-widest uppercase font-semibold px-5 py-2.5 transition-colors">
            <Phone className="h-3 w-3" /> Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-black" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t shadow-lg" style={{ background: "var(--nude-50)", borderColor: "var(--nude-200)" }}>
          <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="text-[11px] tracking-[0.16em] uppercase font-semibold text-black/60 hover:text-black py-3 border-b border-gray-100 transition-colors">
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 mt-4">
              <a href={`tel:${RONAK_DAVE_INFO.phone}`}
                className="flex-1 flex items-center justify-center gap-2 bg-black text-white text-xs tracking-widest uppercase font-semibold py-3">
                <Phone className="h-3.5 w-3.5" /> Call Now
              </a>
              <a href={`https://wa.me/919725295691`} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-green-600 text-green-700 text-xs tracking-widest uppercase font-semibold py-3">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-[76px]" style={{ background: "var(--nude-50)" }}>
      <div className="absolute top-[76px] left-0 right-0 h-px bg-gray-200" />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="max-w-7xl mx-auto px-5 md:px-10 w-full flex-1 flex flex-col lg:flex-row items-center gap-10 lg:gap-0 py-12 lg:py-0">

          {/* Left — editorial copy */}
          <div className="flex-1 lg:pr-16 text-center lg:text-left order-2 lg:order-1">
            <p className="section-label mb-5">India's No. 1 Wedding Turban Specialist</p>

            <h1 className="font-sans leading-[0.95] mb-6">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black text-black tracking-tighter">RONAK</span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black text-black tracking-tighter">DAVE</span>
              <span className="block text-sm sm:text-base md:text-lg font-semibold text-black/40 mt-4 tracking-[0.3em] uppercase">
                The Turban Man of India
              </span>
            </h1>

            <div className="flex items-center gap-4 mb-6 max-w-xs mx-auto lg:mx-0">
              <div className="h-px flex-1 nude-line" />
              <span className="nude-dot text-sm">◆</span>
              <div className="h-px flex-1 nude-line" />
            </div>

            <p className="text-black/50 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Guinness World Record Holder · 40+ Years Heritage · 4.5 Lakh+ Happy Clients
              · Styled 500+ Celebrities including the Ambani Family
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
              {["Guinness Record", "Fastest Safa", "500+ Celebrities", "15+ Countries"].map((b) => (
                <span key={b} className="text-[10px] tracking-widest uppercase border px-3 py-1.5 font-semibold nude-border" style={{ color: "var(--nude-500)", borderColor: "var(--nude-200)" }}>
                  {b}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-10 mb-10">
              {[
                { num: "4.5L+", label: "Happy Clients" },
                { num: "500+", label: "Celebrities" },
                { num: "40+", label: "Years Heritage" },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="font-sans font-black text-3xl md:text-4xl text-black">{s.num}</p>
                  <p className="text-[10px] tracking-widest uppercase mt-1" style={{ color: "var(--nude-400)" }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href={`tel:${RONAK_DAVE_INFO.phone}`}
                className="flex items-center gap-2.5 bg-black hover:bg-gray-900 text-white text-xs tracking-widest uppercase font-semibold px-7 py-4 transition-all">
                <Phone className="h-3.5 w-3.5" /> Book Your Safa
              </a>
              <a href="#packages"
                className="flex items-center gap-2.5 text-black text-xs tracking-widest uppercase font-semibold px-7 py-4 transition-all hover:opacity-80" style={{ border: "1px solid var(--nude-400)" }}>
                View Packages <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right — safa gallery collage + booking */}
          <div className="flex-1 flex flex-col items-center gap-6 order-1 lg:order-2 w-full max-w-sm lg:max-w-none mx-auto">
            {/* 2x2 image grid from Safawala gallery — all grayscale */}
            <div className="relative w-full max-w-[340px] lg:max-w-[460px]">
              <div className="grid grid-cols-2 gap-1">
                {[
                  "https://safawala.com/wp-content/uploads/2025/08/1-7.png",
                  "https://safawala.com/wp-content/uploads/2025/08/3-6.png",
                  "https://safawala.com/wp-content/uploads/2025/08/5-4.png",
                  "https://safawala.com/wp-content/uploads/2025/08/7-4.png",
                ].map((src, i) => (
                  <div key={i} className={`img-zoom overflow-hidden border border-black/10 ${i === 0 ? "row-span-2" : ""}`}
                    style={{ aspectRatio: i === 0 ? "3/4" : "1/1" }}>
                    <img src={src} alt={`Safawala safa work ${i + 1}`}
                      className="w-full h-full object-cover"
                      style={{ filter: "grayscale(100%) contrast(1.1)" }} />
                  </div>
                ))}
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-black text-white px-4 py-3 shadow-lg">
                <p className="text-xs tracking-widest uppercase font-bold">Safawala.com</p>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 flex flex-col items-center justify-center shadow-md" style={{ background: "var(--nude-50)", border: "1px solid var(--nude-300)" }}>
                <Trophy className="h-5 w-5 text-black mb-1" />
                <p className="text-[8px] tracking-widest uppercase text-black font-bold text-center leading-tight">World<br/>Record</p>
              </div>
            </div>

            {/* Booking form */}
            <div className="w-full max-w-[340px] lg:max-w-[460px] shadow-[0_4px_32px_rgba(0,0,0,0.08)] p-6" style={{ background: "var(--nude-50)", border: "1px solid var(--nude-300)" }}>
              <p className="section-label text-center mb-4">Quick Booking Inquiry</p>
              <form className="space-y-3" onSubmit={(e) => {
                e.preventDefault()
                const f = e.currentTarget
                const name = (f.elements.namedItem("name") as HTMLInputElement).value
                const phone = (f.elements.namedItem("phone") as HTMLInputElement).value
                const pkg = (f.elements.namedItem("package") as HTMLSelectElement).value
                const date = (f.elements.namedItem("date") as HTMLInputElement).value
                const msg = `Hi, I want to book Ronak Dave Safa Service.\n\nName: ${name}\nPhone: ${phone}\nPackage: ${pkg}\nDate: ${date}`
                window.open(`https://wa.me/919725295691?text=${encodeURIComponent(msg)}`, "_blank")
              }}>
                <input name="name" type="text" required placeholder="Your Name *"
                  className="w-full px-4 py-3 text-sm text-black placeholder:text-black/30 focus:outline-none transition-colors" style={{ background: "white", border: "1px solid var(--nude-200)" }} />
                <input name="phone" type="tel" required placeholder="WhatsApp Number *"
                  className="w-full px-4 py-3 text-sm text-black placeholder:text-black/30 focus:outline-none transition-colors" style={{ background: "white", border: "1px solid var(--nude-200)" }} />
                <select name="package" required
                  className="w-full px-4 py-3 text-sm text-black focus:outline-none transition-colors appearance-none cursor-pointer" style={{ background: "white", border: "1px solid var(--nude-200)" }}>
                  <option value="">Select Package *</option>
                  <option>Royal Gold — 50 Barati + Groom (₹2.5L)</option>
                  <option>Royal Platinum — 100 Barati + Groom (₹4L)</option>
                  <option>Royal Emperor — 200 Barati + Groom (₹8L)</option>
                  <option>Custom Package (Get Quote)</option>
                </select>
                <input name="date" type="date" required
                  className="w-full px-4 py-3 text-sm text-black focus:outline-none transition-colors" style={{ background: "white", border: "1px solid var(--nude-200)" }} />
                <button type="submit"
                  className="w-full bg-black hover:bg-gray-900 text-white text-xs tracking-widest uppercase font-semibold py-4 flex items-center justify-center gap-2 transition-colors">
                  <MessageCircle className="h-3.5 w-3.5" /> Get Instant Quote
                </button>
              </form>
              <p className="text-center text-[11px] text-black/40 mt-3">
                Or call: <a href="tel:+919725295691" className="text-black hover:underline">+91-9725295691</a>
              </p>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-t border-black bg-black">
          <div className="max-w-7xl mx-auto px-5 md:px-10 py-5">
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6">
              {[
                { icon: Trophy, text: "Guinness World Record" },
                { icon: Crown, text: "India's No.1 Safawala" },
                { icon: Users, text: "4.5 Lakh+ Clients" },
                { icon: Globe, text: "15+ Countries Served" },
                { icon: Star, text: "500+ Celebrities Styled" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 flex-shrink-0" style={{ color: "var(--nude-300)" }} />
                  <span className="text-[11px] tracking-widest uppercase font-semibold" style={{ color: "var(--nude-200)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10">
        <div className="w-6 h-9 border border-black/20 rounded-full flex justify-center pt-2">
          <div className="scroll-dot w-1 h-1.5 bg-black rounded-full" />
        </div>
      </div>
    </section>
  )
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({ label, title, subtitle, dark = false }: { label: string; title: React.ReactNode; subtitle?: string; dark?: boolean }) {
  return (
    <div className="text-center mb-14 md:mb-20">
      <p className="section-label mb-4" style={dark ? { color: "var(--nude-300)" } : undefined}>{label}</p>
      <h2 className={`font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.0] mb-5 ${dark ? "text-white" : "text-black"}`}>
        {title}
      </h2>
      <div className="flex items-center justify-center gap-4 mb-5">
        <div className="h-px w-16 nude-line" />
        <span className="text-xs nude-dot">◆</span>
        <div className="h-px w-16 nude-line" />
      </div>
      {subtitle && (
        <p className={`text-sm md:text-base max-w-xl mx-auto leading-relaxed ${dark ? "text-white/40" : "text-black/40"}`}>{subtitle}</p>
      )}
    </div>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function AboutSection() {
  const achievements = [
    { icon: Trophy, num: "2", label: "World Records" },
    { icon: Users, num: "4.5L+", label: "Happy Clients" },
    { icon: Star, num: "500+", label: "Celebrities" },
    { icon: Globe, num: "15+", label: "Countries" },
    { icon: Clock, num: "40+", label: "Years Heritage" },
    { icon: MapPin, num: "200+", label: "Cities" },
  ]

  return (
    <section className="py-20 md:py-32 bg-black" id="about">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="img-zoom aspect-[4/5] border border-white/10 shadow-[0_12px_60px_rgba(0,0,0,0.4)]">
              <Image src="/ronak-dave.webp" alt="Ronak Dave — Founder of Safawala" fill className="object-cover"
                style={{ filter: "grayscale(100%) contrast(1.05)" }} />
            </div>
            <div className="absolute -bottom-5 -right-5 w-2/3 h-2/3 border border-white/10 -z-10" />
            <div className="absolute -bottom-6 left-6 bg-white text-black px-5 py-4 shadow-lg">
              <p className="text-xs tracking-widest uppercase font-bold">Safawala.com</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="section-label mb-5" style={{ color: "var(--nude-300)" }}>Hello From The Founder</p>
            <h2 className="font-sans font-black text-4xl md:text-5xl text-white leading-[1.05] tracking-tight mb-6">
              FROM IT ENGINEER<br />
              <span className="text-white/40">TO CULTURAL</span><br />
              <span className="text-white/40">ENTREPRENEUR</span>
            </h2>
            <div className="flex items-center gap-3 mb-8 max-w-[180px]">
              <div className="h-px flex-1 nude-line" />
              <span className="nude-dot text-xs">◆</span>
              <div className="h-px flex-1 nude-line" />
            </div>
            <p className="text-white/60 text-sm md:text-[15px] leading-relaxed mb-5">
              <strong className="text-white font-semibold">Ronak Dave</strong> began his career in the IT industry at
              <strong className="text-white"> Wipro Ltd</strong> for five years before choosing, in 2012, to carry
              forward his family's legacy in traditional safa manufacturing.
            </p>
            <p className="text-white/60 text-sm md:text-[15px] leading-relaxed mb-5">
              He pioneered <strong className="text-white">India's first large-scale premium safa rental service</strong>,
              making royal wedding turbans accessible nationwide. Today, Safawala is India's most trusted name in
              handcrafted wedding safas, pagdis, and turban services.
            </p>
            <p className="text-white/60 text-sm md:text-[15px] leading-relaxed mb-10">
              Behind it all stands <strong className="text-white">Safawala.com</strong> — the proud
              third-generation family business with over 40 years of heritage.
            </p>
            <div className="grid grid-cols-3 gap-px bg-white/10">
              {achievements.map(({ icon: Icon, num, label }) => (
                <div key={label} className="bg-black flex flex-col items-center py-5 px-2 border border-white/5">
                  <Icon className="h-4 w-4 mb-2" style={{ color: "var(--nude-300)" }} />
                  <p className="font-sans font-black text-xl text-white">{num}</p>
                  <p className="text-[9px] tracking-widest uppercase mt-1" style={{ color: "var(--nude-400)" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Why Choose ───────────────────────────────────────────────────────────────
function UniquePointsSection() {
  const points = [
    { n: "01", title: "3rd Generation Turban Artisan", desc: "40+ years of family legacy in Indian heritage fashion. MySafawale is the proud foundation behind Safawala." },
    { n: "02", title: "IT Engineer to Cultural Entrepreneur", desc: "Former Wipro professional turned Safa King in 2012, bringing innovation to traditional craft." },
    { n: "03", title: "Fastest Safa Tying World Record", desc: "Holds the official world record — unmatched expertise in traditional wedding safa artistry." },
    { n: "04", title: "World's Biggest Turban (Guinness)", desc: "Guinness World Record showcased during Navratri Garba, exemplifying India's rich cultural heritage." },
    { n: "05", title: "Pioneer of Premium Safa Rental", desc: "Started India's first large-scale premium safa rental service in 2012." },
    { n: "06", title: "Ambani Family Wedding Stylist", desc: "Designed exclusive safas for Akash Ambani, Anant Ambani, Parth Adani weddings." },
    { n: "07", title: "500+ Celebrity Portfolio", desc: "Styled Vicky Kaushal, Virat Kohli, MS Dhoni, Darshan Raval and Bollywood's elite." },
    { n: "08", title: "4.5 Lakh+ Satisfied Clients", desc: "Served across 200+ cities in India and 15+ countries worldwide." },
    { n: "09", title: "Heritage + Innovation Blend", desc: "Exclusive royal wedding packages with vintage car rentals and luxury accessories." },
    { n: "10", title: "Vision: Globalize Indian Heritage", desc: "Mission to preserve and globalize India's turban artistry for international audiences." },
  ]

  return (
    <section className="py-20 md:py-32 bg-black" id="why-ronak-dave">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeader
          label="Why Choose Us"
          title={<>10 REASONS TO<br /><span className="text-white/30">CHOOSE RONAK DAVE</span></>}
          subtitle="The most trusted wedding turban specialist in India — with a legacy that speaks for itself."
          dark={true}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10">
          {points.map((p) => (
            <div key={p.n} className="border border-white/10 p-6 group hover:bg-[#F0E6D6] bg-black transition-colors duration-300">
              <p className="font-serif text-4xl text-white/10 font-light mb-3 group-hover:text-black/10 transition-colors">{p.n}</p>
              <h3 className="font-serif text-base text-white font-normal leading-snug mb-2 group-hover:text-black transition-colors">{p.title}</h3>
              <p className="text-[12px] text-white/50 leading-relaxed group-hover:text-black/50 transition-colors">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-14 flex flex-wrap justify-center gap-3">
          <a href={`tel:${RONAK_DAVE_INFO.phone}`}
            className="flex items-center gap-2 text-black text-xs tracking-widest uppercase font-semibold px-8 py-4 transition-colors hover:opacity-80" style={{ background: "var(--nude-100)" }}>
            <Phone className="h-3.5 w-3.5" /> {RONAK_DAVE_INFO.phone}
          </a>
          <a href="https://wa.me/919725295691" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black text-xs tracking-widest uppercase font-semibold px-8 py-4 transition-colors">
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────
function ServicesSection() {
  const services = [
    { icon: Crown, title: "Royal Groom Styling", desc: "Bespoke maharaja style curation, outfit coordination, dupatta draping, accessory matching, and personal styling attendant.", features: ["Groom Consultation", "Outfit Coordination", "Accessories Curation", "On-site Stylist"], href: "/royal-groom-styling" },
    { icon: Users, title: "Barati Turban Service", desc: "Coordinated safas for family, friends, and all wedding guests. Bulk options for any gathering size.", features: ["Color Matched", "Bulk Discounts", "Quick Tying", "Theme Based"] },
    { icon: Globe, title: "Destination Weddings", desc: "Experienced styling team for weddings across India and 15+ countries — Dubai to London, we're there.", features: ["International Service", "Travel Team", "Luxury Venues", "Local Coordination"] },
    { icon: Star, title: "Celebrity Styling", desc: "Trusted by 500+ celebrities. Discreet, professional, picture-perfect results for your special day.", features: ["VIP Service", "Media Ready", "Privacy Assured", "Exclusive Designs"] },
    { icon: Sparkles, title: "Custom Designer Safas", desc: "Bespoke safas crafted to your exact specifications — theme matching, monograms, and family motifs.", features: ["Personal Consultation", "Fabric Selection", "Logo/Monogram", "Unique Patterns"] },
    { icon: Heart, title: "Complete Wedding Package", desc: "All-inclusive packages covering groom, barati, and all styling needs. One call for everything.", features: ["Full Event Coverage", "Multiple Stylists", "Accessories", "Touch-ups"] },
  ]

  return (
    <section className="py-20 md:py-32 bg-black" id="services">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeader label="What We Offer" title={<>ROYAL<br /><span className="text-white/30">SERVICES</span></>}
          subtitle="From traditional Rajasthani safas to modern designer turbans — excellence at every celebration."
          dark={true} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.map((s, i) => (
            <div key={i} className="border border-white/5 p-8 group hover:bg-[#F0E6D6] bg-black transition-colors duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center mb-5 group-hover:border-black/20 transition-all">
                  <s.icon className="h-4 w-4 text-white group-hover:text-black transition-colors" />
                </div>
                <h3 className="font-sans font-bold text-base text-white mb-3 tracking-tight group-hover:text-black transition-colors uppercase">{s.title}</h3>
                <p className="text-[13px] text-white/50 leading-relaxed mb-5 group-hover:text-black/60 transition-colors">{s.desc}</p>
                <div className="grid grid-cols-2 gap-1.5 mb-5">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-[11px] tracking-wide text-white/40 group-hover:text-black/50 transition-colors">
                      <CheckCircle2 className="h-3 w-3 flex-shrink-0" />{f}
                    </div>
                  ))}
                </div>
              </div>
              {s.href && (
                <Link href={s.href} className="text-xs text-[#C4A882] group-hover:text-black font-semibold tracking-wider uppercase flex items-center gap-1 hover:underline mt-4">
                  Explore Service <ChevronRight className="h-3 w-3" />
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href={`tel:${RONAK_DAVE_INFO.phone}`}
            className="inline-flex items-center gap-2.5 text-black text-xs tracking-widest uppercase font-semibold px-10 py-4 transition-colors hover:opacity-80" style={{ background: "var(--nude-100)" }}>
            <Phone className="h-3.5 w-3.5" /> Book Your Service Now
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Packages ─────────────────────────────────────────────────────────────────
function PackagesSection() {
  const packages = [
    {
      name: "Heritage Turban Curation & Styling",
      price: "₹51,000",
      sub: "Bespoke Styling Map",
      popular: false,
      whatsappMsg: "Hi, I am interested in the Heritage Turban Curation & Styling package (₹51k). Please share details.",
      inclusions: [
        "Pre-Wedding style consultation & blueprinting",
        "Heritage Safa selection & custom color matching",
        "Professional Safa Tying & Draping on-site by Senior Stylist",
        "Sehra, Kalgi & decorative ornament placement setting",
        "Completing outfit checks & alignment for groom",
        "Styling coverage for 1 main wedding event"
      ],
    },
    {
      name: "Royal Maharaja Groom Styling",
      price: "₹1,21,000",
      sub: "Complete Groom Wardrobe & Makeover",
      popular: false,
      whatsappMsg: "Hi, I am interested in the Royal Maharaja Groom Styling package (₹1.21L). Please check availability.",
      inclusions: [
        "Everything in the Heritage Styling package",
        "Complete Outfit & Sherwani Coordination",
        "Royal Dupatta & Stole draping styling (Maharaja/Shoulder)",
        "Groom Jewellery layer styling & Footwear selection advice",
        "Signature fragrance profile pairing consultation",
        "Garland color & Pocket square/boutonniere matching",
        "On-site dressing styling for up to 2 events"
      ],
    },
    {
      name: "Guinness-Grade Signature Makeover",
      price: "₹2,51,000",
      sub: "Tied Personally by Ronak Dave",
      popular: true,
      whatsappMsg: "Hi, I want to book the Guinness-Grade Signature Makeover with Ronak Dave (₹2.51L). Let's connect.",
      inclusions: [
        "Everything in the Royal Maharaja package",
        "Safa tying & draping personally by Ronak Dave",
        "On-site event attendance & styling by Ronak Dave",
        "Face Shape, beard, and posture styling mapping",
        "Family VIP Safa planning & styling coordination (up to 5 members)",
        "Photography styling support (camera-friendly angle set)",
        "Last-minute entry touch-ups & look assurance"
      ],
    },
    {
      name: "The Imperial Safawala Transformation",
      price: "₹4,50,000",
      sub: "The Absolute Royal Curation",
      popular: false,
      whatsappMsg: "Hi, I want to enquire about the Imperial Safawala Transformation package (₹4.5L). Let's schedule a call.",
      inclusions: [
        "Everything in the Guinness-Grade package",
        "Bespoke personal attendant for the entire wedding day",
        "Destination Wedding travel support included (Senior team + Ronak)",
        "Family heritage styling & coordination (up to 15 members)",
        "Royal Finishing & Detailing (thread trimming, steaming inspection)",
        "Couple Styling Harmony check (bride & groom attire balance)",
        "24/7 on-call support & emergency backup safas"
      ],
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-black" id="packages">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeader label="Premium Packages" title={<>ROYAL GROOM<br /><span className="text-white/30">STYLING PACKAGES</span></>} dark={true}
          subtitle="All-inclusive premium groom styling and transformation packages by The Turban Man of India." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {packages.map((pkg) => (
            <div key={pkg.name} className="pkg-card relative flex flex-col justify-between" style={{
              background: "var(--nude-50)",
              border: pkg.popular ? "1px solid var(--nude-400)" : "1px solid var(--nude-200)",
              boxShadow: pkg.popular ? "0 8px 48px rgba(0,0,0,0.15)" : "none"
            }}>
              {pkg.popular && <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "var(--nude-400)" }} />}
              {pkg.popular && (
                <div className="absolute top-4 right-4">
                  <span className="text-[9px] tracking-widest uppercase font-bold bg-black text-white px-2.5 py-1">Most Popular</span>
                </div>
              )}
              <div className="p-6">
                <Crown className="h-6 w-6 text-black mb-4" />
                <p className="section-label mb-1">{pkg.sub}</p>
                <h3 className="font-serif text-xl text-black font-light mb-3 leading-snug">{pkg.name}</h3>
                <div className="mb-4 border-t border-gray-100 pt-3">
                  <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--nude-400)" }}>Starting From</p>
                  <p className="font-serif text-3xl text-black font-light">{pkg.price}</p>
                  <p className="text-[10px] text-black/30 mt-0.5">+ GST as applicable</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] text-black/75 leading-relaxed">
                      <CheckCircle2 className="h-3.5 w-3.5 text-black flex-shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0">
                <a href={`https://wa.me/919725295691?text=${encodeURIComponent(pkg.whatsappMsg)}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-xs tracking-widest uppercase font-semibold py-4 transition-all w-full"
                  style={pkg.popular
                    ? { background: "#000", color: "#fff" }
                    : { border: "1px solid var(--nude-400)", color: "var(--nude-600)" }
                  }>
                  <MessageCircle className="h-3.5 w-3.5" /> Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-[13px] text-white/40 mb-5">Custom groom styling packages available for destination weddings.</p>
          <a href="https://wa.me/919725295691" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-green-600 text-green-700 hover:bg-green-50 text-xs tracking-widest uppercase font-semibold px-8 py-4 transition-colors">
            <MessageCircle className="h-3.5 w-3.5" /> Get Custom Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Celebrity ────────────────────────────────────────────────────────────────
function CelebritySection() {
  const celebs = [
    { name: "Vicky Kaushal", role: "Bollywood Star", event: "Wedding 2024" },
    { name: "Virat Kohli", role: "Cricket Legend", event: "Wedding 2017" },
    { name: "MS Dhoni", role: "Cricket Legend", event: "Family Celebrations" },
    { name: "Akash Ambani", role: "Business Tycoon", event: "Wedding 2019" },
    { name: "Anant Ambani", role: "Business Tycoon", event: "Wedding 2024" },
    { name: "Parth Adani", role: "Business Tycoon", event: "Wedding 2024" },
    { name: "Ranbir Kapoor", role: "Bollywood Star", event: "Wedding 2022" },
    { name: "Darshan Raval", role: "Singer", event: "Wedding 2024" },
  ]

  return (
    <section className="py-20 md:py-32" id="celebrities" style={{ background: "var(--nude-50)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeader label="Star-Studded Portfolio" title={<>CELEBRITIES<br /><span className="text-black/30">WHO TRUST US</span></>}
          subtitle="From cricket legends to Bollywood icons — India's biggest stars wear Ronak Dave safas." />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-black/10 mb-12">
          {celebs.map((c) => (
            <div key={c.name} className="p-6 group hover:bg-black bg-[var(--nude-50)] transition-colors text-center">
              <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4 group-hover:border-white/20 transition-all" style={{ border: "1px solid var(--nude-200)" }}>
                <Star className="h-5 w-5 text-black group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-serif text-base text-black font-normal mb-0.5 group-hover:text-white transition-colors">{c.name}</h4>
              <p className="text-[11px] tracking-wide text-black/50 uppercase font-semibold group-hover:text-white/60 transition-colors">{c.role}</p>
              <p className="text-[11px] text-black/30 mt-1 group-hover:text-white/40 transition-colors">{c.event}</p>
            </div>
          ))}
        </div>
        <div className="p-8 md:p-12 text-center" style={{ border: "1px solid var(--nude-200)", background: "var(--nude-100)" }}>
          <p className="section-label mb-4">500+ Celebrities & Counting</p>
          <h3 className="font-serif text-3xl md:text-4xl text-black font-light mb-4">
            The Choice of <span className="italic text-black/35">India's Elite</span>
          </h3>
          <p className="text-[13px] text-black/50 max-w-lg mx-auto mb-8">
            From the Ambani family to cricket's greatest — our safas have graced the most celebrated weddings in India and abroad.
          </p>
          <a href={`tel:${RONAK_DAVE_INFO.phone}`}
            className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white text-xs tracking-widest uppercase font-semibold px-8 py-4 transition-colors">
            <Phone className="h-3.5 w-3.5" /> Book Celebrity-Grade Service
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Gallery ──────────────────────────────────────────────────────────────────
function GallerySection() {
  const images = [
    "/gallery/1-6.webp", "/gallery/2-6.webp", "/gallery/3-5.webp", "/gallery/4-3.webp",
    "/gallery/5-3.webp", "/gallery/6-3.webp", "/gallery/7-3.webp", "/gallery/8-3.webp",
    "/gallery/9-3.webp", "/gallery/10-3.webp", "/gallery/11-3.webp", "/gallery/12-4.webp",
  ]

  return (
    <section className="py-20 md:py-32 bg-black" id="gallery">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeader label="Our Portfolio" title={<>OUR<br /><span className="text-white/30">PORTFOLIO</span></>} dark={true}
          subtitle="Each safa tells a story of tradition, craftsmanship, and celebration." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {images.map((src, i) => (
            <div key={i} className="img-zoom aspect-square group relative cursor-pointer" style={{ border: "1px solid var(--nude-300)" }}>
              <Image src={src} alt={`Royal Safa Design ${i + 1} by Ronak Dave`} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href={`tel:${RONAK_DAVE_INFO.phone}`}
            className="inline-flex items-center gap-2.5 text-xs tracking-widest uppercase font-semibold px-8 py-4 transition-colors hover:opacity-80" style={{ border: "1px solid var(--nude-300)", color: "var(--nude-200)" }}>
            View Complete Gallery <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    { name: "Rohit Singh", location: "Vadodara", text: "Wearing a Ronak Dave Safa on my wedding day felt like wearing my family's pride. The colors, the craftsmanship — everything spoke of heritage. My wedding photos look timeless." },
    { name: "Arjun Patel", location: "London, UK", text: "As someone hosting an Indian-style wedding from London, Ronak Dave's team not only provided stunning Safas but also explained the meaning behind each style. Truly authentic." },
    { name: "Vijay Mehta", location: "Vadodara", text: "Ronak Dave made sure every guest had a perfectly tied Safa. It was more than headwear — it was a celebration of culture and tradition." },
    { name: "Aman & Priya", location: "Dubai, UAE", text: "We had a royal-themed wedding in Udaipur, and Ronak Dave brought our vision to life. The Safas were rich, vibrant, and tied with precision. A truly regal experience." },
    { name: "Neha Shah", location: "Mumbai", text: "Our cultural day at the office became extraordinary thanks to Ronak Dave. Each safa reflected a different traditional style — connecting all of us to our roots." },
    { name: "Suresh Iyer", location: "Bangalore", text: "From the consultation to the day itself, the service was impeccable. Our entire barati was styled perfectly and every single photo was magazine-worthy." },
  ]

  return (
    <section className="py-20 md:py-32 bg-black" id="testimonials">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeader label="Client Love" title={<>WHAT OUR<br /><span className="text-white/30">CLIENTS SAY</span></>}
          subtitle="4.5 Lakh+ happy clients and counting — across India and 15+ countries worldwide."
          dark={true} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-white/5 p-8 group hover:bg-[#F0E6D6] bg-black transition-colors duration-300">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3 w-3 fill-current transition-colors group-hover:text-black group-hover:fill-black" style={{ color: "var(--nude-300)" }} />
                ))}
              </div>
              <p className="font-sans text-sm text-white/60 leading-relaxed mb-6 group-hover:text-black/70 transition-colors">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/10 group-hover:border-black/10 transition-colors">
                <div className="w-9 h-9 bg-white group-hover:bg-black flex items-center justify-center text-black group-hover:text-white font-sans font-black text-sm flex-shrink-0 transition-colors">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-[13px] font-bold text-white group-hover:text-black transition-colors">{t.name}</p>
                  <p className="text-[11px] text-white/40 group-hover:text-black/40 flex items-center gap-1 mt-0.5 transition-colors">
                    <MapPin className="h-2.5 w-2.5" /> {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQSection() {
  const faqs = [
    { q: "Who is Ronak Dave?", a: "Ronak Dave, 'The Turban Man of India', is a 3rd generation turban artisan and founder of Safawala from Vadodara. He holds the Fastest Safa Tying World Record and Guinness World Record for World's Biggest Turban, and has served 4.5 Lakh+ clients including 500+ celebrities." },
    { q: "What makes Ronak Dave different from other safa providers?", a: "10 unique reasons: 3rd generation 40+ year legacy, former IT engineer turned cultural entrepreneur, two world records, Ambani family wedding stylist, 500+ celebrities styled, pioneer of India's first premium safa rental, 4.5 Lakh+ satisfied clients, 15+ countries served." },
    { q: "What services does Ronak Dave offer?", a: "Groom Safa & Pagdi tying, barati/guest turban services, destination wedding styling, celebrity wedding coordination, custom designer safa creation, sehra and accessories, corporate events, international weddings, and premium safa rental." },
    { q: "Which celebrities has Ronak Dave styled?", a: "500+ celebrities including Vicky Kaushal, Virat Kohli, MS Dhoni, Darshan Raval, Gautam Gambhir, Ranbir Kapoor, and high-profile weddings of Akash Ambani, Anant Ambani, and Parth Adani." },
    { q: "What is the cost of safa service?", a: "Safa tying ranges from ₹500 for standard barati safas to ₹50,000+ for premium designer groom safas. Our packages start from ₹2.5 Lakh for 50 barati + groom. Contact +91-9725295691 for customized quotes." },
    { q: "Do you serve destination and international weddings?", a: "Yes. Our team has styled weddings in 15+ countries including UAE, USA, UK, Thailand, Singapore, Bali, and across Europe. For USA bookings: +1 (201) 238-9208." },
    { q: "How do I book Ronak Dave for my wedding?", a: "Call +91-9725295691, WhatsApp +91-9725295691, or email care@ronakdave.com. Advance booking of 2–4 weeks is recommended for peak wedding season." },
    { q: "What world records does Ronak Dave hold?", a: "1) The Fastest Safa Tying World Record. 2) Guinness World Record for World's Biggest Turban, showcased during Navratri Garba." },
    { q: "Can you match a safa to our wedding theme?", a: "Absolutely. We specialise in custom safas — fabric selection, colour matching, custom embroidery, monograms, and family motifs. Each Safawala piece tells a story of pride, heritage, and grandeur." },
    { q: "In which cities are your services available?", a: "200+ cities across India including Vadodara, Jaipur, Delhi, Mumbai, Ahmedabad, Bangalore, Udaipur, Surat, Pune, Hyderabad, Chennai, and all destination wedding locations." },
  ]

  return (
    <section className="py-20 md:py-32 bg-black" id="faqs">
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <SectionHeader label="Got Questions?" title={<>FREQUENTLY<br /><span className="text-white/30">ASKED QUESTIONS</span></>} dark={true}
          subtitle="Everything you need to know about our services." />
        <Accordion type="single" collapsible className="space-y-0 border border-white/20 bg-white/5">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}
              className="border-b border-white/10 last:border-b-0 px-6 data-[state=open]:bg-white/10">
              <AccordionTrigger className="text-left font-serif text-base font-normal text-white hover:text-white py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[13px] text-white/50 leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-10 flex flex-wrap justify-center gap-3">
          <a href={`tel:${RONAK_DAVE_INFO.phone}`}
            className="inline-flex items-center gap-2 text-black text-xs tracking-widest uppercase font-semibold px-7 py-4 transition-colors hover:opacity-80" style={{ background: "var(--nude-100)" }}>
            <Phone className="h-3.5 w-3.5" /> Call Us
          </a>
          <a href="https://wa.me/919725295691" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black text-xs tracking-widest uppercase font-semibold px-7 py-4 transition-colors">
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section className="py-20 md:py-32 bg-black" id="contact">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <p className="section-label mb-5" style={{ color: "var(--nude-300)" }}>Get In Touch</p>
            <h2 className="font-sans font-black text-4xl md:text-5xl text-white tracking-tight leading-[1.0] mb-6">
              BOOK YOUR<br /><span className="text-white/30">ROYAL SAFA TODAY</span>
            </h2>
            <div className="flex items-center gap-4 mb-8 max-w-[180px]">
              <div className="h-px flex-1 nude-line" />
              <span className="nude-dot text-xs">◆</span>
              <div className="h-px flex-1 nude-line" />
            </div>
            <p className="text-[13px] text-white/50 leading-relaxed mb-10 max-w-md">
              Ready to add the crown of tradition to your celebration? Contact us for a personalised consultation with India's most trusted wedding turban specialist.
            </p>
            <div className="space-y-7">
              {[
                { color: "bg-black", Icon: Phone, label: "Call Us", val: RONAK_DAVE_INFO.phone, href: `tel:${RONAK_DAVE_INFO.phone}`, sub: `USA: ${RONAK_DAVE_INFO.usaPhone}` },
                { color: "bg-green-600", Icon: MessageCircle, label: "WhatsApp", val: RONAK_DAVE_INFO.whatsapp, href: `https://wa.me/919725295691`, sub: "For Catalog & Quick Booking" },
                { color: "bg-gray-700", Icon: MapPin, label: "Offices", val: "Vadodara · Jaipur · Delhi · Mumbai · Ahmedabad · Bangalore · Udaipur", href: "#", sub: "200+ Cities Across India" },
                { color: "bg-white0", Icon: Clock, label: "Hours", val: "Mon – Sat: 10 AM – 7 PM", href: "#", sub: "Sunday: 10 AM – 5 PM" },
              ].map(({ color, Icon, label, val, href, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className={`w-9 h-9 ${color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase font-semibold text-white/40 mb-1">{label}</p>
                    <a href={href} className="text-[13px] text-white hover:text-white/70 transition-colors leading-relaxed block">{val}</a>
                    <p className="text-[11px] text-white/30 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 md:p-10" style={{ background: "var(--nude-50)", border: "1px solid var(--nude-200)" }}>
            <p className="section-label mb-6">Quick Booking Inquiry</p>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name *" required className="w-full px-4 py-3 text-sm text-black placeholder:text-black/30 focus:outline-none transition-colors" style={{ background: "white", border: "1px solid var(--nude-200)" }} />
                <input type="tel" placeholder="Phone Number *" required className="w-full px-4 py-3 text-sm text-black placeholder:text-black/30 focus:outline-none transition-colors" style={{ background: "white", border: "1px solid var(--nude-200)" }} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="date" required className="w-full px-4 py-3 text-sm text-black focus:outline-none transition-colors" style={{ background: "white", border: "1px solid var(--nude-200)" }} />
                <input type="text" placeholder="Wedding City *" required className="w-full px-4 py-3 text-sm text-black placeholder:text-black/30 focus:outline-none transition-colors" style={{ background: "white", border: "1px solid var(--nude-200)" }} />
              </div>
              <select className="w-full px-4 py-3 text-sm text-black focus:outline-none transition-colors appearance-none cursor-pointer" style={{ background: "white", border: "1px solid var(--nude-200)" }}>
                <option value="">Select Service</option>
                <option>Groom Safa</option>
                <option>Barati / Guest Safas</option>
                <option>Complete Wedding Package</option>
                <option>Destination Wedding</option>
                <option>Other</option>
              </select>
              <textarea rows={3} placeholder="Additional details or requirements..." className="w-full px-4 py-3 text-sm text-black placeholder:text-black/30 focus:outline-none transition-colors resize-none" style={{ border: "1px solid var(--nude-200)", background: "white" }} />
              <button type="submit" className="w-full bg-black hover:bg-gray-900 text-white text-xs tracking-widest uppercase font-semibold py-4 flex items-center justify-center gap-2 transition-colors">
                <Calendar className="h-3.5 w-3.5" /> Submit Booking Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const services = ["Groom Safa", "Barati Safas", "Destination Wedding", "Celebrity Styling", "Custom Design", "Safa Rental"]
  const styles = ["Rajasthani Safa", "Jodhpuri Pagdi", "Marwari Turban", "Bandhej Safa", "Marathi Pheta", "Designer Safa"]
  const cities = ["Mumbai", "Delhi", "Jaipur", "Ahmedabad", "Vadodara", "Pune", "Bangalore", "Udaipur", "Surat", "Chennai", "Kolkata", "Hyderabad"]

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <div className="mb-5">
              <SafawalaLogo dark={true} />
            </div>
            <p className="text-[12px] text-white/50 leading-relaxed mb-6">
              India's Most Trusted Wedding Turban Specialist · Guinness World Record Holder · 40+ Years Heritage · 4.5 Lakh+ Happy Clients
            </p>
            <div className="flex gap-2.5">
              {[
                "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z",
                "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
              ].map((d, i) => (
                <a key={i}
                  href={[
                    "https://www.instagram.com/safawalaofficial",
                    "https://www.facebook.com/safawalaofficial",
                    "https://www.youtube.com/@safawala",
                  ][i]}
                  target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center transition-colors group" style={{ border: "1px solid var(--nude-400)" }} onMouseEnter={e => (e.currentTarget.style.background = "var(--nude-400)")} onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                  <svg className="h-3.5 w-3.5 text-white/60 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d={d} /></svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-5" style={{ color: "var(--nude-400)" }}>Our Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[12px] text-white/50 hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="h-2.5 w-2.5 text-white/30" /> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-5" style={{ color: "var(--nude-400)" }}>Safa Styles</p>
            <ul className="space-y-2.5">
              {styles.map((s) => (
                <li key={s}>
                  <a href="#gallery" className="text-[12px] text-white/50 hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="h-2.5 w-2.5 text-white/30" /> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-5" style={{ color: "var(--nude-400)" }}>We Serve In</p>
            <div className="flex flex-wrap gap-1.5">
              {cities.map((c) => (
                <a key={c} href={`/${c.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[10px] border border-white/20 text-white/50 hover:bg-white hover:text-black hover:border-white px-2 py-1 transition-colors">
                  {c}
                </a>
              ))}
              <span className="text-[10px] text-white/30 px-2 py-1">+188 more</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-white/30">
            © {new Date().getFullYear()} Ronak Dave — The Turban Man of India · No. 1 Safawala in India
          </p>
          <div className="flex gap-5 text-[11px] text-white/30">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Refund Policy", href: "/refund-policy" },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="hover:text-white transition-colors">{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── WhatsApp Float ───────────────────────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <a href={`https://wa.me/919725295691?text=${encodeURIComponent('Hi, I am interested in Ronak Dave safa/turban service.')}`}
      target="_blank" rel="noopener noreferrer"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 w-13 h-13 md:w-14 md:h-14 bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-[0_4px_24px_rgba(34,197,94,0.4)] transition-all hover:scale-105"
      aria-label="Chat on WhatsApp">
      <MessageCircle className="h-6 w-6 text-white" />
    </a>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function RonakDaveHomePage() {
  return (
    <main className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <AboutSection />
      <UniquePointsSection />
      <ServicesSection />
      <PackagesSection />
      <CelebritySection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}

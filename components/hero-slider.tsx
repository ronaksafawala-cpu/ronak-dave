"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, MessageCircle } from "lucide-react"
import { addLead } from "@/lib/leads"

const heroData = {
  title: "Barati Safa & Wedding Turbans Across India",
  subtitle: "Premium Turban Service",
  description: "Ronak Dave's traditional safa & pagdi for baraat ceremonies and groom's entourage across India",
  image: "/2.webp",
}

export function HeroSlider() {
  const [formData, setFormData] = useState({
    name: "",
    eventDate: "",
    eventCity: "",
    quantity: "",
    preference: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Save lead to localStorage
    addLead({
      name: formData.name,
      eventDate: formData.eventDate,
      eventCity: formData.eventCity,
      quantity: formData.quantity,
      preference: formData.preference,
    })

    const message = `
🎭 *TURBAN/SAFA ENQUIRY* 🎭

👤 *Name:* ${formData.name}
📅 *Event/Wedding Date:* ${formData.eventDate}
📍 *Event/Destination City:* ${formData.eventCity}
🎪 *No. of Safas/Turbans Required:* ${formData.quantity}
✨ *Design/Colour/Fabric Preference:* ${formData.preference}

---
📱 *Sent via Ronak Dave Website*
    `.trim()

    const whatsappNumber = "919725295691"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <section id="home" className="relative w-full min-h-screen md:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroData.image} alt={heroData.title} className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/30 md:from-primary/80 md:via-primary/40 md:to-transparent z-10" />
      
      <div className="absolute inset-0 z-20 flex flex-col md:flex-row md:items-center w-full h-full">
        <div className="w-full h-full md:h-auto flex flex-col md:flex-row">
          <div className="container mx-auto px-4 md:px-6 py-6 md:py-0 w-full flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Left Side - Text Content */}
            <div className="flex-1 md:col-span-3 max-w-2xl space-y-3 md:space-y-6 flex flex-col justify-center pt-6 md:pt-0 mt-8 md:mt-16">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm font-mono uppercase tracking-wider">{heroData.subtitle}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-primary-foreground leading-tight text-balance">
                {heroData.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 font-mono leading-relaxed">
                {heroData.description}
              </p>
            </div>

                {/* Right Side - Form */}
                <div className="w-full sm:w-auto md:flex-1 md:col-span-2 bg-card rounded-lg p-4 sm:p-5 md:p-6 shadow-2xl h-fit mb-6 md:mb-0 max-w-sm mx-auto sm:mx-0">
                  <div className="mb-3 pb-3 border-b border-border">
                    <p className="text-xs text-accent font-mono uppercase tracking-wider mb-1">Quick Response</p>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-card-foreground">
                      Professional Safa Tying Service by Ronak Dave
                      <br />
                      <em className="text-xs not-italic">— 1 Hour Response Time</em>
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-card-foreground mb-1.5">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background border-border text-foreground text-xs h-9 md:h-8"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventDate" className="block text-xs font-mono text-card-foreground mb-1.5">
                        Wedding Date <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        required
                        className="bg-background border-border text-foreground text-xs h-9 md:h-8"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventCity" className="block text-xs font-mono text-card-foreground mb-1.5">
                        City <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="eventCity"
                        type="text"
                        placeholder="Mumbai, Delhi..."
                        value={formData.eventCity}
                        onChange={(e) => setFormData({ ...formData, eventCity: e.target.value })}
                        required
                        className="bg-background border-border text-foreground text-xs h-9 md:h-8"
                      />
                    </div>

                    <div>
                      <label htmlFor="quantity" className="block text-xs font-mono text-card-foreground mb-1.5">
                        No. of Safas <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="quantity"
                        type="number"
                        min="1"
                        placeholder="30, 80, 250"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        required
                        className="bg-background border-border text-foreground text-xs h-9 md:h-8"
                      />
                    </div>

                    <div>
                      <label htmlFor="preference" className="block text-xs font-mono text-card-foreground mb-1.5">
                        Design / Preference
                      </label>
                      <Textarea
                        id="preference"
                        placeholder="Red & gold, silk fabric"
                        value={formData.preference}
                        onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
                        rows={1}
                        className="bg-background border-border text-foreground resize-none text-xs"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-accent hover:bg-secondary text-accent-foreground text-xs h-9 md:h-8">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Send via WhatsApp
                    </Button>
                  </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

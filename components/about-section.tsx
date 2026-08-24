"use client"

import { Crown, Users, Award, Heart } from "lucide-react"

const features = [
  {
    icon: Crown,
    title: "40+ Years Legacy",
    description: "Four decades of preserving authentic Rajasthani turban tying traditions with master craftsmanship",
  },
  {
    icon: Users,
    title: "10,000+ Weddings Yearly",
    description: "Trusted turban service for premium groom styling across India's most celebrated weddings",
  },
  {
    icon: Award,
    title: "Expert Master Craftsmen",
    description: "Highly skilled artisans specializing in traditional safa, pagdi, and modern fusion designs",
  },
  {
    icon: Heart,
    title: "Premium Quality Service",
    description: "Handcrafted turbans with finest fabrics, perfect fitting, and impeccable attention to detail",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">About Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            India's Premier Wedding Turban Specialist - Ronak Dave
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            {
              "Ronak Dave is India's leading wedding turban specialist, offering premium safa and pagdi services for grooms and baraatis. With 40+ years of expertise, we combine traditional Rajasthani craftsmanship with contemporary designs to create the perfect turban for your special day."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 text-center hover:shadow-xl transition-shadow border border-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-mono leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional About Content */}
        <div className="mt-20 grid md:grid-cols-2 gap-6 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-2xl max-w-[320px] mx-auto md:mx-0">
            <img
              src="/ronak-dave.webp"
              alt="Ronak Dave - Premium Wedding Turban Service"
              className="w-full aspect-[9/16] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Why Choose Ronak Dave?</h3>
            <p className="text-muted-foreground font-mono leading-relaxed text-lg">
              {
                "Ronak Dave stands as India's most trusted turban specialist, serving 10,000+ weddings annually with precision and elegance. Our expert team combines traditional Rajasthani turban-tying techniques with personalized styling to ensure every groom looks absolutely regal on their special day."
              }
            </p>
            <p className="text-muted-foreground font-mono leading-relaxed text-lg">
              {
                "With four decades of heritage, we've perfected the art of creating stunning turbans for weddings, engagements, and special ceremonies. From classic burgundy and gold safas to modern fusion designs, Safawala by Ronak Dave delivers premium quality, perfect fitting, and exceptional service across all of India."
              }
            </p>
            <ul className="space-y-3">
              {[
                "Premium silk and cotton safa with gold embroidery",
                "Custom pagdi & feta designs for wedding themes",
                "Professional on-site safa tying service",
                "Groom, baraati & sehra styling packages",
                "Expert turban consultation with samples",
                "Traditional & modern wedding turban designs",
                "Perfect safa styling for any event where turban is needed",
                "Delivery & setup across India city",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground font-mono">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

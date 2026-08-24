"use client"

import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { LocalBusinessSchema } from "./local-business-schema"

interface FooterProps {
  hideMainNavigation?: boolean
}

export function Footer({ hideMainNavigation = false }: FooterProps) {
  return (
    <>
      <LocalBusinessSchema />
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info with Schema */}
            <div itemScope itemType="https://schema.org/LocalBusiness">
              <h2 className="text-3xl font-bold mb-4 text-accent" itemProp="name">
                Ronak Dave
              </h2>
              <p className="text-primary-foreground/80 font-mono leading-relaxed mb-6" itemProp="description">
                {
                  "India's most trusted wedding turban specialists. Bringing royal elegance to your special day with 40+ years heritage."
                }
              </p>
              <meta itemProp="url" content="https://ronakdave.com" />
              <meta itemProp="telephone" content="+91-9725295691" />
              <meta itemProp="email" content="care@ronakdave.com" />
              <meta itemProp="areaServed" content="India" />
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/people/Safawalacom/61579176513014/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/safawalaofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            {!hideMainNavigation && (
            <nav>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 font-mono">
                {["Packages"].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.toLowerCase().replace(" ", "-"))
                        element?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
                <li>
                  <Link href="/royal-groom-styling" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Groom Styling
                  </Link>
                </li>
              </ul>
            </nav>
            )}

            {/* Services */}
            <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80 font-mono">
              <li>
                <Link href="/royal-groom-styling" className="hover:text-accent transition-colors">
                  Royal Groom Styling
                </Link>
              </li>
              <li>Wedding Turban Tying Service</li>
              <li>Safa & Pagdi Tying</li>
              <li>Groom Turban & Sehra</li>
              <li>Feta & Wedding Turban Design</li>
              <li>Barati Safa Service</li>
              <li>Destination Wedding Turbans</li>
            </ul>
          </div>

          {/* Contact Info with Schema */}
          <address className="not-italic">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-primary-foreground/80 font-mono">
                    Vadodara Head Office,<br />
                    Gujarat, India<br />
                    Offices in: Jaipur | Delhi | Mumbai | Ahmedabad | Bangalore | Udaipur
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+919725295691"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  +91 97252 95692
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:care@ronakdave.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  care@ronakdave.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                <div className="text-primary-foreground/80 font-mono">
                  <p>Mon - Sat: 9 AM - 9 PM</p>
                  <p>Sunday: 10 AM - 8 PM</p>
                </div>
              </div>
            </div>
          </address>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-4 text-center">Wedding Turban Service - All of India</h4>
          <p className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed">
            Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Kolkata, Ahmedabad, Pune, Jaipur, Vadodara, Surat, Lucknow, Chandigarh, Indore, Bhopal, Nagpur, Kochi, Goa, Udaipur, Jodhpur, Dehradun, Amritsar, Ludhiana, Coimbatore, Bhubaneswar, Patna, Ranchi, and 500+ more cities across India
          </p>
          <p className="text-center text-accent font-mono text-sm mt-3">
            ✓ Destination Wedding Turban Service | ✓ On-site Safa & Pagdi Tying | ✓ Groom & Baraati Coverage
          </p>
        </div>

        {/* Our Services Links */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-6 text-center">Wedding Turban Services</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {[
              { label: "Wedding Safa", slug: "wedding-safa" },
              { label: "Groom Safa", slug: "safa-for-groom" },
              { label: "Rajasthani Safa", slug: "rajasthani-safa" },
              { label: "Jodhpuri Safa", slug: "jodhpuri-safa" },
              { label: "Marwari Safa", slug: "marwari-safa" },
              { label: "Barati Safa Service", slug: "safa-for-barati" },
              { label: "Designer Wedding Safa", slug: "designer-wedding-safa" },
              { label: "Royal Wedding Safa", slug: "royal-wedding-safa" },
              { label: "Destination Wedding Turban", slug: "destination-wedding-turban" },
              { label: "Groom Turban", slug: "groom-turban" },
              { label: "Sehra for Groom", slug: "sehra" },
              { label: "Safa on Rent", slug: "safa-on-rent" },
              { label: "Safa Tying Service", slug: "safa-tying-service" },
              { label: "Pagdi Tying", slug: "pagdi" },
              { label: "Marathi Pheta", slug: "pheta" },
              { label: "Gujarati Pagdi", slug: "gujarati-pagdi" },
              { label: "Rajputi Safa", slug: "rajputi-safa" },
              { label: "Luxury Wedding Turban", slug: "luxury-wedding-turban" },
              { label: "Custom Wedding Safa", slug: "custom-wedding-safa" },
              { label: "International Wedding Safa", slug: "nri-wedding-safa" },
            ].map(({ label, slug }) => (
              <a key={slug} href={`/services/${slug}`} className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
                → {label}
              </a>
            ))}
            <a href="/services/wedding-safa" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Wedding Safa Tying across India
            </a>
            <a href="/services/groom-turban" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Groom Pagdi Tying Service India
            </a>
            <a href="/services/rajasthani-safa" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Rajasthani Safa India</a>
            <a href="/services/safa-for-barati" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Barati Safa Pagdi India</a>
            <a href="/services/destination-wedding-turban" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Destination Wedding Safa India</a>
            <a href="/services/royal-wedding-safa" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Royal Wedding Safa India</a>
            <a href="/services/marwari-safa" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Marwari Wedding Pagdi India</a>
            <a href="/services/safa-tying-service" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Turban Tying for Guests India</a>
            <a href="/services/designer-wedding-safa" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Designer Wedding Safa India</a>
            <a href="/services/pagdi" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Pagdi Bandhne Wala India</a>
            <a href="/services/sehra" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Floral Sehra With Pagdi India</a>
            <a href="/services/sehra" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Sehra and Pagdi for Groom India</a>
            <a href="/services/groom-turban" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Sherwani Safa Turban India</a>
            <a href="/services/rajasthani-safa" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Traditional Rajasthani Pagri India</a>
            <a href="/services/pheta" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Wedding Feta Tying Service India</a>
            <a href="/services/safa-for-barati" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Mehndi Function Safa Tying India</a>
            <a href="/services/safa-on-rent" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Baraat Pagdi Rental and Tying India</a>
            <a href="/services/luxury-wedding-turban" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Premium Groom Turban Service India</a>
            <a href="/services/safa-on-rent" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Safa Pagdi On Rent With Tying India</a>
            <a href="/services/safa-tying-service" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Corporate and Wedding Turban Tying India</a>
            <a href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ All Wedding Turban Services India</a>
            <a href="/services/safa-tying-service" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Turban Tying Services across India</a>
            <a href="/services/safa" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Wedding Safa Wala across India</a>
            <a href="/services/safa-tying-service" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Pagdi Tying Artist across India</a>
            <a href="/services/wedding-safa" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Safa Pagdi Tying for Wedding India</a>
            <a href="/services/marwari-safa" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Marwari Safa Tying across India</a>
            <a href="/services/jodhpuri-safa" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Jodhpuri Pagdi Tying India</a>
            <a href="/services/safa-tying-service" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Professional Turban Artist India</a>
            <a href="/services/safa-tying-service" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Wedding Pagdi Service Near Me India</a>
            <a href="/services/safa-tying-service" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Safa Tying At Venue India</a>
            <a href="/services/safa-on-rent" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Safa Pagdi On Rent India</a>
            <a href="/services/safa-on-rent" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Pagdi On Rent For Wedding India</a>
            <a href="/services/wedding-safa" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Wedding Safa With Tying Service India</a>
            <a href="/services/destination-wedding-turban" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Turban Tying For Destination Wedding India</a>
            <a href="/services/safa-for-barati" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Barat Safa Pagdi Package India</a>
            <a href="/services/safa-for-barati" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Mehndi Haldi Safa Tying India</a>
            <a href="/services/groom-turban" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Reception Turban Tying India</a>
            <a href="/services/safa-tying-service" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Festival Pagdi Tying India</a>
            <a href="/services/safa-tying-service" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Corporate Event Turban Tying India</a>
            <a href="/services/destination-wedding-turban" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Foreigner Turban Experience India</a>
            <a href="/services/rajputi-safa" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Rajputi Pagdi For Groom India</a>
            <a href="/services/rajasthani-safa" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Designer Rajasthani Safa India</a>
            <a href="/services/bandhani-safa" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Colourful Bandhej Safa India</a>
            <a href="/services/bandhani-safa" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Gota Patti Safa Pagdi India</a>
            <a href="/services/safa-for-barati" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Ladkewale Safa Tying India</a>
            <a href="/services/safa-for-barati" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">→ Family Matching Safa Pagdi India</a>
          </div>
        </div>

        {/* Location-Based Services */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-6 text-center">Turban Services By Location</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {[
              { label: "Wedding Safa in Jaipur", slug: "jaipur" },
              { label: "Wedding Safa in Delhi", slug: "delhi" },
              { label: "Wedding Safa in Mumbai", slug: "mumbai" },
              { label: "Wedding Safa in Ahmedabad", slug: "ahmedabad" },
              { label: "Wedding Safa in Vadodara", slug: "vadodara" },
              { label: "Wedding Safa in Udaipur", slug: "udaipur" },
              { label: "Wedding Safa in Jodhpur", slug: "jodhpur" },
              { label: "Wedding Safa in Surat", slug: "surat" },
              { label: "Wedding Safa in Pune", slug: "pune" },
              { label: "Wedding Safa in Bangalore", slug: "bangalore" },
              { label: "Wedding Safa in Hyderabad", slug: "hyderabad" },
              { label: "Wedding Safa in Chennai", slug: "chennai" },
              { label: "Wedding Safa in Kolkata", slug: "kolkata" },
              { label: "Wedding Safa in Chandigarh", slug: "chandigarh" },
              { label: "Wedding Safa in Lucknow", slug: "lucknow" },
              { label: "Wedding Safa in Amritsar", slug: "amritsar" },
              { label: "Wedding Safa in Indore", slug: "indore" },
              { label: "Wedding Safa in Bhopal", slug: "bhopal" },
              { label: "Wedding Safa in Nagpur", slug: "nagpur" },
              { label: "Wedding Safa in Kochi", slug: "kochi" },
              { label: "Wedding Safa in Goa", slug: "goa" },
              { label: "Wedding Safa in Dehradun", slug: "dehradun" },
              { label: "Wedding Safa in Ranchi", slug: "ranchi" },
              { label: "Wedding Safa in Bhubaneswar", slug: "bhubaneswar" },
            ].map(({ label, slug }) => (
              <a key={slug} href={`/${slug}`} className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
                → {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 font-mono text-sm text-center md:text-left">
              © 2025 Ronak Dave - The Turban Man of India. All rights reserved. | India's Premier Wedding Turban Service
            </p>
            <div className="flex gap-6 text-sm font-mono">
              <a href="/privacy-policy" className="text-primary-foreground/80 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-primary-foreground/80 hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Local SEO - Service Areas in Structured Format */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h3 className="text-xl font-bold mb-4 text-center">Service Areas - All of India</h3>
          <p className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed max-w-4xl mx-auto">
            We provide professional turban tying service across all major cities across India including:
            <br />
            <strong>North India:</strong> Mumbai, Delhi, Pune, Ahmedabad, Vadodara, Surat
            <br />
            <strong>West India:</strong> Bangalore, Chennai, Hyderabad, Kolkata
            <br />
            <strong>South India:</strong> Bangalore, Chennai, Hyderabad, Kochi, Coimbatore
            <br />
            <strong>Other Areas:</strong> Indore, Bhopal, Nagpur, Kochi, Goa, Dehradun, Amritsar, Ludhiana, Coimbatore, and all destination wedding locations, and all surrounding areas
          </p>
          <p className="text-center text-accent font-mono text-sm mt-3 font-semibold">
            ✓ Same-Day Service Available | ✓ Free Consultation | ✓ Destination Weddings | ✓ On-site Styling
          </p>
        </div>
      </div>

      {/* SEO Keywords (hidden) */}
      <div className="sr-only">
        Wedding turban India, safa India, pagdi tying service, groom turban, Rajasthani turban, wedding safa, feta,
        sehra, barati safa, turban rental India, turban service India, wedding turban price, turban for groom, best
        turban service India, custom wedding turban, turban tying near me, groom pagdi, traditional turban India,
        premium safa design, wedding turban online, turban shop India, modern pagdi design, ethnic turban, fabric safa,
        gold embroidered turban, bridal groom turban, turban booking India, same day turban service, professional
        turban tying, handmade safa, silk pagdi, embellished turban, wedding turban rental, groom styling India,
        wedding safa tying across India, groom pagdi tying service, traditional rajasthani pagri, barati safa pagdi,
        destination wedding safa, designer wedding safa, floral safa pagdi, sehra and pagdi for groom, sherwani safa turban,
        wedding feta tying, mehndi function safa, baraat pagdi rental, premium groom turban, safa pagdi on rent,
        corporate turban tying, turban specialist India, master turban tying, authentic turban service, local turban expert
      </div>
    </footer>
    </>
  )
}

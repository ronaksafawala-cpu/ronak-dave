"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RONAK_DAVE_INFO } from "@/lib/ronak-dave-seo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Groom Styling", href: "/royal-groom-styling" },
    { name: "Packages", href: "/#packages" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-amber-50/95 backdrop-blur-md shadow-lg py-2"
          : "bg-amber-50/85 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/image.webp"
                alt="Ronak Dave - The Turban Man of India"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl md:text-2xl text-gray-800 font-bold leading-tight">
                Ronak Dave
              </h1>
              <p className="text-amber-600 text-xs md:text-sm font-medium">
                The Turban Man of India
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2 rounded-full"
              asChild
            >
              <a href={`tel:${RONAK_DAVE_INFO.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-amber-200 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-full w-full mt-2"
                asChild
              >
                <a href={`tel:${RONAK_DAVE_INFO.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: {RONAK_DAVE_INFO.phone}
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

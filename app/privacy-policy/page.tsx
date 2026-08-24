import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Ronak Dave — The Turban Man of India",
  description: "Privacy Policy for Ronak Dave — India's No.1 Safawala. How we collect, use and protect your personal information.",
  alternates: { canonical: "https://ronakdave.com/privacy-policy" },
  robots: { index: false, follow: true },
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm text-amber-700 hover:underline mb-8 block">← Back to Home</Link>
        <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: January 2025</p>

        <div className="prose prose-amber max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="font-serif text-xl text-amber-800 mb-3">1. Information We Collect</h2>
            <p>When you contact us via phone, WhatsApp, or our website booking forms, we collect your name, phone number, wedding date, city, and any service preferences you provide. This information is used solely to respond to your inquiry and deliver our safa & turban services.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-amber-800 mb-3">2. How We Use Your Information</h2>
            <p>Your information is used to: confirm bookings, send service reminders, and occasionally share updates about our services via WhatsApp. We do not sell, rent, or share your personal data with third parties.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-amber-800 mb-3">3. Data Security</h2>
            <p>We take reasonable precautions to protect your personal information. All communication is encrypted via WhatsApp and secure phone channels.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-amber-800 mb-3">4. Cookies</h2>
            <p>Our website uses analytics cookies (via Vercel Analytics) to understand how visitors interact with the site. No personally identifiable information is tracked via cookies.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-amber-800 mb-3">5. Contact</h2>
            <p>For any privacy-related queries, contact us at <a href="tel:+919725295691" className="text-amber-700 hover:underline">+91-9725295691</a>.</p>
          </section>
        </div>
      </div>
    </main>
  )
}

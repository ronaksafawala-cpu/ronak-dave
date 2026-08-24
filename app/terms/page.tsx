import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions | Ronak Dave — The Turban Man of India",
  description: "Terms & Conditions for booking Ronak Dave's wedding safa and turban services.",
  alternates: { canonical: "https://ronakdave.com/terms" },
  robots: { index: false, follow: true },
}

export default function Terms() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm text-amber-700 hover:underline mb-8 block">← Back to Home</Link>
        <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: January 2025</p>

        <div className="prose prose-amber max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="font-serif text-xl text-amber-800 mb-3">1. Booking & Confirmation</h2>
            <p>A booking is confirmed only upon receipt of an advance payment and written confirmation via WhatsApp or call. Availability is subject to prior bookings and travel schedule.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-amber-800 mb-3">2. Service Scope</h2>
            <p>Our service includes safa tying, pagdi tying, and turban styling as agreed at the time of booking. Any additional styles or guests beyond the agreed count may be charged separately.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-amber-800 mb-3">3. Cancellation</h2>
            <p>Cancellations made more than 30 days before the event date will receive a full refund of the advance amount. Cancellations within 30 days are non-refundable. See our Refund Policy for details.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-amber-800 mb-3">4. Client Responsibilities</h2>
            <p>The client is responsible for providing accurate event details (venue, timing, number of guests). Late arrival or venue access issues are the client's responsibility.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-amber-800 mb-3">5. Contact</h2>
            <p>For any queries, contact us at <a href="tel:+919725295691" className="text-amber-700 hover:underline">+91-9725295691</a>.</p>
          </section>
        </div>
      </div>
    </main>
  )
}

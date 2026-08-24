import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Refund Policy | Ronak Dave — The Turban Man of India",
  description: "Refund and cancellation policy for Ronak Dave's wedding safa and turban booking services.",
  alternates: { canonical: "https://ronakdave.com/refund-policy" },
  robots: { index: false, follow: true },
}

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm text-amber-700 hover:underline mb-8 block">← Back to Home</Link>
        <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">Refund Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: January 2025</p>

        <div className="prose prose-amber max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="font-serif text-xl text-amber-800 mb-3">Cancellation & Refund Terms</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>30+ days before event:</strong> Full refund of advance payment.</li>
              <li><strong>15–30 days before event:</strong> 50% refund of advance payment.</li>
              <li><strong>Less than 15 days before event:</strong> No refund. The advance amount is forfeited to cover travel and scheduling costs.</li>
              <li><strong>Service not rendered (our fault):</strong> Full refund will be issued within 7 business days.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-amber-800 mb-3">How to Request a Refund</h2>
            <p>Contact us via WhatsApp or phone at <a href="tel:+919725295691" className="text-amber-700 hover:underline">+91-9725295691</a> with your booking reference. Refunds are processed within 7–10 business days to your original payment method.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-amber-800 mb-3">Force Majeure</h2>
            <p>In cases of natural calamity, government-imposed restrictions, or other force majeure events, we will work with you to reschedule the booking at no additional charge. If rescheduling is not possible, a full refund will be issued.</p>
          </section>
        </div>
      </div>
    </main>
  )
}

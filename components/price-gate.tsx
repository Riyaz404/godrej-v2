'use client'

import { useState } from 'react'
import { Lock, Download } from 'lucide-react'

export default function PriceGate() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Price brochure requested:', email)
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-accent">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left - Content */}
            <div className="p-12 flex flex-col justify-center bg-gradient-to-br from-white to-accent">
              <div className="space-y-6">
                <div className="inline-block w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Lock className="text-primary" size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-black mb-3">
                    Exclusive Pricing Details
                  </h2>
                  <p className="text-muted leading-relaxed mb-6">
                    Get detailed price list and payment plans exclusively for our EOI registrants. 
                    Limited availability—secure your copy now.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-black">Detailed Price List</p>
                      <p className="text-sm text-muted">Unit-wise pricing with floor plans</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-black">Payment Plans</p>
                      <p className="text-sm text-muted">Multiple flexible options available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-black">Special EOI Discount</p>
                      <p className="text-sm text-muted">Up to 5% extra benefit for early bookers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="p-12 bg-white flex flex-col justify-center">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Download className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-black">Brochure Sent!</h3>
                  <p className="text-muted">Check your email for the detailed price list and payment plans.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="price-email" className="block text-sm font-semibold text-black mb-3">
                      Enter your email to access pricing
                    </label>
                    <input
                      type="email"
                      id="price-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Download size={20} />
                    Download Brochure
                  </button>

                  <p className="text-xs text-muted text-center">
                    We respect your privacy. Unsubscribe anytime.
                  </p>

                  <div className="pt-4 border-t border-accent">
                    <p className="text-center text-sm text-muted mb-3">
                      Not ready for EOI yet?
                    </p>
                    <button
                      type="button"
                      className="w-full border-2 border-primary text-primary hover:bg-primary/5 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      Register for Updates
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

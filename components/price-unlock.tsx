'use client'

import { Lock } from 'lucide-react'
import { useState } from 'react'

export default function PriceUnlock() {
  const [email, setEmail] = useState('')

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Lock Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-lg bg-gray-900 flex items-center justify-center">
            <Lock className="text-white" size={32} />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <span className="text-red-600 text-sm font-bold uppercase tracking-widest">EXCLUSIVE PRICING</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Price Sheet Available for EOI Registrants
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pre-launch pricing is exclusively shared with registered EOI members. Submit your details to receive the full price breakdown, payment plan, and floor-wise pricing.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-md mx-auto space-y-4">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded uppercase tracking-widest transition-colors">
            Unlock Price Sheet
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-gray-500 text-xs">
          Submit EOI form to reveal pricing
        </p>
      </div>
    </section>
  )
}

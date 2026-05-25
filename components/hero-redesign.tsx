'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function HeroRedesign() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    budget: '',
    config: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleConfigClick = (config: string) => {
    setFormData(prev => ({ ...prev, config }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/submit-eoi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        setSuccess(true)
        setFormData({
          fullName: '',
          phone: '',
          budget: '',
          config: '',
        })
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 pt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-godrej.jpg"
          alt="Godrej Kukatpally"
          fill
          priority
          quality={100}
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">

        {/* LEFT SIDE (UNCHANGED) */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 w-fit">
            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white font-bold text-2xl">G</span>
            </div>
            <div>
              <div className="text-white text-2xl font-bold">godrej</div>
              <div className="text-gray-300 text-xs uppercase tracking-widest">Properties</div>
            </div>
          </div>

          <div className="inline-block border-2 border-red-600 px-4 py-2 bg-red-600/10">
            <p className="text-red-500 font-bold text-sm uppercase tracking-widest">
              EOI NOW OPEN - LIMITED SLOTS
            </p>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              Godrej <br />
              <span className="text-red-600">Kukatpally</span>
            </h1>
            <div className="space-y-2">
              <p className="text-gray-400 text-lg uppercase tracking-widest">PRE LAUNCH</p>
              <div className="w-16 h-1 bg-red-600"></div>
            </div>
          </div>

          <h2 className="text-2xl lg:text-3xl text-white font-semibold leading-relaxed">
            London-Inspired Red Brick Living
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
            Premium 2, 3 & 4 BHK Residences in the heart of Kukatpally, Hyderabad.
          </p>

          <div className="flex gap-8 text-gray-400 text-sm">
            <span>Pre-Launch Pricing</span>
            <span>Priority Selection</span>
            <span>Limited Slots</span>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-8 space-y-6">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">Get EOI Details</h3>
            <p className="text-gray-400">Submit your interest to unlock exclusive pre-launch info</p>
          </div>

          {success ? (
            <div className="text-center py-10 text-white">
              <h3 className="text-2xl font-bold mb-3">🎉 Thank You!</h3>
              <p>We will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-white"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-white"
                required
              />

              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-gray-400"
                required
              >
                <option value="">Select budget</option>
                <option value="1cr-2cr">1 Cr - 2 Cr</option>
                <option value="2cr-3cr">2 Cr - 3 Cr</option>
                <option value="3cr+">3 Cr+</option>
              </select>

              <div className="flex gap-3">
                {['2 BHK', '3 BHK', '4 BHK'].map((config) => (
                  <button
                    key={config}
                    type="button"
                    onClick={() => handleConfigClick(config)}
                    className={`flex-1 py-2 px-4 rounded ${
                      formData.config === config
                        ? 'bg-red-600 text-white'
                        : 'border border-gray-600 text-gray-300'
                    }`}
                  >
                    {config}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white py-3 rounded"
              >
                {loading ? 'Submitting...' : 'Submit & Unlock Details'}
              </button>

            </form>
          )}
        </div>
      </div>
    </section>
  )
}
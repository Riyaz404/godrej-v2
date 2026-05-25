'use client'

import { useState } from 'react'

export default function EOIFormSection() {
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
    <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block">
            <span className="text-red-600 text-sm font-bold uppercase tracking-widest">
              LIMITED SLOTS
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Register Your EOI Today
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Secure your slot in Hyderabad&apos;s most anticipated pre-launch of 2025.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 space-y-6">

          {success ? (
            <div className="text-center text-white py-10">
              <h3 className="text-2xl font-bold mb-3">🎉 Thank You!</h3>
              <p>We will contact you shortly.</p>
            </div>
          ) : (

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Full Name */}
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-3 text-white"
                required
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-3 text-white"
                required
              />

              {/* Budget */}
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-3 text-gray-300"
                required
              >
                <option value="">Select budget range</option>
                <option value="1cr-2cr">1 Cr - 2 Cr</option>
                <option value="2cr-3cr">2 Cr - 3 Cr</option>
                <option value="3cr+">3 Cr+</option>
              </select>

              {/* Config */}
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

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white py-3 rounded"
              >
                {loading ? 'Submitting...' : 'Submit & Unlock Details'}
              </button>

              <p className="text-center text-gray-500 text-xs">
                No Spam | Direct Updates Only
              </p>

            </form>
          )}
        </div>
      </div>
    </section>
  )
}
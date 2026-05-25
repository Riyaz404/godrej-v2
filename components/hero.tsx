'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '2bhk',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', propertyType: '2bhk' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with hero image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-godrej.jpg"
          alt="Godrej Kukatpally Luxury Residences"
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-primary/90 px-4 py-2 rounded-full">
                <p className="text-white font-semibold text-sm">PRE-LAUNCH EOI OPEN</p>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                London-Inspired Luxury at Kukatpally
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                Experience premium residences with world-class amenities. Limited slots available for Early Offer of Interest.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-white">2, 3 & 4 BHK Premium Residences</h3>
                  <p className="text-gray-200 text-sm">Meticulously designed living spaces</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-white">World-Class Amenities</h3>
                  <p className="text-gray-200 text-sm">Gyms, pools, concierge, and more</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-white">Strategic Location</h3>
                  <p className="text-gray-200 text-sm">Well-connected to prime destinations</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-white hover:text-gray-200 font-semibold">
                <Phone size={20} />
                +91 98765 43210
              </a>
              <a href="mailto:eoi@godrejkukatpally.com" className="flex items-center gap-2 text-white hover:text-gray-200 font-semibold">
                <Mail size={20} />
                eoi@godrej.com
              </a>
            </div>
          </div>

          {/* Right - EOI Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-accent">
            <h2 className="text-2xl font-bold text-black mb-6">Register for EOI</h2>
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-black">Thank You!</h3>
                <p className="text-muted">We&apos;ll contact you shortly with exclusive details.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="propertyType" className="block text-sm font-semibold text-black mb-2">
                    Interested Property Type
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="2bhk">2 BHK</option>
                    <option value="3bhk">3 BHK</option>
                    <option value="4bhk">4 BHK</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 mt-6"
                >
                  Register Now
                </button>

                <p className="text-xs text-muted text-center">
                  We respect your privacy. Your information is secure with us.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

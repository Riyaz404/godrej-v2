'use client'

import Image from 'next/image'
import { Clock, Zap, Home, Trophy } from 'lucide-react'

export default function ExperienceSection() {
  return (
    <section className="bg-white">
      {/* Experience Before You Own */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Experience Before You Own</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our furnished display and understand why Godrej Kukatpally is the most coveted address
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/design-concept.jpg"
                alt="Godrej Kukatpally Exterior"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-semibold text-sm">LIVING EXPERIENCE</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative h-44 rounded-lg overflow-hidden">
                <Image
                  src="/design-concept.jpg"
                  alt="Interior Design"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold text-xs">KITCHEN</p>
                </div>
              </div>
              <div className="relative h-44 rounded-lg overflow-hidden">
                <Image
                  src="/design-concept.jpg"
                  alt="Master Bedroom"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold text-xs">BEDROOM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Early Movers Win Every Time */}
      <div className="bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Early Movers Win Every Time
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Priority Unit Selection</h3>
                  <p className="text-gray-400">
                    Early EOI registrants get first pick of units, layouts, and premium floor combinations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                  <Trophy className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Best Pricing Locked In</h3>
                  <p className="text-gray-400">
                    Lock in pre-launch pricing that will never be available again. Maximize your investment potential.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Flexible Payment Plans</h3>
                  <p className="text-gray-400">
                    Enjoy extended payment timelines and special financing options exclusively for EOI members.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                  <Home className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Concierge Services</h3>
                  <p className="text-gray-400">
                    Dedicated support team to guide you through the entire purchase journey, from EOI to possession.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location & Pricing */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-red-600 text-sm font-bold uppercase tracking-widest">PRIME LOCATION</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">In the Heart of Kukatpally</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map Image */}
            <div className="relative h-96 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="/kukatpally-location.jpg"
                alt="Kukatpally Location Map"
                fill
                className="object-cover"
              />
            </div>

            {/* Pricing Table */}
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-8 space-y-4">
                <h3 className="text-white font-bold text-xl mb-6">PRE-LAUNCH PRICING</h3>
                <div className="space-y-4">
                  {[
                    { config: 'KOHAKU CITY', price: '₹2.20 Cr' },
                    { config: 'ANTALYA SPHERE', price: '₹2.85 Cr' },
                    { config: 'AMORE GARDEN', price: '₹3.50 Cr' },
                    { config: 'VISTA PARK', price: '₹4.25 Cr' },
                    { config: 'GODREJ IT HUB', price: '₹2.45 Cr' },
                  ].map((item) => (
                    <div
                      key={item.config}
                      className="flex justify-between items-center pb-4 border-b border-gray-700"
                    >
                      <span className="text-gray-300 text-sm font-semibold">{item.config}</span>
                      <span className="text-white font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-xs pt-4">
                  *Prices subject to change. Submit EOI for accurate pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'

export default function DesignHeritage() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="text-red-600 text-sm font-bold uppercase tracking-widest">DESIGN CONCEPT</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
                Inspired by London&apos;s Red Brick Heritage
              </h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Creating timeless spaces that draw from the quintessential charm of North London, Godrej Kukatpally reimagines European architectural heritage for modern Hyderabad living. Each tower is meticulously designed to echo the grandeur of London&apos;s iconic Victorian and Georgian styles.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-900 font-semibold">Articulated Brick Facades</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-900 font-semibold">Double Height Ceilings</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-900 font-semibold">Large Balconies</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-900 font-semibold">Curated Green Spaces</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Red Box with Messaging */}
          <div className="relative h-80 rounded-lg overflow-hidden bg-gradient-to-br from-red-900 to-red-800 p-12 flex flex-col justify-center items-center text-center space-y-6">
            <h3 className="text-white text-4xl font-bold leading-tight">
              London Elegance. Hyderabad Address.
            </h3>
            <p className="text-red-100 font-semibold text-lg">GODREJ KUKATPALLY</p>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function HeaderSticky() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <div className="text-white">
            <div className="text-sm font-bold">godrej</div>
            <div className="text-xs uppercase tracking-widest text-gray-300">Properties</div>
          </div>
        </div>

        {/* Center Info */}
        <div className="hidden md:flex items-center gap-6 text-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-600"></div>
            <span className="text-sm font-semibold">EOI OPEN</span>
          </div>
          <div className="text-sm">KUKATPALLY, HYDERABAD</div>
        </div>

        {/* CTA Button */}
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded text-sm transition-colors">
          REGISTER EOI
        </button>
      </div>
    </header>
  )
}

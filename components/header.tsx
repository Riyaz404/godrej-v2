'use client'

import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }
      typeof window !== 'undefined' && window.addEventListener('scroll', handleScroll)
    }
  }

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:block bg-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:eoi@godrej.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} />
              <span>eoi@godrej.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Kukatpally, Hyderabad</span>
            </div>
          </div>
          <div className="text-xs text-gray-400">
            Pre-Launch EOI | Limited Slots Available
          </div>
        </div>
      </div>

      {/* Main Header/Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Image
              src="/godrej-logo.png"
              alt="Godrej Kukatpally"
              width={140}
              height={50}
              className="h-12 w-auto"
              priority
            />
            <div className="hidden sm:block border-l border-gray-300 pl-3">
              <p className="text-xs font-bold text-primary">KUKATPALLY</p>
              <p className="text-xs text-gray-600">Luxury Residences</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#overview" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Project
            </a>
            <a href="#why-eoi" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Why EOI
            </a>
            <a href="#design" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Design
            </a>
            <a href="#location" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Location
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block px-6 py-2 bg-primary text-white rounded-full font-semibold text-sm hover:bg-red-700 transition-colors">
              Register EOI
            </button>
            <button className="sm:hidden px-4 py-2 bg-primary text-white rounded-full font-semibold text-sm hover:bg-red-700 transition-colors">
              EOI
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

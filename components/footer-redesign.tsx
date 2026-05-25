'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

export default function FooterRedesign() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <div>
                <div className="text-white font-bold">godrej</div>
                <div className="text-xs uppercase tracking-widest text-gray-400">Properties</div>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Creating legacy living spaces in India&apos;s most anticipated addresses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-600 transition">Project Overview</a></li>
              <li><a href="#" className="hover:text-red-600 transition">Design Concept</a></li>
              <li><a href="#" className="hover:text-red-600 transition">Location Map</a></li>
              <li><a href="#" className="hover:text-red-600 transition">Register EOI</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-600 transition">Brochure</a></li>
              <li><a href="#" className="hover:text-red-600 transition">Payment Plans</a></li>
              <li><a href="#" className="hover:text-red-600 transition">Floor Plans</a></li>
              <li><a href="#" className="hover:text-red-600 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                <a href="tel:+919063877877" className="hover:text-red-600 transition">+91 90638 77877</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                <a href="mailto:sunshinerealestate23@gmail.com" className="hover:text-red-600 transition">sunshinerealestate23@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>Kukatpally, Hyderabad</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Social Links */}
          <div className="flex justify-between items-center flex-col md:flex-row gap-4">
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:text-red-600 transition">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-red-600 transition">Terms & Conditions</a>
              <a href="#" className="text-sm hover:text-red-600 transition">Disclaimer</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition">
                f
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition">
                in
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition">
                tw
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition">
                ig
              </a>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-gray-500 text-xs mt-8">
            © 2026 Godrej Properties. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

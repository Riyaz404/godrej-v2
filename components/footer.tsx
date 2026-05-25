'use client'

import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Godrej Kukatpally</h3>
              <p className="text-white/60 leading-relaxed">
                Luxury living redefined. Premium residences inspired by London&apos;s architectural heritage.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">About Project</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Amenities</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Floor Plans</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Payment Plans</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Gallery</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="flex-shrink-0 text-primary mt-1" />
                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <a href="tel:+919876543210" className="text-white hover:text-primary transition-colors font-semibold">
                      +91 90638 77877
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="flex-shrink-0 text-primary mt-1" />
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <a href="mailto:eoi@godrej.com" className="text-white hover:text-primary transition-colors font-semibold">
                      eoi@godrej.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="flex-shrink-0 text-primary mt-1" />
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white font-semibold">Kukatpally, Hyderabad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold mb-6 text-white">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>© 2024 Godrej Kukatpally. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Notice */}
      <div className="bg-black/50 px-4 py-6 text-center text-white/40 text-xs border-t border-white/10">
        <p>
          This website is for information purposes only. All materials, information and content are indicative only. 
          Godrej and Boyce Construction Company Limited reserves the right to modify designs, specifications and terms without prior notice.
        </p>
      </div>
    </footer>
  )
}

'use client'

import { Download, Home, Users, Leaf, Zap } from 'lucide-react'

export function PropertyDetails() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Luxury Redefined
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium amenities and thoughtful design in every residence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                <Home className="w-6 h-6 text-red-700" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-black mb-2">
                  Spacious Residences
                </h3>
                <p className="text-gray-600">
                  2, 3 & 4 BHK apartments with premium finishes and modern layouts
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-red-700" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-black mb-2">
                  World-Class Amenities
                </h3>
                <p className="text-gray-600">
                  Infinity pool, smart gyms, co-working spaces, and luxury clubs
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-red-700" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-black mb-2">
                  Sustainable Living
                </h3>
                <p className="text-gray-600">
                  Green spaces, solar panels, and eco-friendly construction practices
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                <Zap className="w-6 h-6 text-red-700" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-black mb-2">
                  Smart Features
                </h3>
                <p className="text-gray-600">
                  IoT-enabled homes with smart lighting, security, and climate control
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <Download className="w-16 h-16 text-red-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">
                Download Brochure
              </h3>
              <p className="text-gray-600 mb-6">
                Get detailed information about floor plans, specifications, and amenities
              </p>
            </div>
            <button className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded-lg transition-colors">
              Download PDF Brochure
            </button>
            <p className="text-sm text-gray-500 mt-4">
              High-resolution images and floor plans included
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

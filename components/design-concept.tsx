'use client'

import Image from 'next/image'
import { Sparkles } from 'lucide-react'

export default function DesignConcept() {
  const features = [
    {
      title: 'Red Brick Architecture',
      description: 'Iconic London-inspired red brick exteriors with premium finishing',
      details: ['Authentic brick pattern', 'Premium color finishing', 'Weather-resistant coating'],
    },
    {
      title: 'Modern Interiors',
      description: 'Contemporary design with luxury finishes and smart home integration',
      details: ['Smart home automation', 'Premium fixtures', 'Italian marble flooring'],
    },
    {
      title: 'Sustainable Design',
      description: 'Eco-friendly construction with water harvesting and solar panels',
      details: ['Rainwater harvesting', 'Solar power system', 'Green landscaping'],
    },
    {
      title: 'Premium Amenities',
      description: 'World-class facilities including spa, gym, and entertainment zones',
      details: ['Olympic pool', 'State-of-the-art gym', 'Spa & wellness center'],
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <Sparkles className="text-primary" size={24} />
            <span className="text-primary font-semibold uppercase tracking-wider">Design Highlights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center">
            London Meets Luxury at Kukatpally
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto text-center">
            Every detail is crafted to perfection, creating a timeless masterpiece
          </p>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Design Story */}
          <div className="space-y-8">
            {features.slice(0, 2).map((feature, idx) => (
              <div
                key={idx}
                className="bg-accent rounded-xl p-8 border border-white hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-muted mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-black font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right - Visual Showcase */}
          <div className="rounded-xl overflow-hidden border border-accent shadow-lg">
            <Image
              src="/design-concept.jpg"
              alt="Godrej Kukatpally Interior Design"
              width={600}
              height={500}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.slice(2).map((feature, idx) => (
            <div
              key={idx}
              className="bg-accent rounded-xl p-8 border border-white hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-muted mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-black font-medium">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Design Philosophy */}
        <div className="mt-20 bg-white border-2 border-primary rounded-xl p-12 text-center space-y-6">
          <h3 className="text-3xl font-bold text-black">Our Design Philosophy</h3>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            We believe luxury isn&apos;t just about aesthetics—it&apos;s about creating spaces where families thrive. 
            Every corner of Godrej Kukatpally is designed with meticulous attention to detail, combining 
            London&apos;s architectural elegance with modern Indian comfort and convenience.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">25+</p>
              <p className="text-muted">Amenities</p>
            </div>
            <div className="w-px bg-accent"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">450+</p>
              <p className="text-muted">Homes</p>
            </div>
            <div className="w-px bg-accent"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-muted">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

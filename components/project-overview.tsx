'use client'

import { Building2, Users, MapPin, Home } from 'lucide-react'

export default function ProjectOverview() {
  const highlights = [
    {
      icon: Home,
      title: '450+ Residences',
      description: 'Thoughtfully designed homes for modern living',
    },
    {
      icon: Building2,
      title: '25+ Amenities',
      description: 'World-class facilities for every lifestyle need',
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Connected to all major business districts',
    },
    {
      icon: Users,
      title: 'Gated Community',
      description: 'Safe and secure environment for families',
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black">Project Highlights</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Godrej Kukatpally offers a unique blend of luxury, convenience, and lifestyle excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-accent rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-white/50"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Property Types */}
        <div className="mt-20 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold text-black">Available Property Types</h3>
            <p className="text-muted">Choose your perfect home</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: '2 BHK',
                area: '850 - 950 sq.ft',
                features: ['Living Room', 'Kitchen', '2 Bedrooms', 'Bathroom', 'Balcony'],
                price: 'Premium Pricing',
              },
              {
                type: '3 BHK',
                area: '1250 - 1450 sq.ft',
                features: ['Living Room', 'Kitchen', '3 Bedrooms', '2 Bathrooms', 'Balcony & Terrace'],
                price: 'Premium Pricing',
                popular: true,
              },
              {
                type: '4 BHK',
                area: '1800 - 2100 sq.ft',
                features: ['Living Room', 'Kitchen', '4 Bedrooms', '3 Bathrooms', 'Large Balcony'],
                price: 'Premium Pricing',
              },
            ].map((property, idx) => (
              <div
                key={idx}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  property.popular
                    ? 'border-2 border-primary bg-primary/5 shadow-xl scale-105'
                    : 'border border-accent bg-white'
                }`}
              >
                {property.popular && (
                  <div className="bg-primary text-white text-center py-2 font-semibold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-black mb-2">{property.type}</h4>
                  <p className="text-primary font-semibold mb-6">{property.area}</p>

                  <div className="space-y-3 mb-8">
                    {property.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-primary">✓</span>
                        <span className="text-muted">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-center text-muted font-semibold mb-4">{property.price}</p>
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                      property.popular
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                    }`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

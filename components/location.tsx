'use client'

import Image from 'next/image'
import { MapPin, Clock, Car } from 'lucide-react'

export default function Location() {
  const connectivity = [
    {
      icon: Car,
      title: 'Airport',
      distance: '30 km',
      time: '45 mins',
    },
    {
      icon: MapPin,
      title: 'HITEC City',
      distance: '7.5 km',
      time: '20 mins',
    },
    {
      icon: MapPin,
      title: 'Financial District',
      distance: '12 km',
      time: '25 mins',
    },
    {
      icon: MapPin,
      title: 'Tech Park',
      distance: '4 km',
      time: '15 mins',
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Strategic Location at Kukatpally
          </h2>
         <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Well-connected to all major business districts and lifestyle destinations
          </p>
        </div>

        {/* Map with Location Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-12 border border-accent h-96">
          <Image
            src="/image.png"
            alt="Kukatpally Location Map"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Connectivity Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {connectivity.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-accent rounded-xl p-6 text-center border border-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h4 className="font-bold text-black mb-2">{item.title}</h4>
                <p className="text-primary font-semibold text-sm mb-2">{item.distance}</p>
                <div className="flex items-center justify-center gap-1 text-muted text-sm">
                  <Clock size={14} />
                  <span>{item.time}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Why This Location */}
        <div className="bg-accent rounded-xl p-12 border border-white">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">Why Kukatpally is Prime Location</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'IT Hub Proximity',
                description: 'Close to HITEC City, Financial District, and major tech parks. Perfect for IT professionals.',
              },
              {
                title: 'Educational Excellence',
                description: 'Near renowned schools and universities. Ideal for families with growing children.',
              },
              {
                title: 'Retail & Entertainment',
                description: 'Access to premium malls, restaurants, and entertainment venues nearby.',
              },
              {
                title: 'Infrastructure',
                description: 'Well-developed roads, metro connectivity, and upcoming development projects.',
              },
              {
                title: 'Healthcare',
                description: 'Proximity to hospitals, clinics, and medical centers for family wellness.',
              },
              {
                title: 'Community',
                description: 'Vibrant neighborhood with growing residential communities and commercial zones.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">{item.title}</h4>
                 <p className="text-gray-600 text-sm leading-relaxed">
  {item.description}
</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

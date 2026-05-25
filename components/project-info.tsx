'use client'

import { MapPin, Home, Clock, Building2 } from 'lucide-react'

export default function ProjectInfo() {
  const info = [
    {
      icon: MapPin,
      label: 'LOCATION',
      value: 'Kukatpally, Hyderabad',
    },
    {
      icon: Home,
      label: 'TYPE',
      value: '2, 3 & 4 BHK',
    },
    {
      icon: Clock,
      label: 'STATUS',
      value: 'Pre-Launch',
    },
    {
      icon: Building2,
      label: 'DEVELOPER',
      value: 'Godrej Properties',
    },
  ]

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-red-600 text-sm font-bold uppercase tracking-widest">PROJECT OVERVIEW</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Everything You Need to Know</h2>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {info.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Icon className="text-red-600" size={32} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">
                    {item.label}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900">{item.value}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

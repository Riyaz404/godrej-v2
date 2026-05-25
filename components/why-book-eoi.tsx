'use client'

import { CheckCircle, Gift, TrendingUp, Lock } from 'lucide-react'

export default function WhyBookEOI() {
  const benefits = [
    {
      icon: Lock,
      title: 'Priority Payment Plans',
      description: 'Flexible payment schedules with minimal down payment. Secure your booking before official launch.',
    },
    {
      icon: TrendingUp,
      title: 'Pre-Launch Pricing',
      description: 'Lock in exclusive pre-launch rates. Prices increase after official launch. Book now and save big.',
    },
    {
      icon: Gift,
      title: 'Exclusive Benefits',
      description: 'Free registration, choice of units, and personalized consultation with our expert team.',
    },
    {
      icon: CheckCircle,
      title: 'Guaranteed Possession',
      description: 'Timely handover assured. Premium construction quality with zero compromise on delivery.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black">Why Book Your EOI Today?</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Secure your dream home with unmatched advantages at Godrej Kukatpally
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-white hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                      <Icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                    <p className="text-muted leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* EOI Timeline */}
        <div className="bg-white rounded-xl p-12 border border-white">
          <h3 className="text-2xl font-bold text-black mb-12 text-center">EOI to Possession Timeline</h3>
          
          <div className="space-y-8">
            {[
              {
                phase: 'Phase 1',
                title: 'Register & Pay EOI',
                duration: 'Month 1',
                details: 'Complete EOI registration and pay minimal amount to secure your property.',
              },
              {
                phase: 'Phase 2',
                title: 'Official Launch',
                duration: 'Month 2-3',
                details: 'Project officially launches with comprehensive payment plans and options.',
              },
              {
                phase: 'Phase 3',
                title: 'Construction & Progress',
                duration: 'Month 4-30',
                details: 'Regular updates and site visits as construction progresses systematically.',
              },
              {
                phase: 'Phase 4',
                title: 'Ready for Possession',
                duration: 'Month 30+',
                details: 'Premium finishing and final inspection before handover to your new home.',
              },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h4 className="text-xl font-bold text-black">{step.title}</h4>
                    <span className="text-primary font-semibold">{step.duration}</span>
                  </div>
                  <p className="text-muted">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

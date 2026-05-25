'use client'

import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      title: 'IT Professional',
      quote: 'The location and amenities are outstanding. I&apos;m excited to move into Godrej Kukatpally.',
      rating: 5,
    },
    {
      name: 'Priya Singh',
      title: 'Homemaker & Mother',
      quote: 'Perfect home for my family. The security and community feel is exactly what we wanted.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      title: 'Business Owner',
      quote: 'Great investment opportunity. The location and project quality are exceptional.',
      rating: 5,
    },
    {
      name: 'Neha Sharma',
      title: 'Corporate Executive',
      quote: 'Living in luxury without compromising on convenience. Highly recommended!',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            What Our Community Says
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Join hundreds of happy families who trust Godrej Kukatpally
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 border border-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted leading-relaxed mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="font-bold text-black">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-primary text-white rounded-xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">2000+</p>
              <p className="text-primary/80">Happy Families</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">450+</p>
              <p className="text-primary/80">Residences</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">25+</p>
              <p className="text-primary/80">Amenities</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">4.9/5</p>
              <p className="text-primary/80">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

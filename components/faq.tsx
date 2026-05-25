'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What does EOI mean and why should I book?',
      answer: 'EOI (Expression of Interest) is the first step to secure a property before official launch. EOI registrants get exclusive pre-launch pricing, flexible payment plans, and choice of premium units. You can lock in rates before the official launch and save significantly.',
    },
    {
      question: 'What is the minimum down payment for EOI?',
      answer: 'The minimum down payment for EOI is just 10% of the property value. This minimal amount secures your unit while you enjoy flexible payment options for the remaining amount over the construction period.',
    },
    {
      question: 'When is the expected possession date?',
      answer: 'The expected possession date is 30 months from the official launch. We maintain strict timelines and have a proven track record of timely deliveries. Regular updates and site visits will keep you informed throughout the construction.',
    },
    {
      question: 'Are there payment plan options available?',
      answer: 'Yes, multiple flexible payment plans are available including construction-linked payment (30-40 months), post-dated cheques, and customized options. We work with you to create a plan that suits your financial situation.',
    },
    {
      question: 'What amenities are included?',
      answer: 'Godrej Kukatpally features 25+ amenities including Olympic-size pool, state-of-the-art gymnasium, spa, yoga studio, kids play area, community gardens, co-working spaces, clubhouse, and more.',
    },
    {
      question: 'Can I book multiple units?',
      answer: 'Yes, EOI registrants can book multiple units. Whether you&apos;re looking for investment or family expansion, our team can help arrange multiple units with special bulk pricing benefits.',
    },
    {
      question: 'Is there a resale option after possession?',
      answer: 'Yes, all properties are freely transferable after a minimal lock-in period post-possession. Godrej Kukatpally properties have excellent appreciation potential in this prime location.',
    },
    {
      question: 'How do I register for EOI?',
      answer: 'Simply fill out the registration form on this page with your details and preferred property type. Our team will contact you within 24 hours to discuss options, payment plans, and complete the booking process.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Everything you need to know about Godrej Kukatpally and EOI process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-accent rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left font-semibold text-black bg-accent hover:bg-primary/5 transition-colors duration-200 flex items-center justify-between"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 py-5 bg-white border-t border-accent">
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent rounded-xl p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-black">Still have questions?</h3>
          <p className="text-muted">Our expert team is ready to assist you with detailed information.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Call Us Now
            </a>
            <a
              href="mailto:eoi@godrej.com"
              className="inline-block border-2 border-primary text-primary hover:bg-primary/5 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'

export default function UrgencyBar() {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 34,
    seconds: 12,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds -= 1
        } else if (minutes > 0) {
          minutes -= 1
          seconds = 59
        } else if (hours > 0) {
          hours -= 1
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days -= 1
          hours = 23
          minutes = 59
          seconds = 59
        }
        
        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-primary text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Clock size={24} className="flex-shrink-0" />
            <div>
              <p className="font-bold text-lg">Limited Time Offer</p>
              <p className="text-primary/80 text-sm">Early birds get exclusive pre-launch pricing</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-white/20 rounded-lg px-4 py-3 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-xs uppercase tracking-wider">Days</div>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-3 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-xs uppercase tracking-wider">Hours</div>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-3 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-xs uppercase tracking-wider">Minutes</div>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-3 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-xs uppercase tracking-wider">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

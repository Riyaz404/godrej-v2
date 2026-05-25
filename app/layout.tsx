import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Godrej Kukatpally - Luxury Residences | Pre-Launch EOI',
  description: 'Discover London-inspired luxury residences at Godrej Kukatpally. Premium 2, 3 & 4 BHK apartments with world-class amenities. Register for EOI today.',
  generator: 'v0.app',
  keywords: 'Godrej Kukatpally, luxury residences, apartments, real estate, pre-launch, EOI',
  openGraph: {
    title: 'Godrej Kukatpally - Luxury Residences',
    description: 'Register for EOI and secure your luxury home at Godrej Kukatpally',
    images: [{ url: '/og-image.jpg' }],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#C41E3A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

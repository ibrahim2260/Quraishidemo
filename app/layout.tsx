import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/lib/siteConfig'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s | Dr. Karen Quraishi, DDS — Sterling Heights, MI`,
    default: `Family & Cosmetic Dentistry | Dr. Karen Quraishi, DDS — Sterling Heights, MI`,
  },
  description:
    'Premium dental care in Sterling Heights, MI. Dr. Karen Quraishi offers cosmetic dentistry, dental implants, Invisalign, veneers, and comprehensive family dental services. Serving ZIP codes 48310, 48312, 48313, 48314, 48317.',
  keywords: [
    'dentist sterling heights mi',
    'cosmetic dentist sterling heights',
    'dental implants sterling heights',
    'invisalign sterling heights michigan',
    'family dentist metro detroit',
    'dr karen quraishi',
    'teeth whitening sterling heights',
    'veneers sterling heights',
    'emergency dentist sterling heights',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: 'Dr. Karen Quraishi, DDS',
    title: 'Family & Cosmetic Dentistry — Dr. Karen Quraishi, DDS',
    description:
      'Boutique dental care in Sterling Heights, MI. Cosmetic dentistry, implants, Invisalign, veneers & more. Book your visit today.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=630&fit=crop&crop=faces&q=90',
        width: 1200,
        height: 630,
        alt: 'Family & Cosmetic Dentistry — Dr. Karen Quraishi, DDS — Sterling Heights, MI',
        // TODO: replace with a real branded OG image (practice logo + hero photo) before launch
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family & Cosmetic Dentistry — Dr. Karen Quraishi, DDS',
    description:
      'Boutique dental care in Sterling Heights, MI. Cosmetic dentistry, implants, Invisalign & more.',
    images: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=630&fit=crop&crop=faces&q=90',
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: siteConfig.name,
    description:
      'Premium dental care in Sterling Heights, Michigan offering cosmetic, restorative, and family dentistry.',
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Wednesday'], opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Thursday'], opens: '08:30', closes: '16:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '08:30', closes: '13:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
    ],
    priceRange: '$$',
    medicalSpecialty: [
      'Cosmetic Dentistry',
      'General Dentistry',
      'Restorative Dentistry',
      'Orthodontics',
      'Implant Dentistry',
    ],
    areaServed: siteConfig.zipCodes.map((zip) => ({
      '@type': 'PostalAddress',
      postalCode: zip,
      addressRegion: 'MI',
      addressCountry: 'US',
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '180',
      bestRating: '5',
    },
  }

  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] btn-primary"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

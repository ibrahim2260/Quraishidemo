import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import ServicesOverview from '@/components/home/ServicesOverview'
import MeetDr from '@/components/home/MeetDr'
import Gallery from '@/components/home/Gallery'
import Testimonials from '@/components/home/Testimonials'
import Technology from '@/components/home/Technology'
import LocationSection from '@/components/home/LocationSection'
import CTABand from '@/components/home/CTABand'

export const metadata: Metadata = {
  title: 'Family & Cosmetic Dentistry | Dr. Karen Quraishi, DDS — Sterling Heights, MI',
  description:
    'Premium dental care in Sterling Heights, MI. Dr. Karen Quraishi offers cosmetic dentistry, dental implants, Invisalign, veneers, and comprehensive family dentistry. Serving Metro Detroit — call (586) 800-8770.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <MeetDr />
      <Gallery />
      <Testimonials />
      <Technology />
      <LocationSection />
      <CTABand />
    </>
  )
}

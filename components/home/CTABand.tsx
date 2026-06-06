'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/lib/siteConfig'

export default function CTABand() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 bg-teal-400 relative overflow-hidden grain"
      aria-label="Book an appointment"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 0% 50%, rgba(43,95,95,0.6) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 100% 50%, rgba(184,148,74,0.12) 0%, transparent 50%)',
        }}
      />

      <div className="container-site relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label-light mb-5">Ready to Begin?</p>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-cream leading-tight text-balance mb-6">
              Your Best Smile Is
              <br />
              <em className="not-italic text-brass-200">One Appointment Away.</em>
            </h2>
            <p className="text-cream/70 text-base leading-relaxed max-w-lg">
              Whether you need a cleaning, a complete transformation, or simply want to meet the team — we would love to see you. No pressure. No judgment. Just great dentistry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start lg:items-end gap-4 shrink-0"
          >
            <Link href="/contact" className="btn-primary">
              Book an Appointment
              <ArrowIcon />
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="btn-outline-light"
            >
              <PhoneIcon />
              {siteConfig.phone}
            </a>
            <p className="text-cream/40 text-xs text-center lg:text-right mt-1">
              Or walk in — we welcome same-day visits.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 2.5C2 2.22386 2.22386 2 2.5 2H5.022C5.26498 2 5.47654 2.16147 5.537 2.39583L6.48198 6.07109C6.53486 6.27636 6.45636 6.49251 6.28516 6.61719L4.83203 7.625C5.77832 9.72363 7.27637 11.2217 9.375 12.168L10.3828 10.7148C10.5075 10.5436 10.7236 10.4651 10.9289 10.518L14.6042 11.463C14.8385 11.5235 15 11.735 15 11.978V14.5C15 14.7761 14.7761 15 14.5 15H12C6.47715 15 2 10.5228 2 5V2.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

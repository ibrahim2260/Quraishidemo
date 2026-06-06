'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const features = [
  {
    icon: XrayIcon,
    name: 'Digital X-Rays',
    description: 'Up to 90% less radiation than conventional film. Instant, high-resolution imaging means faster diagnosis and less time in the chair.',
  },
  {
    icon: SedationIcon,
    name: 'Nitrous Oxide Sedation',
    description: 'Safe, gentle, and fast-acting — nitrous oxide takes the edge off without putting you fully under. You drive yourself home.',
  },
  {
    icon: CameraIcon,
    name: 'Intraoral Cameras',
    description: 'You see exactly what we see. Our intraoral cameras display real-time images of your teeth so you can understand your treatment.',
  },
  {
    icon: SmileIcon,
    name: 'Digital Smile Design',
    description: 'Before any cosmetic treatment begins, we show you a digital preview of your results. No surprises — only excitement.',
  },
  {
    icon: ClockIcon,
    name: 'Same-Day Emergency Care',
    description: 'We hold appointment slots specifically for dental emergencies. Call in the morning — see us the same day.',
  },
  {
    icon: HeartIcon,
    name: 'Comfort-First Approach',
    description: 'Warm blankets, noise-reducing headphones, stress balls — small touches that make a real difference for anxious patients.',
  },
]

export default function Technology() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' })

  return (
    <section
      className="py-20 lg:py-32 bg-cream-200"
      aria-labelledby="technology-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">

          {/* Left: heading + copy */}
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 24 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <p className="section-label mb-4">Technology & Comfort</p>
            <span className="brass-rule" />
            <h2
              id="technology-heading"
              className="font-display text-4xl lg:text-5xl font-semibold text-charcoal leading-tight mb-6"
            >
              Modern Care,
              <br />
              <em className="not-italic text-teal-400">Genuinely Gentle.</em>
            </h2>
            <p className="text-base text-charcoal-400 leading-relaxed mb-8">
              We invest in the tools and techniques that make your visit more comfortable, more precise, and more efficient — because you deserve both excellent results and a pleasant experience.
            </p>
            <p className="text-sm text-charcoal-400 leading-relaxed mb-10">
              Dental anxiety is real and valid. Whether you need nitrous oxide, extra time, or just a dentist who listens without judgment — we are here for all of it.
            </p>
            <Link href="/new-patients" className="btn-primary">
              What to Expect
              <ArrowIcon />
            </Link>
          </motion.div>

          {/* Right: feature grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, i) => {
              const ref = useRef(null)
              const inView = useInView(ref, { once: true, margin: '-40px' })
              return (
                <motion.div
                  key={feature.name}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-cream border border-cream-200 rounded-xl p-6 hover:border-sage-200 hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-sage-100 flex items-center justify-center text-sage-500 mb-4 group-hover:bg-sage-100 group-hover:scale-105 transition-transform duration-300">
                    <feature.icon />
                  </div>
                  <h3 className="text-sm font-body font-semibold text-charcoal mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-xs text-charcoal-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
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

function XrayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 9v-3M12 18v-3M9 12H6M18 12h-3" />
    </svg>
  )
}

function SedationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M12 8v4l2.5 2.5" />
      <path d="M17 3l1 4-4-1" />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  )
}

function SmileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 13s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01M15 9h.01" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

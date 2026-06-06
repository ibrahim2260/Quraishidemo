'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

type GalleryCase = {
  id: string
  treatment: string
  beforeUrl: string
  afterUrl: string
  description: string
}

const cases: GalleryCase[] = [
  {
    id: '1',
    treatment: 'Porcelain Veneers — 8 teeth',
    beforeUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=700&fit=crop&crop=faces&q=85',
    afterUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=700&h=700&fit=crop&crop=faces&q=85',
    // TODO: replace both with real before/after photography from the practice
    description: 'Complete cosmetic transformation with custom-shaded porcelain veneers.',
  },
  {
    id: '2',
    treatment: 'Invisalign® — 14 months',
    beforeUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=700&h=700&fit=crop&crop=faces&q=85',
    afterUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&h=700&fit=crop&crop=faces&q=85',
    // TODO: replace with real Invisalign before/after photos
    description: 'Crowding and crossbite corrected with clear aligner therapy.',
  },
  {
    id: '3',
    treatment: 'Smile Makeover — Crowns + Whitening',
    beforeUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=700&h=700&fit=crop&crop=faces&q=85',
    afterUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&h=700&fit=crop&crop=faces&q=85',
    // TODO: replace with real smile makeover case
    description: 'Full-arch ceramic crowns and professional whitening for a total transformation.',
  },
  {
    id: '4',
    treatment: 'Dental Implant + Crown',
    beforeUrl: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=700&h=700&fit=crop&crop=faces&q=85',
    afterUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&h=700&fit=crop&crop=faces&q=85',
    // TODO: replace with real implant case photography
    description: 'Single implant replacing a missing upper lateral — indistinguishable from natural.',
  },
]

function CaseCard({ c }: { c: GalleryCase }) {
  const [showAfter, setShowAfter] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      {/* Toggle */}
      <div className="flex items-center mb-3 gap-1 bg-cream-200 rounded-full p-0.5 w-fit">
        <button
          onClick={() => setShowAfter(false)}
          className={`px-4 py-1.5 rounded-full text-xs font-body font-medium transition-all duration-200 ${
            !showAfter
              ? 'bg-charcoal text-cream shadow-sm'
              : 'text-charcoal-400 hover:text-charcoal'
          }`}
          aria-pressed={!showAfter}
        >
          Before
        </button>
        <button
          onClick={() => setShowAfter(true)}
          className={`px-4 py-1.5 rounded-full text-xs font-body font-medium transition-all duration-200 ${
            showAfter
              ? 'bg-charcoal text-cream shadow-sm'
              : 'text-charcoal-400 hover:text-charcoal'
          }`}
          aria-pressed={showAfter}
        >
          After
        </button>
      </div>

      {/* Image */}
      <div className="img-frame rounded-xl overflow-hidden aspect-square relative">
        <motion.div
          key={showAfter ? 'after' : 'before'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <Image
            src={showAfter ? c.afterUrl : c.beforeUrl}
            alt={`${showAfter ? 'After' : 'Before'} — ${c.treatment}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </motion.div>

        {/* Label */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4 pt-8">
          <p className="text-xs font-body font-medium text-cream/60 mb-0.5">
            {showAfter ? 'After Treatment' : 'Before Treatment'}
          </p>
          <p className="text-sm font-body font-semibold text-cream leading-snug">
            {c.treatment}
          </p>
        </div>
      </div>

      <p className="text-xs text-charcoal-400 mt-3 leading-relaxed">{c.description}</p>
    </motion.div>
  )
}

export default function Gallery() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' })

  return (
    <section
      className="py-20 lg:py-32 bg-cream"
      aria-labelledby="gallery-heading"
    >
      <div className="container-site">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="section-label mb-4">Smile Gallery</p>
            <h2
              id="gallery-heading"
              className="font-display text-4xl lg:text-5xl font-semibold text-charcoal"
            >
              Real Results.
              <br />
              <em className="not-italic text-sage-400">Real Patients.</em>
            </h2>
          </div>
          <p className="text-sm text-charcoal-400 max-w-xs leading-relaxed">
            Every case shown is from our practice. Toggle between before and after to see the transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c) => (
            <CaseCard key={c.id} c={c} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-charcoal-400 mb-6">
            Ready to write your own before-and-after story?
          </p>
          <a href="/contact" className="btn-primary">
            Book a Cosmetic Consultation
            <ArrowIcon />
          </a>
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

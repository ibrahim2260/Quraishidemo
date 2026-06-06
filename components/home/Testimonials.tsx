'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { testimonials } from '@/lib/testimonials'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 16 16"
          fill={i < rating ? '#B8944A' : 'none'}
          stroke={i < rating ? '#B8944A' : 'rgba(255,255,255,0.2)'}
          strokeWidth="1"
          aria-hidden="true"
        >
          <path d="M8 1.5l1.79 3.63 4 .58-2.9 2.82.68 3.97L8 10.26l-3.57 1.24.68-3.97L2.21 4.71l4-.58L8 1.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' })

  return (
    <section
      className="py-20 lg:py-32 bg-charcoal relative overflow-hidden grain"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(43,95,95,0.35) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,158,135,0.15) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        {/* Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14"
        >
          <div>
            <p className="section-label-light mb-4">Patient Stories</p>
            <h2
              id="testimonials-heading"
              className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-cream leading-tight"
            >
              What Our Patients
              <br />
              <em className="not-italic text-brass-200">Are Saying.</em>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-cream/5 border border-cream/10 rounded-xl px-5 py-4">
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#B8944A" aria-hidden="true">
                      <path d="M8 1.5l1.79 3.63 4 .58-2.9 2.82.68 3.97L8 10.26l-3.57 1.24.68-3.97L2.21 4.71l4-.58L8 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="text-cream text-sm font-semibold">4.9 / 5 Stars</p>
                <p className="text-cream/40 text-xs">Based on 180+ Google Reviews</p>
              </div>
            </div>
            <a
              href={siteConfig.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-body font-medium tracking-widest uppercase text-brass-200 hover:text-brass-300 transition-colors flex items-center gap-1.5"
            >
              Read all reviews
              <ArrowIcon />
            </a>
          </div>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => {
            const ref = useRef(null)
            const inView = useInView(ref, { once: true, margin: '-40px' })
            return (
              <motion.blockquote
                key={t.id}
                ref={ref}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative bg-cream/5 border border-cream/10 rounded-xl p-7 ${
                  i === 0 ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Large quote mark */}
                <span
                  className="absolute top-5 right-6 font-display text-7xl font-bold text-cream/5 leading-none select-none pointer-events-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <div className="mb-4">
                  <StarRow rating={t.rating} />
                </div>

                <p className="text-cream/80 text-sm leading-relaxed mb-6 relative z-10">
                  &ldquo;{t.text}&rdquo;
                </p>

                <footer className="flex items-center justify-between">
                  <div>
                    <cite className="not-italic text-cream text-sm font-semibold font-body">
                      {t.name}
                    </cite>
                    <p className="text-cream/40 text-xs mt-0.5">{t.location}</p>
                  </div>
                  <span className="text-[10px] font-body font-medium tracking-widest uppercase text-sage-300 bg-sage-900/40 px-2.5 py-1 rounded-sm">
                    {t.service}
                  </span>
                </footer>
              </motion.blockquote>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-cream/50 text-sm mb-6">
            Join thousands of patients who trust us with their smiles.
          </p>
          <Link href="/contact" className="btn-primary">
            Become a Patient
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

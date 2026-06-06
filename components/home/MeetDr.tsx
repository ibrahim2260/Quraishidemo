'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { drQuraishi } from '@/lib/team'

export default function MeetDr() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-cream-200 overflow-hidden"
      aria-labelledby="dr-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Background block */}
            <div
              className="absolute -top-6 -left-6 w-full h-full rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(123,158,135,0.15), rgba(43,95,95,0.1))' }}
              aria-hidden="true"
            />
            <div className="img-frame relative z-10 rounded-2xl overflow-hidden aspect-[3/4] max-h-[580px] lg:max-h-none">
              <Image
                src={drQuraishi.imageUrl}
                // TODO: replace with Dr. Quraishi's professional headshot — warm, approachable lighting
                alt="Dr. Karen Quraishi, DDS — Lead Dentist at Family & Cosmetic Dentistry in Sterling Heights, MI"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(26,29,27,0.15))' }}
              />
            </div>

            {/* Credential badge */}
            <div className="absolute bottom-8 right-4 lg:-right-6 z-20 bg-teal bg-teal-400 text-cream rounded-xl p-5 shadow-xl max-w-[220px]">
              <p className="text-[10px] font-body font-semibold tracking-widest uppercase text-cream/60 mb-2">
                Credentials
              </p>
              <ul className="space-y-1.5">
                {drQuraishi.credentials.slice(0, 3).map((c) => (
                  <li key={c} className="flex items-center gap-2 text-xs text-cream/90">
                    <span className="w-1 h-1 rounded-full bg-brass shrink-0" />
                    {c}
                  </li>
                ))}
                <li className="text-[11px] text-cream/50 pl-3">
                  +{drQuraishi.credentials.length - 3} more
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label mb-4">Meet Your Dentist</p>
            <span className="brass-rule" />
            <h2
              id="dr-heading"
              className="font-display text-4xl lg:text-5xl font-semibold text-charcoal leading-tight mb-2"
            >
              {drQuraishi.name}
            </h2>
            <p className="text-sm font-body font-medium text-charcoal-400 tracking-wide mb-8">
              {drQuraishi.title}
            </p>

            <div className="space-y-5 mb-10">
              {drQuraishi.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${
                    i === drQuraishi.bio.length - 1
                      ? 'text-base font-display text-lg italic text-teal font-medium'
                      : 'text-base text-charcoal-400'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                Full Story
                <ArrowIcon />
              </Link>
              <Link href="/contact" className="btn-outline">
                Book with Dr. Quraishi
              </Link>
            </div>
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

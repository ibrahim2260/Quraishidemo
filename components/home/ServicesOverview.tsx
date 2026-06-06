'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { serviceCategories } from '@/lib/services'

const featuredServices = [
  {
    id: 'veneers',
    category: 'Cosmetic',
    name: 'Porcelain Veneers',
    description:
      'Custom-crafted shells that transform shape, color, and size — designed around your unique features.',
    imageUrl:
      'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=900&h=675&fit=crop&q=85',
    // TODO: replace with real practice veneer photography
    href: '/services#veneers',
    accent: 'Cosmetic Artistry',
  },
  {
    id: 'implants',
    category: 'Restorative',
    name: 'Dental Implants',
    description:
      'The permanent solution for missing teeth — fused to your jawbone for a lifetime of natural function.',
    imageUrl:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&h=675&fit=crop&q=85',
    // TODO: replace with practice-specific implant imagery
    href: '/services#implants',
    accent: 'Lifetime Results',
  },
  {
    id: 'invisalign',
    category: 'Cosmetic',
    name: 'Invisalign®',
    description:
      'Virtually invisible aligners that work discreetly around your life — removable, comfortable, precise.',
    imageUrl:
      'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=900&h=675&fit=crop&q=85',
    href: '/services#invisalign',
    accent: 'Discreet Alignment',
  },
]

function ServiceItem({ name, description, href }: { name: string; description: string; href: string }) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-4 py-5 border-b border-cream-200 hover:border-sage-200 transition-colors duration-300"
    >
      <span
        className="mt-1 w-1.5 h-1.5 rounded-full bg-sage shrink-0 group-hover:bg-brass transition-colors duration-300"
        aria-hidden="true"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-body font-semibold text-charcoal group-hover:text-teal transition-colors duration-200 mb-1">
          {name}
        </p>
        <p className="text-xs text-charcoal-400 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
      <ArrowIcon className="shrink-0 mt-1 text-charcoal-200 group-hover:text-brass transition-all duration-200 group-hover:translate-x-1" />
    </Link>
  )
}

function FeaturedCard({
  service,
  reversed = false,
  delay = 0,
}: {
  service: (typeof featuredServices)[0]
  reversed?: boolean
  delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${reversed ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      <div className="relative">
        <div className="img-frame rounded-xl overflow-hidden aspect-[4/3]">
          <Image
            src={service.imageUrl}
            alt={`${service.name} — ${service.description}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(26,29,27,0.2))' }} />
        </div>
        <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm px-3 py-1.5 rounded-sm">
          <span className="text-[10px] font-body font-semibold tracking-widest uppercase text-sage">
            {service.accent}
          </span>
        </div>
      </div>

      <div className={reversed ? 'md:pr-8' : 'md:pl-0'}>
        <p className="section-label mb-3">{service.category}</p>
        <span className="brass-rule" />
        <h3 className="font-display text-3xl lg:text-4xl font-semibold text-charcoal leading-tight mb-5">
          {service.name}
        </h3>
        <p className="text-base text-charcoal-400 leading-relaxed mb-8">
          {service.description}
        </p>
        <Link href={service.href} className="btn-ghost-brass">
          Learn about {service.name}
          <ArrowIcon className="text-brass" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function ServicesOverview() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' })

  return (
    <section
      className="py-20 lg:py-32 bg-cream"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        {/* Section header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20"
        >
          <div>
            <p className="section-label mb-4">What We Offer</p>
            <h2
              id="services-heading"
              className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-charcoal leading-tight max-w-lg"
            >
              Complete Care,
              <br />
              <em className="not-italic text-teal-400">Every Stage</em> of Life.
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-sm text-charcoal-400 leading-relaxed mb-5">
              From your first appointment to a complete smile transformation — we provide comprehensive care under one roof, with one team that knows you.
            </p>
            <Link href="/services" className="btn-ghost-brass">
              View all services <ArrowIcon className="text-brass" />
            </Link>
          </div>
        </motion.div>

        {/* Featured service — Veneers */}
        <div className="mb-20 lg:mb-28">
          <FeaturedCard service={featuredServices[0]} delay={0.1} />
        </div>

        {/* Category service lists */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-20 lg:mb-28">
          {serviceCategories.slice(0, 2).map((cat, ci) => {
            const ref = useRef(null)
            const inView = useInView(ref, { once: true, margin: '-60px' })
            return (
              <motion.div
                key={cat.id}
                ref={ref}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: ci * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="section-label mb-2">{cat.name}</p>
                <h3 className="font-display text-2xl font-semibold text-charcoal mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-charcoal-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>
                <div>
                  {cat.services.map((svc) => (
                    <ServiceItem
                      key={svc.id}
                      name={svc.name}
                      description={svc.shortDescription}
                      href={`/services#${svc.id}`}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Featured service — Implants (reversed) */}
        <div className="mb-20 lg:mb-28">
          <FeaturedCard service={featuredServices[1]} reversed delay={0.1} />
        </div>

        {/* Category service lists — restorative + specialty */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {serviceCategories.slice(2, 4).map((cat, ci) => {
            const ref = useRef(null)
            const inView = useInView(ref, { once: true, margin: '-60px' })
            return (
              <motion.div
                key={cat.id}
                ref={ref}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: ci * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="section-label mb-2">{cat.name}</p>
                <h3 className="font-display text-2xl font-semibold text-charcoal mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-charcoal-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>
                <div>
                  {cat.services.map((svc) => (
                    <ServiceItem
                      key={svc.id}
                      name={svc.name}
                      description={svc.shortDescription}
                      href={`/services#${svc.id}`}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link href="/contact" className="btn-primary">
            Schedule Your Consultation
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

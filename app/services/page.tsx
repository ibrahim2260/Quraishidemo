import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { serviceCategories } from '@/lib/services'
import { siteConfig } from '@/lib/siteConfig'
import CTABand from '@/components/home/CTABand'

export const metadata: Metadata = {
  title: 'Dental Services',
  description:
    'Comprehensive dental services in Sterling Heights, MI — cosmetic dentistry, dental implants, Invisalign, porcelain veneers, general dentistry, periodontal care, and emergency dentistry. Dr. Karen Quraishi, DDS.',
}

const categoryColors: Record<string, string> = {
  general: 'bg-sage-100 text-sage-500',
  cosmetic: 'bg-brass-100 text-brass-400',
  restorative: 'bg-teal-100 text-teal-400',
  specialty: 'bg-cream-300 text-charcoal-500',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-cream-200 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 60% 80% at 100% 50%, rgba(43,95,95,0.07) 0%, transparent 60%)',
          }}
        />
        <div className="container-site relative z-10">
          <div className="max-w-2xl">
            <p className="section-label mb-5 flex items-center gap-3">
              <span className="block w-8 h-px bg-sage-300" />
              Our Services
            </p>
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-semibold text-charcoal leading-tight mb-6">
              Complete Care
              <br />
              <em className="not-italic text-teal-400">Under One Roof.</em>
            </h1>
            <p className="text-lg text-charcoal-400 leading-relaxed mb-8 max-w-lg">
              From your first visit to a full smile transformation, Dr. Quraishi and her team provide every level of dental care — with expertise, precision, and genuine warmth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book a Consultation
                <ArrowIcon />
              </Link>
              <a href={siteConfig.phoneHref} className="btn-outline">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick jump nav */}
      <nav
        className="sticky top-16 lg:top-20 z-30 bg-cream/95 backdrop-blur-md border-b border-cream-200 shadow-sm"
        aria-label="Service categories"
      >
        <div className="container-site">
          <ul className="flex gap-1 overflow-x-auto scrollbar-hidden py-3">
            {serviceCategories.map((cat) => (
              <li key={cat.id}>
                <a
                  href={`#${cat.id}`}
                  className="whitespace-nowrap px-4 py-2 text-xs font-body font-medium tracking-widest uppercase text-charcoal-400 hover:text-charcoal hover:bg-cream-200 rounded-sm transition-all duration-200"
                >
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Service categories */}
      {serviceCategories.map((cat, catIndex) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`py-20 lg:py-28 ${catIndex % 2 === 0 ? 'bg-cream' : 'bg-cream-200'}`}
          aria-labelledby={`${cat.id}-heading`}
        >
          <div className="container-site">
            {/* Category header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
              <div>
                <span
                  className={`inline-block text-[10px] font-body font-semibold tracking-widest uppercase px-3 py-1.5 rounded-sm mb-4 ${categoryColors[cat.id]}`}
                >
                  {cat.name}
                </span>
                <h2
                  id={`${cat.id}-heading`}
                  className="font-display text-4xl lg:text-5xl font-semibold text-charcoal leading-tight"
                >
                  {cat.name}
                </h2>
              </div>
              <p className="text-sm text-charcoal-400 max-w-sm leading-relaxed">
                {cat.description}
              </p>
            </div>

            {/* Services grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.services.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="group bg-cream border border-cream-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-sage-200 transition-all duration-300"
                  aria-labelledby={`${service.id}-name`}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={service.imageUrl}
                      // TODO: replace with actual practice imagery for this service
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(26,29,27,0.3))' }} />
                    {service.featured && (
                      <div className="absolute top-3 left-3 bg-brass text-cream text-[10px] font-body font-semibold tracking-widest uppercase px-2.5 py-1 rounded-sm">
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 id={`${service.id}-name`} className="font-display text-2xl font-semibold text-charcoal mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-charcoal-400 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-charcoal-400">
                          <CheckIcon className="mt-0.5 shrink-0 text-sage" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* FAQ accordion */}
                    {service.faqs.length > 0 && (
                      <details className="group/faq border-t border-cream-200 pt-4 mb-5">
                        <summary className="cursor-pointer text-xs font-body font-medium text-charcoal-400 hover:text-charcoal list-none flex items-center justify-between gap-2">
                          Common Questions
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-open/faq:rotate-180" aria-hidden="true">
                            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </summary>
                        <div className="mt-4 space-y-4">
                          {service.faqs.map((faq) => (
                            <div key={faq.q}>
                              <p className="text-xs font-body font-semibold text-charcoal mb-1">{faq.q}</p>
                              <p className="text-xs text-charcoal-400 leading-relaxed">{faq.a}</p>
                            </div>
                          ))}
                        </div>
                      </details>
                    )}

                    <Link href="/contact" className="btn-ghost-brass text-xs">
                      Book this service
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTABand />
    </>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3 8l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

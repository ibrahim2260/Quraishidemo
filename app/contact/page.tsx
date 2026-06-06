import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import AppointmentForm from '@/components/shared/AppointmentForm'

export const metadata: Metadata = {
  title: 'Contact & Book an Appointment',
  description:
    'Book an appointment at Family & Cosmetic Dentistry in Sterling Heights, MI. Call (586) 800-8770 or fill out the form. Same-day emergency appointments available.',
}

export default function ContactPage() {
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.address.full)}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream-200 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 100% 100%, rgba(43,95,95,0.07) 0%, transparent 60%)' }}
        />
        <div className="container-site relative z-10">
          <div className="max-w-2xl">
            <p className="section-label mb-5 flex items-center gap-3">
              <span className="block w-8 h-px bg-sage-300" />
              Get in Touch
            </p>
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-semibold text-charcoal leading-tight mb-6">
              We&rsquo;d Love
              <br />
              <em className="not-italic text-teal-400">to Meet You.</em>
            </h1>
            <p className="text-lg text-charcoal-400 leading-relaxed max-w-lg">
              Book an appointment, ask a question, or just say hello. We respond to every inquiry — typically within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20 lg:py-28 bg-cream" aria-label="Contact and booking">
        <div className="container-site">
          <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-start">

            {/* Left: contact details */}
            <div className="lg:w-80 space-y-8 lg:sticky lg:top-28">
              {/* Phone */}
              <div>
                <p className="section-label mb-3">Call or Text</p>
                <a
                  href={siteConfig.phoneHref}
                  className="font-display text-3xl font-semibold text-charcoal hover:text-brass transition-colors leading-none block mb-1"
                >
                  {siteConfig.phone}
                </a>
                <p className="text-xs text-charcoal-400">
                  For appointments, questions, and emergencies
                </p>
              </div>

              {/* Address */}
              <div>
                <p className="section-label mb-3">Visit Us</p>
                <address className="not-italic text-sm text-charcoal-400 leading-relaxed mb-2">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </address>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-brass hover:text-brass-400 transition-colors"
                >
                  Get directions →
                </a>
              </div>

              {/* Hours */}
              <div>
                <p className="section-label mb-3">Office Hours</p>
                <dl className="space-y-2">
                  {siteConfig.hours.map((row) => (
                    <div key={row.days} className="flex items-center justify-between text-sm border-b border-cream-200 pb-2 gap-4">
                      <dt className="text-charcoal-400 text-xs">{row.days}</dt>
                      <dd className={`text-xs font-medium whitespace-nowrap ${row.hours === 'Closed' ? 'text-charcoal-300' : 'text-charcoal'}`}>
                        {row.hours}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Emergency */}
              <div className="bg-teal-500 text-cream rounded-xl p-5">
                <p className="text-xs font-semibold mb-2 text-cream">Dental Emergency?</p>
                <p className="text-xs text-cream/70 leading-relaxed mb-3">
                  Call us first. We hold same-day slots and will get you in fast.
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="text-sm font-semibold text-brass-200 hover:text-brass-300 transition-colors inline-flex items-center gap-1"
                >
                  {siteConfig.phone}
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-charcoal mb-8">
                Request an Appointment
              </h2>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream-200" aria-label="Practice location map">
        <div className="img-frame h-[400px] lg:h-[480px]">
          <iframe
            src={embedSrc}
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block', filter: 'sepia(0.2) saturate(0.8) hue-rotate(160deg)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map: ${siteConfig.name} at ${siteConfig.address.full}`}
          />
        </div>
      </section>
    </>
  )
}

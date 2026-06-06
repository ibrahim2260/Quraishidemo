import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export default function LocationSection() {
  const mapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD-dummy-key&q=${encodeURIComponent(siteConfig.address.full)}`
  // NOTE: Replace with a real Google Maps Embed API key, or use the iframe approach below (no key needed for basic embed)

  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.address.full)}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  return (
    <section
      className="py-20 lg:py-32 bg-cream"
      aria-labelledby="location-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: info */}
          <div>
            <p className="section-label mb-4">Find Us</p>
            <span className="brass-rule" />
            <h2
              id="location-heading"
              className="font-display text-4xl lg:text-5xl font-semibold text-charcoal leading-tight mb-8"
            >
              Serving Sterling Heights
              <br />
              <em className="not-italic text-teal-400">& Metro Detroit.</em>
            </h2>

            {/* Address */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center shrink-0 text-sage-500 mt-0.5">
                <MapPinIcon />
              </div>
              <div>
                <p className="text-sm font-body font-semibold text-charcoal mb-1">Address</p>
                <address className="not-italic text-sm text-charcoal-400 leading-relaxed">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </address>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-body font-medium text-brass hover:text-brass-400 transition-colors mt-2 inline-flex items-center gap-1"
                >
                  Get directions →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center shrink-0 text-sage-500">
                <PhoneIcon />
              </div>
              <div>
                <p className="text-sm font-body font-semibold text-charcoal mb-1">Phone</p>
                <a
                  href={siteConfig.phoneHref}
                  className="text-sm text-charcoal-400 hover:text-brass transition-colors"
                >
                  {siteConfig.phone}
                </a>
                <p className="text-xs text-charcoal-400 mt-1">
                  Call for appointments or emergencies
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center shrink-0 text-sage-500">
                <ClockIcon />
              </div>
              <div className="flex-1">
                <p className="text-sm font-body font-semibold text-charcoal mb-3">Office Hours</p>
                <dl className="space-y-2">
                  {siteConfig.hours.map((row) => (
                    <div key={row.days} className="flex items-center justify-between text-sm gap-4 pb-2 border-b border-cream-200 last:border-0">
                      <dt className="text-charcoal-400">{row.days}</dt>
                      <dd className={`font-medium whitespace-nowrap ${row.hours === 'Closed' ? 'text-charcoal-300' : 'text-charcoal'}`}>
                        {row.hours}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* ZIP service area */}
            <p className="text-xs text-charcoal-400 mt-8 leading-relaxed">
              Proudly serving patients from Sterling Heights and the surrounding metro Detroit area, including ZIP codes{' '}
              {siteConfig.zipCodes.join(', ')}.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/contact" className="btn-primary">
                Book an Appointment
                <ArrowIcon />
              </Link>
              <a href={siteConfig.phoneHref} className="btn-outline">
                Call {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Right: map */}
          <div className="relative">
            <div className="img-frame rounded-2xl overflow-hidden h-[400px] lg:h-[520px]">
              <iframe
                src={embedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'sepia(0.2) saturate(0.8) hue-rotate(160deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing the location of ${siteConfig.name} at ${siteConfig.address.full}`}
              />
            </div>
            {/* Address overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-cream/95 backdrop-blur-sm rounded-xl p-4 shadow-lg flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-body font-semibold text-charcoal">{siteConfig.name}</p>
                <p className="text-xs text-charcoal-400 mt-0.5">{siteConfig.address.full}</p>
              </div>
              <a
                href={siteConfig.phoneHref}
                className="shrink-0 btn-primary text-xs px-4 py-2"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17v-.08z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

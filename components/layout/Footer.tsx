import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

const serviceLinks = [
  { href: '/services#cosmetic', label: 'Cosmetic Dentistry' },
  { href: '/services#general', label: 'General & Preventive' },
  { href: '/services#restorative', label: 'Restorative Dentistry' },
  { href: '/services#specialty', label: 'Specialty Care' },
  { href: '/services#implants', label: 'Dental Implants' },
  { href: '/services#invisalign', label: 'Invisalign®' },
  { href: '/services#veneers', label: 'Porcelain Veneers' },
  { href: '/services#emergency', label: 'Emergency Dentistry' },
]

const practiceLinks = [
  { href: '/about', label: 'Meet Dr. Quraishi' },
  { href: '/about', label: 'Our Philosophy' },
  { href: '/new-patients', label: 'New Patient Info' },
  { href: '/new-patients#insurance', label: 'Insurance & Financing' },
  { href: '/new-patients#forms', label: 'Patient Forms' },
  { href: '/contact', label: 'Book an Appointment' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-cream/70 grain" role="contentinfo">
      {/* Emergency strip */}
      <div className="bg-teal-500">
        <div className="container-site py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-cream text-sm font-body font-medium">
              <span className="text-brass-200 font-semibold">Dental emergency?</span>
              {' '}Call us first — we reserve same-day appointments.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="shrink-0 flex items-center gap-2 bg-brass text-cream px-5 py-2.5 text-xs font-body font-semibold tracking-widest uppercase hover:bg-brass-400 transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 2.5C2 2.22386 2.22386 2 2.5 2H5.022C5.26498 2 5.47654 2.16147 5.537 2.39583L6.48198 6.07109C6.53486 6.27636 6.45636 6.49251 6.28516 6.61719L4.83203 7.625C5.77832 9.72363 7.27637 11.2217 9.375 12.168L10.3828 10.7148C10.5075 10.5436 10.7236 10.4651 10.9289 10.518L14.6042 11.463C14.8385 11.5235 15 11.735 15 11.978V14.5C15 14.7761 14.7761 15 14.5 15H12C6.47715 15 2 10.5228 2 5V2.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="font-display text-2xl font-semibold text-cream leading-snug">
                Family &amp; Cosmetic<br />Dentistry
              </p>
              <p className="text-xs font-body tracking-[0.16em] uppercase text-cream/40 mt-1">
                Dr. Karen Quraishi, DDS
              </p>
            </div>
            <p className="text-sm leading-relaxed text-cream/55 mb-6">
              Sterling Heights&rsquo; premium dental practice — where precision, artistry, and genuine care meet.
            </p>
            <address className="not-italic space-y-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sm text-cream/55 hover:text-cream/90 transition-colors group"
              >
                <MapPinIcon className="mt-0.5 shrink-0 text-sage-300 group-hover:text-brass-200 transition-colors" />
                <span>{siteConfig.address.street}<br />{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</span>
              </a>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2.5 text-sm text-cream/55 hover:text-cream/90 transition-colors group"
              >
                <PhoneIcon className="shrink-0 text-sage-300 group-hover:text-brass-200 transition-colors" />
                {siteConfig.phone}
              </a>
            </address>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={siteConfig.social.facebook}
                className="w-9 h-9 border border-cream/10 flex items-center justify-center text-cream/40 hover:text-cream hover:border-cream/30 transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={siteConfig.social.instagram}
                className="w-9 h-9 border border-cream/10 flex items-center justify-center text-cream/40 hover:text-cream hover:border-cream/30 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={siteConfig.social.google}
                className="w-9 h-9 border border-cream/10 flex items-center justify-center text-cream/40 hover:text-cream hover:border-cream/30 transition-all"
                aria-label="Google Reviews"
              >
                <GoogleIcon />
              </a>
            </div>
          </div>

          {/* Services col */}
          <div>
            <h3 className="section-label-light mb-5">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/55 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice col */}
          <div>
            <h3 className="section-label-light mb-5">Practice</h3>
            <ul className="space-y-2.5">
              {practiceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/55 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours col */}
          <div>
            <h3 className="section-label-light mb-5">Office Hours</h3>
            <ul className="space-y-3">
              {siteConfig.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-4 text-sm border-b border-cream/8 pb-2.5">
                  <span className="text-cream/55">{row.days}</span>
                  <span className={`font-medium whitespace-nowrap ${row.hours === 'Closed' ? 'text-cream/30' : 'text-cream/80'}`}>
                    {row.hours}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-xs font-body font-medium tracking-widest uppercase text-brass-200 hover:text-brass-300 transition-colors"
            >
              Book an Appointment
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/8">
        <div className="container-site py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream/30">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-cream/20 text-center">
              Proudly serving Sterling Heights and metro Detroit — ZIPs{' '}
              {siteConfig.zipCodes.join(', ')}
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-xs text-cream/30 hover:text-cream/60 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-cream/30 hover:text-cream/60 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function MapPinIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M8 1.5C5.51472 1.5 3.5 3.51472 3.5 6C3.5 9.5 8 14.5 8 14.5C8 14.5 12.5 9.5 12.5 6C12.5 3.51472 10.4853 1.5 8 1.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"/>
      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.25"/>
    </svg>
  )
}

function PhoneIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M2 2.5C2 2.22386 2.22386 2 2.5 2H5.022C5.26498 2 5.47654 2.16147 5.537 2.39583L6.48198 6.07109C6.53486 6.27636 6.45636 6.49251 6.28516 6.61719L4.83203 7.625C5.77832 9.72363 7.27637 11.2217 9.375 12.168L10.3828 10.7148C10.5075 10.5436 10.7236 10.4651 10.9289 10.518L14.6042 11.463C14.8385 11.5235 15 11.735 15 11.978V14.5C15 14.7761 14.7761 15 14.5 15H12C6.47715 15 2 10.5228 2 5V2.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" opacity=".7"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" opacity=".7"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor" opacity=".7"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" opacity=".7"/>
    </svg>
  )
}

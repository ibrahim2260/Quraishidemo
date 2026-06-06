import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center bg-cream pt-16 lg:pt-20">
      <div className="container-site py-20 text-center max-w-xl mx-auto">
        <p className="font-display text-[10rem] font-bold text-cream-200 leading-none select-none mb-0" aria-hidden="true">
          404
        </p>
        <p className="section-label mb-4 -mt-4">Page Not Found</p>
        <h1 className="font-display text-4xl lg:text-5xl font-semibold text-charcoal leading-tight mb-5">
          This Page Doesn&rsquo;t
          <br />
          <em className="not-italic text-teal-400">Seem to Exist.</em>
        </h1>
        <p className="text-base text-charcoal-400 leading-relaxed mb-10">
          It may have moved or been removed. Let&rsquo;s get you back on track.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Go Home
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/contact" className="btn-outline">
            Book an Appointment
          </Link>
          <a href={siteConfig.phoneHref} className="text-sm font-body font-medium text-charcoal-400 hover:text-brass transition-colors">
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { drQuraishi } from '@/lib/team'
import { siteConfig } from '@/lib/siteConfig'
import CTABand from '@/components/home/CTABand'

export const metadata: Metadata = {
  title: 'About Dr. Karen Quraishi — Meet the Team',
  description:
    'Learn about Dr. Karen Quraishi, DDS and the team at Family & Cosmetic Dentistry in Sterling Heights, MI. 15+ years of patient-centered dental care in Metro Detroit.',
}

const values = [
  {
    title: 'Unhurried Attention',
    description:
      'We do not overbook. Every appointment has breathing room because your questions matter and your time in the chair should feel taken care of, not rushed.',
  },
  {
    title: 'Honest Treatment Planning',
    description:
      'We recommend only what you genuinely need. If there are multiple valid options, we present them all — with real costs, real timelines, and our honest recommendation.',
  },
  {
    title: 'Fear-Free Practice',
    description:
      'Dental anxiety is not irrational — it is incredibly common. We have protocols, patience, and sedation options specifically for patients who have struggled with dental visits before.',
  },
  {
    title: 'Precision in Every Detail',
    description:
      'Whether it is a single filling or a full-mouth restoration, Dr. Quraishi treats every case with the same level of attention. There is no such thing as a "small" case to us.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-0 lg:pt-40 bg-cream relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 30% 30%, rgba(123,158,135,0.08) 0%, transparent 60%)',
          }}
        />
        <div className="container-site relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end">
            <div className="pb-12 lg:pb-20">
              <p className="section-label mb-5 flex items-center gap-3">
                <span className="block w-8 h-px bg-sage-300" />
                About the Practice
              </p>
              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-semibold text-charcoal leading-tight mb-6">
                Dentistry Built
                <br />
                <em className="not-italic text-teal-400">on Trust.</em>
              </h1>
              <p className="text-lg text-charcoal-400 leading-relaxed max-w-lg">
                Family &amp; Cosmetic Dentistry has been a part of the Sterling Heights community for over 15 years. What we have built here is not just a dental practice — it is a place where patients come back, refer their families, and feel genuinely taken care of.
              </p>
            </div>

            {/* Image */}
            <div className="relative -mb-1">
              <div className="img-frame rounded-t-2xl overflow-hidden aspect-[4/3] lg:aspect-[3/2]">
                <Image
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&h=800&fit=crop&q=85"
                  // TODO: replace with a real photo of the practice interior — warm, inviting
                  alt="The modern, welcoming interior of Family & Cosmetic Dentistry in Sterling Heights, MI"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(26,29,27,0.15))' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <div className="bg-charcoal">
        <div className="container-site py-10">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.stats.map((stat) => (
              <li key={stat.label} className="flex flex-col items-center text-center">
                <span className="font-display text-4xl lg:text-5xl font-semibold text-cream mb-2">
                  {stat.value}
                </span>
                <span className="text-xs font-body font-medium text-cream/40 tracking-wide text-center">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Meet Dr. Quraishi */}
      <section className="py-20 lg:py-32 bg-cream" aria-labelledby="dr-bio-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            {/* Image */}
            <div className="relative">
              <div
                className="absolute -top-8 -left-8 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(123,158,135,0.15) 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              <div className="img-frame rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src={drQuraishi.imageUrl}
                  // TODO: replace with Dr. Quraishi's professional headshot
                  alt={`${drQuraishi.name}, ${drQuraishi.title}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              {/* Credentials card */}
              <div className="mt-6 bg-cream-200 rounded-xl p-6">
                <p className="section-label mb-4">Credentials & Training</p>
                <ul className="space-y-3">
                  {drQuraishi.credentials.map((cred) => (
                    <li key={cred} className="flex items-start gap-3 text-sm text-charcoal-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brass shrink-0" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="section-label mb-4">Meet Your Dentist</p>
              <span className="brass-rule" />
              <h2
                id="dr-bio-heading"
                className="font-display text-4xl lg:text-5xl font-semibold text-charcoal leading-tight mb-2"
              >
                {drQuraishi.name}
              </h2>
              <p className="text-sm font-body font-medium text-charcoal-400 tracking-wide mb-8">
                {drQuraishi.title}
              </p>

              <div className="space-y-6 mb-10">
                {drQuraishi.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed ${
                      i === drQuraishi.bio.length - 1
                        ? 'font-display text-xl italic text-teal font-medium pl-6 border-l-2 border-brass'
                        : 'text-base text-charcoal-400'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book with Dr. Quraishi
                  <ArrowIcon />
                </Link>
                <a href={siteConfig.phoneHref} className="btn-outline">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-cream-200" aria-labelledby="values-heading">
        <div className="container-site">
          <div className="max-w-xl mb-14">
            <p className="section-label mb-4">Our Philosophy</p>
            <h2
              id="values-heading"
              className="font-display text-4xl lg:text-5xl font-semibold text-charcoal leading-tight"
            >
              What We Believe
              <br />
              <em className="not-italic text-teal-400">About Dental Care.</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="bg-cream border border-cream-200 rounded-xl p-8 hover:border-sage-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-3xl font-semibold text-cream-300 leading-none select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-body font-semibold text-charcoal">{value.title}</h3>
                </div>
                <p className="text-sm text-charcoal-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Gallery */}
      <section className="py-20 lg:py-28 bg-cream" aria-label="Office photos">
        <div className="container-site">
          <p className="section-label mb-4">The Practice</p>
          <h2 className="font-display text-4xl font-semibold text-charcoal mb-10">
            Come See Us.
          </h2>

          {/* 2×2 equal grid — no dead space, all dental photos */}
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&h=600&fit=crop&q=85',
                alt: 'Clean, modern dental treatment room at Family & Cosmetic Dentistry',
                // TODO: replace with real practice treatment room photo
              },
              {
                src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&h=600&fit=crop&q=85',
                alt: 'Dentist reviewing patient dental X-rays',
                // TODO: replace with real practice X-ray / consultation photo
              },
              {
                src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&h=600&fit=crop&q=85',
                alt: 'Welcoming reception and check-in area',
                // TODO: replace with real reception photo
              },
              {
                src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&h=600&fit=crop&q=85',
                alt: 'Dental procedure being performed with precision',
                // TODO: replace with real procedure or equipment photo
              },
            ].map((photo, i) => (
              <div
                key={i}
                className="img-frame rounded-xl overflow-hidden aspect-[4/3]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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

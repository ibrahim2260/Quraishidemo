import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import AppointmentForm from '@/components/shared/AppointmentForm'
import CTABand from '@/components/home/CTABand'

export const metadata: Metadata = {
  title: 'New Patients — What to Expect, Insurance & Financing',
  description:
    'Everything new patients need to know before their first visit to Family & Cosmetic Dentistry in Sterling Heights, MI — insurance accepted, financing options, what to bring, and what to expect.',
}

const steps = [
  {
    step: '01',
    title: 'Book Your Appointment',
    description:
      'Call us or use the form on this page. Tell us your goals, any concerns, and if you have dental anxiety — we want to know so we can prepare for you specifically.',
  },
  {
    step: '02',
    title: 'Complete Your Paperwork',
    description:
      'We will send a link to simple online forms after you book. Complete them at home so your first visit is focused on getting to know you, not filling out paperwork.',
  },
  {
    step: '03',
    title: 'Your First Visit',
    description:
      'Comprehensive exam, digital X-rays, a cleaning (if time and condition allow), and an honest conversation about your dental health and goals. Plan for about 90 minutes.',
  },
  {
    step: '04',
    title: 'Your Personalized Plan',
    description:
      'We will walk you through exactly what we found, what we recommend, and what it will cost — in plain language. No pressure, no surprises. You decide what comes next.',
  },
]

const insuranceAccepted = [
  'Delta Dental',
  'Aetna',
  'BlueCross BlueShield',
  'Cigna',
  'Guardian',
  'United Concordia',
  'MetLife',
  'Humana',
  'Most PPO plans',
]

const financingOptions = [
  {
    name: 'CareCredit',
    detail: '6–24 month interest-free plans for qualifying treatments',
  },
  {
    name: 'Sunbit',
    detail: 'Easy approval, flexible monthly payment options',
  },
  {
    name: 'In-House Payment Plans',
    detail: 'We work directly with patients on extended payment schedules when needed',
  },
]

const faqs = [
  {
    q: 'What should I bring to my first appointment?',
    a: 'Your insurance card and a valid ID. If you have recent dental X-rays from a previous provider, we welcome those too — it can reduce the amount of new imaging needed.',
  },
  {
    q: 'Do you accept my insurance?',
    a: 'We accept most major PPO dental insurance plans and can verify your benefits before your visit. We are not in-network with HMO plans. Call us and we will check your specific coverage.',
  },
  {
    q: 'I have not been to the dentist in years. Will you judge me?',
    a: 'Absolutely not. We see patients in every stage of dental health, and our only job is to help you move forward. There is no lecture, no shame, just a practical conversation about where things stand and what to do next.',
  },
  {
    q: 'I have serious dental anxiety. Can you still help me?',
    a: 'Yes — this is exactly why we offer nitrous oxide sedation and have specific protocols for anxious patients. Tell us upfront and we will take it at your pace, with no pressure.',
  },
  {
    q: 'How much will my first visit cost?',
    a: 'With insurance, a comprehensive new patient exam and cleaning is typically covered at 100% (or close to it). Without insurance, an exam, X-rays, and cleaning range from $200–$350. We will give you an exact estimate before we begin.',
  },
  {
    q: 'Are you accepting new patients right now?',
    a: 'Yes. We welcome new patients and their families. We do keep our schedule manageable to protect appointment quality, so booking a few days out is typical for routine visits.',
  },
]

export default function NewPatientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream-200 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 100% 0%, rgba(43,95,95,0.07) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="container-site relative z-10">
          <div className="max-w-2xl">
            <p className="section-label mb-5 flex items-center gap-3">
              <span className="block w-8 h-px bg-sage-300" />
              New Patients
            </p>
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-semibold text-charcoal leading-tight mb-6">
              Welcome.
              <br />
              <em className="not-italic text-teal-400">Let&rsquo;s Get Started.</em>
            </h1>
            <p className="text-lg text-charcoal-400 leading-relaxed mb-8 max-w-lg">
              Everything you need to know before your first visit. We have tried to make this as simple and anxiety-free as possible — because starting somewhere new should not be stressful.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#book" className="btn-primary">
                Book Your First Visit
                <ArrowIcon />
              </a>
              <a href={siteConfig.phoneHref} className="btn-outline">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 lg:py-28 bg-cream" aria-labelledby="expect-heading">
        <div className="container-site">
          <div className="max-w-xl mb-14">
            <p className="section-label mb-4">Your First Visit</p>
            <h2 id="expect-heading" className="font-display text-4xl lg:text-5xl font-semibold text-charcoal leading-tight">
              What to Expect,
              <br />
              <em className="not-italic text-teal-400">Step by Step.</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.step} className="relative">
                <div className="font-display text-6xl font-bold text-cream-300 leading-none mb-4 select-none">
                  {step.step}
                </div>
                <h3 className="text-sm font-body font-semibold text-charcoal mb-3">{step.title}</h3>
                <p className="text-xs text-charcoal-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Financing */}
      <section
        id="insurance"
        className="py-20 lg:py-28 bg-cream-200"
        aria-labelledby="insurance-heading"
      >
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Insurance */}
            <div>
              <p className="section-label mb-4">Insurance</p>
              <h2
                id="insurance-heading"
                className="font-display text-3xl lg:text-4xl font-semibold text-charcoal mb-5"
              >
                We Work With Your Insurance.
              </h2>
              <p className="text-sm text-charcoal-400 leading-relaxed mb-8">
                We accept most major PPO dental insurance plans and will verify your benefits before your visit so you know exactly what to expect. We submit claims on your behalf — you should not have to navigate that alone.
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-8">
                {insuranceAccepted.map((ins) => (
                  <li key={ins} className="flex items-center gap-2 text-sm text-charcoal-400">
                    <CheckIcon className="text-sage shrink-0" />
                    {ins}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-charcoal-400">
                Not seeing your plan? Call us at{' '}
                <a href={siteConfig.phoneHref} className="text-brass hover:underline">
                  {siteConfig.phone}
                </a>{' '}
                — most PPO plans are accepted even if not listed.
              </p>
            </div>

            {/* Financing */}
            <div>
              <p className="section-label mb-4">Financing</p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-charcoal mb-5">
                Great Care Fits Every Budget.
              </h2>
              <p className="text-sm text-charcoal-400 leading-relaxed mb-8">
                We never want cost to stand between you and the dental health or smile you deserve. We offer several ways to make treatment work financially — without pressure and without surprises.
              </p>
              <div className="space-y-4">
                {financingOptions.map((opt) => (
                  <div
                    key={opt.name}
                    className="bg-cream border border-cream-200 rounded-xl p-5 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brass-100 flex items-center justify-center shrink-0 mt-0.5">
                      <DollarIcon />
                    </div>
                    <div>
                      <p className="text-sm font-body font-semibold text-charcoal mb-1">{opt.name}</p>
                      <p className="text-xs text-charcoal-400">{opt.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-cream" aria-labelledby="faq-heading">
        <div className="container-site">
          <div className="max-w-xl mb-12">
            <p className="section-label mb-4">Questions & Answers</p>
            <h2 id="faq-heading" className="font-display text-4xl font-semibold text-charcoal">
              Frequently Asked.
            </h2>
          </div>
          <div className="max-w-2xl space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-cream-200 rounded-xl bg-cream hover:border-sage-200 transition-colors overflow-hidden"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-6">
                  <span className="text-sm font-body font-semibold text-charcoal">{faq.q}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="shrink-0 transition-transform duration-200 group-open:rotate-180 text-charcoal-300"
                    aria-hidden="true"
                  >
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 border-t border-cream-200 pt-4">
                  <p className="text-sm text-charcoal-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Patient forms */}
      <section id="forms" className="py-20 lg:py-28 bg-cream-200" aria-labelledby="forms-heading">
        <div className="container-site">
          <div className="max-w-xl">
            <p className="section-label mb-4">Before Your Visit</p>
            <h2 id="forms-heading" className="font-display text-4xl font-semibold text-charcoal mb-5">
              Patient Forms.
            </h2>
            <p className="text-sm text-charcoal-400 leading-relaxed mb-8">
              Complete your new patient forms online before your first visit — it saves time in the office and lets us prepare for you in advance. We will send a link after you book your appointment.
            </p>
            <div className="bg-cream border border-cream-200 rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center shrink-0 text-sage-500">
                <DocumentIcon />
              </div>
              <div>
                <p className="text-sm font-body font-semibold text-charcoal mb-1">Online Patient Registration</p>
                <p className="text-xs text-charcoal-400 mb-4">
                  Medical history, insurance information, and HIPAA consent — takes about 5 minutes. Link sent via email after booking.
                </p>
                <p className="text-xs text-charcoal-300 italic">
                  {/* TODO: add real patient forms link when available (e.g. via dental software portal) */}
                  Forms link sent automatically after your appointment is confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book */}
      <section id="book" className="py-20 lg:py-28 bg-cream" aria-labelledby="book-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="section-label mb-4">Book Your Visit</p>
              <h2 id="book-heading" className="font-display text-4xl lg:text-5xl font-semibold text-charcoal leading-tight mb-5">
                Ready to Meet Us?
              </h2>
              <p className="text-base text-charcoal-400 leading-relaxed mb-8">
                Fill out the form and we will confirm your appointment within one business day. For same-day needs or urgent questions, call us directly.
              </p>
              <div className="space-y-4 mb-8">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-3 text-sm font-body text-charcoal-400 hover:text-brass transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-cream-200 flex items-center justify-center text-charcoal-400">
                    <PhoneIcon />
                  </div>
                  {siteConfig.phone}
                </a>
                <div className="flex items-start gap-3 text-sm text-charcoal-400">
                  <div className="w-9 h-9 rounded-lg bg-cream-200 flex items-center justify-center text-charcoal-400 shrink-0 mt-0.5">
                    <MapPinIcon />
                  </div>
                  <address className="not-italic leading-relaxed">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </address>
                </div>
              </div>
              <div className="bg-sage-100 rounded-xl p-5">
                <p className="text-xs font-body font-semibold text-sage-500 mb-2">Dental Emergency?</p>
                <p className="text-xs text-charcoal-400 mb-3">
                  Call us first. We reserve same-day slots and do our best to get you in the same day you call.
                </p>
                <a href={siteConfig.phoneHref} className="text-xs font-body font-semibold text-brass hover:text-brass-400 transition-colors inline-flex items-center gap-1">
                  Call {siteConfig.phone} →
                </a>
              </div>
            </div>

            <div className="bg-cream-200 rounded-2xl p-6 lg:p-10">
              <AppointmentForm />
            </div>
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

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3 8l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DollarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8944A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 2.5C2 2.22386 2.22386 2 2.5 2H5.022C5.26498 2 5.47654 2.16147 5.537 2.39583L6.48198 6.07109C6.53486 6.27636 6.45636 6.49251 6.28516 6.61719L4.83203 7.625C5.77832 9.72363 7.27637 11.2217 9.375 12.168L10.3828 10.7148C10.5075 10.5436 10.7236 10.4651 10.9289 10.518L14.6042 11.463C14.8385 11.5235 15 11.735 15 11.978V14.5C15 14.7761 14.7761 15 14.5 15H12C6.47715 15 2 10.5228 2 5V2.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

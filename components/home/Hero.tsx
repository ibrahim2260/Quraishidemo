'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SparklesCore } from '@/components/ui/sparkles'
import { siteConfig } from '@/lib/siteConfig'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20"
      style={{ background: 'linear-gradient(145deg, #111512 0%, #1a2820 45%, #1a2f2f 100%)' }}
      aria-label="Hero"
    >
      {/* ── Full-section tsParticles — gold dust across entire hero ─────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.3}
          maxSize={1.1}
          particleDensity={45}
          className="w-full h-full"
          particleColor="#B8944A"
          speed={1.0}
        />
      </div>

      {/* ── Depth radials ──────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true"
        style={{
          background: [
            'radial-gradient(ellipse 55% 65% at 75% 50%, rgba(43,95,95,0.28) 0%, transparent 65%)',
            'radial-gradient(ellipse 40% 50% at 20% 30%, rgba(123,158,135,0.08) 0%, transparent 60%)',
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,0,0,0.45) 0%, transparent 70%)',
          ].join(', '),
        }}
      />

      <div className="container-site relative z-10 py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-10 items-center">

          {/* ── LEFT: text ─────────────────────────────────────────────── */}
          <div className="order-2 lg:order-1">
            <motion.p {...fadeUp(0.1)}
              className="section-label-light mb-5 flex items-center gap-3">
              <span className="block w-8 h-px bg-sage-400" />
              Sterling Heights, Michigan
            </motion.p>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-semibold leading-[1.02] tracking-tight text-balance mb-6"
              style={{ color: '#FDFCF8' }}
            >
              Dentistry
              <br />
              <em className="not-italic" style={{ color: '#7B9E87' }}>Worth</em>
              <br />
              Smiling About.
            </motion.h1>

            {/* Sparkle accent strip under headline */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-8 w-60 mb-5 origin-left overflow-hidden"
              aria-hidden="true"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass to-transparent opacity-80" />
              <div className="absolute inset-x-4 top-0 h-[2px] bg-gradient-to-r from-transparent via-brass to-transparent blur-sm opacity-60" />
              <SparklesCore
                id="headline-sparkles"
                background="transparent"
                minSize={0.4}
                maxSize={1.2}
                particleDensity={250}
                className="w-full h-full"
                particleColor="#B8944A"
                speed={2}
              />
              <div className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 65% 100% at 50% 0%, transparent 20%, rgba(17,21,18,1) 78%)' }}
              />
            </motion.div>

            <motion.p {...fadeUp(0.35)}
              className="text-base lg:text-lg leading-relaxed max-w-md mb-10"
              style={{ color: 'rgba(250,248,242,0.62)' }}
            >
              Dr. Karen Quraishi brings boutique-level dental artistry to Sterling Heights — precise, unhurried, and genuinely warm. From routine cleanings to complete smile transformations, you deserve a dentist this good.
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="flex flex-wrap items-center gap-3 mb-12">
              <Link href="/contact" className="btn-primary">
                Book Your Visit
                <ArrowIcon />
              </Link>
              <a href={siteConfig.phoneHref} className="btn-outline-light">
                <PhoneIcon />
                {siteConfig.phone}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.55)}
              className="flex flex-wrap gap-7 pt-7"
              style={{ borderTop: '1px solid rgba(255,255,255,0.09)' }}
            >
              {siteConfig.stats.filter(s => s.value !== '0%').map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-2xl font-semibold leading-none"
                    style={{ color: '#FDFCF8' }}>
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-body font-medium tracking-wide mt-1"
                    style={{ color: 'rgba(250,248,242,0.4)' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: premium smile portrait ──────────────────────────── */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[460px] mx-auto"
              style={{ height: 'clamp(400px, 55vh, 580px)' }}
            >
              {/* Outer glow ring — brass */}
              <div className="absolute -inset-[3px] rounded-3xl pointer-events-none z-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(184,148,74,0.5) 0%, rgba(43,95,95,0.3) 50%, rgba(184,148,74,0.4) 100%)',
                }}
              />

              {/* Photo frame */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden z-10">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=1100&fit=crop&crop=faces&q=90"
                  // TODO: replace with a real portrait of a patient or Dr. Quraishi — warm, genuine smile
                  alt="A patient with a radiant, confident smile after treatment at Family & Cosmetic Dentistry"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Warm tonal overlay — blends photo into dark hero */}
                <div className="absolute inset-0"
                  style={{
                    background: [
                      'linear-gradient(to bottom, rgba(17,21,18,0.08) 0%, transparent 30%, transparent 60%, rgba(17,21,18,0.65) 100%)',
                      'linear-gradient(to right, transparent 60%, rgba(17,21,18,0.3) 100%)',
                    ].join(', '),
                  }}
                />

                {/* Subtle warm color grade matching the hero palette */}
                <div className="absolute inset-0 mix-blend-multiply"
                  style={{ background: 'rgba(43, 56, 48, 0.15)' }}
                />
              </div>

              {/* Sparkles float on top of the photo */}
              <div className="absolute inset-0 z-20 pointer-events-none rounded-3xl overflow-hidden">
                <SparklesCore
                  id="photo-sparkles"
                  background="transparent"
                  minSize={0.3}
                  maxSize={0.9}
                  particleDensity={25}
                  className="w-full h-full"
                  particleColor="#B8944A"
                  speed={0.8}
                />
              </div>

              {/* Bottom label: practice name */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute bottom-5 left-5 right-5 z-30 flex items-end justify-between"
              >
                <div>
                  <p className="text-[10px] font-body font-semibold tracking-[0.2em] uppercase mb-1"
                    style={{ color: 'rgba(184,148,74,0.8)' }}>
                    Family &amp; Cosmetic Dentistry
                  </p>
                  <p className="text-xs font-body" style={{ color: 'rgba(250,248,242,0.5)' }}>
                    Sterling Heights, MI
                  </p>
                </div>
                {/* Five stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg key={i} width="11" height="11" viewBox="0 0 16 16"
                      fill="#B8944A" aria-hidden="true"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.6 + i * 0.06 }}>
                      <path d="M8 1.5l1.79 3.63 4 .58-2.9 2.82.68 3.97L8 10.26l-3.57 1.24.68-3.97L2.21 4.71l4-.58L8 1.5z"/>
                    </motion.svg>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Insurance card — top right */}
            <motion.div
              initial={{ opacity: 0, x: 16, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-4 -right-3 lg:-right-6 z-40 rounded-2xl px-4 py-3.5 flex items-center gap-3 border"
              style={{
                background: 'rgba(20,32,26,0.88)',
                backdropFilter: 'blur(14px)',
                borderColor: 'rgba(184,148,74,0.28)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(123,158,135,0.18)' }}>
                <ShieldIcon />
              </div>
              <div>
                <p className="text-xs font-body font-semibold" style={{ color: 'rgba(250,248,242,0.9)' }}>
                  Most Insurance Accepted
                </p>
                <p className="text-[11px] mt-0.5" style={{ color: 'rgba(250,248,242,0.42)' }}>
                  + 0% financing available
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <span className="text-[10px] font-body font-medium tracking-widest uppercase"
          style={{ color: 'rgba(255,255,255,0.22)' }}>
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M2 2.5C2 2.22 2.22 2 2.5 2H5.02c.24 0 .45.16.52.4l.94 3.67c.05.21-.02.42-.19.55L4.83 7.62C5.78 9.72 7.28 11.22 9.38 12.17l1.01-1.45c.12-.17.34-.25.54-.18l3.68.95c.23.06.39.27.39.51V14.5c0 .28-.22.5-.5.5H12C6.48 15 2 10.52 2 5V2.5z"/>
    </svg>
  )
}
function StarIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1.5l1.79 3.63 4 .58-2.9 2.82.68 3.97L8 10.26l-3.57 1.24.68-3.97L2.21 4.71l4-.58L8 1.5z"/>
    </svg>
  )
}
function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-sage-300" aria-hidden="true">
      <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6l-9-4z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

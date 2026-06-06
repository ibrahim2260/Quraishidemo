'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/lib/siteConfig'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/new-patients', label: 'New Patients' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(26,29,27,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-none group"
              aria-label={siteConfig.name}
            >
              <span className="font-display text-xl lg:text-2xl font-semibold text-charcoal tracking-tight group-hover:text-teal transition-colors duration-300">
                Family &amp; Cosmetic
              </span>
              <span className="text-[10px] font-body font-medium tracking-[0.18em] uppercase text-charcoal-400 mt-0.5">
                Dentistry — Dr. Karen Quraishi
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-body font-medium tracking-widest uppercase text-charcoal-500 hover:text-charcoal transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-brass origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-expo-out" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 text-sm font-body font-medium text-charcoal-500 hover:text-brass transition-colors duration-200"
                aria-label={`Call us at ${siteConfig.phone}`}
              >
                <PhoneIcon />
                {siteConfig.phone}
              </a>
              <Link href="/contact" className="btn-primary">
                Book a Visit
              </Link>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center w-9 h-9 rounded-sm text-charcoal hover:text-brass transition-colors"
                aria-label={`Call ${siteConfig.phone}`}
              >
                <PhoneIcon />
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="flex flex-col items-end justify-center gap-1.5 w-9 h-9 rounded-sm hover:bg-cream-200 transition-colors"
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
              >
                <span className="block w-5 h-px bg-charcoal rounded-full" />
                <span className="block w-4 h-px bg-charcoal rounded-full" />
                <span className="block w-5 h-px bg-charcoal rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-charcoal/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[calc(100vw-3rem)] bg-cream flex flex-col"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-cream-200">
                <span className="font-display text-lg font-semibold text-charcoal">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-sm hover:bg-cream-200 transition-colors text-charcoal-400"
                  aria-label="Close navigation"
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6">
                <ul className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between py-3.5 border-b border-cream-200 font-display text-xl font-medium text-charcoal hover:text-brass transition-colors"
                      >
                        {link.label}
                        <ArrowIcon />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="px-6 py-8 border-t border-cream-200 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Book an Appointment
                </Link>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center justify-center gap-2 py-3 text-sm font-body font-medium text-charcoal-500 hover:text-brass transition-colors"
                >
                  <PhoneIcon />
                  {siteConfig.phone}
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2 2.5C2 2.22386 2.22386 2 2.5 2H5.022C5.26498 2 5.47654 2.16147 5.537 2.39583L6.48198 6.07109C6.53486 6.27636 6.45636 6.49251 6.28516 6.61719L4.83203 7.625C5.77832 9.72363 7.27637 11.2217 9.375 12.168L10.3828 10.7148C10.5075 10.5436 10.7236 10.4651 10.9289 10.518L14.6042 11.463C14.8385 11.5235 15 11.735 15 11.978V14.5C15 14.7761 14.7761 15 14.5 15H12C6.47715 15 2 10.5228 2 5V2.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

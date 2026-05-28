'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { BRAND } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Shop',      href: '/' },
  { label: 'The Store', href: '/#shop' },
  { label: 'About',     href: '/about' },
  { label: 'Hours',     href: '/location' },
  { label: 'FAQ',       href: '/faq' },
]

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
    </svg>
  )
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="bg-canvas sticky top-0 z-50 border-b border-line"
      style={{ boxShadow: '0 1px 0 #E8E8E6' }}
    >
      {/* ── Main nav bar ── */}
      <div className="container h-14 md:h-16 flex items-center justify-between gap-6">

        {/* LEFT: Logo */}
        <Link href="/" className="shrink-0 flex items-center" aria-label="JAMIESSHOESS home">
          <Image
            src={BRAND.images.logoPrimary1}
            alt="JAMIESSHOESS"
            width={120}
            height={36}
            style={{ height: 36, width: 'auto' }}
            priority
          />
        </Link>

        {/* CENTER: Desktop nav links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans font-semibold text-[13px] text-ink tracking-[0.02em] hover:text-minted transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT: Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={BRAND.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JAMIESSHOESS on Instagram"
            className="text-ink hover:text-minted transition-colors duration-150"
          >
            <InstagramIcon />
          </a>
          <a
            href={BRAND.social.marketplace.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-white font-sans font-bold text-[12px] tracking-[0.06em] uppercase px-5 py-2.5 rounded hover:bg-minted hover:text-ink transition-all duration-200"
          >
            SHOP THE STORE →
          </a>
        </div>

        {/* RIGHT: Mobile hamburger */}
        <button
          className="flex md:hidden flex-col justify-center items-center gap-[5px] w-[22px] h-[22px]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            /* X icon */
            <>
              <span className="block w-[22px] h-[1.5px] bg-ink rotate-45 translate-y-[6.5px] transition-transform duration-200" />
              <span className="block w-[22px] h-[1.5px] bg-ink opacity-0 transition-opacity duration-200" />
              <span className="block w-[22px] h-[1.5px] bg-ink -rotate-45 -translate-y-[6.5px] transition-transform duration-200" />
            </>
          ) : (
            /* Hamburger icon */
            <>
              <span className="block w-[22px] h-[1.5px] bg-ink transition-transform duration-200" />
              <span className="block w-[22px] h-[1.5px] bg-ink transition-opacity duration-200" />
              <span className="block w-[22px] h-[1.5px] bg-ink transition-transform duration-200" />
            </>
          )}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden bg-canvas border-b border-line md:hidden"
          >
            <div className="p-6 flex flex-col">
              {/* Nav links */}
              <nav className="flex flex-col gap-y-4 mb-6" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-sans font-semibold text-lg text-ink hover:text-minted transition-colors duration-150"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Address + hours summary */}
              <div className="mb-6">
                <p className="font-sans text-sm text-ink3 leading-relaxed">
                  302 Park Central East · Springfield, MO 65806
                </p>
                <p className="font-sans text-sm text-ink3 leading-relaxed">
                  Open Wed–Sat · 12 PM – 6/7 PM
                </p>
              </div>

              {/* CTA */}
              <a
                href={BRAND.social.marketplace.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-ink text-white font-sans font-bold text-[13px] tracking-[0.06em] uppercase text-center py-3.5 rounded hover:bg-minted hover:text-ink transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                SHOP THE STORE →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

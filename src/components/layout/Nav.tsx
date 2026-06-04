'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { BRAND } from '@/lib/constants'
import SearchBar from '@/components/SearchBar'

function ThemeToggle({ mobile = false }: { mobile?: boolean }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const isLight = theme === 'light'

  if (mobile) {
    return (
      <button
        onClick={() => setTheme(isLight ? 'dark' : 'light')}
        aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
        className="font-sans font-bold text-[13px] tracking-[0.12em] uppercase transition-colors duration-150 px-6 py-3 text-left flex items-center gap-3"
        style={{ color: 'var(--color-text-filter)' }}
      >
        {isLight ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
        )}
        {isLight ? 'Dark Mode' : 'Light Mode'}
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className="font-sans font-bold text-[10px] tracking-[0.14em] uppercase flex items-center gap-1.5 rounded-sm border transition-all duration-150 hover:border-minted hover:text-minted"
      style={{
        padding: '6px 10px',
        border: '1px solid rgba(255,255,255,0.18)',
        color: 'rgba(255,255,255,0.6)',
      }}
    >
      {isLight ? (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      ) : (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      )}
      {isLight ? 'Dark' : 'Light'}
    </button>
  )
}

const NAV_LINKS = [
  { label: 'SHOP',    href: '/#products' },
  { label: 'VINTAGE', href: '/?filter=vintage#products' },
  { label: 'MERCH',   href: '/?filter=merch#products' },
  { label: 'SELL',    href: '/sell' },
  { label: 'ABOUT',   href: '/about' },
]

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
    </svg>
  )
}


export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/[0.07]"
      style={{
        background: scrolled ? 'var(--bg-nav-scrolled)' : 'var(--bg-nav)',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,.9)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background 0.2s, box-shadow 0.2s',
      }}
    >
      <div
        className="h-[64px] flex items-center justify-between gap-6"
        style={{ maxWidth: 1260, margin: '0 auto', padding: '0 clamp(16px,4vw,52px)' }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display italic font-black uppercase text-minted leading-none flex-shrink-0"
          style={{ fontSize: 22, letterSpacing: '0.01em' }}
          aria-label="JAMIESSHOESS home"
        >
          JAMIESSHOESS
        </Link>

        {/* Desktop nav links — centered */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans font-bold text-[11px] tracking-[0.14em] uppercase text-white/45 hover:text-white transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search — desktop */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-5 flex-shrink-0">
          <ThemeToggle />
          <a
            href={BRAND.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            className="text-white/40 hover:text-minted transition-colors duration-150"
          >
            <InstagramIcon />
          </a>
          <a
            href="/#products"
            className="font-sans font-bold text-[11px] tracking-[0.14em] uppercase text-leather bg-minted px-4 py-2 rounded-sm hover:bg-white transition-colors duration-150"
          >
            SHOP NOW
          </a>
        </div>

        {/* Mobile search */}
        <div className="flex md:hidden items-center gap-3">
          <SearchBar />
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden flex-col justify-center items-center gap-[5px] w-6 h-6 ml-auto"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-white/[0.07] md:hidden"
            style={{ background: 'var(--bg-nav)' }}
          >
            <div className="flex flex-col gap-0" style={{ padding: '8px 0 16px' }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans font-bold text-[13px] tracking-[0.12em] uppercase text-white/60 hover:text-minted hover:bg-white/[0.03] transition-colors duration-150 px-6 py-3"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-white/[0.07] mt-2">
                <ThemeToggle mobile />
              </div>
              <div className="px-6 pt-4 pb-2 border-t border-white/[0.07]">
                <p className="font-sans text-[11px] tracking-[0.08em] uppercase text-white/25 mb-3">
                  302 Park Central East · Springfield, MO<br />
                  Wed–Thu 12–6 · Fri–Sat 12–7
                </p>
                <a
                  href="/#products"
                  className="block w-full bg-minted text-leather font-sans font-bold text-[12px] tracking-[0.14em] uppercase text-center py-3 rounded-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  SHOP NOW
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

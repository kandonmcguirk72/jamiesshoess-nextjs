import Image from 'next/image'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'

/* ── Social icons ───────────────────────────────── */
function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
    </svg>
  )
}

function IconTikTok() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M13.5 2C13.5 2 13.75 4.5 16.5 5V7.5C16.5 7.5 14.5 7.5 13.5 6.5V13C13.5 15.5 11.5 17.5 9 17.5C6.5 17.5 4.5 15.5 4.5 13C4.5 10.5 6.5 8.5 9 8.5C9.25 8.5 9.5 8.5 9.75 8.55V11.1C9.5 11.05 9.25 11 9 11C7.9 11 7 11.9 7 13C7 14.1 7.9 15 9 15C10.1 15 11 14.1 11 13V2H13.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M11.5 6.5H13V4.5H11.5C10.12 4.5 9 5.62 9 7V8H7.5V10H9V15.5H11V10H12.5L13 8H11V7C11 6.72 11.22 6.5 11.5 6.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

/* ── Column heading ─────────────────────────────── */
function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans font-bold text-[11px] tracking-[0.15em] uppercase text-white/40 mb-4">
      {children}
    </p>
  )
}

/* ── Footer link ────────────────────────────────── */
function FooterLink({
  href,
  children,
  target,
  rel,
}: {
  href: string
  children: React.ReactNode
  target?: string
  rel?: string
}) {
  const isExternal = href.startsWith('http')
  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className="font-sans font-medium text-sm text-white/70 hover:text-white transition-colors block mb-2"
      >
        {children}
      </a>
    )
  }
  return (
    <Link
      href={href}
      className="font-sans font-medium text-sm text-white/70 hover:text-white transition-colors block mb-2"
    >
      {children}
    </Link>
  )
}

/* ── Component ──────────────────────────────────── */
export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">

      {/* ── Top bar ── */}
      <div className="bg-[#161816]">
        <div className="container py-4 flex justify-between items-center">
          {/* Logo */}
          <Image
            src={BRAND.images.logoPrimary1}
            alt="JAMIESSHOESS"
            width={110}
            height={32}
            style={{ height: 32, width: 'auto', filter: 'brightness(0) invert(1)' }}
          />

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={BRAND.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="JAMIESSHOESS on Instagram"
              className="text-white/70 hover:text-minted transition-colors"
            >
              <IconInstagram />
            </a>
            <a
              href={BRAND.social.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="JAMIESSHOESS on TikTok"
              className="text-white/70 hover:text-minted transition-colors"
            >
              <IconTikTok />
            </a>
            <a
              href={BRAND.social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="JAMIESSHOESS on Facebook"
              className="text-white/70 hover:text-minted transition-colors"
            >
              <IconFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="border-t border-white/[0.08]">
        <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Col 1 — SHOP */}
          <div>
            <ColHeading>Shop</ColHeading>
            <FooterLink href="#shop">All Items</FooterLink>
            <FooterLink href="#shop">Sneakers</FooterLink>
            <FooterLink href="#shop">Vintage Tees</FooterLink>
            <FooterLink href="#shop">Outerwear</FooterLink>
            <FooterLink href="#shop">Headwear</FooterLink>
            <FooterLink href="#shop">Bottoms</FooterLink>
          </div>

          {/* Col 2 — VISIT */}
          <div>
            <ColHeading>Visit</ColHeading>
            <p className="font-sans font-medium text-[13px] text-white/60 leading-[1.8]">
              302 Park Central East<br />
              Springfield, MO 65806<br />
              Historic Route 66
              <br /><br />
              Wed–Thu: 12 PM – 6 PM<br />
              Fri–Sat: 12 PM – 7 PM<br />
              Sun–Tue: Closed
            </p>
            <a
              href={BRAND.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-medium text-sm text-minted hover:underline block mt-3"
            >
              Get Directions →
            </a>
          </div>

          {/* Col 3 — CONNECT */}
          <div>
            <ColHeading>Connect</ColHeading>
            <FooterLink href={BRAND.social.instagram.url}   target="_blank" rel="noopener noreferrer">Instagram</FooterLink>
            <FooterLink href={BRAND.social.tiktok.url}      target="_blank" rel="noopener noreferrer">TikTok</FooterLink>
            <FooterLink href={BRAND.social.marketplace.url} target="_blank" rel="noopener noreferrer">Facebook Marketplace</FooterLink>
            <FooterLink href={BRAND.social.facebook.url}    target="_blank" rel="noopener noreferrer">Facebook</FooterLink>
          </div>

          {/* Col 4 — INFO */}
          <div>
            <ColHeading>Info</ColHeading>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
            <FooterLink href="/location">Location &amp; Hours</FooterLink>
            <p className="font-sans italic text-[12px] text-white/30 mt-4 leading-relaxed">
              &ldquo;{BRAND.founderQuote}&rdquo;
            </p>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.08]">
        <div className="container py-5 flex flex-wrap justify-between items-center gap-2">
          <p className="font-sans text-xs text-white/30">
            &copy; 2025 JAMIESSHOESS &middot; All Rights Reserved
          </p>
          <p className="font-sans text-xs text-white/30">
            Made in Springfield, MO
          </p>
        </div>
      </div>

    </footer>
  )
}

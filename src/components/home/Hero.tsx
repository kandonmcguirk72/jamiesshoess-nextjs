import Image from 'next/image'
import { BRAND } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="min-h-svh flex flex-col md:flex-row bg-canvas">
      {/* Left: full-bleed photography */}
      <div className="relative w-full md:w-[55%] h-[60vw] md:h-auto min-h-[400px]">
        <Image
          src={BRAND.images.heroStorefront}
          alt="JAMIESSHOESS storefront at 302 Park Central East, Springfield MO"
          fill
          priority
          sizes="(max-width:768px) 100vw, 55vw"
          className="object-cover"
        />
      </div>

      {/* Right: content */}
      <div className="w-full md:w-[45%] flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 md:py-0 bg-canvas">

        {/* Eyebrow */}
        <span className="font-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-minted mb-4 block">
          SPRINGFIELD, MO · ROUTE 66
        </span>

        {/* Headline */}
        <h1 className="font-display text-display-2xl text-ink leading-[0.85] mb-6">
          JAMIES<br />SHOESS
        </h1>

        {/* Subhead */}
        <p className="font-sans text-base text-ink3 leading-relaxed max-w-[420px] mb-8">
          Sneakers · Vintage · All Hand-Picked · Nothing Online Touches What&apos;s In Here
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['✓ 100% Authentic', '✓ 6K+ Followers', '⏱ Weekly Drops'].map((badge) => (
            <span
              key={badge}
              className="bg-surface border border-line rounded-full px-4 py-1.5 font-sans font-semibold text-[11px] tracking-[0.06em] text-ink"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-8">
          <a
            href={BRAND.social.marketplace.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-white font-sans font-bold text-[13px] tracking-[0.06em] px-7 py-3.5 rounded hover:bg-minted hover:text-ink transition-all duration-200"
          >
            SHOP THE STORE →
          </a>
          <a
            href="/about"
            className="bg-canvas text-ink font-sans font-semibold text-[13px] px-5 py-3.5 rounded border border-line2 hover:border-ink transition-all duration-200"
          >
            Our Story
          </a>
        </div>

        {/* Hours pill */}
        <p className="font-sans font-medium text-[12px] text-ink3">
          <span className="text-cash mr-1.5">●</span>
          Open Wed – Sat · 12 PM – 7 PM
        </p>

      </div>
    </section>
  )
}

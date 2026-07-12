import Link from 'next/link'
import { BRAND, STORE_HOURS_LINE } from '@/lib/constants'

export default function NotFound() {
  return (
    <section className="min-h-[80vh] bg-canvas flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden">
      {/* Background 404 watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <span className="font-display text-[20rem] text-ink/[0.03] leading-none">404</span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <span className="font-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-minted mb-4 block">PAGE NOT FOUND</span>
        <h1 className="font-display text-display-lg text-ink mb-4">Lost in the Stacks</h1>
        <p className="font-sans text-base text-ink3 max-w-[400px] mx-auto mb-10 leading-relaxed">
          This page doesn't exist — but the store does. Come find something real.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Link href="/" className="bg-ink text-white font-sans font-bold text-[13px] tracking-[0.06em] px-7 py-3.5 rounded hover:bg-minted hover:text-ink transition-all duration-200">
            Back to Home
          </Link>
          <a href={BRAND.social.marketplace.url} target="_blank" rel="noopener noreferrer"
             className="border border-line2 text-ink font-sans font-semibold text-[13px] px-7 py-3.5 rounded hover:border-ink transition-all duration-200">
            Shop the Store
          </a>
        </div>

        {/* Address card */}
        <div className="bg-surface rounded-lg border border-line p-6 max-w-[320px] mx-auto">
          <p className="font-display text-lg text-ink mb-1">{BRAND.address.line1}</p>
          <p className="font-sans text-sm text-ink3 mb-1">{BRAND.address.line2}</p>
          <p className="font-sans text-[13px] text-ink3">{STORE_HOURS_LINE}</p>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import { BRAND } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      className="relative w-full flex justify-center"
      style={{ background: 'var(--bg-page)', padding: 'clamp(64px,9vw,100px) 0 clamp(56px,8vw,88px)' }}
    >
      <div
        className="w-full flex flex-col items-center text-center"
        style={{ maxWidth: 680, padding: '0 clamp(20px,5vw,40px)', gap: 28 }}
      >
        {/* Logo glow ring */}
        <div
          className="rounded-full flex items-center justify-center"
          style={{
            width: 120,
            height: 120,
            border: '2px solid rgba(0,236,241,.5)',
            boxShadow: '0 0 24px rgba(0,236,241,.35), 0 0 56px rgba(0,236,241,.15)',
            background: 'rgba(8,10,9,0.5)',
            flexShrink: 0,
          }}
        >
          <Image
            src="/brand/logos/logo-circle-badge-transparent.png"
            alt="JAMIESSHOESS"
            width={112}
            height={112}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Headline block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <p className="font-sans font-bold text-[11px] tracking-[0.22em] uppercase text-white/30">
            Springfield, MO · Downtown · The 417
          </p>
          <h1
            className="font-display italic font-black uppercase text-white"
            style={{ fontSize: 'clamp(42px,7vw,64px)', lineHeight: 0.92, letterSpacing: '0.01em' }}
          >
            <span style={{ textShadow: '3px 3px 0 rgba(243,34,179,.55)' }}>
              Vintage Clothing
            </span>
            <br />
            <span className="text-minted" style={{ textShadow: '3px 3px 0 rgba(243,34,179,.4)' }}>
              &amp; Sneakers
            </span>
          </h1>
          <p className="font-sans font-medium text-[14px] leading-relaxed" style={{ color: '#FFFFFF', maxWidth: 480, margin: '0 auto' }}>
            Hand-picked vintage clothing, authenticated sneakers, and in-house merch — all in one store.
          </p>
        </div>

        {/* Stats row */}
        <div style={{ width: '100%' }}>
          <div
            className="flex items-center justify-center flex-wrap gap-x-7 gap-y-2"
            style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '14px 0' }}
          >
            {[
              { val: '7,100+', label: 'Instagram Followers' },
              { val: 'Weekly', label: 'New Drops' },
              { val: '100%',   label: 'Authenticated*' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-0.5">
                <span
                  className="font-display italic font-black uppercase text-minted"
                  style={{ fontSize: 20, letterSpacing: '0.01em', lineHeight: 1 }}
                >
                  {s.val}
                </span>
                <span className="font-sans font-bold text-[9px] tracking-[0.14em] uppercase text-white/30">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <p className="font-sans text-[10px] text-white/25 leading-relaxed text-center mt-2">
            *Authentication represents our best professional judgment. JAMIESSHOESS is not liable for manufacturer defects or authentication disputes on items previously purchased.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex gap-3 flex-wrap justify-center">
          <a
            href="/#products"
            className="font-display italic font-black uppercase text-leather rounded-sm transition-all duration-150 hover:bg-white active:scale-[0.97]"
            style={{
              fontSize: 17,
              background: '#00ECF1',
              padding: '13px 40px',
              letterSpacing: '0.02em',
              boxShadow: '0 0 28px rgba(0,236,241,.4)',
            }}
          >
            Browse the Store
          </a>
          <a
            href={BRAND.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display italic font-black uppercase text-white rounded-sm border border-white/20 transition-all duration-150 hover:border-white/50 hover:text-white"
            style={{ fontSize: 17, padding: '12px 32px', letterSpacing: '0.02em' }}
          >
            @JAMIESSHOESS ↗
          </a>
        </div>

        {/* Hours */}
        <p className="font-sans font-semibold text-[10px] tracking-[0.14em] uppercase text-white/20">
          Open Wed–Thu&nbsp;&nbsp;12–6 PM&nbsp;&nbsp;·&nbsp;&nbsp;Fri–Sat&nbsp;&nbsp;12–7 PM&nbsp;&nbsp;·&nbsp;&nbsp;Free Local Pickup
        </p>
      </div>
    </section>
  )
}

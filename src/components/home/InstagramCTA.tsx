import { BRAND } from '@/lib/constants'

export default function InstagramCTA() {
  return (
    <section
      className="border-t border-white/[0.06]"
      style={{ background: 'var(--bg-page)', padding: 'clamp(48px,7vw,72px) clamp(20px,5vw,52px)' }}
    >
      <div
        className="flex flex-col md:flex-row items-center md:items-end justify-between gap-10"
        style={{ maxWidth: 1260, margin: '0 auto' }}
      >
        {/* Left: big text */}
        <div>
          <p className="font-sans font-bold text-[10px] tracking-[0.22em] uppercase text-minted/70 mb-3">
            Follow Along
          </p>
          <h2
            className="font-display italic font-black uppercase text-white leading-none"
            style={{ fontSize: 'clamp(32px,6vw,56px)', letterSpacing: '0.01em' }}
          >
            New drops every
            <br />
            <span className="text-minted">weekend.</span>
          </h2>
          <p className="font-sans font-medium text-[14px] text-white/40 mt-4 max-w-[380px] leading-relaxed">
            Follow <strong className="text-white/70 font-bold">@jamiesshoess</strong> on Instagram for first access to new inventory, drop alerts, and behind-the-scenes from the shop.
          </p>
        </div>

        {/* Right: stat + button */}
        <div className="flex flex-col items-center md:items-end gap-5 flex-shrink-0">
          <div className="text-center md:text-right">
            <p
              className="font-display italic font-black uppercase text-minted"
              style={{ fontSize: 'clamp(36px,5vw,52px)', lineHeight: 1, letterSpacing: '0.01em' }}
            >
              6,100+
            </p>
            <p className="font-sans font-bold text-[10px] tracking-[0.16em] uppercase text-white/30 mt-1">
              Followers · @jamiesshoess
            </p>
          </div>
          <a
            href={BRAND.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display italic font-black uppercase text-leather rounded-sm transition-all duration-150 hover:bg-white active:scale-[0.97] whitespace-nowrap"
            style={{
              fontSize: 16,
              background: '#00ECF1',
              padding: '14px 36px',
              letterSpacing: '0.02em',
              boxShadow: '0 0 24px rgba(0,236,241,.25)',
            }}
          >
            Follow on Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}

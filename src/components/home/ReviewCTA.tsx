import Link from 'next/link'

export default function ReviewCTA() {
  return (
    <section
      className="border-t border-white/[0.07]"
      style={{
        background: 'var(--bg-elevated)',
        padding: 'clamp(40px,6vw,64px) clamp(16px,4vw,52px)',
      }}
    >
      <div style={{ maxWidth: 1260, margin: '0 auto' }}>
        <div
          className="rounded-lg p-8 md:p-12 text-center flex flex-col items-center gap-5"
          style={{
            background: 'linear-gradient(135deg, rgba(0,236,241,.1) 0%, rgba(243,34,179,.05) 100%)',
            border: '1px solid rgba(0,236,241,.2)',
          }}
        >
          <div className="flex gap-2" aria-label="5 stars">
            {[1,2,3,4,5].map((n) => (
              <svg key={n} width="28" height="28" viewBox="0 0 24 24" fill="#00ECF1" xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 0 5px rgba(0,236,241,.45))' }}>
                <polygon points="12,2 14.9,8.6 22,9.6 17,14.4 18.2,21.5 12,18.1 5.8,21.5 7,14.4 2,9.6 9.1,8.6" />
              </svg>
            ))}
          </div>

          <div>
            <p className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-minted mb-2">
              Enjoyed Shopping With Us?
            </p>
            <h2
              className="font-display italic font-black uppercase text-white mb-3"
              style={{ fontSize: 'clamp(24px,4vw,36px)', letterSpacing: '0.01em', lineHeight: 1.1 }}
            >
              Drop us a 5-star review
            </h2>
            <p className="font-sans font-medium text-[15px] text-white/60 max-w-xl mx-auto">
              30 seconds. We&apos;ll even give you the words — just copy and paste.
            </p>
          </div>

          <Link
            href="/review"
            className="font-display italic font-black uppercase text-leather rounded transition-all duration-150 hover:bg-white"
            style={{ fontSize: 16, background: '#00ECF1', padding: '14px 44px', letterSpacing: '0.02em', boxShadow: '0 0 24px rgba(0,236,241,.4)' }}
          >
            Leave a Review →
          </Link>

          <p className="font-sans text-[12px] text-white/35">
            Takes 30 seconds · Helps us grow in Springfield
          </p>
        </div>
      </div>
    </section>
  )
}

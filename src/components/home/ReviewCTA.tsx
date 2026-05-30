import Link from 'next/link'

export default function ReviewCTA() {
  // Google review link for JAMIESSHOESS
  // This is a typical Google review shortlink format for a business
  const googleReviewUrl = 'https://g.page/r/CbeaVjJFxqYEEAI/review'

  return (
    <section
      className="border-t border-white/[0.07]"
      style={{
        background: '#0d0f0e',
        padding: 'clamp(40px,6vw,64px) clamp(16px,4vw,52px)',
      }}
    >
      <div style={{ maxWidth: 1260, margin: '0 auto' }}>
        <div
          className="rounded-lg p-8 md:p-12 text-center flex flex-col items-center gap-6"
          style={{
            background: 'linear-gradient(135deg, rgba(0,236,241,.1) 0%, rgba(243,34,179,.05) 100%)',
            border: '1px solid rgba(0,236,241,.2)',
          }}
        >
          <div>
            <p className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-minted mb-2">
              Love What We Do?
            </p>
            <h2
              className="font-display italic font-black uppercase text-white mb-3"
              style={{
                fontSize: 'clamp(24px,4vw,36px)',
                letterSpacing: '0.01em',
                lineHeight: 1.1,
              }}
            >
              Leave Us a Google Review ⭐
            </h2>
            <p className="font-sans font-medium text-[15px] text-white/60 max-w-xl mx-auto mb-4">
              Help other collectors discover JAMIESSHOESS. Your review takes 60 seconds and means the world to us.
            </p>
          </div>

          <Link
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-minted text-leather font-display italic font-black uppercase px-6 py-4 rounded transition-all duration-150 hover:bg-white"
            style={{ fontSize: 14, letterSpacing: '0.02em' }}
          >
            Write a Review
          </Link>

          <p className="font-sans text-[12px] text-white/40">
            Takes 1 minute • Helps our community grow
          </p>
        </div>
      </div>
    </section>
  )
}

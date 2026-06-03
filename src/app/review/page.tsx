'use client'

import { useState } from 'react'
import Link from 'next/link'

const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJQXybl-hjz4cRBdj47dkboxY'

const SUGGESTIONS = [
  "Great shop! Found an awesome vintage piece I couldn't find anywhere else. The staff knows their stuff and prices are fair. Highly recommend.",
  "Amazing selection of sneakers and vintage clothing. Everything is authentic and hand-picked. Love this place — it's a hidden gem in Springfield.",
  "Best vintage and sneaker spot in Springfield. Unique pieces you won't find anywhere else. The vibe is great and the owner is super knowledgeable.",
  "Stopped in and left with something I didn't even know I needed. Real vintage, real sneakers, real people. 100% coming back.",
]

export default function ReviewPage() {
  const [copied, setCopied] = useState<number | null>(null)

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text)
    setCopied(idx)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <main className="min-h-[calc(100vh-64px)]" style={{ background: 'var(--bg-page)' }}>
      {/* Hero */}
      <section
        className="border-b border-white/[0.07] text-center"
        style={{ padding: 'clamp(48px,8vw,80px) clamp(16px,4vw,52px)' }}
      >
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          {/* Stars */}
          <div className="flex justify-center gap-3 mb-6" aria-label="5 stars">
            {[1,2,3,4,5].map((n) => (
              <svg key={n} width="clamp(36,8vw,52)" height="clamp(36,8vw,52)" viewBox="0 0 24 24" fill="#00ECF1" xmlns="http://www.w3.org/2000/svg"
                style={{ width: 'clamp(36px,7vw,52px)', height: 'clamp(36px,7vw,52px)', filter: 'drop-shadow(0 0 6px rgba(0,236,241,.5))' }}>
                <polygon points="12,2 14.9,8.6 22,9.6 17,14.4 18.2,21.5 12,18.1 5.8,21.5 7,14.4 2,9.6 9.1,8.6" />
              </svg>
            ))}
          </div>

          <p className="font-sans font-bold text-[11px] tracking-[0.22em] uppercase text-minted mb-3">
            Leave a Google Review
          </p>
          <h1
            className="font-display italic font-black uppercase text-white"
            style={{ fontSize: 'clamp(32px,6vw,52px)', lineHeight: 0.95, letterSpacing: '0.01em', marginBottom: 16 }}
          >
            Make sure to tap<br />
            <span className="text-minted">all 5 stars</span>
          </h1>
          <p className="font-sans font-medium text-[15px] text-white/55 leading-relaxed">
            Takes 30 seconds. Optional: copy a review below, then click the button.
          </p>
        </div>
      </section>

      {/* Suggested reviews */}
      <section style={{ padding: 'clamp(40px,6vw,64px) clamp(16px,4vw,52px)' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>

          <p className="font-sans font-bold text-[11px] tracking-[0.18em] uppercase text-white/35 mb-5 text-center">
            Optional — copy a review, then paste it on Google
          </p>

          <div className="flex flex-col gap-3 mb-10">
            {SUGGESTIONS.map((text, idx) => (
              <button
                key={idx}
                onClick={() => handleCopy(text, idx)}
                className="text-left w-full rounded-lg transition-all duration-150"
                style={{
                  background: copied === idx ? 'rgba(0,236,241,.12)' : 'rgba(255,255,255,.04)',
                  border: copied === idx ? '1px solid rgba(0,236,241,.5)' : '1px solid rgba(255,255,255,.08)',
                  padding: '16px 18px',
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-sans text-[13px] text-white/70 leading-relaxed flex-1">{text}</p>
                  <span
                    className="font-sans font-bold text-[11px] tracking-[0.08em] uppercase flex-shrink-0 mt-0.5 transition-colors"
                    style={{ color: copied === idx ? '#00ECF1' : 'rgba(255,255,255,.3)' }}
                  >
                    {copied === idx ? '✓ Copied' : 'Copy'}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 text-center">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display italic font-black uppercase text-leather rounded transition-all duration-150 hover:bg-white active:scale-[0.97]"
              style={{
                fontSize: 20,
                background: '#00ECF1',
                padding: '18px 52px',
                letterSpacing: '0.02em',
                boxShadow: '0 0 32px rgba(0,236,241,.45)',
                display: 'inline-block',
                width: '100%',
                textAlign: 'center',
              }}
            >
              Open Google Reviews ↗
            </a>
            <p className="font-sans text-[12px] text-white/30">
              Tap <strong className="text-white/50">all 5 stars</strong> · Type or paste your review · Hit submit
            </p>
          </div>

          <div
            className="mt-10 text-center"
            style={{ borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: 28 }}
          >
            <Link
              href="/"
              className="font-display italic font-black uppercase text-minted hover:text-white transition-colors duration-150"
              style={{ fontSize: 13, letterSpacing: '0.02em' }}
            >
              ← Back to Shop
            </Link>
          </div>

        </div>
      </section>
    </main>
  )
}

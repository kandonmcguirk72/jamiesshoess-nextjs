'use client'

import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section
      style={{
        background: '#080A09',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: 'clamp(56px,8vw,80px) clamp(16px,4vw,52px)',
      }}
    >
      <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
        <p className="font-sans font-bold text-[10px] tracking-[0.3em] uppercase text-minted/70 mb-3">
          Drop Alerts
        </p>
        <h2
          className="font-display italic font-black uppercase text-white"
          style={{ fontSize: 'clamp(28px,5vw,40px)', lineHeight: 0.95, letterSpacing: '0.01em', marginBottom: 12 }}
        >
          Be First On The Drop
        </h2>
        <p className="font-sans font-medium text-[14px] text-white/50 mb-8" style={{ lineHeight: 1.7 }}>
          Get texted when new inventory hits. No spam, ever.
        </p>

        {submitted ? (
          <p
            className="font-display italic font-black uppercase text-cash"
            style={{ fontSize: 'clamp(22px,4vw,32px)', letterSpacing: '0.01em' }}
          >
            You&apos;re on the list 🤙
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div className="flex flex-col sm:flex-row" style={{ gap: 0 }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/[0.06] border border-white/[0.12] sm:border-r-0 font-sans text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-minted"
                style={{ padding: '14px 18px', borderRadius: '4px 4px 0 0' }}
              />
              <button
                type="submit"
                className="font-sans font-bold text-[12px] tracking-[0.14em] uppercase hover:opacity-90 transition-opacity whitespace-nowrap"
                style={{
                  background: '#00E5FF',
                  color: '#080A09',
                  padding: '14px 28px',
                  borderRadius: '0 0 4px 4px',
                  boxShadow: '0 0 20px rgba(0,229,255,0.3)',
                }}
              >
                Notify Me
              </button>
            </div>
          </form>
        )}

        {!submitted && (
          <p className="font-sans text-[12px] text-white/30 mt-5" style={{ lineHeight: 1.7 }}>
            We&apos;ll also text drop alerts — DM{' '}
            <a
              href="https://instagram.com/JAMIESSHOESS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-minted transition-colors"
            >
              @JAMIESSHOESS
            </a>{' '}
            on Instagram to get on the SMS list.
          </p>
        )}
      </div>
    </section>
  )
}

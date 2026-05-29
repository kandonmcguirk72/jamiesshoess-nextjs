'use client'

import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="section bg-leather border-t border-white/[0.07]">
      <div className="container">
        <div className="max-w-[640px] mx-auto text-center">
          <span className="font-sans font-bold text-[10px] tracking-[0.3em] uppercase text-minted mb-4 block">
            BE FIRST
          </span>
          <h2
            className="font-display italic font-black uppercase text-white leading-none mb-4"
            style={{ fontSize: 'var(--text-display-lg)' }}
          >
            Every Drop, Before It Sells Out
          </h2>
          <p className="font-sans font-semibold text-[14px] text-white/45 mb-8">
            6,100 people follow @JAMIESSHOESS. Join them.
          </p>

          {submitted ? (
            <p
              className="font-display italic font-black uppercase text-cash"
              style={{ fontSize: 'var(--text-display-md)' }}
            >
              YOU&apos;RE IN ✓
            </p>
          ) : (
            <div className="flex flex-col sm:flex-row gap-0 mt-2">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/[0.06] border border-white/15 sm:border-r-0 px-[18px] py-3.5 text-white font-sans font-semibold text-[14px] placeholder:text-white/25 focus:outline-none focus:border-minted rounded-sm sm:rounded-r-none"
              />
              <button
                onClick={() => setSubmitted(true)}
                className="bg-minted text-leather font-sans font-bold text-[12px] tracking-[0.14em] uppercase px-6 py-3.5 rounded-sm sm:rounded-l-none hover:bg-white transition-colors duration-150 whitespace-nowrap"
                style={{ boxShadow: '0 0 18px rgba(0,236,241,.35)' }}
              >
                GET FIRST ACCESS →
              </button>
            </div>
          )}

          <p className="font-sans font-semibold text-[11px] tracking-[0.08em] uppercase text-white/25 mt-4">
            No spam · One email per drop
          </p>
        </div>
      </div>
    </section>
  )
}

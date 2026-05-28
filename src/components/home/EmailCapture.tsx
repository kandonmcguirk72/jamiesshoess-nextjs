'use client'

import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="section bg-ink">
      <div className="container">
        <div className="max-w-[640px] mx-auto text-center">
          <span className="font-sans font-bold text-[10px] tracking-[0.3em] uppercase text-minted mb-4 block">
            BE FIRST
          </span>
          <h2 className="font-display text-display-lg text-white leading-none mb-4">
            Every Drop, Before It Sells Out
          </h2>
          <p className="font-sans text-[15px] text-white/60 mb-8">
            6,100 people follow @JAMIESSHOESS. Join them.
          </p>

          {submitted ? (
            <p className="font-sans font-semibold text-base text-cash">
              YOU&apos;RE IN ✓
            </p>
          ) : (
            <div className="flex flex-col sm:flex-row gap-0 mt-2">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/[0.08] border border-white/20 sm:border-r-0 px-[18px] py-3.5 text-white font-sans text-[15px] placeholder:text-white/30 focus:outline-none focus:border-minted rounded-[4px] sm:rounded-r-none"
              />
              <button
                onClick={() => setSubmitted(true)}
                className="bg-minted text-ink font-sans font-bold text-[13px] tracking-[0.06em] px-6 py-3.5 rounded-[4px] sm:rounded-l-none hover:bg-white transition-all duration-200 whitespace-nowrap"
              >
                GET FIRST ACCESS →
              </button>
            </div>
          )}

          <p className="font-sans text-[11px] text-white/40 mt-4">
            No spam. One email per drop.
          </p>
        </div>
      </div>
    </section>
  )
}

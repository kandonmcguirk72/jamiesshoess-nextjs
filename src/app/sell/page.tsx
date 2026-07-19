// CLOVER INTEGRATION: When Squarespace Commerce is live,
// connect via Squarespace-Clover integration for unified
// inventory tracking across in-store (Clover) and online
// (Squarespace). See: squarespace.com/clover

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'

export default function SellPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [fileError, setFileError] = useState('')

  const MAX_FILE_SIZE = 5 * 1024 * 1024
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) { setFileError(''); return }
    if (!ALLOWED_TYPES.includes(file.type)) {
      setFileError('Invalid file type. Please upload JPG, PNG, or WEBP images. (Convert HEIC photos on your phone first)')
      e.target.value = ''
      return
    }
    if (file.size > MAX_FILE_SIZE) {
      setFileError(`File is too large. Maximum size is 5MB, but you selected ${(file.size / 1024 / 1024).toFixed(1)}MB.`)
      e.target.value = ''
      return
    }
    setFileError('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    const photoInput = (e.currentTarget.elements.namedItem('photo') as HTMLInputElement)
    const file = photoInput?.files?.[0]

    if (!file) { setError('Please upload a photo'); setLoading(false); return }
    if (!ALLOWED_TYPES.includes(file.type)) { setError('Invalid file type. Please upload JPG, PNG, or WEBP images.'); setLoading(false); return }
    if (file.size > MAX_FILE_SIZE) { setError(`Photo is too large (${(file.size / 1024 / 1024).toFixed(1)}MB). Maximum is 5MB.`); setLoading(false); return }

    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/sell', { method: 'POST', body: formData })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to submit')
      }
      setSuccess(true)
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-leather text-white">

      {/* Hero */}
      <section
        className="border-b border-white/[0.07]"
        style={{ padding: 'clamp(48px,7vw,80px) clamp(16px,4vw,52px)' }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p className="font-sans font-bold text-[10px] tracking-[0.24em] uppercase text-minted/70 mb-4">
            Sell or Trade
          </p>
          <h1
            className="font-display italic font-black uppercase text-white"
            style={{ fontSize: 'clamp(32px,5vw,52px)', letterSpacing: '0.01em', lineHeight: 0.95, marginBottom: 20 }}
          >
            Sell or Trade<br />Your Pieces
          </h1>
          <p className="font-sans font-medium text-[15px] text-white/60 leading-[1.7]" style={{ maxWidth: 560, marginBottom: 32 }}>
            Got vintage pieces, rare finds, or fresh kicks? Bring them in or send photos ahead of time. We evaluate on the spot — no hassle.
          </p>

          {/* Process steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            {[
              'Bring your items in-store Wed–Sun during open hours',
              'We evaluate on the spot — cash or store credit',
              'We buy vintage tees, sneakers, streetwear & more',
            ].map((step) => (
              <div key={step} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ color: '#00ECF1', fontWeight: 700, fontSize: 16, flexShrink: 0, marginTop: 1 }}>✓</span>
                <p className="font-sans font-medium text-[15px] text-white/70" style={{ lineHeight: 1.5 }}>
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={BRAND.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display italic font-black uppercase text-leather rounded-sm transition-all duration-150 hover:bg-white"
              style={{ fontSize: 15, background: '#00ECF1', padding: '13px 32px', letterSpacing: '0.02em', boxShadow: '0 0 24px rgba(0,236,241,.3)' }}
            >
              Get Directions
            </a>
            <a
              href={BRAND.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display italic font-black uppercase text-white border border-white/20 rounded-sm transition-all duration-150 hover:border-minted hover:text-minted"
              style={{ fontSize: 15, padding: '12px 28px', letterSpacing: '0.02em' }}
            >
              @JAMIESSHOESS ↗
            </a>
          </div>

          <p className="font-sans font-medium text-[13px] text-white/40 mt-5">
            Questions? DM us on Instagram{' '}
            <a href={BRAND.social.instagram.url} target="_blank" rel="noopener noreferrer" className="text-minted hover:text-white transition-colors">
              @JAMIESSHOESS
            </a>
          </p>
        </div>
      </section>

      {/* Optional: Submit photos ahead of time */}
      <section style={{ padding: 'clamp(40px,6vw,64px) clamp(16px,4vw,52px)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p className="font-sans font-bold text-[10px] tracking-[0.22em] uppercase text-minted/70 mb-3">
            Optional
          </p>
          <h2
            className="font-display italic font-black uppercase text-white mb-3"
            style={{ fontSize: 'clamp(22px,3.5vw,32px)', letterSpacing: '0.01em', lineHeight: 0.95 }}
          >
            Send Photos First
          </h2>
          <p className="font-sans font-medium text-[14px] text-white/50 mb-8" style={{ lineHeight: 1.7 }}>
            Send us photos and details ahead of time. We&apos;ll review and get back to you within 24–48 hours.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Your Name */}
            <div>
              <label htmlFor="name" className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-minted block mb-2">
                Your Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Jamie"
                required
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded px-4 py-3 font-sans text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-minted"
              />
            </div>

            {/* Contact */}
            <div>
              <label htmlFor="contact" className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-minted block mb-2">
                Email or Phone *
              </label>
              <input
                id="contact"
                type="text"
                name="contact"
                placeholder="your@email.com or 555-123-4567"
                required
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded px-4 py-3 font-sans text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-minted"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-minted block mb-2">
                What Are You Selling? *
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Vintage 90s NFL jersey, size XL. Great condition."
                required
                rows={4}
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded px-4 py-3 font-sans text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-minted resize-none"
              />
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-minted block mb-2">
                Asking Price (Optional)
              </label>
              <input
                id="price"
                type="number"
                name="price"
                placeholder="0.00"
                step="0.01"
                min="0"
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded px-4 py-3 font-sans text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-minted"
              />
            </div>

            {/* Photo */}
            <div>
              <label htmlFor="photo-input" className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-minted block mb-2">
                Photo (Required) — JPG, PNG, WEBP — Max 5MB
              </label>
              <input
                id="photo-input"
                type="file"
                name="photo"
                accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                required
                onChange={handleFileChange}
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded px-4 py-3 font-sans text-[14px] text-white"
              />
              {fileError && (
                <p className="text-red-400 font-sans text-[12px] mt-2">⚠ {fileError}</p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input
                id="termsAgreed"
                type="checkbox"
                name="termsAgreed"
                required
                className="w-5 h-5 mt-0.5 cursor-pointer accent-minted"
              />
              <label htmlFor="termsAgreed" className="font-sans text-[13px] text-white/70 cursor-pointer flex-1" style={{ lineHeight: 1.7 }}>
                I confirm I own this item and have the right to sell it. I agree to the{' '}
                <Link href="/terms" className="text-minted hover:text-white transition-colors font-semibold">
                  Terms of Service
                </Link>.
              </label>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded px-4 py-3 font-sans text-[14px] text-red-200">
                ✗ {error}
              </div>
            )}
            {success && (
              <div className="bg-green-500/20 border border-green-500/50 rounded px-4 py-3 font-sans text-[14px] text-green-200">
                ✓ Thanks! We&apos;ll review and get back to you soon.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '16px',
                marginTop: '8px',
                background: '#00ECF1',
                color: '#080A09',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.5 : 1,
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => !loading && (e.currentTarget.style.background = '#ffffff')}
              onMouseLeave={(e) => !loading && (e.currentTarget.style.background = '#00ECF1')}
            >
              {loading ? 'SENDING...' : 'SEND'}
            </button>

            <p className="font-sans text-[12px] text-white/40 text-center" style={{ lineHeight: 1.7 }}>
              We&apos;ll contact you within 1–2 business days. Submitting this form does not guarantee we will purchase your item.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}

'use client'

import { useState } from 'react'

export default function SellPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [fileError, setFileError] = useState('')

  const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB in bytes

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      setFileError('')
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

    // Final validation before submit
    const photoInput = (e.currentTarget.elements.namedItem('photo') as HTMLInputElement)
    const file = photoInput?.files?.[0]

    if (!file) {
      setError('Please upload a photo')
      setLoading(false)
      return
    }

    if (file.size > MAX_FILE_SIZE) {
      setError(`Photo is too large (${(file.size / 1024 / 1024).toFixed(1)}MB). Maximum is 5MB.`)
      setLoading(false)
      return
    }

    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch('/api/sell', {
        method: 'POST',
        body: formData,
      })

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
    <main className="min-h-[calc(100vh-64px)] bg-leather text-white">
      {/* Hero */}
      <section className="border-b border-white/[0.07]" style={{ padding: 'clamp(40px,6vw,80px) clamp(16px,4vw,52px)' }}>
        <div style={{ maxWidth: 1260, margin: '0 auto' }}>
          <h1
            className="font-display italic font-black uppercase text-white mb-3"
            style={{ fontSize: 'clamp(32px,5vw,48px)', letterSpacing: '0.01em', lineHeight: 0.95 }}
          >
            Sell Us Something
          </h1>
          <p className="font-sans font-medium text-[15px] text-white/60 max-w-2xl leading-relaxed">
            Got vintage pieces, rare finds, or fresh merch? Send us photos and details ahead of time. We'll review and get back to you within 24–48 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: 'clamp(40px,6vw,80px) clamp(16px,4vw,52px)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
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
              <label htmlFor="photo" className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-minted block mb-2">
                Photo (Required) — Max 5MB
              </label>
              <input
                id="photo-input"
                type="file"
                name="photo"
                accept="image/*"
                required
                onChange={handleFileChange}
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded px-4 py-3 font-sans text-[14px] text-white"
              />
              {fileError && (
                <p className="text-red-400 font-sans text-[12px] mt-2">⚠ {fileError}</p>
              )}
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded px-4 py-3 font-sans text-[14px] text-red-200">
                ✗ {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="bg-green-500/20 border border-green-500/50 rounded px-4 py-3 font-sans text-[14px] text-green-200">
                ✓ Thanks! We'll review and get back to you soon.
              </div>
            )}

            {/* Send Button */}
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

            <p className="font-sans text-[12px] text-white/40 text-center">
              We'll contact you within 1–2 business days.
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

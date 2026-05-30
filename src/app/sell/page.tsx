'use client'

import { useState, useRef } from 'react'
import { BRAND } from '@/lib/constants'

export default function SellPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [previewUrl, setPreviewUrl] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      setError('Image must be under 5MB')
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string)
      setError('')
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

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
      e.currentTarget.reset()
      setPreviewUrl('')
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
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-minted">
                Your Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Jamie"
                required
                className="bg-white/[0.05] border border-white/[0.1] rounded px-4 py-3 font-sans text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-minted focus:bg-white/[0.08] transition-colors"
              />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact" className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-minted">
                Email or Phone *
              </label>
              <input
                id="contact"
                type="text"
                name="contact"
                placeholder="your@email.com or 555-123-4567"
                required
                className="bg-white/[0.05] border border-white/[0.1] rounded px-4 py-3 font-sans text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-minted focus:bg-white/[0.08] transition-colors"
              />
            </div>

            {/* Item Description */}
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-minted">
                What Are You Selling? *
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Vintage 90s NFL jersey, size XL. Condition: great, faint crack on back of neck. True vintage, not a reprint."
                required
                rows={5}
                className="bg-white/[0.05] border border-white/[0.1] rounded px-4 py-3 font-sans text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-minted focus:bg-white/[0.08] transition-colors resize-none"
              />
            </div>

            {/* Asking Price */}
            <div className="flex flex-col gap-2">
              <label htmlFor="price" className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-minted">
                Asking Price (Optional)
              </label>
              <div className="flex items-center gap-2">
                <span className="text-white/40 font-sans font-bold">$</span>
                <input
                  id="price"
                  type="number"
                  name="price"
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  className="flex-1 bg-white/[0.05] border border-white/[0.1] rounded px-4 py-3 font-sans text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-minted focus:bg-white/[0.08] transition-colors"
                />
              </div>
            </div>

            {/* Photo Upload */}
            <div className="flex flex-col gap-2">
              <label htmlFor="photo" className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-minted">
                Photo (Required) — Max 5MB
              </label>
              <input
                ref={fileInputRef}
                id="photo"
                type="file"
                name="photo"
                accept="image/*"
                required
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-white/[0.2] rounded px-4 py-6 text-center font-sans text-[14px] text-white/60 hover:border-minted hover:text-minted transition-colors cursor-pointer"
              >
                {previewUrl ? '✓ Photo Selected — Click to Change' : 'Click to Upload Photo'}
              </button>
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full aspect-square object-cover rounded border border-white/[0.1]"
                />
              )}
            </div>

            {/* Messages */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded px-4 py-3 font-sans text-[14px] text-red-200">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-500/20 border border-green-500/50 rounded px-4 py-3 font-sans text-[14px] text-green-200">
                ✓ Thanks! We'll review and get back to you soon.
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-minted text-leather font-display italic font-black uppercase py-4 rounded transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white"
              style={{ fontSize: 16, letterSpacing: '0.02em' }}
            >
              {loading ? 'Sending...' : 'SEND'}
            </button>

            <p className="font-sans text-[12px] text-white/40 text-center">
              We'll contact you within 1–2 business days. Store hours: Wed–Thu 12–6pm · Fri–Sat 12–7pm (Central Time)
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface AnalyticsData {
  totalVisits: number
  todayVisits: number
  topPages: Array<{ page: string; views: number }>
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)

  // Check if already authenticated on mount
  useEffect(() => {
    const token = sessionStorage.getItem('admin_token')
    if (token) {
      setAuthenticated(true)
      fetchAnalytics()
    }
  }, [])

  // Fetch analytics data
  const fetchAnalytics = async () => {
    try {
      const res = await fetch('/api/admin/analytics')
      if (res.ok) {
        const data = await res.json()
        setAnalytics(data)
      }
    } catch (err) {
      console.error('Failed to fetch analytics:', err)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (!res.ok) {
        setError('Incorrect password')
        setPassword('')
        setLoading(false)
        return
      }

      sessionStorage.setItem('admin_token', 'authenticated')
      setAuthenticated(true)
      setPassword('')
      fetchAnalytics()
    } catch (err) {
      setError('Authentication failed')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('admin_token')
    setAuthenticated(false)
    setAnalytics(null)
  }

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-leather text-white flex items-center justify-center" style={{ padding: '20px' }}>
        <div
          style={{
            width: '100%',
            maxWidth: 400,
            background: '#111312',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8,
            padding: '40px 32px',
          }}
        >
          <h1 className="font-display italic font-black uppercase text-minted mb-2" style={{ fontSize: 24 }}>
            Admin Access
          </h1>
          <p className="font-sans text-[14px] text-white/60 mb-6">Enter password to continue</p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="bg-white/[0.05] border border-white/[0.1] rounded px-4 py-3 font-sans text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-minted transition-colors"
              disabled={loading}
            />

            {error && <div className="text-red-400 font-sans text-[13px]">✗ {error}</div>}

            <button
              type="submit"
              disabled={loading || !password}
              className="bg-minted text-leather font-display italic font-black uppercase py-3 rounded transition-all duration-150 disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Unlock Dashboard'}
            </button>
          </form>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-leather text-white">
      {/* Header */}
      <header
        className="border-b border-white/[0.07] sticky top-0 z-40 bg-leather/90 backdrop-blur"
        style={{ padding: '20px clamp(16px,4vw,52px)' }}
      >
        <div
          className="flex items-center justify-between"
          style={{ maxWidth: 1260, margin: '0 auto' }}
        >
          <h1 className="font-display italic font-black uppercase text-minted" style={{ fontSize: 18 }}>
            Moderator Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="font-sans font-bold text-[11px] tracking-[0.14em] uppercase text-white/60 hover:text-minted transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Content */}
      <section style={{ padding: 'clamp(32px,6vw,64px) clamp(16px,4vw,52px)' }}>
        <div style={{ maxWidth: 1260, margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Visitor Stats */}
            <div
              style={{
                background: '#111312',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8,
                padding: 24,
              }}
            >
              <p className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-minted mb-2">
                Total Visits (7d)
              </p>
              <p className="font-display italic font-black text-[40px] text-white">
                {analytics?.totalVisits || '—'}
              </p>
            </div>

            <div
              style={{
                background: '#111312',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8,
                padding: 24,
              }}
            >
              <p className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-minted mb-2">
                Today's Visits
              </p>
              <p className="font-display italic font-black text-[40px] text-white">
                {analytics?.todayVisits || '—'}
              </p>
            </div>

            <div
              style={{
                background: '#111312',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8,
                padding: 24,
              }}
            >
              <p className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-flash mb-2">
                Top Page
              </p>
              <p className="font-sans text-[14px] text-white leading-tight">
                {analytics?.topPages?.[0]?.page || '—'} ({analytics?.topPages?.[0]?.views || 0})
              </p>
            </div>
          </div>

          {/* Top Pages */}
          <div
            style={{
              background: '#111312',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              padding: 24,
            }}
          >
            <h2 className="font-sans font-bold text-[14px] tracking-[0.12em] uppercase text-minted mb-4">
              Top Pages
            </h2>
            <div className="space-y-3">
              {analytics?.topPages && analytics.topPages.length > 0 ? (
                analytics.topPages.map((page, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="font-sans text-[13px] text-white/80">{page.page}</span>
                    <span className="font-mono text-[13px] text-minted font-bold">{page.views}</span>
                  </div>
                ))
              ) : (
                <p className="text-white/40 text-[13px]">No analytics data available yet</p>
              )}
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="https://g.page/r/CbeaVjJFxqYEEAI/review"
              target="_blank"
              className="block bg-minted text-leather font-display italic font-black uppercase py-6 rounded text-center transition-all duration-150 hover:bg-white"
              style={{ fontSize: 16, letterSpacing: '0.02em' }}
            >
              ⭐ Ask for Google Review
            </Link>

            <Link
              href="/sell"
              className="block bg-flash text-white font-display italic font-black uppercase py-6 rounded text-center transition-all duration-150 hover:bg-opacity-80"
              style={{ fontSize: 16, letterSpacing: '0.02em' }}
            >
              📸 View Sell Form
            </Link>
          </div>

          {/* Info */}
          <p className="font-sans text-[12px] text-white/40 mt-8 text-center">
            Analytics refresh periodically. Check back for latest data.
          </p>
        </div>
      </section>
    </main>
  )
}

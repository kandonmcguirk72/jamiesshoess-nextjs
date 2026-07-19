// CLOVER INTEGRATION: When Squarespace Commerce is live,
// connect via Squarespace-Clover integration for unified
// inventory tracking across in-store (Clover) and online
// (Squarespace). See: squarespace.com/clover

import type { Metadata } from 'next'
import Link from 'next/link'
import { BRAND, STORE_HOURS_LINE } from '@/lib/constants'
import MapSection from '@/components/home/MapSection'

export const metadata: Metadata = {
  title: 'About — JAMIESSHOESS',
  description: "The story behind Springfield's favorite vintage and sneaker shop.",
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--bg-page)' }}>

      {/* Hero */}
      <section
        style={{
          background: 'var(--bg-page)',
          borderBottom: '1px solid rgba(255,255,255,.06)',
          padding: 'clamp(60px,10vw,100px) clamp(20px,5vw,52px)',
        }}
      >
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p className="font-sans font-bold text-[10px] tracking-[0.24em] uppercase text-minted/70 mb-4">
            Our Story
          </p>
          <h1
            className="font-display italic font-black uppercase text-white"
            style={{ fontSize: 'clamp(40px,7vw,60px)', lineHeight: 0.95, letterSpacing: '0.01em', marginBottom: 24 }}
          >
            From a small town dream to Springfield&apos;s{' '}
            <span className="text-minted">favorite find.</span>
          </h1>
          <p
            className="font-sans font-medium text-[15px] text-white/50"
            style={{ maxWidth: 560, lineHeight: 1.7 }}
          >
            JAMIESSHOESS isn&apos;t just a store. It&apos;s what happens when one person refuses to let go of a dream and builds something real from it.
          </p>
        </div>
      </section>

      {/* Story content */}
      <section style={{ padding: 'clamp(48px,8vw,80px) clamp(20px,5vw,52px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>

          <div style={{ marginBottom: 48 }}>
            <p className="font-sans font-bold text-[10px] tracking-[0.14em] uppercase text-white/30 mb-3">
              Where it started
            </p>
            <p className="font-sans font-medium text-[15px] text-white/60" style={{ lineHeight: 1.7 }}>
              JAMIESSHOESS is a little shop in the heart of Springfield doing something we love — bringing together vintage clothing, authentic sneakers, and good energy all under one roof at 302 Park Central East.
            </p>
          </div>

          <blockquote
            style={{
              borderLeft: '2px solid rgba(0,236,241,.3)',
              paddingLeft: 24,
              marginBottom: 48,
              paddingTop: 4,
              paddingBottom: 4,
            }}
          >
            <p className="font-display italic font-black uppercase text-minted" style={{ fontSize: 24, lineHeight: 1.4, letterSpacing: '0.01em' }}>
              &quot;I always knew I wanted to build something real. I just had to be brave enough to go get it.&quot;
            </p>
          </blockquote>

          <div style={{ marginBottom: 48 }}>
            <p className="font-sans font-bold text-[10px] tracking-[0.14em] uppercase text-white/30 mb-3">
              The move that changed everything
            </p>
            <p className="font-sans font-medium text-[15px] text-white/60" style={{ lineHeight: 1.7 }}>
              We built this place to be more than a store. It&apos;s a space where you can dig through racks, find something you didn&apos;t know you were looking for, and leave feeling inspired. Whether you grew up thrifting on weekends, have been collecting sneakers for years, or you&apos;re just curious what all the fuss is about — you belong here.
            </p>
          </div>

          <div style={{ marginBottom: 48 }}>
            <p className="font-sans font-bold text-[10px] tracking-[0.14em] uppercase text-white/30 mb-3">
              Today
            </p>
            <p className="font-sans font-medium text-[15px] text-white/60" style={{ lineHeight: 1.7 }}>
              Every item we carry is hand-picked. We don&apos;t do fakes, we don&apos;t do filler. Just honest pieces with character, priced fairly.
            </p>
            <p className="font-sans font-medium text-[15px] text-white/60" style={{ lineHeight: 1.7, marginTop: 16 }}>
              Springfield is our home and this community is why we do it. When you shop with us, you&apos;re helping us grow something we believe in — and helping us give back to the community that&apos;s supported us from day one. We&apos;re grateful for every single person who walks through that door.
            </p>
          </div>

          {/* Stats 2×2 grid */}
          <div
            className="grid grid-cols-2 gap-px"
            style={{ border: '1px solid rgba(255,255,255,.07)', background: 'rgba(255,255,255,.07)', marginBottom: 48 }}
          >
            {[
              { label: 'Founded',  value: '10+ Years',          sub: 'in the resale market' },
              { label: 'Location', value: '302 Park Central East', sub: 'Downtown Springfield' },
              { label: 'Hours',    value: 'Wed – Sun',           sub: STORE_HOURS_LINE },
              { label: 'Services', value: 'Buy · Trade · Sell',  sub: 'Vintage & sneakers' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 p-6" style={{ background: 'var(--bg-page)' }}>
                <span className="font-sans font-bold text-[9px] tracking-[0.2em] uppercase text-white/30">
                  {stat.label}
                </span>
                <span
                  className="font-display italic font-black uppercase text-white leading-tight"
                  style={{ fontSize: 'clamp(14px,2vw,18px)', letterSpacing: '0.01em' }}
                >
                  {stat.value}
                </span>
                <span className="font-sans font-semibold text-[11px] text-white/35">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ marginBottom: 56 }}>
            {[
              { icon: '◈', title: 'Handpicked, always', desc: 'Every item is personally sourced. No shortcuts, no filler—just great finds.' },
              { icon: '✦', title: 'Local & proud',       desc: 'A Springfield small business. When you shop here, you back a real dream.' },
              { icon: '◎', title: 'Style without rules', desc: 'Vintage, rare, bold, classic—if it speaks to you, it belongs here.' },
            ].map((v) => (
              <div
                key={v.title}
                style={{
                  background: 'rgba(0,236,241,.04)',
                  border: '1px solid rgba(0,236,241,.1)',
                  borderRadius: 8,
                  padding: 24,
                }}
              >
                <p className="text-minted font-sans font-bold text-[20px] mb-3">{v.icon}</p>
                <p className="font-sans font-bold text-[14px] text-white/80 mb-2">{v.title}</p>
                <p className="font-sans font-medium text-[13px] text-white/50" style={{ lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              background: 'rgba(0,236,241,.05)',
              border: '1px solid rgba(0,236,241,.15)',
              borderRadius: 12,
              padding: 'clamp(32px,5vw,48px) clamp(24px,5vw,40px)',
              textAlign: 'center',
            }}
          >
            <h2
              className="font-display italic font-black uppercase text-white"
              style={{ fontSize: 'clamp(28px,5vw,40px)', marginBottom: 12, letterSpacing: '0.01em' }}
            >
              Come find your pair.
            </h2>
            <p className="font-sans font-medium text-[15px] text-white/50 mb-6" style={{ maxWidth: 480, margin: '0 auto 24px', lineHeight: 1.7 }}>
              Whether you&apos;re a lifelong sneakerhead, a vintage fashion lover, or just someone who appreciates something real — you belong here.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href={BRAND.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display italic font-black uppercase text-leather rounded-sm transition-all duration-150 hover:bg-white"
                style={{ fontSize: 15, background: '#00ECF1', padding: '12px 32px', letterSpacing: '0.02em', boxShadow: '0 0 20px rgba(0,236,241,.25)' }}
              >
                Get Directions
              </a>
              <a
                href={BRAND.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display italic font-black uppercase text-white border border-white/20 rounded-sm transition-all duration-150 hover:border-minted hover:text-minted"
                style={{ fontSize: 15, padding: '11px 28px', letterSpacing: '0.02em' }}
              >
                @JAMIESSHOESS ↗
              </a>
            </div>
          </div>

          {/* Signature */}
          <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,.06)' }}>
            <p className="font-display italic font-black uppercase text-minted" style={{ fontSize: 28, marginBottom: 4, letterSpacing: '0.01em', lineHeight: 1 }}>
              — Jamie
            </p>
            <p className="font-sans font-semibold text-[11px] tracking-[0.12em] uppercase text-white/25">
              Founder, JAMIESSHOESS · Springfield, MO
            </p>
          </div>

        </div>
      </section>

      <MapSection />

      {/* Back to home */}
      <section
        style={{
          borderTop: '1px solid rgba(255,255,255,.06)',
          padding: 'clamp(32px,5vw,56px) clamp(20px,5vw,52px)',
          textAlign: 'center',
        }}
      >
        <Link
          href="/"
          className="font-display italic font-black uppercase text-minted hover:text-white transition-colors duration-150"
          style={{ fontSize: 15, letterSpacing: '0.02em' }}
        >
          ← Back to Shop
        </Link>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About — JAMIESSHOESS',
  description: "The story behind Springfield's favorite vintage and sneaker shop.",
}

export default function AboutPage() {
  return (
    <main style={{ background: '#080A09' }}>
      {/* Hero */}
      <section
        style={{
          background: '#080A09',
          borderBottom: '1px solid rgba(255,255,255,.06)',
          padding: 'clamp(60px,10vw,100px) clamp(20px,5vw,52px)',
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p className="font-sans font-bold text-[10px] tracking-[0.24em] uppercase text-minted/70 mb-4">
            Our Story
          </p>
          <h1
            className="font-display italic font-black uppercase text-white"
            style={{ fontSize: 'clamp(40px,7vw,60px)', lineHeight: 0.95, letterSpacing: '0.01em', marginBottom: 24 }}
          >
            From a small town dream to Springfield&apos;s <span className="text-minted">favorite find.</span>
          </h1>
          <p
            className="font-sans font-medium text-[15px] text-white/50 leading-relaxed"
            style={{ maxWidth: 560 }}
          >
            JAMIESSHOESS isn&apos;t just a store. It&apos;s what happens when one person refuses to let go of a dream and builds something real from it.
          </p>
        </div>
      </section>

      {/* Story content */}
      <section style={{ padding: 'clamp(48px,8vw,80px) clamp(20px,5vw,52px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>

          {/* Where it started */}
          <div style={{ marginBottom: 48 }}>
            <p className="font-sans font-bold text-[10px] tracking-[0.14em] uppercase text-white/30 mb-3">
              Where it started
            </p>
            <p className="font-sans font-medium text-[15px] text-white/60 leading-[1.8]">
              Jamie Logan grew up in Springfield—a place with big dreams and real potential. From an early age, Jamie had a gift: the ability to find <span className="text-white/80 font-semibold">the one</span>. Not just any shoe, but the authentic piece worth owning. The rare sneaker hiding in plain sight. The vintage gem that told a story.
            </p>
          </div>

          {/* Pull quote */}
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

          {/* The move */}
          <div style={{ marginBottom: 48 }}>
            <p className="font-sans font-bold text-[10px] tracking-[0.14em] uppercase text-white/30 mb-3">
              The move that changed everything
            </p>
            <p className="font-sans font-medium text-[15px] text-white/60 leading-[1.8]">
              When Jamie committed to Springfield, it wasn&apos;t a vacation—it was a <span className="text-white/80 font-semibold">bet on himself</span>. Starting from scratch in a new city, with a vision and not much else, Jamie started building. Sourcing vintage pieces. Tracking down rare sneakers. Learning the business from the ground up. Every early morning, every late night, every &quot;are you sure?&quot; moment—Jamie stayed the course.
            </p>
          </div>

          {/* Today */}
          <div style={{ marginBottom: 56 }}>
            <p className="font-sans font-bold text-[10px] tracking-[0.14em] uppercase text-white/30 mb-3">
              Today
            </p>
            <p className="font-sans font-medium text-[15px] text-white/60 leading-[1.8]">
              JAMIESSHOESS is now a real, living, breathing shop right here at 302 Park Central East. A curated mix of <span className="text-white/80 font-semibold">vintage treasures and sought-after sneakers</span>—handpicked by someone who genuinely loves what they do. Every item has been chosen with care. You won&apos;t find filler here. You&apos;ll find pieces with character, history, and style—things you actually want to wear.
            </p>
          </div>

          {/* Values grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ marginBottom: 56 }}
          >
            {[
              { icon: '◈', title: 'Handpicked, always', desc: 'Every item is personally sourced. No shortcuts, no filler—just great finds.' },
              { icon: '✦', title: 'Local & proud', desc: 'A Springfield small business. When you shop here, you back a real dream.' },
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
                <p className="font-sans font-medium text-[13px] text-white/50 leading-relaxed">{v.desc}</p>
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
            <p className="font-sans font-medium text-[15px] text-white/50 leading-relaxed mb-6" style={{ maxWidth: 480, margin: '0 auto 24px' }}>
              Whether you&apos;re a lifelong sneakerhead, a vintage fashion lover, or just someone who appreciates something real—you belong here. Stop by and see what we&apos;ve been working on.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href="/#products"
                className="font-display italic font-black uppercase text-leather rounded-sm transition-all duration-150 hover:bg-white"
                style={{ fontSize: 15, background: '#00ECF1', padding: '12px 36px', letterSpacing: '0.02em', boxShadow: '0 0 20px rgba(0,236,241,.25)' }}
              >
                Shop Now
              </a>
              <a
                href={BRAND.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display italic font-black uppercase text-white border border-white/20 rounded-sm transition-all duration-150 hover:border-minted hover:text-minted"
                style={{ fontSize: 15, padding: '11px 32px', letterSpacing: '0.02em' }}
              >
                @JAMIESSHOESS ↗
              </a>
            </div>
          </div>

          {/* Signature */}
          <div
            style={{
              marginTop: 56,
              paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,.06)',
            }}
          >
            <p className="font-display italic font-black uppercase text-minted" style={{ fontSize: 28, marginBottom: 4, letterSpacing: '0.01em', lineHeight: 1 }}>
              — Jamie
            </p>
            <p className="font-sans font-semibold text-[11px] tracking-[0.12em] uppercase text-white/25">
              Founder, JAMIESSHOESS · Springfield, MO
            </p>
          </div>

        </div>
      </section>

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
    </main>
  )
}

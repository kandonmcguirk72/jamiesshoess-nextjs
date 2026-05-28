import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'About',
  description: "The story behind JAMIESSHOESS — Springfield's sneaker boutique on Historic Route 66.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vw] max-h-[560px] min-h-[320px] bg-ink overflow-hidden">
        <Image src={BRAND.images.heroStorefront} alt="JAMIESSHOESS store" fill priority className="object-cover opacity-60" sizes="100vw" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-display text-display-xl text-white leading-none">
            BUILT ON HUSTLE.<br />ROOTED IN SPRINGFIELD.
          </h1>
        </div>
      </section>

      {/* Founder quote */}
      <section className="section-sm bg-canvas border-b border-line">
        <div className="container-xs text-center">
          <blockquote className="font-sans text-2xl md:text-3xl text-ink2 leading-relaxed italic">
            &ldquo;{BRAND.founderQuote}&rdquo;
          </blockquote>
          <cite className="block not-italic font-sans font-bold text-sm text-ink mt-4">
            — {BRAND.founder}, Founder of JAMIESSHOESS
          </cite>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-canvas">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <FadeIn>
              <h2 className="font-display text-display-md text-ink mb-6">The Story</h2>
              <p className="font-sans text-base text-ink2 leading-[1.8] mb-4">
                JAMIESSHOESS started the way most real things start — with a problem and the stubbornness to solve it. Jamie grew up hunting sneakers and vintage clothing in Springfield and kept running into the same wall: nothing worth coming back to. So he built it himself.
              </p>
              <p className="font-sans text-base text-ink2 leading-[1.8]">
                302 Park Central East sits on Historic Route 66 in downtown Springfield — 16 doors from the Route 66 Welcome Center. Every piece on the floor was hand-picked. Every sneaker authenticated. Nothing gets in without earning it.
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <h2 className="font-display text-display-md text-ink mb-6">The Mission</h2>
              <p className="font-sans text-base text-ink2 leading-[1.8] mb-4">
                The resale market is full of noise. Overpriced platforms, mystery sellers, fake authentication, shipping delays. JAMIESSHOESS is the alternative — come in, try it on, walk out with something real today.
              </p>
              <p className="font-sans text-base text-ink2 leading-[1.8]">
                Vintage clothing is better for the planet. Pre-owned sneakers are better for your wallet. And when you buy local, you're investing in your city. That's the whole play.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-surface border-y border-line">
        <div className="container">
          <FadeIn>
            <span className="font-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-minted mb-3 block">HOW WE OPERATE</span>
            <h2 className="font-display text-display-md text-ink mb-10">What We Stand For</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRAND.values.map((val, i) => (
              <FadeIn key={val.title} delay={i * 80}>
                <div className="bg-canvas rounded-lg p-6 shadow-card h-full">
                  <h3 className="font-display text-xl text-ink tracking-[0.03em] mb-3">{val.title}</h3>
                  <p className="font-sans text-[14px] text-ink3 leading-relaxed">{val.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-canvas">
        <div className="container">
          <FadeIn>
            <h2 className="font-display text-display-md text-ink mb-12 text-center">The Journey</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: '2018', title: 'The Hunt Begins',   desc: "Jamie starts buying and flipping sneakers locally. No store, no strategy — just hustle." },
              { year: '2020', title: 'Going Social',       desc: "Instagram becomes the storefront. @JAMIESSHOESS grows to thousands of followers organically." },
              { year: '2022', title: 'Brick & Mortar',    desc: "The store opens at 302 Park Central East on Historic Route 66. Springfield's only dedicated sneaker boutique." },
              { year: 'Now',  title: '50K Items & Going', desc: "New drops every week, 6K+ followers, and a community that plans their weekends around the store." },
            ].map((step, i) => (
              <FadeIn key={step.year} delay={i * 100}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-minted flex items-center justify-center font-display text-lg text-ink mx-auto mb-4">
                    {i + 1}
                  </div>
                  <span className="font-sans font-bold text-[11px] tracking-[0.2em] uppercase text-minted block mb-1">{step.year}</span>
                  <h3 className="font-display text-xl text-ink tracking-[0.03em] mb-2">{step.title}</h3>
                  <p className="font-sans text-[13px] text-ink3 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-ink text-center">
        <div className="container-sm">
          <h2 className="font-display text-display-md text-white mb-6">Come See It Yourself</h2>
          <p className="font-sans text-base text-white/60 mb-8 max-w-[440px] mx-auto">
            {BRAND.address.line1} · {BRAND.address.line2} · Open Wed–Sat
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/location" className="bg-minted text-ink font-sans font-bold text-[13px] tracking-[0.06em] px-7 py-3.5 rounded hover:bg-white transition-all duration-200">
              Get Hours & Directions
            </Link>
            <a href={BRAND.social.instagram.url} target="_blank" rel="noopener noreferrer"
               className="border border-white/30 text-white font-sans font-semibold text-[13px] px-7 py-3.5 rounded hover:border-white transition-all duration-200">
              Follow @JAMIESSHOESS
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about JAMIESSHOESS — authenticity, location, hours, pricing, and more.',
  alternates: { canonical: '/faq' },
}

export default function FaqPage() {
  return (
    <>
      <section className="section-sm bg-canvas border-b border-line">
        <div className="container text-center">
          <span className="font-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-minted mb-3 block">GOT QUESTIONS</span>
          <h1 className="font-display text-display-lg text-ink">FAQ</h1>
          <p className="font-sans text-base text-ink3 mt-3 max-w-[480px] mx-auto">
            Everything you need to know before visiting. Still have a question?{' '}
            <a href={BRAND.social.instagram.url} target="_blank" rel="noopener noreferrer" className="text-ink font-semibold underline">
              DM us on Instagram.
            </a>
          </p>
        </div>
      </section>

      <section className="section bg-canvas">
        <div className="container-xs">
          <div className="divide-y divide-[#E8E8E6]">
            {BRAND.faq.map((item) => (
              <details key={item.q} className="group py-1">
                <summary className="flex justify-between items-center py-5 font-sans font-semibold text-base text-ink cursor-pointer list-none select-none">
                  {item.q}
                  <span className="ml-4 flex-shrink-0 font-sans text-xl text-ink3 group-open:text-minted transition-colors">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <div className="pb-5 font-sans text-[15px] text-ink3 leading-[1.7]">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-surface rounded-lg p-8 text-center border border-line">
            <h2 className="font-display text-2xl text-ink mb-2">Still have a question?</h2>
            <p className="font-sans text-sm text-ink3 mb-6">We reply fast on Instagram DM.</p>
            <a href={BRAND.social.instagram.url} target="_blank" rel="noopener noreferrer"
               className="inline-block bg-ink text-white font-sans font-bold text-[12px] tracking-[0.06em] px-6 py-3 rounded hover:bg-minted hover:text-ink transition-all duration-200">
              DM @JAMIESSHOESS →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

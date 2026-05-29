'use client'

import { useState } from 'react'
import Image from 'next/image'
import { BRAND } from '@/lib/constants'

export default function Categories() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="section bg-leather">
      <div className="container">

        {/* Section header */}
        <span className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-minted mb-3 block">
          WHAT&apos;S IN STOCK
        </span>
        <h2
          className="font-display italic font-black uppercase text-white"
          style={{ fontSize: 'var(--text-display-lg)', lineHeight: 0.95 }}
        >
          Everything We Run
        </h2>
        <p className="font-sans font-semibold text-[14px] text-white/40 mt-2 mb-10">
          Hand-picked, never bulk. New pieces every week.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {BRAND.categories.map((cat) => (
            <div
              key={cat.id}
              className="relative bg-surface2 rounded-sm overflow-hidden cursor-pointer group transition-all duration-200"
              style={{
                border: `1px solid ${hoveredId === cat.id ? 'rgba(0,236,241,.35)' : 'rgba(255,255,255,.07)'}`,
                boxShadow: hoveredId === cat.id ? '0 0 20px rgba(0,236,241,.1)' : 'none',
              }}
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative h-48 lg:h-56 img-zoom">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  loading="lazy"
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 pb-5">
                <p className="font-sans font-bold text-[9px] tracking-[0.2em] text-white/30 mb-1 uppercase">
                  {cat.num}
                </p>
                <p
                  className="font-display italic font-black uppercase text-white leading-none"
                  style={{ fontSize: '1.375rem', letterSpacing: '0.01em' }}
                >
                  {cat.name}
                </p>
                <p className="font-sans font-bold text-[11px] tracking-[0.1em] uppercase text-minted mt-1 mb-2">
                  {cat.price}
                </p>
                <p className="font-sans text-[12px] text-white/40 leading-relaxed mt-1">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center mt-8 font-sans font-semibold text-[13px] text-white/30 tracking-[0.06em]">
          Inventory turns every week · Latest drops on{' '}
          <a
            href={BRAND.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-minted hover:underline"
          >
            @JAMIESSHOESS
          </a>
        </p>

      </div>
    </section>
  )
}

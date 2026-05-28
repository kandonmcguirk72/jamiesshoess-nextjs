'use client'

import { useState } from 'react'
import Image from 'next/image'
import { BRAND } from '@/lib/constants'

export default function Categories() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="section bg-canvas">
      <div className="container">

        {/* Section header */}
        <span className="font-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-minted mb-3 block">
          WHAT&apos;S IN STOCK
        </span>
        <h2 className="font-display text-display-lg text-ink">
          Everything We Run
        </h2>
        <p className="font-sans text-[15px] text-ink3 mt-2 mb-10">
          Hand-picked, never bulk. New pieces every week.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {BRAND.categories.map((cat) => (
            <div
              key={cat.id}
              className="relative bg-surface rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-250 cursor-pointer group"
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
                <p className="font-sans font-bold text-[10px] tracking-[0.2em] text-ink3 mb-1">
                  {cat.num}
                </p>
                <p className="font-display text-2xl text-ink tracking-[0.04em] leading-none">
                  {cat.name}
                </p>
                <p className="font-sans font-semibold text-[12px] text-minted mt-1 mb-2">
                  {cat.price}
                </p>
                <p className="font-sans text-[13px] text-ink3 leading-relaxed mt-1.5">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center mt-8 font-sans text-[14px] text-ink3">
          Inventory turns over every week · Latest drops on{' '}
          <a
            href={BRAND.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink font-semibold hover:text-minted transition-colors"
          >
            Instagram →
          </a>
        </p>

      </div>
    </section>
  )
}

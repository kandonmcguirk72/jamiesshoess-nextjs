'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

interface Props {
  images: string[]
  alt: string
  badge?: string | null
  badgeColor?: string | null
}

export default function ProductGallery({ images, alt, badge, badgeColor }: Props) {
  const [active, setActive] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const hasMultiple = images.length > 1

  function prev() { setActive((i) => (i - 1 + images.length) % images.length) }
  function next() { setActive((i) => (i + 1) % images.length) }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (!hasMultiple || touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev()
    touchStartX.current = null
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {/* Main image */}
      <div
        style={{ position: 'relative', aspectRatio: '1', borderRadius: 8, overflow: 'hidden', background: '#0A0D0C' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Image
          key={images[active]}
          src={images[active]}
          alt={alt}
          fill
          sizes="(max-width:768px) 100vw, 500px"
          style={{ objectFit: 'cover' }}
          priority
        />

        {badge && badgeColor && (
          <span style={{
            position: 'absolute', top: 16, left: 16,
            background: badgeColor, color: '#080A09',
            fontFamily: "'Barlow Condensed',sans-serif", fontStyle: 'italic', fontWeight: 900,
            fontSize: 13, textTransform: 'uppercase', padding: '3px 12px', borderRadius: 4,
          }}>
            {badge}
          </span>
        )}

        {hasMultiple && (
          <>
            {/* Counter */}
            <div style={{
              position: 'absolute', top: 12, right: 12,
              background: 'rgba(8,10,9,0.75)', color: '#8A9290',
              fontSize: 11, fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 700, letterSpacing: '0.08em',
              padding: '3px 8px', borderRadius: 3,
            }}>
              {active + 1}/{images.length}
            </div>

            {/* Prev / Next arrows */}
            <button
              onClick={prev}
              aria-label="Previous image"
              style={{
                position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(8,10,9,0.65)', border: 'none', borderRadius: 4,
                color: '#F4F4F4', cursor: 'pointer', width: 34, height: 34,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              style={{
                position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(8,10,9,0.65)', border: 'none', borderRadius: 4,
                color: '#F4F4F4', cursor: 'pointer', width: 34, height: 34,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>

            {/* Dot indicators */}
            <div style={{
              position: 'absolute', bottom: 12, left: 0, right: 0,
              display: 'flex', justifyContent: 'center', gap: 5,
              pointerEvents: 'none',
            }}>
              {images.map((_, i) => (
                <span key={i} style={{
                  display: 'block',
                  width: i === active ? 18 : 6, height: 6, borderRadius: 3,
                  background: i === active ? '#00ECF1' : 'rgba(0,236,241,0.3)',
                  transition: 'width .2s, background .2s',
                }} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {hasMultiple && (
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 2 }}>
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              style={{
                flexShrink: 0, width: 70, height: 70,
                borderRadius: 5, overflow: 'hidden',
                position: 'relative',
                border: `2px solid ${i === active ? '#00ECF1' : 'rgba(0,236,241,0.15)'}`,
                background: '#0A0D0C', padding: 0, cursor: 'pointer',
                transition: 'border-color .15s',
              }}
            >
              <Image
                src={src}
                alt={`${alt} — view ${i + 1}`}
                fill
                sizes="70px"
                style={{ objectFit: 'cover' }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

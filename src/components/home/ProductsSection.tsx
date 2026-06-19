'use client'

import { useState, useMemo, useEffect, useRef, useCallback, Suspense } from 'react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { PRODUCTS } from '@/lib/products'
import type { Product } from '@/lib/products'

const FILTERS = [
  { label: 'New This Week', id: 'new' },
  { label: 'Shop',          id: 'shop' },
  { label: 'Vintage',       id: 'vintage' },
  { label: 'Merch',         id: 'merch' },
  { label: 'Headwear',      id: 'headwear' },
]
const VALID_FILTER_IDS = FILTERS.map((f) => f.id)

const AVAILABLE = PRODUCTS.filter((p) => p.stock > 0)

function ProductCard({ product, imageMap }: { product: Product; imageMap: Record<string, string[]> }) {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartX = useRef<number | null>(null)

  const isTemplate = product.template === true
  const sqsSlug = product.squarespaceUrl?.split('/p/')?.[1]
  const imgs = (sqsSlug && imageMap[sqsSlug]?.length)
    ? imageMap[sqsSlug]
    : (product.images?.length ? product.images : [product.img])
  const hasMultiple = imgs.length > 1

  const startCycle = useCallback(() => {
    if (!hasMultiple) return
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imgs.length)
    }, 800)
  }, [hasMultiple, imgs.length])

  const stopCycle = useCallback(() => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null }
  }, [])

  useEffect(() => {
    if (hovered && !isTemplate) { startCycle() }
    else { stopCycle(); setActiveIndex(0) }
    return stopCycle
  }, [hovered, isTemplate, startCycle, stopCycle])

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }
  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null || !hasMultiple) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) {
      setActiveIndex((prev) =>
        delta > 0 ? (prev + 1) % imgs.length : (prev - 1 + imgs.length) % imgs.length
      )
    }
    touchStartX.current = null
  }

  return (
    <div
      onClick={isTemplate ? undefined : () => router.push(`/product/${product.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={isTemplate ? undefined : handleTouchStart}
      onTouchEnd={isTemplate ? undefined : handleTouchEnd}
      style={{
        background: 'var(--color-bg-card)',
        borderRadius: 10,
        overflow: 'hidden',
        cursor: isTemplate ? 'default' : 'pointer',
        border: `1px solid ${hovered && !isTemplate ? 'rgba(0,236,241,.35)' : 'var(--color-border)'}`,
        boxShadow: hovered && !isTemplate ? '0 0 20px rgba(0,236,241,.1)' : 'var(--color-card-shadow, none)',
        transition: 'border-color .18s, box-shadow .18s',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div style={{ width: '100%', aspectRatio: '4/5', position: 'relative', background: 'var(--color-bg-surface)', flexShrink: 0 }}>
        <Image
          src={imgs[activeIndex] ?? product.img}
          alt={isTemplate ? 'Coming soon listing' : product.full}
          fill
          sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 220px"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          loading="lazy"
        />

        {/* Template overlay */}
        {isTemplate && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(8,10,9,0.55)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontStyle: 'italic', fontWeight: 900, fontSize: 13,
              textTransform: 'uppercase', letterSpacing: '0.12em',
              color: '#F322B3', border: '1px solid rgba(243,34,179,0.5)',
              padding: '6px 16px', borderRadius: 3,
            }}>
              Coming Soon
            </span>
          </div>
        )}

        {/* Badge */}
        {!isTemplate && product.tags.length > 0 && (() => {
          const badgeTag = product.tags.find((t) => ['SALE','1/1','NEW','VTG'].includes(t))
          const badgeColor: Record<string, string> = { SALE: '#FF2D2D', '1/1': '#00ECF1', NEW: '#FF6B35', VTG: '#00ECF1' }
          return badgeTag ? (
            <span style={{
              position: 'absolute', top: 10, left: 10,
              background: badgeColor[badgeTag] ?? '#00ECF1',
              color: '#080A09',
              fontFamily: "'Barlow Condensed',sans-serif",
              fontStyle: 'italic', fontWeight: 900,
              fontSize: 11, textTransform: 'uppercase',
              letterSpacing: '0.1em', padding: '3px 10px', borderRadius: 3,
            }}>
              {badgeTag}
            </span>
          ) : null
        })()}

        {/* Multi-image dots */}
        {hasMultiple && !isTemplate && (
          <div style={{
            position: 'absolute', bottom: 8, left: 0, right: 0,
            display: 'flex', justifyContent: 'center', gap: 4,
            pointerEvents: 'none',
          }}>
            {imgs.map((_, i) => (
              <span key={i} style={{
                display: 'block',
                width: i === activeIndex ? 14 : 5,
                height: 5, borderRadius: 3,
                background: i === activeIndex ? '#00ECF1' : 'rgba(0,236,241,0.3)',
                transition: 'width .2s, background .2s',
              }} />
            ))}
          </div>
        )}

        {/* Image counter */}
        {hasMultiple && !isTemplate && (
          <div style={{
            position: 'absolute', top: 8, right: 8,
            background: 'rgba(8,10,9,0.72)', color: '#8A9290',
            fontSize: 10, fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 700, letterSpacing: '0.08em',
            padding: '2px 6px', borderRadius: 2,
          }}>
            {activeIndex + 1}/{imgs.length}
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '10px 12px 12px', flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontWeight: 600, fontSize: '0.8rem',
          textTransform: 'uppercase', letterSpacing: '0.08em',
          color: isTemplate ? 'var(--color-text-size)' : 'var(--color-text-primary)',
          lineHeight: 1.25, wordBreak: 'break-word', overflowWrap: 'break-word',
        }}>
          {product.name}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2 }}>
          <span style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
            fontSize: '1.1rem',
            color: isTemplate ? 'var(--color-text-size)' : '#FFFFFF', lineHeight: 1,
          }}>
            {isTemplate ? '—' : `$${product.price % 1 === 0 ? product.price : product.price.toFixed(2)}`}
          </span>
          <span style={{
            fontFamily: 'inherit', fontSize: '0.75rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.05em',
            color: 'var(--color-text-size)', lineHeight: 1,
          }}>
            SZ {product.size}
          </span>
        </div>
      </div>
    </div>
  )
}

function ProductsSectionInner({ imageMap }: { imageMap: Record<string, string[]> }) {
  const searchParams = useSearchParams()
  const [activeFilter, setActiveFilter] = useState('shop')

  useEffect(() => {
    const f = searchParams.get('filter')?.toLowerCase()
    setActiveFilter(f && VALID_FILTER_IDS.includes(f) ? f : 'shop')
  }, [searchParams])

  const handleFilter = (id: string) => {
    setActiveFilter(id)
    const qs = id === 'shop' ? '' : `?filter=${id}`
    window.history.replaceState(null, '', `/${qs}#products`)
  }

  const filtered = useMemo(() => {
    if (activeFilter === 'shop') return AVAILABLE
    if (activeFilter === 'new') return AVAILABLE.filter((p) => p.tags.includes('NEW'))
    return AVAILABLE.filter((p) => p.cat === activeFilter)
  }, [activeFilter])

  return (
    <section
      id="products"
      className="border-t border-white/[0.07]"
      style={{ background: 'var(--bg-page)', padding: 'clamp(40px,6vw,64px) clamp(16px,4vw,52px)' }}
    >
      <div style={{ maxWidth: 1260, margin: '0 auto' }}>
        {/* Heading */}
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <p className="font-sans font-bold text-[10px] tracking-[0.22em] uppercase text-minted/70 mb-2">Now In-Store</p>
            <h2
              className="font-display italic font-black uppercase text-white"
              style={{ fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '0.01em', lineHeight: 0.95 }}
            >
              Shop the Floor
            </h2>
          </div>
          <span className="font-sans font-bold text-[11px] tracking-[0.14em] uppercase text-white/30">
            {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-7">
          {FILTERS.map((f) => {
            const active = activeFilter === f.id
            return (
              <button
                key={f.id}
                onClick={() => handleFilter(f.id)}
                className="font-sans font-bold text-[11px] tracking-[0.14em] uppercase rounded transition-all duration-150"
                style={{
                  padding: '8px 20px',
                  border: `1px solid ${active ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  background: active ? 'var(--color-accent-subtle)' : 'none',
                  color: active ? 'var(--color-accent)' : 'var(--color-text-filter)',
                  whiteSpace: 'nowrap',
                }}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 16 }}>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} imageMap={imageMap} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 font-sans font-bold text-[13px] tracking-[0.12em] uppercase text-white/30">
            No items in this category right now — check back soon
          </div>
        )}
      </div>
    </section>
  )
}

export default function ProductsSection({ imageMap = {} }: { imageMap?: Record<string, string[]> }) {
  return (
    <Suspense fallback={null}>
      <ProductsSectionInner imageMap={imageMap} />
    </Suspense>
  )
}

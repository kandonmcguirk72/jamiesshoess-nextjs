'use client'

import { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { PRODUCTS } from '@/lib/products'
import type { Product } from '@/lib/products'

const FILTERS = ['Shop', 'Vintage', 'Merch', 'Headwear']
const VALID_FILTERS = FILTERS.map((f) => f.toLowerCase())

const BADGE_COLOR: Record<string, string> = {
  SALE: '#FF2D2D',
  '1/1': '#00ECF1',
  VTG:  '#00ECF1',
  NEW:  '#FF6B35',
}

const AVAILABLE = PRODUCTS.filter((p) => p.stock > 0)

function ProductCard({ product }: { product: Product }) {
  const router = useRouter()
  const [hovered, setHovered] = useState(false)
  const firstTag = product.tags.find((t) => ['SALE', '1/1', 'NEW', 'VTG'].includes(t))
  const badgeColor = firstTag ? BADGE_COLOR[firstTag] : null

  return (
    <div
      onClick={() => router.push(`/product/${product.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--color-bg-card)',
        borderRadius: 6,
        overflow: 'hidden',
        cursor: 'pointer',
        border: `1px solid ${hovered ? 'rgba(0,236,241,.35)' : 'var(--color-border)'}`,
        boxShadow: hovered ? '0 0 20px rgba(0,236,241,.1)' : 'var(--color-card-shadow, none)',
        transition: 'border-color .18s, box-shadow .18s',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image — 4/5 portrait, top-aligned so collars aren't cropped */}
      <div style={{ width: '100%', aspectRatio: '4/5', position: 'relative', background: 'var(--color-bg-surface)', flexShrink: 0 }}>
        <Image
          src={product.img}
          alt={product.full}
          fill
          sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 220px"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          loading="lazy"
        />
        {firstTag && badgeColor && (
          <span style={{
            position: 'absolute', top: 10, left: 10,
            background: badgeColor, color: '#080A09',
            fontFamily: "'Barlow Condensed',sans-serif", fontStyle: 'italic', fontWeight: 900,
            fontSize: 11, textTransform: 'uppercase', padding: '2px 8px', borderRadius: 3,
          }}>
            {firstTag}
          </span>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '10px 12px 8px', flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--color-text-primary)', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {product.name}
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontStyle: 'italic', fontWeight: 900, fontSize: 18, color: 'var(--color-accent)', lineHeight: 1 }}>
            ${product.price % 1 === 0 ? product.price : product.price.toFixed(2)}
          </span>
          <span style={{ fontFamily: 'inherit', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--color-text-size)', lineHeight: 1 }}>
            · SZ {product.size}
          </span>
        </div>
      </div>

    </div>
  )
}

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState('shop')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const f = params.get('filter')?.toLowerCase()
    if (f && VALID_FILTERS.includes(f)) setActiveFilter(f)
  }, [])

  const handleFilter = (f: string) => {
    setActiveFilter(f)
    const qs = f === 'shop' ? '' : `?filter=${f}`
    window.history.replaceState(null, '', `/${qs}#products`)
  }

  const filtered = useMemo(() => {
    if (activeFilter === 'shop') return AVAILABLE
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
            const active = activeFilter === f.toLowerCase()
            return (
              <button
                key={f}
                onClick={() => handleFilter(f.toLowerCase())}
                className="font-sans font-bold text-[11px] tracking-[0.14em] uppercase rounded transition-all duration-150"
                style={{
                  padding: '8px 20px',
                  border: `1px solid ${active ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  background: active ? 'var(--color-accent-subtle)' : 'none',
                  color: active ? 'var(--color-accent)' : 'var(--color-text-filter)',
                }}
              >
                {f}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 16 }}>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
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

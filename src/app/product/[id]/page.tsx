import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { fetchProducts, SQUARESPACE_STORE_URL } from '@/lib/products'
import ProductGallery from '@/components/ProductGallery'

export const revalidate = 3600

const BADGE_COLOR: Record<string, string> = {
  SALE: '#FF2D2D',
  '1/1': '#00ECF1',
  VTG:  '#00ECF1',
  NEW:  '#5AE131',
}

const DEFAULT_DESCRIPTION = 'Vintage condition. Minor wear expected. All items are hand-picked and authenticated by JAMIESSHOESS.'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const products = (await fetchProducts()) ?? []
  const product = products.find((p) => p.id === id)
  if (!product) return {}
  return {
    title: `${product.full} — JAMIESSHOESS`,
    description: product.description || DEFAULT_DESCRIPTION,
    alternates: { canonical: `/product/${id}` },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const products = await fetchProducts()
  // null = feed outage: fail the request (retryable error) rather than 404ing
  // a real product URL — a cached 404 would outlive the outage.
  if (products === null) throw new Error('Store feed unreachable — cannot render product page')
  const product = products.find((p) => p.id === id)
  if (!product) notFound()

  const firstTag = product.tags.find((t) => ['SALE', '1/1', 'NEW', 'VTG'].includes(t))
  const badgeColor = firstTag ? BADGE_COLOR[firstTag] : null
  const description = product.description || DEFAULT_DESCRIPTION
  const isHighPrice = product.price >= 60
  const galleryImages = product.images.length ? product.images : [product.img]
  const buyUrl = product.squarespaceUrl ?? SQUARESPACE_STORE_URL

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-page)' }}>
      <section style={{ padding: 'clamp(32px,5vw,64px) clamp(16px,4vw,52px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>

          {/* Back link */}
          <Link
            href="/#products"
            className="inline-flex items-center gap-1.5 font-sans font-bold text-[11px] tracking-[0.14em] uppercase text-white/40 hover:text-minted transition-colors duration-150 mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* Gallery */}
            <ProductGallery
              images={galleryImages}
              alt={product.full}
              badge={firstTag ?? null}
              badgeColor={badgeColor}
            />

            {/* Details */}
            <div className="flex flex-col gap-5">

              {/* Category label */}
              <p className="font-sans font-bold text-[10px] tracking-[0.22em] uppercase text-minted/70">
                {product.cat === 'merch' ? 'JAMIESSHOESS Merch' : product.cat === 'headwear' ? 'Headwear' : product.cat === 'sneakers' ? 'Sneakers' : 'Vintage'}
              </p>

              {/* Name + price */}
              <div>
                <h1
                  className="font-display italic font-black uppercase text-white"
                  style={{ fontSize: 'clamp(22px,3.5vw,34px)', letterSpacing: '0.01em', lineHeight: 1.1, marginBottom: 10 }}
                >
                  {product.full}
                </h1>
                <div
                  className="font-display italic font-black text-minted"
                  style={{ fontSize: 'clamp(30px,5vw,46px)', letterSpacing: '0.01em', lineHeight: 1 }}
                >
                  {product.price > 0
                    ? `$${product.price % 1 === 0 ? product.price : product.price.toFixed(2)}`
                    : 'See price →'}
                </div>
              </div>

              {/* Size badge */}
              <div
                className="inline-flex items-center gap-3"
                style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '10px 0' }}
              >
                <span className="font-sans font-bold text-[10px] tracking-[0.18em] uppercase text-white/35">Size</span>
                <span
                  className="font-display italic font-black uppercase text-white"
                  style={{ fontSize: 20 }}
                >
                  {product.size}
                </span>
              </div>

              {/* Size & Fit note for $60+ */}
              {isHighPrice && (
                <div
                  className="flex items-start gap-3"
                  style={{ borderLeft: '2px solid rgba(0,236,241,.35)', paddingLeft: 14 }}
                >
                  <p className="font-sans text-[12px] text-white/50 leading-relaxed">
                    <span className="font-bold text-white/70">Size &amp; Fit:</span>{' '}
                    Measurements available in store or via DM — reach out before purchasing if sizing is a concern.
                  </p>
                </div>
              )}

              {/* Description */}
              <p className="font-sans text-[14px] text-white/60 leading-relaxed">
                {description}
              </p>

              {/* Buy button */}
              <div className="flex flex-col gap-3 pt-1">
                <a
                  href={buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display italic font-black uppercase text-leather text-center rounded-sm transition-all duration-150 hover:bg-white active:scale-[0.97]"
                  style={{
                    fontSize: 18,
                    background: '#00ECF1',
                    padding: '16px 0',
                    letterSpacing: '0.02em',
                    boxShadow: '0 0 28px rgba(0,236,241,.4)',
                    display: 'block',
                  }}
                >
                  Buy Now
                </a>
              </div>

              <p className="font-sans font-semibold text-[10px] tracking-[0.14em] uppercase text-white/25 text-center">
                Checkout via our shop · Local pickup · 302 Park Central East, Springfield MO
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

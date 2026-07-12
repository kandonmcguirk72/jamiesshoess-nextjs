// Server component. Rendered in place of the product grid when the store
// feed (shop.jamiesshoes.com public JSON) is unreachable — never show an
// empty section.

import { SQUARESPACE_STORE_URL } from '@/lib/products'
import ProductsHeading from './ProductsHeading'

export default function ProductsFallback() {
  return (
    <section
      id="products"
      className="border-t border-white/[0.07]"
      style={{ background: 'var(--bg-page)', padding: 'clamp(40px,6vw,64px) clamp(16px,4vw,52px)' }}
    >
      <div style={{ maxWidth: 1260, margin: '0 auto' }}>
        <ProductsHeading />

        <div
          className="border border-minted/25 bg-minted/[0.03]"
          style={{
            marginTop: 28,
            borderRadius: 10,
            padding: 'clamp(32px,5vw,56px) clamp(20px,4vw,40px)',
            textAlign: 'center',
          }}
        >
          <p
            className="font-display italic font-black uppercase text-minted"
            style={{ fontSize: 'clamp(18px,2.5vw,24px)', lineHeight: 1.1 }}
          >
            The floor is moving fast
          </p>
          <p className="font-sans font-bold text-[12px] tracking-[0.12em] uppercase text-white/50 mt-3">
            Fresh drops are live on the shop right now
          </p>
          <a
            href={SQUARESPACE_STORE_URL}
            className="inline-block bg-minted text-leather font-sans font-bold text-[12px] tracking-[0.16em] uppercase transition-opacity duration-150 hover:opacity-85"
            style={{ marginTop: 24, padding: '13px 34px', borderRadius: 6 }}
          >
            Shop the Full Collection →
          </a>
        </div>
      </div>
    </section>
  )
}

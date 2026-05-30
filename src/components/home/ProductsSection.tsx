'use client'

import { useState, useMemo } from 'react'
import { useCart } from '@/lib/cart-context'
import type { CartItem } from '@/lib/cart-context'

interface Product extends CartItem {
  cat: string
  tags: string[]
  origPrice?: number
}

const PRODUCTS: Product[] = [
  { id:1,  name:'VTG NASCAR AOP',           full:'VTG NASCAR AOP (SIZE L)',                    size:'L',        price:45,    cat:'vintage',  tags:['VTG','Y2K'],                  emoji:'🏎️' },
  { id:2,  name:'VTG JERRY RICE 49ERS TEE', full:'VTG 1998 JERRY RICE 49ERS TEE (SIZE M)',    size:'M',        price:14.99, cat:'vintage',  tags:['VTG','SINGLE STITCH','SALE'], emoji:'🏈', origPrice:45 },
  { id:3,  name:'CARHARTT × JMSSHS HOODIE', full:'CARHARTT × JAMIESSHOESS HOODIE (SIZE S–3XL)',size:'S–3XL',   price:120,   cat:'collab',   tags:['COLLAB','1/1'],               emoji:'🧥' },
  { id:4,  name:'AIR MAX 90 OG 1985',       full:'NIKE AIR MAX 90 OG 1985 (SIZE 10)',          size:'10',       price:285,   cat:'sneakers', tags:['1/1','VTG'],                  emoji:'👟' },
  { id:5,  name:'JOHN DEERE × JMSSHS HAT',  full:'JOHN DEERE × JAMIESSHOESS WORK HAT',        size:'ONE SIZE', price:45,    cat:'collab',   tags:['COLLAB'],                     emoji:'🧢' },
  { id:6,  name:'JMSSHS MERCH HOODIE',      full:'JAMIESSHOESS HOODIE (SIZE S–3XL)',            size:'S–3XL',   price:65,    cat:'merch',    tags:[],                             emoji:'👕' },
  { id:7,  name:'VTG STARTER NFL JACKET',   full:'VTG STARTER NFL AOP JACKET (SIZE XL)',       size:'XL',       price:89,    cat:'vintage',  tags:['VTG','Y2K'],                  emoji:'🏈' },
  { id:8,  name:'NIKE SB DUNK LOW',         full:'NIKE SB DUNK LOW (SIZE 9.5)',                size:'9.5',      price:185,   cat:'sneakers', tags:[],                             emoji:'👟' },
  { id:9,  name:'VTG SINGLE STITCH TEE',    full:'VTG SINGLE STITCH GRAPHIC TEE (SIZE M)',     size:'M',        price:28,    cat:'vintage',  tags:['VTG','SINGLE STITCH'],        emoji:'👕' },
  { id:10, name:'JORDAN 1 HIGH OG',         full:'AIR JORDAN 1 HIGH OG CHICAGO (SIZE 11)',     size:'11',       price:420,   cat:'sneakers', tags:['1/1'],                        emoji:'👟' },
  { id:11, name:'VTG DENIM JACKET',         full:'VTG 90s DENIM JACKET (SIZE M)',              size:'M',        price:55,    cat:'vintage',  tags:['VTG'],                        emoji:'🧥' },
  { id:12, name:'JMSSHS CREW SWEATSHIRT',   full:'JAMIESSHOESS CREW SWEATSHIRT (SIZE S–3XL)',  size:'S–3XL',   price:55,    cat:'merch',    tags:[],                             emoji:'👕' },
]

const FILTERS = ['Shop', 'Sneakers', 'Vintage', 'Merch', 'Collab']

const TAG_MAP: Record<string, { bg: string; color: string }> = {
  VTG:            { bg:'#E8F9FA', color:'#006B70' },
  'Y2K':          { bg:'#FFF0F8', color:'#B0006E' },
  '1/1':          { bg:'#EDFCE8', color:'#2A7A12' },
  SALE:           { bg:'#FFEAEA', color:'#CC0000' },
  'SINGLE STITCH':{ bg:'#F5F5F5', color:'#555' },
  COLLAB:         { bg:'#FFF0F8', color:'#B0006E' },
}

const BADGE_COLOR: Record<string, string> = {
  SALE: '#FF2D2D',
  '1/1': '#00ECF1',
  COLLAB: '#F322B3',
  VTG: '#00ECF1',
}


function Tag({ label }: { label: string }) {
  const s = TAG_MAP[label] || { bg:'#F2F2F2', color:'#666' }
  return (
    <span style={{ display:'inline-block', fontFamily:'inherit', fontSize:9, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', padding:'2px 7px', borderRadius:2, marginRight:4, marginBottom:3, background:s.bg, color:s.color }}>
      {label}
    </span>
  )
}

function ProductCard({ product, onQuickView }: { product: Product; onQuickView: (p: Product) => void }) {
  const [hovered, setHovered] = useState(false)
  const firstTag = product.tags.find((t) => ['SALE','1/1','COLLAB','VTG'].includes(t))
  const badgeColor = firstTag ? BADGE_COLOR[firstTag] : null
  const imgBg = product.id % 3 === 0 ? '#F5F5F5' : product.id % 3 === 1 ? '#F0F0F0' : '#FAFAFA'

  return (
    <div
      onClick={() => onQuickView(product)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#ffffff',
        borderRadius: 6,
        overflow: 'hidden',
        cursor: 'pointer',
        border: `1px solid ${hovered ? 'rgba(0,236,241,.35)' : 'rgba(0,0,0,.25)'}`,
        boxShadow: hovered ? '0 0 20px rgba(0,236,241,.1)' : 'none',
        transition: 'border-color .18s, box-shadow .18s',
      }}
    >
      {/* Image placeholder — clean dark until real product photos are added */}
      <div style={{ width:'100%', aspectRatio:'1', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', background: imgBg }}>
        <span
          className="font-display italic font-black uppercase select-none"
          style={{ fontSize: 48, color: 'rgba(0,0,0,0.05)', letterSpacing: '0.01em', userSelect: 'none' }}
          aria-hidden="true"
        >
          JS
        </span>
        {firstTag && badgeColor && (
          <span style={{ position:'absolute', top:10, left:10, background:badgeColor, color: badgeColor==='#F322B3'?'#fff':'#080A09', fontFamily:"'Barlow Condensed',sans-serif", fontStyle:'italic', fontWeight:900, fontSize:11, textTransform:'uppercase', padding:'2px 8px', borderRadius:3 }}>
            {firstTag}
          </span>
        )}
      </div>
    </div>
  )
}

function QuickView({ product, onClose }: { product: Product; onClose: () => void }) {
  const { addToCart, openCart } = useCart()

  return (
    <div
      style={{ position:'fixed', inset:0, background:'rgba(8,10,9,.75)', zIndex:500, display:'flex', alignItems:'center', justifyContent:'center', backdropFilter:'blur(4px)', padding:24 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div style={{ background:'#fff', borderRadius:8, overflow:'hidden', width:'100%', maxWidth:700, maxHeight:'90vh', display:'flex', flexDirection:'column', boxShadow:'0 32px 80px rgba(0,0,0,.5)' }}>
        <div style={{ background:'#080A09', padding:'14px 20px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span className="font-display italic font-black uppercase text-minted" style={{ fontSize:18 }}>JAMIESSHOESS</span>
          <button onClick={onClose} style={{ background:'none', border:'none', cursor:'pointer', color:'rgba(255,255,255,.6)', fontSize:22, lineHeight:1, padding:0 }}>×</button>
        </div>
        <div style={{ display:'flex', flex:1, overflow:'hidden' }}>
          <div style={{ width:'50%', display:'flex', alignItems:'center', justifyContent:'center', background:'#F2F2F0', flexShrink:0 }}>
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontStyle:'italic', fontWeight:900, fontSize:72, color:'rgba(0,0,0,0.05)', letterSpacing:'0.01em' }}>JS</span>
          </div>
          <div style={{ flex:1, padding:28, overflowY:'auto' }}>
            <div style={{ marginBottom:8 }}>{product.tags.map((t) => <Tag key={t} label={t} />)}</div>
            <div className="font-sans font-bold text-[15px] tracking-[0.06em] uppercase text-ink leading-tight mb-3">
              {product.full}
            </div>
            <div className="font-display italic font-black text-[36px] text-ink mb-1" style={{ letterSpacing:'0.01em' }}>
              ${product.price.toFixed(2)}
            </div>
            <div className="font-sans font-bold text-[11px] tracking-[0.14em] uppercase text-ink3 mb-5">
              Size: {product.size}
            </div>
            <button
              onClick={() => { addToCart(product); openCart(); onClose() }}
              className="w-full font-display italic font-black uppercase text-leather rounded mb-2.5 transition-colors duration-150 hover:bg-minted-dark"
              style={{ fontSize:20, background:'#00ECF1', padding:'14px 0', letterSpacing:'0.02em', boxShadow:'0 0 18px rgba(0,236,241,.35)' }}
            >
              ADD TO CART
            </button>
            <p className="font-sans font-semibold text-[11px] tracking-[0.1em] uppercase text-ink3 text-center leading-relaxed">
              Pick up at 302 Park Central East, Springfield MO<br />
              We also accept trades — ask in store!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState('shop')
  const [qvProduct, setQvProduct] = useState<Product | null>(null)

  const filtered = useMemo(() => {
    if (activeFilter === 'shop') return PRODUCTS
    return PRODUCTS.filter((p) => p.cat === activeFilter)
  }, [activeFilter])

  return (
    <>
      <section
        id="products"
        className="border-t border-white/[0.07]"
        style={{ background:'#080A09', padding:'clamp(40px,6vw,64px) clamp(16px,4vw,52px)' }}
      >
        <div style={{ maxWidth:1260, margin:'0 auto' }}>
          {/* Heading */}
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="font-sans font-bold text-[10px] tracking-[0.22em] uppercase text-minted/70 mb-2">Now In-Store</p>
              <h2
                className="font-display italic font-black uppercase text-white"
                style={{ fontSize:'clamp(28px,4vw,40px)', letterSpacing:'0.01em', lineHeight:0.95 }}
              >
                Shop the Floor
              </h2>
            </div>
            <span className="font-sans font-bold text-[11px] tracking-[0.14em] uppercase text-white/30">
              {filtered.length} items
            </span>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap mb-7">
            {FILTERS.map((f) => {
              const active = activeFilter === f.toLowerCase()
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f.toLowerCase())}
                  className="font-sans font-bold text-[11px] tracking-[0.14em] uppercase rounded transition-all duration-150"
                  style={{
                    padding:'8px 20px',
                    border: `1px solid ${active ? '#00ECF1' : 'rgba(255,255,255,.15)'}`,
                    background: active ? 'rgba(0,236,241,.1)' : 'none',
                    color: active ? '#00ECF1' : 'rgba(255,255,255,.4)',
                  }}
                >
                  {f}
                </button>
              )
            })}
          </div>

          {/* Grid */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:16 }}>
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onQuickView={setQvProduct} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 font-sans font-bold text-[13px] tracking-[0.12em] uppercase text-white/30">
              No items in this category right now — check back soon
            </div>
          )}
        </div>
      </section>

      {qvProduct && (
        <QuickView product={qvProduct} onClose={() => setQvProduct(null)} />
      )}
    </>
  )
}

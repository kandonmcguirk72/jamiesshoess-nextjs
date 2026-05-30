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
  { id:1,  name:'1/1 JAMIESSHOESS HOODIE', full:'1/1 JAMIESSHOESS HOODIE (SIZE XXL)', size:'XXL', price:45, cat:'merch', tags:['1/1'], emoji:'👕' },
  { id:2,  name:'1/1 JAMIESSHOESS CREW', full:'1/1 JAMIESSHOESS CREW (SIZE XL)', size:'XL', price:50, cat:'merch', tags:['1/1'], emoji:'👕' },
  { id:3,  name:'1/1 JAMIESSHOESS CREW', full:'1/1 JAMIESSHOESS CREW (SIZE 2XL)', size:'2XL', price:35, cat:'merch', tags:['1/1'], emoji:'👕' },
  { id:4,  name:'1/1 JAMIESSHOESS CREWNECK', full:'1/1 JAMIESSHOESS CREWNECK (SIZE 3XL)', size:'3XL', price:45, cat:'merch', tags:['1/1'], emoji:'👕' },
  { id:5,  name:'1/1 JAMIESSHOESS HOODIE', full:'1/1 JAMIESSHOESS HOODIE (SIZE M)', size:'M', price:60, cat:'merch', tags:['1/1'], emoji:'👕' },
  { id:6,  name:'JAMIESSHOESS OG TEE', full:'JAMIESSHOESS OG TEE (SIZE S-3XL)', size:'S–3XL', price:30, cat:'merch', tags:['NEW'], emoji:'👕' },
  { id:7,  name:'VTG NASCAR AOP', full:'VTG NASCAR AOP (SIZE L)', size:'L', price:100, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:8,  name:'VTG MARK MCGWIRE TEE', full:'VTG MARK MCGWIRE TEE (FITS XL)', size:'XL', price:35, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:9,  name:'VTG Y2K JIMMY NEUTRON TEE', full:'VTG Y2K JIMMY NEUTRON TEE (SIZE S-M)', size:'S–M', price:30, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:10,  name:'VTG GUESS TEE', full:'VTG GUESS TEE (SIZE L)', size:'L', price:30, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:11,  name:'VTG GUESS TEE', full:'VTG GUESS TEE (SIZE M)', size:'M', price:30, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:12,  name:'VTG SINGLE STITCH LEVIS TEE', full:'VTG SINGLE STITCH LEVIS TEE (FITS S-M)', size:'S–M', price:30, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:13,  name:'VTG ELVIS TEE', full:'VTG ELVIS TEE (SIZE M)', size:'M', price:30, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:14,  name:'VTG TASMANIAN DEVIL TEE', full:'VTG TASMANIAN DEVIL TEE (SIZE XL)', size:'XL', price:35, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:15,  name:'VTG Y2K SKATE TEE', full:'VTG Y2K SKATE TEE (SIZE S)', size:'S', price:25, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:16,  name:'VTG 1998 JERRY RICE 49ERS TEE', full:'VTG 1998 JERRY RICE 49ERS TEE (SIZE M)', size:'M', price:60, cat:'vintage', tags:['1/1','VTG'], emoji:'👕' },
  { id:17,  name:'VTG 1985 WORLD SERIES KC ROYALS TEE', full:'VTG 1985 WORLD SERIES KC ROYALS TEE (SIZE M)', size:'M', price:40, cat:'vintage', tags:['1/1','VTG'], emoji:'👕' },
  { id:18,  name:'VTG 2007 JOHN CENA WRESTLING TEE', full:'VTG 2007 JOHN CENA WRESTLING TEE (SIZE L)', size:'L', price:40, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:19,  name:'VTG FEAR FACTOR TEE', full:'VTG FEAR FACTOR TEE (SIZE XL)', size:'XL', price:40, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:20,  name:'WMNS HARLEY JACKET', full:'WMNS HARLEY JACKET (SIZE XL)', size:'XL', price:35, cat:'vintage', tags:[], emoji:'👕' },
  { id:21,  name:'VTG ST. LOUIS RAMS PULL OVER', full:'VTG ST. LOUIS RAMS PULL OVER (SIZE L-XL)', size:'L–XL', price:30, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:22,  name:'VTG 2009 AOP TEE', full:'VTG 2009 AOP TEE (SIZE M)', size:'M', price:60, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:23,  name:'VTG WOMENS HARLEY VEST', full:'VTG WOMENS HARLEY VEST (SIZE L)', size:'L', price:35, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:24,  name:'VTG HARLEY DENIM TOP', full:'VTG HARLEY DENIM TOP (FITS L)', size:'L', price:35, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:25,  name:'VTG BUM EQUIPMENT TEE', full:'VTG BUM EQUIPMENT TEE (FITS XL)', size:'XL', price:25, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:26,  name:'VTG WOLF TEE', full:'VTG WOLF TEE (SIZE 3XL)', size:'3XL', price:35, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:27,  name:'VTG 2008 SUPERMAN THERMAL', full:'VTG 2008 SUPERMAN THERMAL (SIZE L)', size:'L', price:25, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:28,  name:'VTG 2008 HARLEY TEE', full:'VTG 2008 HARLEY TEE (SIZE XXL)', size:'XXL', price:30, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:29,  name:'VTG NOTRE DAME TEE', full:'VTG NOTRE DAME TEE (SIZE L)', size:'L', price:65, cat:'vintage', tags:['1/1','VTG'], emoji:'👕' },
  { id:30,  name:'VTG JNCO MOTO TEE', full:'VTG JNCO MOTO TEE (FITS S-M)', size:'S–M', price:80, cat:'vintage', tags:['1/1','VTG'], emoji:'👕' },
  { id:31,  name:'VTG CHIEFS SINGLE STITCH', full:'VTG CHIEFS SINGLE STITCH (FITS XL)', size:'XL', price:25, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:32,  name:'VTG JNCO LONG SLEEVE TEE', full:'VTG JNCO LONG SLEEVE TEE (FITS S-M)', size:'S–M', price:80, cat:'vintage', tags:['1/1','VTG'], emoji:'👕' },
  { id:33,  name:'VTG RAMS JERSEY', full:'VTG RAMS JERSEY (SIZE XL)', size:'XL', price:35, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:34,  name:'JAMIESSHOESS 1/1 CAMO TEE', full:'JAMIESSHOESS 1/1 CAMO TEE (FITS L)', size:'L', price:30, cat:'merch', tags:['1/1'], emoji:'👕' },
  { id:35,  name:'JAMIESSHOESS X JOHN DEERE 1/1 LONG SLEEVE', full:'JAMIESSHOESS X JOHN DEERE 1/1 LONG SLEEVE (SIZE M)', size:'M', price:40, cat:'merch', tags:['1/1'], emoji:'👕' },
  { id:36,  name:'Carhartt X Jamiesshoess Beanie', full:'Carhartt X Jamiesshoess Beanie', size:'One Size', price:30, cat:'headwear', tags:['NEW'], emoji:'👕' },
  { id:37,  name:'Carhartt X Jamiesshoess Beanie (Alt)', full:'Carhartt X Jamiesshoess Beanie (Alt)', size:'One Size', price:30, cat:'headwear', tags:['NEW'], emoji:'👕' },
  { id:38,  name:'Vintage Sweater', full:'Vintage Sweater (SIZE L)', size:'L', price:22, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:39,  name:'Vintage KU Crewneck', full:'Vintage KU Crewneck (SIZE XL)', size:'XL', price:20, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:40,  name:'Vintage Sweater', full:'Vintage Sweater (SIZE XXL)', size:'XXL', price:22, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:41,  name:'Harley Davidson Button Up', full:'Harley Davidson Button Up (SIZE XL)', size:'XL', price:14.99, cat:'vintage', tags:['VTG'], emoji:'👕' },
  { id:42,  name:'Vintage 1996 Grateful Dead Tee', full:'Vintage 1996 Grateful Dead Tee (SIZE S)', size:'S', price:35, cat:'vintage', tags:['1/1'], emoji:'👕' },
  { id:43,  name:'Vintage Cardinals 3pc Lot', full:'Vintage Cardinals 3pc Lot (SIZE XL)', size:'XL', price:35, cat:'vintage', tags:['VTG'], emoji:'👕' },
]

const FILTERS = ['Shop', 'Vintage', 'Merch', 'Headwear']

const TAG_MAP: Record<string, { bg: string; color: string }> = {
  VTG:            { bg:'#E8F9FA', color:'#006B70' },
  'Y2K':          { bg:'#FFF0F8', color:'#B0006E' },
  '1/1':          { bg:'#EDFCE8', color:'#2A7A12' },
  SALE:           { bg:'#FFEAEA', color:'#CC0000' },
  'SINGLE STITCH':{ bg:'#F5F5F5', color:'#555' },
  NEW:            { bg:'#FFF8DC', color:'#FF6B35' },
}

const BADGE_COLOR: Record<string, string> = {
  SALE: '#FF2D2D',
  '1/1': '#00ECF1',
  VTG: '#00ECF1',
  NEW: '#FF6B35',
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
  const firstTag = product.tags.find((t) => ['SALE','1/1','NEW','VTG'].includes(t))
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

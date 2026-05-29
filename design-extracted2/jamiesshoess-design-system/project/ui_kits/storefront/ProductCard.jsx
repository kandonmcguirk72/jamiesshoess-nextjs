// ProductCard.jsx — JAMIESSHOESS Storefront
// Exports: ProductCard, QuickView, PRODUCTS
const { useState } = React;

window.PRODUCTS = [
  { id:1,  name:'VTG NASCAR AOP',           full:'VTG NASCAR AOP (SIZE L)',                   size:'L',        price:45,   cat:'vintage',  tags:['VTG','Y2K'],                  emoji:'🏎️', accent:'#00ECF1' },
  { id:2,  name:'VTG JERRY RICE 49ERS TEE', full:'VTG 1998 JERRY RICE 49ERS TEE (SIZE M)',   size:'M',        price:14.99,origPrice:45, cat:'vintage', tags:['VTG','SINGLE STITCH','SALE'], emoji:'🏈', accent:'#FF2D2D' },
  { id:3,  name:'CARHARTT × JMSSHS HOODIE', full:'CARHARTT × JAMIESSHOESS HOODIE (SIZE S–3XL)', size:'S–3XL', price:120,  cat:'collab',   tags:['COLLAB','1/1'],               emoji:'🧥', accent:'#F322B3' },
  { id:4,  name:'AIR MAX 90 OG 1985',       full:'NIKE AIR MAX 90 OG 1985 (SIZE 10)',         size:'10',       price:285,  cat:'sneakers', tags:['1/1','VTG'],                  emoji:'👟', accent:'#5AE131' },
  { id:5,  name:'JOHN DEERE × JMSSHS HAT',  full:'JOHN DEERE × JAMIESSHOESS WORK HAT',       size:'ONE SIZE', price:45,   cat:'collab',   tags:['COLLAB'],                     emoji:'🧢', accent:'#5AE131' },
  { id:6,  name:'JMSSHS MERCH HOODIE',      full:'JAMIESSHOESS HOODIE (SIZE S–3XL)',           size:'S–3XL',   price:65,   cat:'merch',    tags:[],                             emoji:'👕', accent:'#00ECF1' },
  { id:7,  name:'VTG STARTER NFL JACKET',   full:'VTG STARTER NFL AOP JACKET (SIZE XL)',      size:'XL',       price:89,   cat:'vintage',  tags:['VTG','Y2K'],                  emoji:'🏈', accent:'#F322B3' },
  { id:8,  name:'NIKE SB DUNK LOW',         full:'NIKE SB DUNK LOW (SIZE 9.5)',               size:'9.5',      price:185,  cat:'sneakers', tags:[],                             emoji:'👟', accent:'#00ECF1' },
  { id:9,  name:'VTG SINGLE STITCH TEE',    full:'VTG SINGLE STITCH GRAPHIC TEE (SIZE M)',    size:'M',        price:28,   cat:'vintage',  tags:['VTG','SINGLE STITCH'],        emoji:'👕', accent:'#F322B3' },
  { id:10, name:'JORDAN 1 HIGH OG',         full:'AIR JORDAN 1 HIGH OG CHICAGO (SIZE 11)',    size:'11',       price:420,  cat:'sneakers', tags:['1/1'],                        emoji:'👟', accent:'#5AE131' },
  { id:11, name:'VTG DENIM JACKET',         full:'VTG 90s DENIM JACKET (SIZE M)',             size:'M',        price:55,   cat:'vintage',  tags:['VTG'],                        emoji:'🧥', accent:'#00ECF1' },
  { id:12, name:'JMSSHS CREW SWEATSHIRT',   full:'JAMIESSHOESS CREW SWEATSHIRT (SIZE S–3XL)', size:'S–3XL',   price:55,   cat:'merch',    tags:[],                             emoji:'👕', accent:'#F322B3' },
];

const TAG_STYLE = {
  display:'inline-block', fontFamily:"'Rajdhani',system-ui,sans-serif", fontSize:9,
  fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em',
  padding:'2px 7px', borderRadius:2, marginRight:4, marginBottom:3,
};

function Tag({ label }) {
  const map = { VTG:{bg:'#E8F9FA',color:'#006B70'}, 'Y2K':{bg:'#FFF0F8',color:'#B0006E'},
    '1/1':{bg:'#EDFCE8',color:'#2A7A12'}, SALE:{bg:'#FFEAEA',color:'#CC0000'},
    'SINGLE STITCH':{bg:'#F5F5F5',color:'#555'}, COLLAB:{bg:'#FFF0F8',color:'#B0006E'},
    'NEW DROP':{bg:'#E8F9FA',color:'#006B70'} };
  const s = map[label] || {bg:'#F2F2F2',color:'#666'};
  return <span style={{ ...TAG_STYLE, background:s.bg, color:s.color }}>{label}</span>;
}

const cardS = {
  card: { background:'#1B1D1C', borderRadius:6, overflow:'hidden', cursor:'pointer', transition:'border-color .18s ease, box-shadow .18s ease', border:'1px solid rgba(255,255,255,.09)', boxShadow:'none' },
  img: { width:'100%', aspectRatio:'1', display:'flex', alignItems:'center', justifyContent:'center', fontSize:48, position:'relative', background:'#222624' },
  badge: (col) => ({ position:'absolute', top:10, left:10, background:col, color: col==='#F322B3'?'#fff':'#080A09', fontFamily:"'Barlow Condensed',Arial Narrow,sans-serif", fontStyle:'italic', fontWeight:900, fontSize:11, textTransform:'uppercase', padding:'2px 8px', borderRadius:3 }),
  body: { padding:'12px 14px 14px' },
  name: { fontFamily:"'Rajdhani',system-ui,sans-serif", fontWeight:700, fontSize:13, textTransform:'uppercase', letterSpacing:'.05em', color:'rgba(255,255,255,.85)', lineHeight:1.3, marginBottom:6 },
  priceRow: { display:'flex', alignItems:'baseline', gap:8 },
  price: { fontFamily:"'Barlow Condensed',Arial Narrow,sans-serif", fontStyle:'italic', fontWeight:900, fontSize:20, color:'#00ECF1' },
  origPrice: { fontFamily:"'Barlow Condensed',Arial Narrow,sans-serif", fontStyle:'italic', fontWeight:700, fontSize:14, color:'rgba(255,255,255,.25)', textDecoration:'line-through' },
  qvBtn: { marginTop:10, width:'100%', background:'rgba(0,236,241,.1)', color:'#00ECF1', border:'1px solid rgba(0,236,241,.35)', borderRadius:4, fontFamily:"'Rajdhani',system-ui,sans-serif", fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:'.14em', padding:'9px 0', cursor:'pointer', transition:'background .15s' },
};

function ProductCard({ product, onQuickView }) {
  const [hovered, setHovered] = useState(false);
  const firstTag = product.tags.find(t => ['SALE','1/1','COLLAB','VTG'].includes(t));
  const tagColor = { SALE:'#FF2D2D', '1/1':'#5AE131', COLLAB:'#F322B3', VTG:'#00ECF1' }[firstTag] || null;

  return (
    <div
      style={{ ...cardS.card, borderColor: hovered ? 'rgba(0,236,241,.35)' : 'rgba(255,255,255,.09)', boxShadow: hovered ? '0 0 20px rgba(0,236,241,.1)' : 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onQuickView(product)}
    >
      <div style={{ ...cardS.img, background: product.id%3===0?'#252826':product.id%3===1?'#222624':'#262428' }}>
        <span role="img">{product.emoji}</span>
        {firstTag && tagColor && <span style={cardS.badge(tagColor)}>{firstTag}</span>}
      </div>
      <div style={cardS.body}>
        <div style={{ marginBottom:5 }}>{product.tags.slice(0,3).map(t=><Tag key={t} label={t}/>)}</div>
        <div style={cardS.name}>{product.name}</div>
        <div style={cardS.priceRow}>
          <span style={{ ...cardS.price, color: product.origPrice ? '#CC0000' : '#080A09' }}>${product.price.toFixed(2)}</span>
          {product.origPrice && <span style={cardS.origPrice}>${product.origPrice.toFixed(2)}</span>}
        </div>
        {hovered && <button style={cardS.qvBtn} onClick={e=>{e.stopPropagation();onQuickView(product);}}>QUICK VIEW</button>}
      </div>
    </div>
  );
}

const qvS = {
  overlay: { position:'fixed', inset:0, background:'rgba(8,10,9,.75)', zIndex:500, display:'flex', alignItems:'center', justifyContent:'center', backdropFilter:'blur(4px)', padding:24 },
  panel: { background:'#fff', borderRadius:8, overflow:'hidden', width:'100%', maxWidth:700, maxHeight:'90vh', display:'flex', flexDirection:'column', boxShadow:'0 32px 80px rgba(0,0,0,.5)' },
  header: { background:'#080A09', padding:'14px 20px', display:'flex', alignItems:'center', justifyContent:'space-between' },
  headerTitle: { fontFamily:"'Barlow Condensed',Arial Narrow,sans-serif", fontStyle:'italic', fontWeight:900, fontSize:18, color:'#00ECF1', textTransform:'uppercase' },
  closeBtn: { background:'none', border:'none', cursor:'pointer', color:'rgba(255,255,255,.6)', fontSize:22, lineHeight:1, padding:0 },
  body: { display:'flex', gap:0, flex:1, overflow:'hidden' },
  imgPane: { width:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:80, background:'#F8F5F2', flexShrink:0 },
  info: { flex:1, padding:28, overflowY:'auto' },
  fullName: { fontFamily:"'Rajdhani',system-ui,sans-serif", fontWeight:700, fontSize:15, textTransform:'uppercase', letterSpacing:'.06em', color:'#111', lineHeight:1.4, marginBottom:12 },
  price: { fontFamily:"'Barlow Condensed',Arial Narrow,sans-serif", fontStyle:'italic', fontWeight:900, fontSize:36, color:'#080A09', marginBottom:4 },
  sizeLabel: { fontFamily:"'Rajdhani',system-ui,sans-serif", fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:'.14em', color:'#999', marginBottom:20 },
  addBtn: { width:'100%', background:'#00ECF1', color:'#080A09', border:'none', borderRadius:4, fontFamily:"'Barlow Condensed',Arial Narrow,sans-serif", fontStyle:'italic', fontWeight:900, fontSize:20, textTransform:'uppercase', padding:'14px 0', cursor:'pointer', letterSpacing:'.02em', marginBottom:10, boxShadow:'0 0 18px rgba(0,236,241,.35)' },
  tradeNote: { fontFamily:"'Rajdhani',system-ui,sans-serif", fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'.1em', color:'#999', textAlign:'center', lineHeight:1.5 },
};

function QuickView({ product, onClose, onAddToCart }) {
  if (!product) return null;
  return (
    <div style={qvS.overlay} onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={qvS.panel}>
        <div style={qvS.header}>
          <span style={qvS.headerTitle}>JAMIESSHOESS</span>
          <button style={qvS.closeBtn} onClick={onClose}>×</button>
        </div>
        <div style={qvS.body}>
          <div style={qvS.imgPane}><span role="img">{product.emoji}</span></div>
          <div style={qvS.info}>
            <div style={{ marginBottom:8 }}>{product.tags.map(t=><Tag key={t} label={t}/>)}</div>
            <div style={qvS.fullName}>{product.full}</div>
            <div style={qvS.price}>${product.price.toFixed(2)}</div>
            <div style={qvS.sizeLabel}>Size: {product.size}</div>
            <button style={qvS.addBtn} onClick={()=>{onAddToCart(product);onClose();}}>ADD TO CART</button>
            <div style={qvS.tradeNote}>📍 Pick up at 302 Park Central East, Springfield MO<br/>We also accept trades — ask in store!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ProductCard, QuickView, Tag });

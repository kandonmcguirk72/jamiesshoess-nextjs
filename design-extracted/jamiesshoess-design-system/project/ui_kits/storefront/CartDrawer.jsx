// CartDrawer.jsx — JAMIESSHOESS Storefront
// Exports: CartDrawer
const { useEffect } = React;

const cdS = {
  overlay: { position:'fixed', inset:0, background:'rgba(8,10,9,.6)', zIndex:400, backdropFilter:'blur(2px)' },
  drawer: (open) => ({ position:'fixed', top:0, right:0, bottom:0, width:380, maxWidth:'94vw', background:'#080A09', zIndex:401, boxShadow:'-8px 0 40px rgba(0,0,0,.7)', display:'flex', flexDirection:'column', transform: open ? 'translateX(0)' : 'translateX(100%)', transition:'transform .28s cubic-bezier(.4,0,.2,1)' }),
  header: { padding:'18px 20px', borderBottom:'1px solid rgba(255,255,255,.08)', display:'flex', alignItems:'center', justifyContent:'space-between' },
  title: { fontFamily:"'Barlow Condensed',Arial Narrow,sans-serif", fontStyle:'italic', fontWeight:900, fontSize:22, color:'#00ECF1', textTransform:'uppercase', letterSpacing:'.01em' },
  closeBtn: { background:'none', border:'1px solid rgba(255,255,255,.2)', borderRadius:4, cursor:'pointer', color:'rgba(255,255,255,.6)', width:32, height:32, fontSize:18, display:'flex', alignItems:'center', justifyContent:'center', lineHeight:1 },
  body: { flex:1, overflowY:'auto', padding:'16px 20px' },
  emptyState: { display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', gap:12, paddingBottom:40 },
  emptyEmoji: { fontSize:48 },
  emptyText: { fontFamily:"'Rajdhani',system-ui,sans-serif", fontWeight:700, fontSize:13, textTransform:'uppercase', letterSpacing:'.12em', color:'rgba(255,255,255,.3)' },
  item: { display:'flex', gap:14, alignItems:'center', padding:'14px 0', borderBottom:'1px solid rgba(255,255,255,.07)' },
  itemEmoji: { width:54, height:54, background:'rgba(255,255,255,.06)', borderRadius:4, display:'flex', alignItems:'center', justifyContent:'center', fontSize:26, flexShrink:0 },
  itemInfo: { flex:1, minWidth:0 },
  itemName: { fontFamily:"'Rajdhani',system-ui,sans-serif", fontWeight:700, fontSize:12, textTransform:'uppercase', letterSpacing:'.06em', color:'#fff', lineHeight:1.3, marginBottom:3, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' },
  itemSize: { fontFamily:"'Rajdhani',system-ui,sans-serif", fontWeight:600, fontSize:10, textTransform:'uppercase', letterSpacing:'.12em', color:'rgba(255,255,255,.35)' },
  itemPrice: { fontFamily:"'Barlow Condensed',Arial Narrow,sans-serif", fontStyle:'italic', fontWeight:900, fontSize:18, color:'#fff', flexShrink:0 },
  removeBtn: { background:'none', border:'none', cursor:'pointer', color:'rgba(255,255,255,.25)', fontSize:18, lineHeight:1, padding:0, transition:'color .15s', flexShrink:0 },
  footer: { padding:'16px 20px', borderTop:'1px solid rgba(255,255,255,.08)', display:'flex', flexDirection:'column', gap:10 },
  subtotalRow: { display:'flex', justifyContent:'space-between', alignItems:'baseline' },
  subtotalLabel: { fontFamily:"'Rajdhani',system-ui,sans-serif", fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:'.14em', color:'rgba(255,255,255,.4)' },
  subtotalAmt: { fontFamily:"'Barlow Condensed',Arial Narrow,sans-serif", fontStyle:'italic', fontWeight:900, fontSize:26, color:'#fff' },
  checkoutBtn: { background:'#00ECF1', color:'#080A09', border:'none', borderRadius:4, fontFamily:"'Barlow Condensed',Arial Narrow,sans-serif", fontStyle:'italic', fontWeight:900, fontSize:20, textTransform:'uppercase', padding:'14px 0', cursor:'pointer', letterSpacing:'.02em', boxShadow:'0 0 20px rgba(0,236,241,.35)', transition:'background .15s' },
  pickupNote: { fontFamily:"'Rajdhani',system-ui,sans-serif", fontWeight:600, fontSize:10, textTransform:'uppercase', letterSpacing:'.1em', color:'rgba(255,255,255,.3)', textAlign:'center', lineHeight:1.6 },
};

function CartDrawer({ open, cart, onClose, onRemove }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const subtotal = cart.reduce((s, i) => s + i.price, 0);

  return (
    <>
      {open && <div style={cdS.overlay} onClick={onClose} />}
      <aside style={cdS.drawer(open)} aria-label="Shopping cart">
        <div style={cdS.header}>
          <span style={cdS.title}>YOUR CART ({cart.length})</span>
          <button style={cdS.closeBtn} onClick={onClose}>×</button>
        </div>
        <div style={cdS.body}>
          {cart.length === 0 ? (
            <div style={cdS.emptyState}>
              <span style={cdS.emptyEmoji}>👟</span>
              <span style={cdS.emptyText}>Your cart is empty</span>
            </div>
          ) : (
            cart.map((item, i) => (
              <div key={i} style={cdS.item}>
                <div style={cdS.itemEmoji}>{item.emoji}</div>
                <div style={cdS.itemInfo}>
                  <div style={cdS.itemName}>{item.name}</div>
                  <div style={cdS.itemSize}>SIZE: {item.size}</div>
                </div>
                <span style={cdS.itemPrice}>${item.price.toFixed(2)}</span>
                <button style={cdS.removeBtn} onClick={() => onRemove(i)} title="Remove">×</button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div style={cdS.footer}>
            <div style={cdS.subtotalRow}>
              <span style={cdS.subtotalLabel}>Subtotal</span>
              <span style={cdS.subtotalAmt}>${subtotal.toFixed(2)}</span>
            </div>
            <button style={cdS.checkoutBtn}>CHECKOUT</button>
            <div style={cdS.pickupNote}>📍 Select LOCAL PICKUP for free pickup at the store<br/>302 Park Central East · Springfield, MO</div>
          </div>
        )}
      </aside>
    </>
  );
}

Object.assign(window, { CartDrawer });

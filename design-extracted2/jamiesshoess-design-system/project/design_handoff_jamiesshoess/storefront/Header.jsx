// Header.jsx — JAMIESSHOESS Storefront
// Exports: Header
const { useState, useEffect } = React;

const MARQUEE_TEXT = '🚨 NEW DROP EVERY WEEKEND  ·  FOLLOW @JAMIESSHOESS FOR UPDATES 👟  ·  📍 302 PARK CENTRAL EAST, SPRINGFIELD MO  ·  WED–THU 12–6  FRI–SAT 12–7  ·  SELECT LOCAL PICKUP AT CHECKOUT!  ·  ';
const NAV_LINKS = ['SHOP', 'SNEAKERS', 'VINTAGE', 'MERCH', 'COLLAB'];

const hdrS = {
  root: { position:'sticky', top:0, zIndex:200, fontFamily:"'Rajdhani',system-ui,sans-serif", WebkitFontSmoothing:'antialiased' },
  bar: { background:'#F322B3', color:'#fff', fontSize:10, fontWeight:700, letterSpacing:'.15em', textTransform:'uppercase', padding:'5px 0', overflow:'hidden', whiteSpace:'nowrap' },
  marqueeTrack: { display:'inline-block', willChange:'transform' },
  nav: { background:'#080A09', padding:'0 clamp(16px,4vw,52px)', display:'flex', alignItems:'center', gap:20, height:62, transition:'box-shadow .2s' },
  logo: { fontFamily:"'Barlow Condensed',Arial Narrow,sans-serif", fontStyle:'italic', fontWeight:900, fontSize:30, color:'#00ECF1', letterSpacing:'.01em', textTransform:'uppercase', cursor:'pointer', flexShrink:0, userSelect:'none' },
  links: { display:'flex', gap:28, flex:1, justifyContent:'center' },
  link: (active) => ({ color: active ? '#00ECF1' : 'rgba(255,255,255,.5)', fontWeight:700, fontSize:11, letterSpacing:'.14em', textTransform:'uppercase', cursor:'pointer', border:'none', background:'none', fontFamily:"'Rajdhani',system-ui,sans-serif", transition:'color .15s', padding:'4px 0' }),
  actions: { display:'flex', alignItems:'center', gap:14 },
  iconBtn: { background:'none', border:'none', cursor:'pointer', color:'#fff', display:'flex', alignItems:'center', padding:4, position:'relative' },
  badge: { position:'absolute', top:-5, right:-7, background:'#F322B3', color:'#fff', borderRadius:'50%', width:18, height:18, fontSize:10, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Rajdhani',system-ui,sans-serif", boxShadow:'0 0 8px rgba(243,34,179,.6)' },
};

function Header({ cartCount=0, onCartOpen, activeFilter, onFilterChange }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', h, { passive:true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <header style={hdrS.root}>
      <style>{`@keyframes jms-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      <div style={hdrS.bar}>
        <span style={{ ...hdrS.marqueeTrack, animation:'jms-marquee 30s linear infinite' }}>
          {MARQUEE_TEXT.repeat(4)}
        </span>
      </div>
      <nav style={{ ...hdrS.nav, boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,.85)' : 'none', backdropFilter: scrolled ? 'blur(8px)' : 'none' }}>
        <span style={hdrS.logo} onClick={() => onFilterChange && onFilterChange('shop')}>JAMIESSHOESS</span>
        <div style={hdrS.links}>
          {NAV_LINKS.map(l => (
            <button key={l} style={hdrS.link(activeFilter === l.toLowerCase())} onClick={() => onFilterChange && onFilterChange(l.toLowerCase())}>{l}</button>
          ))}
        </div>
        <div style={hdrS.actions}>
          <button style={hdrS.iconBtn} aria-label="Search">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </button>
          <button style={hdrS.iconBtn} onClick={onCartOpen} aria-label="Cart">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            {cartCount > 0 && <span style={hdrS.badge}>{cartCount}</span>}
          </button>
        </div>
      </nav>
    </header>
  );
}

Object.assign(window, { Header });

// Footer.jsx — JAMIESSHOESS Storefront
// Exports: Footer

const ftS = {
  footer: { background:'#080A09', borderTop:'1px solid rgba(255,255,255,.07)', fontFamily:"'Rajdhani',system-ui,sans-serif", WebkitFontSmoothing:'antialiased' },
  inner: { maxWidth:1260, margin:'0 auto', padding:'48px clamp(16px,4vw,52px) 28px' },
  grid: { display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:40, marginBottom:40 },
  col: { display:'flex', flexDirection:'column', gap:12 },
  logo: { fontFamily:"'Barlow Condensed',Arial Narrow,sans-serif", fontStyle:'italic', fontWeight:900, fontSize:26, color:'#00ECF1', textTransform:'uppercase', letterSpacing:'.01em', lineHeight:1 },
  tagline: { fontWeight:600, fontSize:11, textTransform:'uppercase', letterSpacing:'.14em', color:'rgba(255,255,255,.3)', lineHeight:1.6 },
  colHead: { fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:'.16em', color:'rgba(255,255,255,.55)', marginBottom:4 },
  colLink: { fontWeight:600, fontSize:12, textTransform:'uppercase', letterSpacing:'.08em', color:'rgba(255,255,255,.35)', cursor:'pointer', transition:'color .15s', textDecoration:'none', display:'block', lineHeight:2 },
  hoursRow: { display:'flex', justifyContent:'space-between', alignItems:'baseline', borderBottom:'1px solid rgba(255,255,255,.06)', paddingBottom:6 },
  hoursDay: { fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:'.1em', color:'rgba(255,255,255,.45)' },
  hoursTime: { fontWeight:600, fontSize:11, color:'rgba(255,255,255,.25)', letterSpacing:'.06em' },
  bottom: { borderTop:'1px solid rgba(255,255,255,.06)', paddingTop:20, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12 },
  bottomLeft: { fontWeight:600, fontSize:10, textTransform:'uppercase', letterSpacing:'.12em', color:'rgba(255,255,255,.2)' },
  social: { display:'flex', gap:16, alignItems:'center' },
  socialLink: { fontWeight:700, fontSize:10, textTransform:'uppercase', letterSpacing:'.12em', color:'rgba(255,255,255,.3)', cursor:'pointer', transition:'color .15s', textDecoration:'none' },
  tradeNote: { fontWeight:600, fontSize:11, textTransform:'uppercase', letterSpacing:'.1em', color:'rgba(0,236,241,.5)', marginTop:8, lineHeight:1.6 },
};

function Footer() {
  return (
    <footer style={ftS.footer}>
      <div style={ftS.inner}>
        <div style={ftS.grid}>
          {/* Brand */}
          <div style={ftS.col}>
            <div style={ftS.logo}>JAMIESSHOESS</div>
            <div style={ftS.tagline}>Shop Vintage &amp; Sneakers<br/>Springfield, MO · The 417</div>
            <div style={ftS.tradeNote}>We buy &amp; trade — ask in store</div>
          </div>
          {/* Shop */}
          <div style={ftS.col}>
            <div style={ftS.colHead}>Shop</div>
            {['Sneakers','Vintage Clothing','Merch','Collabs','Pokémon Cards','Kids'].map(l => (
              <a key={l} style={ftS.colLink}>{l}</a>
            ))}
          </div>
          {/* Visit */}
          <div style={ftS.col}>
            <div style={ftS.colHead}>Visit Us</div>
            <div style={{ fontWeight:600, fontSize:12, color:'rgba(255,255,255,.45)', letterSpacing:'.06em', lineHeight:1.7, textTransform:'uppercase' }}>
              302 Park Central East<br/>Springfield, MO 65804
            </div>
            <div style={{ marginTop:8, display:'flex', flexDirection:'column', gap:4 }}>
              {[['Wed – Thu','12:00 – 6:00 PM'],['Fri – Sat','12:00 – 7:00 PM'],['Sun – Tue','Closed']].map(([d,t]) => (
                <div key={d} style={ftS.hoursRow}>
                  <span style={ftS.hoursDay}>{d}</span>
                  <span style={ftS.hoursTime}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={ftS.bottom}>
          <div style={ftS.bottomLeft}>© 2025 JAMIESSHOESS · All rights reserved</div>
          <div style={ftS.social}>
            {['Instagram','TikTok','Facebook','YouTube'].map(s => (
              <a key={s} style={ftS.socialLink}>{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });

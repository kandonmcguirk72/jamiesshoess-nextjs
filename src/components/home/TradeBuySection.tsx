const CARDS = [
  {
    color: '#00ECF1',
    title: 'We Trade',
    body: 'Bring in your vintage clothing or sneakers and trade for something from the shop. We work with you to make fair deals on quality pieces.',
    cta: 'Ask About Trades',
  },
  {
    color: '#5AE131',
    title: 'We Buy',
    body: "Got something we'd love? We selectively purchase high-quality vintage clothing and sought-after sneakers. Quality over quantity — always.",
    cta: 'Sell to Us',
  },
]

export default function TradeBuySection() {
  return (
    <section
      className="border-t border-white/[0.07]"
      style={{ background:'#080A09', padding:'64px clamp(16px,4vw,52px)' }}
    >
      <div style={{ maxWidth:1260, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
        {CARDS.map((card) => (
          <div
            key={card.title}
            style={{ background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.08)', borderRadius:6, padding:'36px 32px' }}
          >
            <div style={{ width:32, height:3, background:card.color, borderRadius:2, marginBottom:20 }} />
            <div
              className="font-display italic font-black uppercase text-white mb-3"
              style={{ fontSize:36, letterSpacing:'0.01em', lineHeight:1 }}
            >
              {card.title}
            </div>
            <p
              className="font-sans font-medium text-[14px] tracking-[0.04em] uppercase text-white/50 leading-[1.7] mb-6"
              style={{ maxWidth:380 }}
            >
              {card.body}
            </p>
            <button
              className="font-display italic font-black uppercase rounded transition-all duration-150"
              style={{
                fontSize:16,
                background:'transparent',
                color: card.color,
                border:`2px solid ${card.color}`,
                padding:'10px 26px',
                letterSpacing:'0.02em',
              }}
            >
              {card.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

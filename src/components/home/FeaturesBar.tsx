const FEATURES = [
  { icon: '↔', label: 'In-Store Trades',  desc: 'Bring your pieces — we trade' },
  { icon: '✦', label: 'Selective Buying', desc: 'We purchase quality items'     },
  { icon: '◎', label: 'Free Local Pickup', desc: '302 Park Central East'         },
  { icon: '◈', label: 'Wide Selection',   desc: 'Vintage, sneakers & more'       },
]

export default function FeaturesBar() {
  return (
    <div
      className="border-t border-b border-white/[0.06]"
      style={{ background: '#0D0F0E' }}
    >
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ maxWidth: 1260, margin: '0 auto', padding: '0 clamp(16px,4vw,52px)' }}
      >
        {FEATURES.map((f, i) => (
          <div
            key={f.label}
            className="flex items-center gap-4 py-5 px-5"
            style={{
              borderRight: i < 3 ? '1px solid rgba(255,255,255,.05)' : 'none',
              borderBottom: i < 2 ? '1px solid rgba(255,255,255,.05)' : 'none',
            }}
          >
            <span className="text-minted font-sans font-bold text-[18px] flex-shrink-0 opacity-80">
              {f.icon}
            </span>
            <div>
              <p className="font-sans font-bold text-[11px] tracking-[0.1em] uppercase text-white/75 leading-tight">
                {f.label}
              </p>
              <p className="font-sans font-medium text-[11px] text-white/25 mt-0.5">
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

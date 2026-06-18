import Image from 'next/image'

const SNEAKERS = [
  { src: '/images/store/sneaker-wall-fisheye.jpg',   label: 'The Wall' },
  { src: '/images/store/sneaker-cortez-white.jpg',   label: 'Nike Cortez' },
  { src: '/images/store/sneaker-cortez-unla.jpg',    label: 'UN/LA Cortez' },
  { src: '/images/store/sneaker-airmax1-orange.jpg', label: 'Air Max 1' },
  { src: '/images/store/sneaker-dunk-navy.jpg',      label: 'Nike SB Dunk' },
  { src: '/images/store/sneaker-dunk-green.jpg',     label: 'Nike SB Dunk' },
]

export default function SneakerStrip() {
  return (
    <section
      className="border-t border-white/[0.07]"
      style={{ background: 'var(--bg-page)', padding: 'clamp(36px,5vw,56px) 0' }}
    >
      <div style={{ maxWidth: 1260, margin: '0 auto', padding: '0 clamp(16px,4vw,52px)' }}>
        <p className="font-sans font-bold text-[10px] tracking-[0.22em] uppercase text-minted/70 mb-2">
          In-Store Only
        </p>
        <h2
          className="font-display italic font-black uppercase text-white mb-7"
          style={{ fontSize: 'clamp(22px,3.5vw,32px)', letterSpacing: '0.01em', lineHeight: 0.95 }}
        >
          Authenticated Sneakers
        </h2>

        {/* Scroll container */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingBottom: 4,
          }}
        >
          {SNEAKERS.map((s) => (
            <div key={s.src} style={{ flexShrink: 0, width: 280, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ position: 'relative', width: 280, height: 280, borderRadius: 8, overflow: 'hidden' }}>
                <Image
                  src={s.src}
                  alt={s.label}
                  fill
                  sizes="280px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span
                className="font-sans font-bold uppercase text-white/60"
                style={{ fontSize: 11, letterSpacing: '0.12em', textAlign: 'center' }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <p className="font-sans font-bold text-[10px] tracking-[0.14em] uppercase text-white/30 text-center mt-6">
          Come in to shop sneakers · Not available online
        </p>
      </div>
    </section>
  )
}

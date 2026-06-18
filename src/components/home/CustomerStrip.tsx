import Image from 'next/image'

const CUSTOMERS = [
  { src: '/images/store/customer-family.jpg',            alt: 'Family in the store' },
  { src: '/images/store/customer-rams-bag.jpg',          alt: 'Customer with Rams crewneck' },
  { src: '/images/store/customer-two-posing.jpg',        alt: 'Two customers posing' },
  { src: '/images/store/customer-spiderman.jpg',         alt: 'Customer with Spider-Man jacket' },
  { src: '/images/store/customer-bags-leaving.jpg',      alt: 'Happy customers leaving' },
  { src: '/images/store/customer-pointing-bag.jpg',      alt: 'Customer pointing at bag' },
  { src: '/images/store/customer-supreme-bag.jpg',       alt: 'Customer with Supreme bag' },
  { src: '/images/store/customer-family-kid.jpg',        alt: 'Family with kids shopping' },
  { src: '/images/store/customer-marlboro-bag.jpg',      alt: 'Customer with vintage bag' },
  { src: '/images/store/customer-digging-racks.jpg',     alt: 'Customers digging through racks' },
  { src: '/images/store/customer-rams-crewneck.jpg',     alt: 'Customer with Rams crewneck' },
]

const DOUBLED = [...CUSTOMERS, ...CUSTOMERS]

export default function CustomerStrip() {
  return (
    <section
      className="border-t border-white/[0.07]"
      style={{ background: 'var(--bg-page)', padding: 'clamp(48px,6vw,64px) 0', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1260, margin: '0 auto', padding: '0 clamp(16px,4vw,52px)', marginBottom: 28 }}>
        <p className="font-sans font-bold text-[10px] tracking-[0.22em] uppercase text-minted/70 mb-2">
          The Community
        </p>
        <h2
          className="font-display italic font-black uppercase text-white"
          style={{ fontSize: 'clamp(24px,3.5vw,36px)', letterSpacing: '0.01em', lineHeight: 0.95 }}
        >
          Real Customers · Real Finds
        </h2>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Left fade */}
        <div aria-hidden="true" style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(to right, var(--bg-page) 0%, transparent 100%)',
        }} />
        {/* Right fade */}
        <div aria-hidden="true" style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(to left, var(--bg-page) 0%, transparent 100%)',
        }} />

        <div style={{
          display: 'flex',
          gap: 16,
          width: 'max-content',
          animation: 'customerScroll 40s linear infinite',
          paddingLeft: 16,
        }}>
          {DOUBLED.map((c, i) => (
            <div
              key={`${c.src}-${i}`}
              style={{ flexShrink: 0, width: 220, height: 280, borderRadius: 8, overflow: 'hidden', position: 'relative' }}
            >
              <Image
                src={c.src}
                alt={c.alt}
                fill
                sizes="220px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

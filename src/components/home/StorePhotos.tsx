import Image from 'next/image'

const PHOTOS = [
  { src: '/images/store/exterior-street.jpg',            caption: 'Find us on Park Central East' },
  { src: '/images/store/customer-bag-clothing-wall.jpg', caption: 'Finds worth talking about' },
]

const CARD_HEIGHT = 300

export default function StorePhotos() {
  return (
    <section
      className="border-t border-white/[0.07]"
      style={{ background: 'var(--bg-page)', padding: 'clamp(48px,7vw,72px) clamp(16px,4vw,52px)' }}
    >
      <div style={{ maxWidth: 1260, margin: '0 auto' }}>
        <div className="text-center mb-10">
          <p className="font-sans font-bold text-[10px] tracking-[0.22em] uppercase text-minted/70 mb-2">
            The Shop
          </p>
          <h2
            className="font-display italic font-black uppercase text-white"
            style={{ fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '0.01em', lineHeight: 0.95 }}
          >
            Come See For Yourself
          </h2>
          <p className="font-sans font-semibold text-white/40 mt-3" style={{ fontSize: 13, letterSpacing: '0.06em' }}>
            302 Park Central East · Downtown Springfield · Wed–Sat
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="store-photo-card"
              style={{
                position: 'relative',
                borderRadius: 8,
                overflow: 'hidden',
                height: CARD_HEIGHT,
              }}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                className="store-photo-img"
              />
              <div
                className="store-photo-caption"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '28px 14px 14px',
                  background: 'linear-gradient(to top, rgba(8,10,9,0.85) 0%, transparent 100%)',
                  opacity: 0,
                  transition: 'opacity 0.25s ease',
                }}
              >
                <span
                  className="font-sans font-bold uppercase"
                  style={{ fontSize: 12, letterSpacing: '0.1em', color: '#FFFFFF' }}
                >
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

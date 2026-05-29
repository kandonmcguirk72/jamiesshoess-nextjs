// All images are pre-cropped and background-removed by Python/Pillow.
// No blend modes or CSS hacks needed — clean transparent PNGs.

const DISPLAY_H = 64

interface Logo { src: string; alt: string }

const LOGOS: Logo[] = [
  { src: '/brand/logos/logo-combined.png',              alt: 'JAMIES SHOESS + JS' },
  { src: '/brand/mascots/mascot-spray-skater-left.png', alt: 'Spray Skater' },
  { src: '/brand/logos/logo-spray-composition.png',     alt: 'Shop Vintage Composition' },
  { src: '/brand/mascots/mascot-hoodie-left.png',       alt: 'Hoodie Mascot' },
  { src: '/brand/mascots/mascot-hoodie-right.png',      alt: 'Hoodie Outline' },
  { src: '/brand/logos/logo-graffiti.png',              alt: 'Graffiti Wordmark' },
  { src: '/brand/mascots/mascot-figure-stars-left.png', alt: 'Figure Stars' },
  { src: '/brand/mascots/mascot-figure-stars-right.png',alt: 'Figure Stars Outline' },
]

// Triple for seamless loop
const ITEMS: Logo[] = [...LOGOS, ...LOGOS, ...LOGOS]

export default function LogoStrip() {
  return (
    <div
      className="w-full overflow-hidden border-y border-white/[0.07]"
      style={{ background: '#0A0C0B', height: 96 }}
    >
      <div
        className="flex items-center h-full"
        style={{ animation: 'ticker 44s linear infinite', width: 'max-content', willChange: 'transform' }}
      >
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center flex-shrink-0 px-8"
            style={{ height: 96 }}
          >
            <img
              src={item.src}
              alt={item.alt}
              style={{ height: DISPLAY_H, width: 'auto', display: 'block', opacity: 0.85 }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

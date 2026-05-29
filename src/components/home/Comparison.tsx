import { BRAND } from '@/lib/constants'

const cards = [
  {
    title: 'vs. StockX / GOAT',
    tagLabel: 'Try It First',
    tagColor: 'text-minted',
    tagBg: 'bg-minted/10 border border-minted/25',
    bullets: [
      'No buyer protection fees',
      'Try before you commit',
      'Zero shipping. Walk out today.',
      'Talk to someone who knows sneakers.',
    ],
  },
  {
    title: 'vs. Thrift Stores',
    tagLabel: 'Curated. Not Random.',
    tagColor: 'text-flash',
    tagBg: 'bg-flash/10 border border-flash/25',
    bullets: [
      'Screened & authenticated',
      'No digging through garbage',
      'Priced honestly',
      'New stuff every week',
    ],
    elevated: true,
  },
  {
    title: 'vs. eBay / Depop',
    tagLabel: 'See It. Own It.',
    tagColor: 'text-cash',
    tagBg: 'bg-cash/10 border border-cash/25',
    bullets: [
      'No waiting for shipping',
      'No mystery sizing',
      'No scams',
      'Come back next week for more',
    ],
  },
]

export default function Comparison() {
  return (
    <section className="section bg-surface">
      <div className="container">
        <h2
          className="font-display italic font-black uppercase text-white"
          style={{ fontSize: 'var(--text-display-md)', lineHeight: 1.0 }}
        >
          Why In-Store Wins
        </h2>
        <p className="font-sans font-semibold text-[14px] text-white/40 mt-2 mb-10">
          vs. StockX&nbsp;·&nbsp;vs. Thrift&nbsp;·&nbsp;vs. eBay
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`bg-surface2 rounded-sm p-8 border ${card.elevated ? 'border-minted/30' : 'border-white/[0.07]'}`}
              style={card.elevated ? { boxShadow: '0 0 24px rgba(0,236,241,.08)' } : undefined}
            >
              <h3
                className="font-display italic font-black uppercase text-white mb-3"
                style={{ fontSize: '1.5rem', letterSpacing: '0.01em', lineHeight: 1 }}
              >
                {card.title}
              </h3>
              <span className={`${card.tagBg} ${card.tagColor} font-sans font-bold text-[10px] tracking-[0.12em] uppercase px-3 py-1 rounded-sm inline-block mb-5`}>
                {card.tagLabel}
              </span>
              <ul className="space-y-3">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="font-sans font-semibold text-[13px] text-white/50">
                    <span className="text-minted mr-2">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom callout banner */}
        <div className="bg-leather rounded-sm p-10 flex flex-col md:flex-row items-center justify-between gap-6 mt-10 border border-white/[0.07]">
          <div>
            <p
              className="font-display italic font-black uppercase text-white"
              style={{ fontSize: 'var(--text-display-md)', lineHeight: 1.0 }}
            >
              We&apos;re not a warehouse. We&apos;re a shop.
            </p>
            <p className="font-sans font-semibold text-[13px] text-white/35 tracking-[0.06em] uppercase mt-2">
              302 Park Central East&nbsp;·&nbsp;Downtown Springfield
            </p>
          </div>
          <a
            href={BRAND.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-minted text-leather font-sans font-bold text-[12px] tracking-[0.14em] uppercase px-6 py-3 rounded-sm hover:bg-white transition-colors duration-150 whitespace-nowrap"
          >
            GET DIRECTIONS →
          </a>
        </div>
      </div>
    </section>
  )
}

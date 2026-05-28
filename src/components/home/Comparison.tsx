import { BRAND } from '@/lib/constants'

interface ComparisonCard {
  title: string
  tagLabel: string
  tagClasses: string
  bullets: string[]
  elevated?: boolean
}

const cards: ComparisonCard[] = [
  {
    title: 'vs. StockX / GOAT',
    tagLabel: 'Try It First',
    tagClasses: 'bg-minted-tint text-minted',
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
    tagClasses: 'bg-flash-tint text-flash',
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
    tagClasses: 'bg-cash-tint text-cash',
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
        <h2 className="font-display text-display-md text-ink">
          Why In-Store Wins
        </h2>
        <p className="font-sans text-[15px] text-ink3 mt-2 mb-10">
          vs. StockX&nbsp;·&nbsp;vs. Thrift&nbsp;·&nbsp;vs. eBay
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`bg-canvas rounded-lg p-8 ${card.elevated ? 'shadow-card-hover' : 'shadow-card'}`}
            >
              <h3 className="font-display text-2xl text-ink mb-3">
                {card.title}
              </h3>
              <span
                className={`${card.tagClasses} font-sans font-semibold text-[11px] tracking-[0.06em] uppercase px-3 py-1 rounded-full inline-block mb-5`}
              >
                {card.tagLabel}
              </span>
              <ul className="space-y-3">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="font-sans text-sm text-ink2">
                    <span className="text-minted mr-2">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom callout banner */}
        <div className="bg-ink rounded-lg p-10 flex flex-col md:flex-row items-center justify-between gap-6 mt-10">
          <div>
            <p className="font-display text-display-md text-white">
              We&apos;re not a warehouse. We&apos;re a shop.
            </p>
            <p className="font-sans text-sm text-white/50 mt-2">
              302 Park Central East&nbsp;·&nbsp;Downtown Springfield
            </p>
          </div>
          <a
            href={BRAND.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-minted text-ink font-sans font-bold text-[12px] tracking-[0.06em] px-6 py-3 rounded hover:bg-white transition-all duration-200 whitespace-nowrap"
          >
            GET DIRECTIONS →
          </a>
        </div>
      </div>
    </section>
  )
}

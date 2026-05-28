import Link from 'next/link'
import { BRAND } from '@/lib/constants'

const TICKER_TEXT =
  'OPEN WED–SAT  ·  302 PARK CENTRAL EAST  ·  SPRINGFIELD, MO  ·  100% AUTHENTIC  ·  FREE LOCAL PICKUP        '

export default function AnnouncementBar() {
  return (
    <div className="bg-minted h-8 md:h-9 overflow-hidden flex items-center">
      {/* Mobile: scrolling ticker */}
      <div className="flex md:hidden w-full overflow-hidden">
        <div className="ann-ticker">
          <span className="text-ink text-xs font-semibold tracking-[0.08em] uppercase pr-8">
            {TICKER_TEXT}
          </span>
          <span className="text-ink text-xs font-semibold tracking-[0.08em] uppercase pr-8" aria-hidden="true">
            {TICKER_TEXT}
          </span>
        </div>
      </div>

      {/* Desktop: static centered text + CTA */}
      <div className="hidden md:flex items-center justify-between w-full container">
        <div className="flex-1" />
        <p className="text-ink text-xs font-semibold tracking-[0.08em] uppercase whitespace-nowrap">
          OPEN WED–SAT&nbsp;&nbsp;·&nbsp;&nbsp;302 PARK CENTRAL EAST&nbsp;&nbsp;·&nbsp;&nbsp;SPRINGFIELD, MO&nbsp;&nbsp;·&nbsp;&nbsp;100% AUTHENTIC&nbsp;&nbsp;·&nbsp;&nbsp;FREE LOCAL PICKUP
        </p>
        <div className="flex-1 flex justify-end">
          <Link
            href={BRAND.social.marketplace.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink text-xs font-semibold tracking-[0.08em] uppercase underline underline-offset-2 hover:opacity-70 transition-opacity duration-150 whitespace-nowrap"
          >
            SHOP NOW →
          </Link>
        </div>
      </div>
    </div>
  )
}

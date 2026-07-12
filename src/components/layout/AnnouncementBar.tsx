import { formatStoreHours } from '@/lib/constants'

const HOURS_TICKER = formatStoreHours('  ').toUpperCase()

const TICKER =
  `NEW DROP EVERY WEEKEND  ·  FOLLOW @JAMIESSHOESS FOR UPDATES  ·  📍 302 PARK CENTRAL EAST, SPRINGFIELD MO  ·  ${HOURS_TICKER}  ·  FREE LOCAL PICKUP AT THE STORE  ·  `

export default function AnnouncementBar() {
  return (
    <div className="bg-flash h-8 overflow-hidden flex items-center">
      <div className="ann-ticker">
        <span className="text-white text-[10px] font-bold tracking-[0.15em] uppercase pr-0">
          {TICKER}
        </span>
        <span className="text-white text-[10px] font-bold tracking-[0.15em] uppercase pr-0" aria-hidden="true">
          {TICKER}
        </span>
        <span className="text-white text-[10px] font-bold tracking-[0.15em] uppercase pr-0" aria-hidden="true">
          {TICKER}
        </span>
        <span className="text-white text-[10px] font-bold tracking-[0.15em] uppercase pr-0" aria-hidden="true">
          {TICKER}
        </span>
      </div>
    </div>
  )
}

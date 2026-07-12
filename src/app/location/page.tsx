import type { Metadata } from 'next'
import { BRAND } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Hours & Location',
  description: '302 Park Central East, Springfield MO 65806. Open Wed–Sun on Historic Route 66.',
  alternates: { canonical: '/location' },
}

export default function LocationPage() {
  // Get today's day name to highlight current day
  // Use a static list — no client-side JS needed for display
  return (
    <>
      {/* Header */}
      <section className="section-sm bg-canvas border-b border-line">
        <div className="container text-center">
          <span className="font-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-minted mb-3 block">FIND US</span>
          <h1 className="font-display text-display-lg text-ink">Hours & Location</h1>
          <p className="font-sans text-base text-ink3 mt-3">302 Park Central East · Downtown Springfield · Historic Route 66</p>
        </div>
      </section>

      <section className="section bg-canvas">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Hours */}
            <div>
              <h2 className="font-display text-display-md text-ink mb-6">Store Hours</h2>
              <div className="bg-surface rounded-lg border border-line overflow-hidden">
                {BRAND.hours.map((h) => (
                  <div key={h.day} className={`flex justify-between items-center px-6 py-4 border-b border-line last:border-b-0 ${!h.open ? 'opacity-50' : ''}`}>
                    <span className="font-sans font-semibold text-sm text-ink">{h.full}</span>
                    <span className={`font-sans font-medium text-sm ${h.open ? 'text-ink' : 'text-ink3'}`}>{h.time}</span>
                  </div>
                ))}
              </div>
              <p className="font-sans text-[13px] text-ink3 mt-4 leading-relaxed">
                <span className="text-cash">●</span> Hours may vary on holidays. Follow{' '}
                <a href={BRAND.social.instagram.url} target="_blank" rel="noopener noreferrer" className="text-ink font-semibold underline">
                  @JAMIESSHOESS
                </a>{' '}
                for the latest updates.
              </p>
            </div>

            {/* Address + Directions */}
            <div>
              <h2 className="font-display text-display-md text-ink mb-6">Address</h2>
              <div className="bg-surface rounded-lg border border-line p-6 mb-6">
                <p className="font-display text-2xl text-ink mb-1">{BRAND.address.line1}</p>
                <p className="font-sans font-medium text-base text-ink2 mb-1">{BRAND.address.line2}</p>
                <p className="font-sans text-[13px] text-ink3 mb-5">{BRAND.address.note}</p>
                <span className="inline-block bg-minted-tint text-minted font-sans font-semibold text-[11px] tracking-[0.1em] uppercase px-3 py-1 rounded-full mb-5">
                  {BRAND.address.badge}
                </span>
                <div className="pt-4 border-t border-line">
                  <a href={BRAND.address.mapsUrl} target="_blank" rel="noopener noreferrer"
                     className="inline-block bg-ink text-white font-sans font-bold text-[12px] tracking-[0.06em] px-6 py-3 rounded hover:bg-minted hover:text-ink transition-all duration-200">
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Parking tips */}
              <div className="bg-surface rounded-lg border border-line p-6">
                <h3 className="font-display text-lg text-ink mb-3">Getting Here</h3>
                <ul className="space-y-2">
                  {[
                    'Street parking available on Park Central East',
                    'Paid parking lot half a block west',
                    'Easy walk from downtown Springfield',
                    '16 doors east of the Route 66 Welcome Center',
                  ].map(tip => (
                    <li key={tip} className="font-sans text-[13px] text-ink3 flex items-start gap-2">
                      <span className="text-minted mt-0.5">→</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="mt-12 rounded-lg overflow-hidden border border-line">
            <iframe
              src={BRAND.address.embedUrl}
              width="100%"
              height="400"
              loading="lazy"
              title="JAMIESSHOESS location map — 302 Park Central East, Springfield MO"
              className="block border-0"
            />
          </div>
        </div>
      </section>
    </>
  )
}

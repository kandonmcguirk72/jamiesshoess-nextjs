import { BRAND, STORE_HOURS_LINE } from '@/lib/constants'

export default function StorySection() {
  return (
    <section
      className="border-t border-white/[0.07]"
      style={{ background: 'var(--bg-page)', padding: '80px clamp(16px,4vw,52px)' }}
    >
      <div style={{ maxWidth: 1260, margin: '0 auto' }}>

        {/* Header */}
        <div className="mb-14">
          <p className="font-sans font-bold text-[10px] tracking-[0.24em] uppercase text-minted mb-3">
            About
          </p>
          <h2
            className="font-display italic font-black uppercase text-white leading-none"
            style={{ fontSize: 'clamp(36px,7vw,68px)', letterSpacing: '0.01em' }}
          >
            Who We Are
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — the bio */}
          <div className="flex flex-col gap-5">
            <p className="font-sans font-semibold text-[15px] text-white/70 leading-[1.75]">
              JAMIESSHOESS is a little shop in the heart of Springfield doing something we love — bringing together vintage clothing, authentic sneakers, and good energy all under one roof at 302 Park Central East.
            </p>
            <p className="font-sans font-semibold text-[15px] text-white/70 leading-[1.75]">
              We built this place to be more than a store. It&apos;s a space where you can dig through racks, find something you didn&apos;t know you were looking for, and leave feeling inspired. Whether you grew up thrifting on weekends, have been collecting sneakers for years, or you&apos;re just curious what all the fuss is about — you belong here.
            </p>
            <p className="font-sans font-semibold text-[15px] text-white/70 leading-[1.75]">
              Every item we carry is hand-picked. We don&apos;t do fakes, we don&apos;t do filler. Just honest pieces with character, priced fairly.
            </p>
            <p className="font-sans font-semibold text-[15px] text-white/70 leading-[1.75]">
              Springfield is our home and this community is why we do it. When you shop with us, you&apos;re helping us grow something we believe in — and helping us give back to the community that&apos;s supported us from day one. We&apos;re grateful for every single person who walks through that door.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={BRAND.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display italic font-black uppercase text-leather rounded-sm transition-colors duration-150 hover:bg-white text-center"
                style={{ fontSize: 15, background: '#00ECF1', padding: '12px 28px', letterSpacing: '0.02em', boxShadow: '0 0 16px rgba(0,236,241,.2)' }}
              >
                Follow on Instagram
              </a>
              <a
                href={BRAND.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display italic font-black uppercase text-white rounded-sm border-2 border-white/20 transition-all duration-150 hover:border-minted hover:text-minted text-center"
                style={{ fontSize: 15, padding: '10px 28px', letterSpacing: '0.02em' }}
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Right — quick facts */}
          <div
            className="grid grid-cols-2 gap-px"
            style={{ border: '1px solid rgba(255,255,255,.07)', background: 'rgba(255,255,255,.07)' }}
          >
            {[
              { label: 'Founded',   value: '10+ Years',          sub: 'in the resale market' },
              { label: 'Location',  value: 'Springfield, MO',    sub: '302 Park Central East' },
              { label: 'Hours',     value: 'Wed – Sun',          sub: STORE_HOURS_LINE },
              { label: 'Services',  value: 'Buy · Trade · Sell', sub: 'Vintage & sneakers' },
            ].map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 p-7" style={{ background: 'var(--bg-page)' }}>
                <span className="font-sans font-bold text-[9px] tracking-[0.2em] uppercase text-white/30">
                  {fact.label}
                </span>
                <span
                  className="font-display italic font-black uppercase text-white leading-tight"
                  style={{ fontSize: 'clamp(16px,2vw,20px)', letterSpacing: '0.01em' }}
                >
                  {fact.value}
                </span>
                <span className="font-sans font-semibold text-[11px] text-white/35">
                  {fact.sub}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

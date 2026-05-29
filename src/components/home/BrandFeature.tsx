import Image from 'next/image'
import { BRAND } from '@/lib/constants'
import FadeIn from '@/components/ui/FadeIn'

export default function BrandFeature() {
  return (
    <section className="section bg-leather">

      {/* Block 1: illustration left, text right */}
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">

          {/* Left: illustration on dark surface */}
          <div className="bg-surface rounded-sm p-10 flex items-center justify-center border border-white/[0.07]">
            <div className="relative w-full max-w-[400px] aspect-square mx-auto">
              <Image
                src={BRAND.images.illus3}
                alt="JAMIESSHOESS brand character"
                fill
                className="object-contain"
                loading="lazy"
                sizes="(max-width:768px) 90vw, 40vw"
              />
            </div>
          </div>

          {/* Right: content */}
          <FadeIn>
            <span className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-minted mb-4 block">
              SHOP VNTG
            </span>
            <h2
              className="font-display italic font-black uppercase text-white leading-none mb-6"
              style={{ fontSize: 'var(--text-display-lg)' }}
            >
              Real Heat.<br />No Fakes.<br /><span className="text-minted">Ever.</span>
            </h2>
            <p className="font-sans text-[15px] text-white/50 leading-[1.7] max-w-[440px] mb-8">
              Everything in here was picked for a reason. Not bulk-bought, not random — just things worth owning.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={BRAND.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-minted text-leather font-sans font-bold text-[12px] tracking-[0.14em] uppercase px-6 py-3 rounded-sm hover:bg-white transition-colors duration-150"
                style={{ boxShadow: '0 0 16px rgba(0,236,241,.3)' }}
              >
                SHOP ON INSTAGRAM
              </a>
              <a
                href={BRAND.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white/60 font-sans font-semibold text-[12px] tracking-[0.1em] uppercase px-6 py-3 rounded-sm hover:border-minted hover:text-minted transition-all duration-150"
              >
                GET DIRECTIONS
              </a>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Block 2: text left, logo right */}
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left: content */}
          <FadeIn>
            <span className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-minted mb-4 block">
              DOWNTOWN SPRINGFIELD · ROUTE 66
            </span>
            <h2
              className="font-display italic font-black uppercase text-white leading-none mb-6"
              style={{ fontSize: 'var(--text-display-lg)' }}
            >
              Springfield&apos;s<br /><span className="text-minted">Only.</span>
            </h2>
            <p className="font-sans text-[15px] text-white/50 leading-[1.7] max-w-[440px] mb-6">
              Jamie grew up hunting sneakers and vintage in Springfield. Couldn&apos;t find a spot worth coming back to, so he built one.
            </p>
            <blockquote className="border-l-4 border-minted pl-5 italic font-sans text-[15px] text-white/40 leading-relaxed mb-8">
              &ldquo;{BRAND.founderQuote}&rdquo;
              <cite className="block not-italic font-bold text-[11px] tracking-[0.08em] uppercase text-white/50 mt-2">
                — {BRAND.founder}, Founder
              </cite>
            </blockquote>
            <a
              href="/about"
              className="border border-white/20 text-white/60 font-sans font-semibold text-[12px] tracking-[0.1em] uppercase px-6 py-3 rounded-sm hover:border-minted hover:text-minted transition-all duration-150 inline-block"
            >
              OUR FULL STORY →
            </a>
          </FadeIn>

          {/* Right: logo on surface bg */}
          <div className="bg-surface rounded-sm p-10 flex items-center justify-center border border-white/[0.07] order-first md:order-last">
            <div className="relative w-full max-w-[400px] aspect-square mx-auto">
              <Image
                src={BRAND.images.logoPrimary1}
                alt="JAMIESSHOESS logo"
                fill
                className="object-contain"
                loading="lazy"
                sizes="(max-width:768px) 90vw, 40vw"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

import Image from 'next/image'
import { BRAND } from '@/lib/constants'
import FadeIn from '@/components/ui/FadeIn'

export default function BrandFeature() {
  return (
    <section className="section bg-canvas">

      {/* Block 1: image left, text right */}
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">

          {/* Left: illustration on soft surface bg */}
          <div className="bg-surface rounded-2xl p-10 flex items-center justify-center">
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
            <span className="font-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-minted mb-4 block">
              SHOP VNTG
            </span>
            <h2 className="font-display text-display-lg text-ink leading-none mb-6">
              Real Heat.<br />No Fakes.<br /><span className="text-minted">Ever.</span>
            </h2>
            <p className="font-sans text-base text-ink2 leading-[1.7] max-w-[440px] mb-8">
              Everything in here was picked for a reason. Not bulk-bought, not random — just things worth owning.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={BRAND.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink text-white font-sans font-bold text-[12px] tracking-[0.06em] px-6 py-3 rounded hover:bg-minted hover:text-ink transition-all duration-200"
              >
                Shop on Instagram
              </a>
              <a
                href={BRAND.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-line2 text-ink font-sans font-semibold text-[12px] tracking-[0.04em] px-6 py-3 rounded hover:border-ink transition-all duration-200"
              >
                Get Directions
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
            <span className="font-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-minted mb-4 block">
              DOWNTOWN SPRINGFIELD · ROUTE 66
            </span>
            <h2 className="font-display text-display-lg text-ink leading-none mb-6">
              Springfield&apos;s<br /><span className="text-minted">Only.</span>
            </h2>
            <p className="font-sans text-base text-ink2 leading-[1.7] max-w-[440px] mb-6">
              Jamie grew up hunting sneakers and vintage in Springfield. Couldn&apos;t find a spot worth coming back to, so he built one.
            </p>
            <blockquote className="border-l-4 border-minted pl-5 italic font-sans text-[15px] text-ink3 leading-relaxed mb-8">
              &ldquo;{BRAND.founderQuote}&rdquo;
              <cite className="block not-italic font-semibold text-[12px] text-ink mt-2">
                — {BRAND.founder}, Founder
              </cite>
            </blockquote>
            <a
              href="/about"
              className="border border-line2 text-ink font-sans font-semibold text-[12px] tracking-[0.04em] px-6 py-3 rounded hover:border-ink transition-all duration-200 inline-block"
            >
              Our Full Story →
            </a>
          </FadeIn>

          {/* Right: logo on surface bg */}
          <div className="bg-surface rounded-2xl p-10 flex items-center justify-center order-first md:order-last">
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

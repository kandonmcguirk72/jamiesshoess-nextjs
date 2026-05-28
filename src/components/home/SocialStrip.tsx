import { BRAND } from '@/lib/constants'

export default function SocialStrip() {
  return (
    <section className="bg-canvas border-t border-line py-12 text-center">
      <p className="font-sans text-[13px] text-ink3 mb-6">
        617 posts · 6,147 followers · New drops weekly
      </p>

      <div className="flex justify-center gap-3 flex-wrap">
        <a
          href={BRAND.social.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-ink text-ink font-sans font-semibold text-[12px] tracking-[0.06em]
                     px-[22px] py-2.5 rounded hover:bg-ink hover:text-white transition-all duration-200"
        >
          → Instagram @JAMIESSHOESS
        </a>

        <a
          href={BRAND.social.tiktok.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-ink text-ink font-sans font-semibold text-[12px] tracking-[0.06em]
                     px-[22px] py-2.5 rounded hover:bg-ink hover:text-white transition-all duration-200"
        >
          → TikTok @JAMIESSHOESS417
        </a>

        <a
          href={BRAND.social.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-ink text-ink font-sans font-semibold text-[12px] tracking-[0.06em]
                     px-[22px] py-2.5 rounded hover:bg-ink hover:text-white transition-all duration-200"
        >
          → Facebook
        </a>
      </div>
    </section>
  )
}

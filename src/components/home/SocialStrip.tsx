import { BRAND } from '@/lib/constants'

export default function SocialStrip() {
  return (
    <section className="bg-leather border-t border-white/[0.07] py-12 text-center">
      <p className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-white/25 mb-6">
        617 posts · 6,147 followers · New drops weekly
      </p>

      <div className="flex justify-center gap-3 flex-wrap">
        <a
          href={BRAND.social.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/15 text-white/50 font-sans font-bold text-[11px] tracking-[0.14em] uppercase
                     px-[22px] py-2.5 rounded-sm hover:border-minted hover:text-minted transition-all duration-150"
        >
          INSTAGRAM @JAMIESSHOESS
        </a>

        <a
          href={BRAND.social.tiktok.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/15 text-white/50 font-sans font-bold text-[11px] tracking-[0.14em] uppercase
                     px-[22px] py-2.5 rounded-sm hover:border-minted hover:text-minted transition-all duration-150"
        >
          TIKTOK @JAMIESSHOESS417
        </a>

        <a
          href={BRAND.social.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/15 text-white/50 font-sans font-bold text-[11px] tracking-[0.14em] uppercase
                     px-[22px] py-2.5 rounded-sm hover:border-minted hover:text-minted transition-all duration-150"
        >
          FACEBOOK
        </a>
      </div>
    </section>
  )
}

import { BRAND } from '@/lib/constants'

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
    </svg>
  )
}

function IconTikTok() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M13.5 2C13.5 2 13.75 4.5 16.5 5V7.5C16.5 7.5 14.5 7.5 13.5 6.5V13C13.5 15.5 11.5 17.5 9 17.5C6.5 17.5 4.5 15.5 4.5 13C4.5 10.5 6.5 8.5 9 8.5C9.25 8.5 9.5 8.5 9.75 8.55V11.1C9.5 11.05 9.25 11 9 11C7.9 11 7 11.9 7 13C7 14.1 7.9 15 9 15C10.1 15 11 14.1 11 13V2H13.5Z" fill="currentColor" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11.5 6.5H13V4.5H11.5C10.12 4.5 9 5.62 9 7V8H7.5V10H9V15.5H11V10H12.5L13 8H11V7C11 6.72 11.22 6.5 11.5 6.5Z" fill="currentColor" />
    </svg>
  )
}

function IconYouTube() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="16" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 7.5L13 10L8.5 12.5V7.5Z" fill="currentColor" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      className="border-t border-white/[0.07]"
      style={{ background: 'var(--bg-page)' }}
    >
      <div
        className="flex flex-col items-center gap-5 py-10"
        style={{ maxWidth: 1260, margin: '0 auto', padding: '40px clamp(16px,4vw,52px)' }}
      >
        {/* Wordmark */}
        <span
          className="font-display italic font-black uppercase text-minted"
          style={{ fontSize: 26, letterSpacing: '0.01em', lineHeight: 1 }}
        >
          JAMIESSHOESS
        </span>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          <a
            href={BRAND.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/35 hover:text-minted transition-colors duration-150"
          >
            <IconInstagram />
          </a>
          <a
            href={BRAND.social.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-white/35 hover:text-minted transition-colors duration-150"
          >
            <IconTikTok />
          </a>
          <a
            href={BRAND.social.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/35 hover:text-minted transition-colors duration-150"
          >
            <IconFacebook />
          </a>
          <a
            href="https://youtube.com/@jamiesshoess"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-white/35 hover:text-minted transition-colors duration-150"
          >
            <IconYouTube />
          </a>
        </div>

        {/* Google Review Link */}
        <a
          href="/review"
          className="inline-flex items-center gap-1.5 font-sans font-bold text-[10px] tracking-[0.12em] uppercase text-minted hover:text-white transition-colors duration-150"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <polygon points="12,2 14.9,8.6 22,9.6 17,14.4 18.2,21.5 12,18.1 5.8,21.5 7,14.4 2,9.6 9.1,8.6" />
          </svg>
          Leave a Review
        </a>

        {/* Legal Links */}
        <div className="flex items-center gap-4 text-white/40">
          <a
            href="/terms"
            className="font-sans text-[10px] tracking-[0.08em] uppercase hover:text-minted transition-colors duration-150"
          >
            Terms
          </a>
          <span className="text-white/20">·</span>
          <a
            href="/privacy"
            className="font-sans text-[10px] tracking-[0.08em] uppercase hover:text-minted transition-colors duration-150"
          >
            Privacy
          </a>
        </div>

        {/* Copyright */}
        <p className="font-sans font-semibold text-[10px] tracking-[0.14em] uppercase text-white/20">
          © 2025 JAMIESSHOESS · Springfield, MO
        </p>
      </div>
    </footer>
  )
}

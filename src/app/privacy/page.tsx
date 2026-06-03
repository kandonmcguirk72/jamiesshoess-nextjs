import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — JAMIESSHOESS',
  description: 'Privacy Policy for JAMIESSHOESS, Springfield MO.',
}

export default function PrivacyPage() {
  return (
    <main style={{ background: 'var(--bg-page)', minHeight: 'calc(100vh - 64px)' }}>
      <section style={{ borderBottom: '1px solid rgba(255,255,255,.07)', padding: 'clamp(40px,6vw,80px) clamp(16px,4vw,52px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p className="font-sans font-bold text-[10px] tracking-[0.24em] uppercase text-minted/70 mb-3">Legal</p>
          <h1
            className="font-display italic font-black uppercase text-white"
            style={{ fontSize: 'clamp(32px,5vw,48px)', letterSpacing: '0.01em', lineHeight: 0.95, marginBottom: 12 }}
          >
            Privacy Policy
          </h1>
          <p className="font-sans text-[13px] text-white/35">Last updated: May 2026</p>
        </div>
      </section>

      <section style={{ padding: 'clamp(40px,6vw,80px) clamp(16px,4vw,52px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="font-sans text-[14px] leading-relaxed text-white/70" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

            <div>
              <h2 className="font-display italic font-black uppercase text-white text-[18px] mb-3" style={{ letterSpacing: '0.01em' }}>What We Collect</h2>
              <p>We only collect information that you voluntarily provide through our Sell Form. This includes:</p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li>Your name</li>
                <li>Your contact information (email address or phone number)</li>
                <li>A description of the item you want to sell</li>
                <li>Photos you upload of the item</li>
                <li>Your asking price (optional)</li>
              </ul>
              <p style={{ marginTop: 12 }}>We do not use tracking cookies, advertising pixels, or third-party analytics that collect personal information beyond what Vercel Analytics provides anonymously for site performance.</p>
            </div>

            <div>
              <h2 className="font-display italic font-black uppercase text-white text-[18px] mb-3" style={{ letterSpacing: '0.01em' }}>How We Use It</h2>
              <p>Information submitted through the sell form is used solely to evaluate your item and respond to your inquiry. We read your submission, review the photos, and contact you via the information you provided if we are interested in purchasing your item. That's it.</p>
              <p style={{ marginTop: 12 }}>We do not use your information for marketing, advertising, or any purpose outside of responding to your submission.</p>
            </div>

            <div>
              <h2 className="font-display italic font-black uppercase text-white text-[18px] mb-3" style={{ letterSpacing: '0.01em' }}>How Long We Keep It</h2>
              <p>Sell form submissions — including photos and contact information — are kept for up to 30 days. If no purchase is made within that window, your submission data and photos are deleted. If a purchase is made, we may retain basic transaction records as required for normal business accounting.</p>
            </div>

            <div>
              <h2 className="font-display italic font-black uppercase text-white text-[18px] mb-3" style={{ letterSpacing: '0.01em' }}>We Never Sell or Share Your Data</h2>
              <p>We do not sell, rent, trade, or share your personal information with any third parties for any purpose. Your data stays with us and is used only to respond to your submission. We use Resend to deliver email notifications internally, and Vercel Blob to temporarily store uploaded photos — both are used solely for that purpose and are not given access to your data for their own use.</p>
            </div>

            <div>
              <h2 className="font-display italic font-black uppercase text-white text-[18px] mb-3" style={{ letterSpacing: '0.01em' }}>Your Rights</h2>
              <p>You can request that we delete your submission at any time by contacting us. If you submitted a form and changed your mind, reach out and we'll remove your information immediately.</p>
            </div>

            <div>
              <h2 className="font-display italic font-black uppercase text-white text-[18px] mb-3" style={{ letterSpacing: '0.01em' }}>Contact</h2>
              <p>
                Questions about your data or this policy? Come see us or reach out online.<br /><br />
                <span className="text-white/80 font-semibold">JAMIESSHOESS</span><br />
                302 Park Central East, Springfield MO<br />
                Instagram: <a href="https://instagram.com/JAMIESSHOESS" target="_blank" rel="noopener noreferrer" className="text-minted hover:text-white transition-colors">@jamiesshoess</a>
              </p>
            </div>

          </div>

          <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,.06)', display: 'flex', gap: 24, alignItems: 'center' }}>
            <Link href="/" className="font-display italic font-black uppercase text-minted hover:text-white transition-colors duration-150" style={{ fontSize: 14, letterSpacing: '0.02em' }}>
              ← Back to Shop
            </Link>
            <Link href="/terms" className="font-sans font-bold text-[11px] tracking-[0.1em] uppercase text-white/30 hover:text-minted transition-colors duration-150">
              Terms of Service →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

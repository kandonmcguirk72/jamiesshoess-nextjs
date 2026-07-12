import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — JAMIESSHOESS',
  description: 'Terms of Service for JAMIESSHOESS, Springfield MO.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <main style={{ background: 'var(--bg-page)', minHeight: 'calc(100vh - 64px)' }}>
      <section style={{ borderBottom: '1px solid rgba(255,255,255,.07)', padding: 'clamp(40px,6vw,80px) clamp(16px,4vw,52px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p className="font-sans font-bold text-[10px] tracking-[0.24em] uppercase text-minted/70 mb-3">Legal</p>
          <h1
            className="font-display italic font-black uppercase text-white"
            style={{ fontSize: 'clamp(32px,5vw,48px)', letterSpacing: '0.01em', lineHeight: 0.95, marginBottom: 12 }}
          >
            Terms of Service
          </h1>
          <p className="font-sans text-[13px] text-white/35">Last updated: May 2026</p>
        </div>
      </section>

      <section style={{ padding: 'clamp(40px,6vw,80px) clamp(16px,4vw,52px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="font-sans text-[14px] leading-relaxed text-white/70" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

            <div>
              <h2 className="font-display italic font-black uppercase text-white text-[18px] mb-3" style={{ letterSpacing: '0.01em' }}>All Sales Are Final</h2>
              <p>We do not accept returns or exchanges. All sales are final. The only exception is if an item was materially misrepresented at the time of sale — meaning it was described or shown as something significantly different from what you received. If that happens, come talk to us in person and we'll make it right.</p>
            </div>

            <div>
              <h2 className="font-display italic font-black uppercase text-white text-[18px] mb-3" style={{ letterSpacing: '0.01em' }}>Items Sold As-Is</h2>
              <p>All vintage and secondhand items are sold in their current condition. Minor wear, fading, and small imperfections are expected and are part of what makes vintage clothing unique. We do our best to photograph and describe each item honestly. If you have questions about a specific item's condition, ask us before you buy.</p>
            </div>

            <div>
              <h2 className="font-display italic font-black uppercase text-white text-[18px] mb-3" style={{ letterSpacing: '0.01em' }}>Authentication</h2>
              <p>We authenticate every item we sell based on professional judgment and our best effort. We are confident in our process, but no authentication is guaranteed to be infallible. JAMIESSHOESS is not liable for manufacturer defects, hidden flaws, or any disputes arising after purchase. If you have a concern about an item you purchased from us, come see us in person.</p>
            </div>

            <div>
              <h2 className="font-display italic font-black uppercase text-white text-[18px] mb-3" style={{ letterSpacing: '0.01em' }}>Sell Form Submissions</h2>
              <p>By submitting the sell form on this site, you confirm that you are the legal owner of the item described and that you have the full right to sell it. Submitting a form does not guarantee that we will purchase your item. JAMIESSHOESS reviews every submission and reserves the right to decline any item for any reason, including but not limited to condition, authenticity concerns, or current inventory needs. We will follow up by contact info provided if we are interested.</p>
            </div>

            <div>
              <h2 className="font-display italic font-black uppercase text-white text-[18px] mb-3" style={{ letterSpacing: '0.01em' }}>Trades</h2>
              <p>We accept trades during store hours at our sole discretion. Bring your item in and we'll take a look. We are not responsible for items left at the store. If a trade is declined, please pick up your item the same day. Items left at the store for more than 7 days after a declined evaluation may be donated or discarded.</p>
            </div>

            <div>
              <h2 className="font-display italic font-black uppercase text-white text-[18px] mb-3" style={{ letterSpacing: '0.01em' }}>Your Privacy</h2>
              <p>We only collect the information needed to respond to sell form submissions: your name, contact information, item description, and any photos you provide. We do not sell, share, or distribute your personal information to any third parties. Photos and submission data are deleted after 30 days if no purchase is made. For the full details, see our <Link href="/privacy" className="text-minted hover:text-white transition-colors">Privacy Policy</Link>.</p>
            </div>

            <div>
              <h2 className="font-display italic font-black uppercase text-white text-[18px] mb-3" style={{ letterSpacing: '0.01em' }}>Limitation of Liability</h2>
              <p>JAMIESSHOESS is not liable for website errors, lost or undelivered form submissions, pricing errors, or any indirect, incidental, or consequential damages arising from the use of this website or our services. We do our best to keep the site running and information accurate, but we make no guarantees about uptime or data accuracy.</p>
            </div>

            <div>
              <h2 className="font-display italic font-black uppercase text-white text-[18px] mb-3" style={{ letterSpacing: '0.01em' }}>Contact</h2>
              <p>
                If you have questions about these terms, come see us in person or reach out online.<br /><br />
                <span className="text-white/80 font-semibold">JAMIESSHOESS</span><br />
                302 Park Central East, Springfield MO<br />
                Instagram: <a href="https://instagram.com/JAMIESSHOESS" target="_blank" rel="noopener noreferrer" className="text-minted hover:text-white transition-colors">@jamiesshoess</a>
              </p>
            </div>

          </div>

          <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,.06)' }}>
            <Link href="/" className="font-display italic font-black uppercase text-minted hover:text-white transition-colors duration-150" style={{ fontSize: 14, letterSpacing: '0.02em' }}>
              ← Back to Shop
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

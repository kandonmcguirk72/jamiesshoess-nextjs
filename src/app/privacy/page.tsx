'use client'

export default function PrivacyPage() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-leather text-white">
      {/* Header */}
      <section className="border-b border-white/[0.07]" style={{ padding: 'clamp(40px,6vw,80px) clamp(16px,4vw,52px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1
            className="font-display italic font-black uppercase text-white mb-3"
            style={{ fontSize: 'clamp(32px,5vw,48px)', letterSpacing: '0.01em', lineHeight: 0.95 }}
          >
            Privacy Policy
          </h1>
          <p className="font-sans font-medium text-[15px] text-white/60">Last updated: May 31, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: 'clamp(40px,6vw,80px) clamp(16px,4vw,52px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <article className="font-sans text-[14px] leading-relaxed text-white/80 space-y-6">
            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">1. Introduction</h2>
              <p>
                JAMIESSHOESS ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">2. Information We Collect</h2>
              <p>
                We collect information you voluntarily provide through our Sell Form, including:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-2">
                <li>Full name</li>
                <li>Email address and/or phone number</li>
                <li>Item description and details</li>
                <li>Photos of items you wish to sell</li>
                <li>Asking price (if provided)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">3. How We Use Your Information</h2>
              <p>
                Information collected through the Sell Form is used exclusively for:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-2">
                <li>Evaluating items for potential purchase</li>
                <li>Contacting you regarding your submission</li>
                <li>Facilitating transactions</li>
                <li>Internal record-keeping and compliance</li>
              </ul>
              <p className="mt-2">
                We do not share, sell, or transfer your personal information to third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">4. Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, alteration, disclosure, and destruction.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">5. Data Retention</h2>
              <p>
                Submitted form data (including photos) is retained for up to 90 days for business evaluation purposes. After 90 days, photos are deleted from public storage. Contact information may be retained longer for business records, subject to applicable law.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">6. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-2">
                <li>Request access to personal information we hold about you</li>
                <li>Request deletion of your personal information (subject to legal requirements)</li>
                <li>Opt out of future communications</li>
                <li>Correct inaccurate information</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">7. Third-Party Services</h2>
              <p>
                We use the following services to process your information:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-2">
                <li><strong>Resend</strong> – Email delivery service</li>
                <li><strong>Vercel Blob</strong> – Image storage service</li>
              </ul>
              <p className="mt-2">
                These services maintain their own privacy policies. We are not responsible for their data practices.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">8. Contact Us</h2>
              <p>
                To exercise your rights, request your data, or ask questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-3 space-y-1 text-white/70">
                <p><strong>JAMIESSHOESS</strong></p>
                <p>302 Park Central East</p>
                <p>Springfield, MO 65807</p>
                <p>Email: kandonmcguirk72@gmail.com</p>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Your continued use of our services constitutes acceptance of any changes.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

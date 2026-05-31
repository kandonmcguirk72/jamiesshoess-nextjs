'use client'

export default function TermsPage() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-leather text-white">
      {/* Header */}
      <section className="border-b border-white/[0.07]" style={{ padding: 'clamp(40px,6vw,80px) clamp(16px,4vw,52px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1
            className="font-display italic font-black uppercase text-white mb-3"
            style={{ fontSize: 'clamp(32px,5vw,48px)', letterSpacing: '0.01em', lineHeight: 0.95 }}
          >
            Terms of Service
          </h1>
          <p className="font-sans font-medium text-[15px] text-white/60">Last updated: May 31, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: 'clamp(40px,6vw,80px) clamp(16px,4vw,52px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <article className="font-sans text-[14px] leading-relaxed text-white/80 space-y-6">
            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">1. General Agreement</h2>
              <p>
                These Terms of Service govern your use of JAMIESSHOESS, located at 302 Park Central East, Springfield, MO 65807, and our online platforms. By accessing our website or submitting items for sale, you agree to be bound by these terms.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">2. Sell Form Submissions</h2>
              <p>
                By submitting items through our Sell Form, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-2">
                <li>You own the item and have the full right to sell it</li>
                <li>The item is not stolen, counterfeit, or subject to any encumbrance or lien</li>
                <li>All information provided is accurate and truthful</li>
                <li>The photos you submit are your own or you have permission to use them</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">3. Item Evaluation & Purchase</h2>
              <p>
                Submitting an item does not guarantee that JAMIESSHOESS will purchase it. All acquisition offers and purchasing decisions are made at the sole discretion of JAMIESSHOESS. We reserve the right to reject any submission without explanation.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">4. Authenticity</h2>
              <p>
                JAMIESSHOESS authenticates items to the best of our ability using industry-standard practices. However, we make no guarantee regarding the authenticity of any item and accept no liability for authentication errors or disputes arising after purchase.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">5. Sales Are Final</h2>
              <p>
                All sales are final. No returns or refunds are accepted. Items are sold in "as-is" condition. Once a transaction is complete, JAMIESSHOESS assumes no responsibility for the condition, functionality, or any defects of the item.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">6. Items Left for Evaluation</h2>
              <p>
                JAMIESSHOESS is not liable for items left at our physical location for trade evaluation, appraisal, or consideration. We assume no responsibility for loss, theft, damage, or destruction of items in our possession. Items left for more than 30 days may be disposed of at our discretion.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">7. Pricing</h2>
              <p>
                All pricing decisions are made at the sole discretion of JAMIESSHOESS. Prices are subject to change without notice. We reserve the right to refuse any transaction.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">8. Prohibited Items</h2>
              <p>
                We do not accept items that are illegal, counterfeit, recall items, weapons, hazardous materials, or items that violate any applicable law or regulation.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">9. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, JAMIESSHOESS and its officers, employees, and agents are not liable for any indirect, incidental, special, or consequential damages arising from your use of our services or submission of items.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">10. Modification of Terms</h2>
              <p>
                JAMIESSHOESS reserves the right to modify these Terms of Service at any time. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-white mb-3">11. Contact</h2>
              <p>
                For questions regarding these Terms of Service, please contact us at JAMIESSHOESS, 302 Park Central East, Springfield, MO 65807, or visit our location.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

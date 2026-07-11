export default function MapSection() {
  return (
    <section
      className="border-t border-white/[0.07]"
      style={{ background: 'var(--bg-page)', padding: 'clamp(40px,6vw,64px) clamp(16px,4vw,52px)' }}
    >
      <div style={{ maxWidth: 1260, margin: '0 auto' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Store info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-sans font-bold text-[10px] tracking-[0.22em] uppercase text-minted/70 mb-2">
                In-Store
              </p>
              <h2
                className="font-display italic font-black uppercase text-white"
                style={{ fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '0.01em', lineHeight: 0.95 }}
              >
                Find Us
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <p className="font-sans font-bold text-[10px] tracking-[0.18em] uppercase text-white/35 mb-1.5">
                  Address
                </p>
                <p className="font-sans font-semibold text-white" style={{ fontSize: 15, lineHeight: 1.5 }}>
                  302 Park Central East<br />
                  Springfield, MO 65806
                </p>
              </div>

              <div>
                <p className="font-sans font-bold text-[10px] tracking-[0.18em] uppercase text-white/35 mb-1.5">
                  Hours
                </p>
                <p className="font-sans font-semibold text-white" style={{ fontSize: 14, lineHeight: 1.7 }}>
                  Wed – Thu &nbsp; 12–6 PM<br />
                  Fri – Sat &nbsp;&nbsp;&nbsp;&nbsp; 12–7 PM<br />
                  Sun &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12–4 PM
                </p>
              </div>

              <div>
                <p className="font-sans font-bold text-[10px] tracking-[0.18em] uppercase text-white/35 mb-1.5">
                  Location
                </p>
                <p className="font-sans text-[13px] text-white/40" style={{ lineHeight: 1.6 }}>
                  Historic Route 66 · Downtown Springfield<br />
                  Free local pickup available
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/maps?q=302+Park+Central+East+Springfield+MO+65806"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans font-bold text-[11px] tracking-[0.14em] uppercase text-minted hover:text-white transition-colors duration-150 self-start"
            >
              Open in Google Maps ↗
            </a>
          </div>

          {/* Map embed */}
          <div
            style={{
              borderRadius: 10,
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              aspectRatio: '4/3',
              position: 'relative',
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=302+Park+Central+East,+Springfield,+MO+65806&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JAMIESSHOESS store location"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

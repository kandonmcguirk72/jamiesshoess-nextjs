// Shared "Now In-Store / Shop the Floor" heading, used by both the live grid
// (ProductsSection) and the feed-down fallback (ProductsFallback) so the two
// can't drift apart visually.
export default function ProductsHeading() {
  return (
    <div>
      <p className="font-sans font-bold text-[10px] tracking-[0.22em] uppercase text-minted/70 mb-2">
        Now In-Store
      </p>
      <h2
        className="font-display italic font-black uppercase text-white"
        style={{ fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '0.01em', lineHeight: 0.95 }}
      >
        Shop the Floor
      </h2>
    </div>
  )
}

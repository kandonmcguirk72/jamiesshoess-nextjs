import FadeIn from '@/components/ui/FadeIn'
import { BRAND } from '@/lib/constants'

export default function Reviews() {
  return (
    <section className="section bg-leather border-t border-white/[0.07]">
      <div className="container">
        <div className="text-center mb-10">
          <p
            className="font-display italic font-black uppercase text-white"
            style={{ fontSize: 'var(--text-display-md)', letterSpacing: '0.01em' }}
          >
            <span className="text-cash">4.9</span> ★★★★★
          </p>
          <p className="font-sans font-semibold text-[13px] tracking-[0.1em] uppercase text-white/35 mt-2">
            What Springfield is saying
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BRAND.reviews.map((review, i) => (
            <FadeIn key={review.name} delay={i * 80}>
              <div className="bg-surface2 rounded-sm p-6 border border-white/[0.07] h-full">
                <p className="text-flash text-sm mb-3">★★★★★</p>
                <p className="font-sans text-[13px] text-white/60 leading-[1.7] italic mb-4">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="font-sans font-bold text-[12px] tracking-[0.06em] uppercase text-white/80">
                  {review.name}
                </p>
                <p className="font-sans font-semibold text-[10px] tracking-[0.1em] uppercase text-white/30 mt-0.5">
                  {review.source}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

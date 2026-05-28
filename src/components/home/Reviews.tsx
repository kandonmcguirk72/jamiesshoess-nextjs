import FadeIn from '@/components/ui/FadeIn'
import { BRAND } from '@/lib/constants'

export default function Reviews() {
  return (
    <section className="section bg-canvas border-t border-line">
      <div className="container">
        <div className="text-center">
          <p className="font-display text-[3rem] text-ink">4.9 ★★★★★</p>
          <p className="font-sans text-base text-ink3 mt-2 mb-10">
            What Springfield is saying
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BRAND.reviews.map((review, i) => (
            <FadeIn key={review.name} delay={i * 80}>
              <div className="bg-surface rounded-lg p-6 border border-line h-full">
                <p className="text-flash text-sm mb-3">★★★★★</p>
                <p className="font-sans text-sm text-ink2 leading-[1.7] italic mb-4">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="font-sans font-bold text-[13px] text-ink">
                  {review.name}
                </p>
                <p className="font-sans font-medium text-[11px] tracking-[0.08em] uppercase text-ink3 mt-0.5">
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

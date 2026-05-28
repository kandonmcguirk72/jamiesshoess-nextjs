import FadeIn from '@/components/ui/FadeIn'
import { BRAND } from '@/lib/constants'

export default function Stats() {
  return (
    <section className="bg-canvas border-y border-line py-12">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {BRAND.stats.map((stat, i) => {
            const firstChar = stat.value.charAt(0)
            const rest = stat.value.slice(1)

            return (
              <FadeIn
                key={stat.label}
                delay={i * 100}
                className="text-center px-8 py-8 border-r border-line last:border-r-0 border-b lg:border-b-0"
              >
                <span className="font-display text-[3.5rem] leading-none text-ink block">
                  <span className="text-minted">{firstChar}</span>
                  {rest}
                </span>
                <span className="font-sans font-semibold text-label uppercase text-ink3 mt-2 block tracking-[0.12em]">
                  {stat.label}
                </span>
                <p className="font-sans text-[13px] text-ink3 leading-relaxed mt-1 max-w-[180px] mx-auto">
                  {stat.desc}
                </p>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

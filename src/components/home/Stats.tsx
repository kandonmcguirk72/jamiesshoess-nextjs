import FadeIn from '@/components/ui/FadeIn'
import { BRAND } from '@/lib/constants'

export default function Stats() {
  return (
    <section className="bg-leather border-y border-white/[0.07] py-12">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {BRAND.stats.map((stat, i) => {
            const firstChar = stat.value.charAt(0)
            const rest = stat.value.slice(1)

            return (
              <FadeIn
                key={stat.label}
                delay={i * 100}
                className="text-center px-8 py-8 border-r border-white/[0.07] last:border-r-0 border-b border-b-white/[0.07] lg:border-b-0"
              >
                <span
                  className="font-display italic font-black text-[3.5rem] leading-none text-white block"
                  style={{ letterSpacing: '0.01em' }}
                >
                  <span className="text-minted">{firstChar}</span>
                  {rest}
                </span>
                <span className="font-sans font-bold text-[10px] tracking-[0.16em] uppercase text-white/35 mt-2 block">
                  {stat.label}
                </span>
                <p className="font-sans text-[13px] text-white/40 leading-relaxed mt-1 max-w-[180px] mx-auto">
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

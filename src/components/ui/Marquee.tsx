interface MarqueeProps {
  content: string[]
  bgClass?: string
  textClass?: string
}

export default function Marquee({
  content,
  bgClass = 'bg-ink',
  textClass = 'text-white',
}: MarqueeProps) {
  const doubled = [...content, ...content]

  return (
    <div className={`overflow-hidden ${bgClass} py-4 border-y-2 border-white/20`}>
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className={`font-display text-[2rem] px-8 tracking-wider ${textClass}`}>
            {item}
            {i < doubled.length - 1 && (
              <span className="text-minted mx-3">★</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

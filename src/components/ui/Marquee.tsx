interface MarqueeProps {
  content: string[]
  bgClass?: string
  textClass?: string
}

export default function Marquee({
  content,
  bgClass = 'bg-surface',
  textClass = 'text-white/70',
}: MarqueeProps) {
  const doubled = [...content, ...content]

  return (
    <div className={`overflow-hidden ${bgClass} py-4 border-y border-white/[0.07]`}>
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-display italic font-black text-[2rem] px-8 tracking-[0.01em] uppercase ${textClass}`}
          >
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

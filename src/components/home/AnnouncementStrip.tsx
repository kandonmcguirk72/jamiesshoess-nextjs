const CHIPS = [
  { label: 'Sneakers',     price: 'From $40'  },
  { label: 'Vintage Tees', price: 'From $15'  },
  { label: 'Outerwear',    price: 'From $25'  },
  { label: 'Headwear',     price: 'From $10'  },
  { label: 'Bottoms',      price: 'From $15'  },
]

export default function AnnouncementStrip() {
  return (
    <div className="bg-surface border-y border-line h-12 overflow-x-auto">
      <div className="container h-full flex items-stretch [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CHIPS.map((chip) => (
          <a
            key={chip.label}
            href="/#shop"
            className="px-8 h-full flex items-center whitespace-nowrap border-r border-line last:border-r-0
                       font-sans font-semibold text-[11px] tracking-[0.06em] uppercase text-ink
                       hover:bg-canvas hover:text-minted transition-colors duration-150 cursor-pointer"
          >
            {chip.label} · {chip.price}
          </a>
        ))}
      </div>
    </div>
  )
}

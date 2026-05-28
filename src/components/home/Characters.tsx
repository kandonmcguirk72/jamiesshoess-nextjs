import Image from 'next/image'
import { BRAND } from '@/lib/constants'

const chars = [
  { img: BRAND.images.illus1, role: 'Brand Mark',  name: 'Shop VNTG'    },
  { img: BRAND.images.illus2, role: 'Streetwear',  name: 'JMS SHS'      },
  { img: BRAND.images.illus3, role: 'Graffiti',    name: 'Skater'       },
  { img: BRAND.images.illus4, role: 'Identity',    name: 'Graffiti Tag' },
]

export default function Characters() {
  return (
    <section className="section bg-surface">
      <div className="container">
        <span className="font-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-minted mb-3 block">
          THE CREW
        </span>
        <h2 className="font-display text-display-md text-ink">
          Built in Springfield
        </h2>
        <p className="font-sans text-[15px] text-ink3 mt-2 mb-10">
          Four original characters. You&apos;ll see them around.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {chars.map((char) => (
            <div
              key={char.name}
              className="bg-canvas rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              {/* Image area */}
              <div className="relative aspect-square bg-surface">
                <Image
                  src={char.img}
                  alt={char.name + ' JAMIESSHOESS character'}
                  fill
                  className="object-contain p-6"
                  loading="lazy"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              </div>

              {/* Label area */}
              <div className="border-t border-line px-4 py-3.5">
                <p className="font-sans font-medium text-[10px] tracking-[0.15em] uppercase text-ink3">
                  {char.role}
                </p>
                <p className="font-sans font-bold text-sm text-ink mt-0.5">
                  {char.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

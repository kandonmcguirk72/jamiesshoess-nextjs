'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { GALLERY_IMAGES } from '@/lib/constants'

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    if (lightboxIndex === null) return

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setLightboxIndex(null)
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
        )
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % GALLERY_IMAGES.length
        )
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex])

  return (
    <>
      <section className="section bg-leather">
        <div className="container">
          <h2
            className="font-display italic font-black uppercase text-white"
            style={{ fontSize: 'var(--text-display-md)', lineHeight: 1.0 }}
          >
            INSIDE THE STORE
          </h2>
          <p className="font-sans font-semibold text-[14px] text-white/40 mt-2 mb-8">
            Real shots from 302 Park Central East.
          </p>

          {/* Desktop grid */}
          <div className="hidden sm:grid grid-cols-3 grid-rows-2 gap-3 h-[600px]">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-md group cursor-pointer img-zoom${i === 0 ? ' row-span-2' : ''}`}
                onClick={() => setLightboxIndex(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 33vw, 480px"
                />
                <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="font-sans font-medium text-[12px] text-white">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile horizontal scroll */}
          <div className="sm:hidden flex overflow-x-auto gap-3 pb-3 [scrollbar-width:none]">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={img.src}
                className="flex-none w-[280px] h-[200px] relative overflow-hidden rounded-md cursor-pointer"
                onClick={() => setLightboxIndex(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-ink/90 z-50 flex items-center justify-center">
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white text-2xl font-bold cursor-pointer"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer"
            onClick={() =>
              setLightboxIndex(
                (lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
              )
            }
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Image */}
          <div className="relative w-full max-w-3xl aspect-[4/3] mx-4">
            <Image
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width:768px) 100vw, 896px"
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer"
            onClick={() =>
              setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length)
            }
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}

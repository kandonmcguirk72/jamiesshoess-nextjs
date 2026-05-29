'use client'

import { useState, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BRAND } from '@/lib/constants'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return []

    const q = query.toLowerCase()
    return BRAND.categories.filter(
      (cat) =>
        cat.name.toLowerCase().includes(q) ||
        cat.desc.toLowerCase().includes(q) ||
        cat.id.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl mx-auto px-4"
          >
            {/* Search input */}
            <div className="relative mb-6">
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sneakers, vintage, outerwear, hats, bottoms..."
                className="w-full bg-white/10 border border-minted/30 rounded-lg px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-minted transition-colors duration-150"
                style={{ fontSize: 16 }}
              />
              <button
                onClick={onClose}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                aria-label="Close search"
              >
                ✕
              </button>
            </div>

            {/* Results */}
            <div className="space-y-3 max-h-[60vh] overflow-y-auto">
              {query.trim() === '' ? (
                <div className="text-center py-12">
                  <p className="text-white/40 text-sm">Start typing to search our collection</p>
                </div>
              ) : results.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-white/40 text-sm">No results found for "{query}"</p>
                </div>
              ) : (
                results.map((cat) => (
                  <motion.a
                    key={cat.id}
                    href={`/#products`}
                    onClick={onClose}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="block p-4 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-minted/50 transition-all duration-150"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-minted font-bold text-lg mb-1">{cat.name}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{cat.desc}</p>
                        <p className="text-white/40 text-xs mt-2 font-semibold">{cat.price}</p>
                      </div>
                      <div className="ml-4 flex-shrink-0 text-right">
                        <p className="text-white/25 text-2xl font-bold">{cat.num}</p>
                      </div>
                    </div>
                  </motion.a>
                ))
              )}
            </div>

            {/* Footer hint */}
            {query.trim() !== '' && results.length > 0 && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/30 text-xs text-center">
                  Click a result to view products or press <span className="text-minted">ESC</span> to close
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

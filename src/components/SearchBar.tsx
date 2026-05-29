'use client'

import { useState, useRef, useEffect } from 'react'
import SearchModal from './SearchModal'

export default function SearchBar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
        setTimeout(() => inputRef.current?.focus(), 0)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        onClick={() => setSearchOpen(true)}
        readOnly
        className="hidden md:block w-48 bg-white/[0.05] border border-white/10 rounded-lg px-4 py-2 text-white/60 placeholder-white/30 hover:bg-white/[0.08] hover:border-minted/30 transition-all duration-150 cursor-pointer text-sm"
        aria-label="Search products (Cmd+K)"
      />
      <button
        onClick={() => setSearchOpen(true)}
        className="md:hidden text-white/40 hover:text-minted transition-colors duration-150"
        aria-label="Search products"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </button>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}

'use client'

import { useState } from 'react'
import SearchModal from './SearchModal'

export default function PixelSearchLogo() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setSearchOpen(true)}
        className="flex items-center gap-2 text-minted hover:opacity-80 transition-opacity duration-150"
        aria-label="Search products"
        style={{ cursor: 'pointer' }}
      >
        <svg width="24" height="24" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer border */}
          <rect x="8" y="8" width="224" height="144" stroke="currentColor" strokeWidth="8" fill="none" />
          <rect x="16" y="16" width="208" height="128" stroke="currentColor" strokeWidth="4" fill="none" />

          {/* Top bar - Cyan */}
          <rect x="24" y="24" width="200" height="28" fill="#00ECF1" />
          <text x="124" y="42" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#000" textAnchor="middle">SEARCH</text>

          {/* Main content area - Black */}
          <rect x="24" y="56" width="200" height="72" fill="#000" stroke="currentColor" strokeWidth="2" />

          {/* Search input placeholder */}
          <rect x="32" y="68" width="160" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <text x="40" y="80" fontFamily="monospace" fontSize="8" fill="#00ECF1" opacity="0.7">Search products...</text>

          {/* Pixel cursor */}
          <g fill="#F322B3">
            <rect x="200" y="60" width="8" height="8" />
            <rect x="208" y="68" width="8" height="8" />
            <rect x="200" y="76" width="8" height="8" />
          </g>

          {/* Bottom buttons */}
          <g>
            {/* SHOP button */}
            <rect x="32" y="104" width="60" height="16" fill="#F322B3" stroke="currentColor" strokeWidth="1.5" />
            <text x="62" y="114" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#000" textAnchor="middle">SHOP</text>

            {/* VNTG button */}
            <rect x="104" y="104" width="60" height="16" fill="#F322B3" stroke="currentColor" strokeWidth="1.5" />
            <text x="134" y="114" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#000" textAnchor="middle">VNTG</text>
          </g>
        </svg>
      </button>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}

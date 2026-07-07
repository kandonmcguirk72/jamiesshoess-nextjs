'use client'

import { useState } from 'react'
import Image from 'next/image'

// If the logo ever fails to load, hide it so the glow ring renders clean
// instead of showing the browser's broken-image glyph.
export default function HeroLogo() {
  const [failed, setFailed] = useState(false)

  if (failed) return null

  return (
    <Image
      src="/brand/logos/logo-circle-badge-transparent.png"
      alt="JAMIESSHOESS"
      width={112}
      height={112}
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      priority
      onError={() => setFailed(true)}
    />
  )
}

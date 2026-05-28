import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import './globals.css'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jamiesshoess.vercel.app'),
  title: {
    default: 'JAMIESSHOESS – Sneakers & Vintage · Springfield, MO',
    template: '%s | JAMIESSHOESS',
  },
  description:
    "Springfield's sneaker boutique + vintage shop. 302 Park Central East, Historic Route 66. Hand-picked, 100% authentic. Open Wed–Sat.",
  openGraph: {
    type: 'website',
    siteName: 'JAMIESSHOESS',
    images: [{ url: '/images/storefront-hero.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@JAMIESSHOESS' },
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${jakarta.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <AnnouncementBar />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

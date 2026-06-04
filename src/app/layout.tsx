import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Rajdhani } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Providers from '@/components/Providers'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import './globals.css'

const barlow = Barlow_Condensed({
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
})

const rajdhani = Rajdhani({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani',
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
  themeColor: '#080A09',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${rajdhani.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <AnnouncementBar />
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Barlow_Condensed, Rajdhani } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Providers from '@/components/Providers'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileStickyBar from '@/components/MobileStickyBar'
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
  metadataBase: new URL('https://jamiesshoess.com'),
  title: {
    default: 'JAMIESSHOESS | Vintage Clothing & Sneakers · Springfield, MO',
    template: '%s | JAMIESSHOESS',
  },
  description:
    'Hand-picked vintage tees, authenticated sneakers, and in-house merch in downtown Springfield, MO. 302 Park Central East. Open Wed–Sat.',
  openGraph: {
    type: 'website',
    siteName: 'JAMIESSHOESS',
    images: [{ url: '/images/store/exterior-street.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@JAMIESSHOESS' },
}

export const viewport: Viewport = {
  themeColor: '#080A09',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${rajdhani.variable}`} suppressHydrationWarning>
      <head>
        {/* TODO: Replace G-XXXXXXXXXX with real GA4 Measurement ID from
            Google Analytics dashboard before going live */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>
        <Providers>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <AnnouncementBar />
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
          <MobileStickyBar />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}

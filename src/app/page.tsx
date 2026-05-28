import Script from 'next/script'
import { getLocalBusinessSchema } from '@/lib/schema'
import Hero from '@/components/home/Hero'
import AnnouncementStrip from '@/components/home/AnnouncementStrip'
import Stats from '@/components/home/Stats'
import Marquee from '@/components/ui/Marquee'
import Categories from '@/components/home/Categories'
import BrandFeature from '@/components/home/BrandFeature'
import Characters from '@/components/home/Characters'
import Gallery from '@/components/home/Gallery'
import Comparison from '@/components/home/Comparison'
import Reviews from '@/components/home/Reviews'
import EmailCapture from '@/components/home/EmailCapture'
import SocialStrip from '@/components/home/SocialStrip'

export default function HomePage() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
      />
      <Hero />
      <AnnouncementStrip />
      <Stats />
      <Marquee
        content={['JAMIESSHOESS', 'SHOP VNTG', 'SGF · MO', 'SNEAKERS', 'VINTAGE', 'ROUTE 66', 'RARE FINDS', '100% AUTHENTIC']}
      />
      <Categories />
      <BrandFeature />
      <Characters />
      <Gallery />
      <Comparison />
      <Reviews />
      <EmailCapture />
      <SocialStrip />
    </>
  )
}

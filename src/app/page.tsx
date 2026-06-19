import Script from 'next/script'
import { getLocalBusinessSchema } from '@/lib/schema'
import Hero from '@/components/home/Hero'
import CountdownBanner from '@/components/home/CountdownBanner'
import ProductsSection from '@/components/home/ProductsSection'
import FeaturesBar from '@/components/home/FeaturesBar'
import StorePhotos from '@/components/home/StorePhotos'
import CustomerStrip from '@/components/home/CustomerStrip'
import InstagramCTA from '@/components/home/InstagramCTA'
import StorySection from '@/components/home/StorySection'
import ReviewCTA from '@/components/home/ReviewCTA'
import EmailCapture from '@/components/home/EmailCapture'
import { fetchProductImageMap } from '@/lib/squarespace'

export default async function HomePage() {
  const imageMap = await fetchProductImageMap()

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
      />
      <Hero />
      <CountdownBanner />
      <ProductsSection imageMap={imageMap} />
      <FeaturesBar />
      <StorePhotos />
      <CustomerStrip />
      <InstagramCTA />
      <StorySection />
      <ReviewCTA />
      <EmailCapture />
    </>
  )
}

import { getLocalBusinessSchema, getProductListSchema } from '@/lib/schema'
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
import { fetchProducts } from '@/lib/products'

export const revalidate = 3600

export default async function HomePage() {
  // The grid never shows descriptions — strip them to keep the page payload lean
  const products = (await fetchProducts()).map((p) => ({ ...p, description: '' }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getProductListSchema(products)) }}
      />
      <Hero />
      <CountdownBanner />
      <ProductsSection products={products} />
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

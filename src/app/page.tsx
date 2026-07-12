import { getLocalBusinessSchema, getProductListSchema } from '@/lib/schema'
import Hero from '@/components/home/Hero'
import CountdownBanner from '@/components/home/CountdownBanner'
import ProductsSection from '@/components/home/ProductsSection'
import ProductsFallback from '@/components/home/ProductsFallback'
import FeaturesBar from '@/components/home/FeaturesBar'
import StorePhotos from '@/components/home/StorePhotos'
import CustomerStrip from '@/components/home/CustomerStrip'
import InstagramCTA from '@/components/home/InstagramCTA'
import StorySection from '@/components/home/StorySection'
import ReviewCTA from '@/components/home/ReviewCTA'
import EmailCapture from '@/components/home/EmailCapture'
import { fetchProducts } from '@/lib/products'

// The product fetch revalidates at 300s, which caps the whole route (a lower
// fetch revalidate wins over a higher segment value) — declare the real number.
export const revalidate = 300

export const metadata = {
  alternates: { canonical: '/' },
}

export default async function HomePage() {
  // null = store feed unreachable → render the designed fallback, never a blank grid.
  // The grid never shows descriptions — strip them to keep the page payload lean.
  const fetched = await fetchProducts()
  const products = fetched?.map((p) => ({ ...p, description: '' })) ?? null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
      />
      {products && products.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getProductListSchema(products)) }}
        />
      )}
      <Hero />
      <CountdownBanner />
      {products === null ? (
        <ProductsFallback />
      ) : (
        <ProductsSection products={products} />
      )}
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

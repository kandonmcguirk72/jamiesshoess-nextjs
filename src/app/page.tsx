import Script from 'next/script'
import { getLocalBusinessSchema } from '@/lib/schema'
import Hero from '@/components/home/Hero'
import ProductsSection from '@/components/home/ProductsSection'
import FeaturesBar from '@/components/home/FeaturesBar'
import InstagramCTA from '@/components/home/InstagramCTA'
import StorySection from '@/components/home/StorySection'
import ReviewCTA from '@/components/home/ReviewCTA'

export default function HomePage() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
      />
      {/* Above fold: brand identity + value proposition */}
      <Hero />

      {/* Products first — this is the business */}
      <ProductsSection />

      {/* Trust + differentiators */}
      <FeaturesBar />

      {/* Social conversion */}
      <InstagramCTA />

      {/* Brand story */}
      <StorySection />

      {/* Google review CTA */}
      <ReviewCTA />
    </>
  )
}

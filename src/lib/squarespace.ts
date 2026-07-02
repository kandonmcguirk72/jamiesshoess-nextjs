// Server-only. Fetches product data from Squarespace's public JSON endpoint.
// No API key required — every SQS store exposes ?format=json publicly.

interface SQSImageItem {
  assetUrl?: string
}

interface SQSVariant {
  price?: number
  attributes?: Record<string, string>
  stock?: { unlimited?: boolean; quantity?: number }
}

interface SQSItem {
  title?: string
  price?: number
  body?: string
  excerpt?: string
  tags?: string[]
  categories?: string[]
  fullUrl?: string
  assetUrl?: string
  items?: SQSImageItem[]
  variants?: SQSVariant[]
}

interface SQSPage {
  items?: SQSItem[]
  pagination?: { nextPage?: string }
}

export interface SQSRawProduct {
  slug: string
  title: string
  price: number
  description: string
  tags: string[]
  categories: string[]
  images: string[]
  squarespaceUrl: string
  size: string
  stock: number
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

function extractSize(variants: SQSVariant[], title: string): string {
  for (const v of variants) {
    const attrs = v.attributes ?? {}
    const size = attrs['Size'] ?? attrs['size'] ?? attrs['SIZE']
    if (size) return size
  }
  const m = title.match(/\b(XXS|XS|S[-/]M|M[-/]L|L[-/]XL|XL[-/]XXL|3XL|XXXL|2XL|XXL|XL|LG|MED|SM|OS|LOT)\b/i)
  return m ? m[1].toUpperCase() : 'OS'
}

export async function fetchSquarespaceProducts(): Promise<SQSRawProduct[]> {
  const results: SQSRawProduct[] = []

  try {
    let page = 1
    const maxPages = 6

    while (page <= maxPages) {
      const res = await fetch(
        `https://shop.jamiesshoes.com/home?format=json&page=${page}`,
        { next: { revalidate: 3600 } }
      )
      if (!res.ok) break

      const data: SQSPage = await res.json()
      const items = data.items ?? []
      if (!items.length) break

      for (const item of items) {
        const slug = item.fullUrl?.split('/p/')?.[1]
        if (!slug) continue

        const images: string[] = []
        for (const img of item.items ?? []) {
          if (img.assetUrl && !images.includes(img.assetUrl)) images.push(img.assetUrl)
        }
        if (!images.length && item.assetUrl) images.push(item.assetUrl)
        if (!images.length) continue

        const priceCents = item.price ?? item.variants?.[0]?.price ?? 0
        const price = priceCents / 100

        const variants = item.variants ?? []
        const size = extractSize(variants, item.title ?? '')

        const inStock =
          variants.length === 0 ||
          variants.some(
            (v) =>
              v.stock?.unlimited ||
              (typeof v.stock?.quantity === 'number' && v.stock.quantity > 0)
          )

        results.push({
          slug,
          title: item.title ?? '',
          price,
          description: stripHtml(item.body ?? item.excerpt ?? ''),
          tags: item.tags ?? [],
          categories: item.categories ?? [],
          images,
          squarespaceUrl: `https://shop.jamiesshoes.com${item.fullUrl ?? ''}`,
          size,
          stock: inStock ? 1 : 0,
        })
      }

      if (!data.pagination?.nextPage) break
      page++
    }
  } catch (err) {
    console.error('[squarespace] fetchSquarespaceProducts failed:', err)
  }

  return results
}

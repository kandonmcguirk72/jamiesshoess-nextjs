// Server-only. Fetches product data from Squarespace's public JSON endpoint.
// No API key required — every SQS store exposes ?format=json publicly.

interface SQSImageItem {
  assetUrl?: string
}

interface SQSVariant {
  price?: number
  attributes?: Record<string, string>
  unlimited?: boolean
  qtyInStock?: number
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

// Squarespace's CDN intermittently rejects requests without a browser-like
// User-Agent, which is the most likely cause of the grid rendering empty.
const FETCH_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (compatible; JamiesshoessBot/1.0; +https://jamiesshoes.com)',
  Accept: 'application/json',
}

async function fetchPage(page: number, attempts = 2): Promise<Response> {
  let lastError: unknown
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(
        `https://shop.jamiesshoes.com/home?format=json&page=${page}`,
        { headers: FETCH_HEADERS, next: { revalidate: 300 } }
      )
      if (res.ok) return res
      lastError = new Error(`HTTP ${res.status} ${res.statusText}`)
      // 4xx won't succeed on an immediate retry — only retry 5xx/network errors
      if (res.status < 500) break
    } catch (err) {
      lastError = err
    }
  }
  throw lastError
}

/**
 * Returns the product list, or `null` when the fetch layer failed entirely —
 * callers must distinguish "store is empty" ([]) from "we couldn't reach the
 * store" (null) and render a designed fallback for the latter.
 *
 * No API key or env var is required: this hits the store's public
 * `?format=json` endpoint, not the authenticated Commerce API.
 */
export async function fetchSquarespaceProducts(): Promise<SQSRawProduct[] | null> {
  const results: SQSRawProduct[] = []

  try {
    let page = 1
    const maxPages = 6

    while (page <= maxPages) {
      let res: Response
      try {
        res = await fetchPage(page)
      } catch (err) {
        // Page 1 failing means the feed is down → full failure path below.
        // A LATER page failing shouldn't hide the products we already have:
        // serve the partial catalog instead of the empty-store fallback.
        if (results.length === 0) throw err
        console.error(
          `[squarespace] page ${page} failed after retries; serving ${results.length} products from earlier pages. Error:`,
          err
        )
        break
      }

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

        // Skip test/placeholder listings
        const titleRaw = (item.title ?? '').trim()
        if (/^test$/i.test(titleRaw) || /^test\s+listing/i.test(titleRaw)) continue

        const priceCents = item.price ?? item.variants?.[0]?.price ?? 0
        const price = priceCents / 100

        const variants = item.variants ?? []
        const size = extractSize(variants, item.title ?? '')

        const inStock =
          variants.length === 0 ||
          variants.some(
            (v) => v.unlimited || (typeof v.qtyInStock === 'number' && v.qtyInStock > 0)
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
    console.error(
      '[squarespace] Product fetch failed for https://shop.jamiesshoes.com/home?format=json ' +
        '(public endpoint — no API key/env var involved). ' +
        'Check that the store is online and not blocking the request. Error:',
      err
    )
    if (process.env.NODE_ENV === 'development') {
      // Fail loud in dev so a broken feed can't slip past unnoticed.
      throw err
    }
    // Fail graceful in prod: signal failure so pages render a designed fallback
    // instead of an empty grid. (Later-page failures already broke out of the
    // loop above with partial results; only page-1/parse failures land here.)
    return null
  }

  return results
}

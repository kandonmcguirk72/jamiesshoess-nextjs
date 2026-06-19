// Server-only. Fetches product images from Squarespace's public JSON endpoint.
// No API key required — every SQS store exposes ?format=json publicly.

interface SQSImageItem {
  assetUrl?: string
}

interface SQSItem {
  fullUrl?: string       // e.g. "/home/p/0xj04ne2l137t5yio2187ihsclir14"
  assetUrl?: string      // primary image (fallback)
  items?: SQSImageItem[] // gallery images (V2 format — replaces additionalImages)
}

interface SQSPage {
  items?: SQSItem[]
  pagination?: { nextPage?: string }
}

/**
 * Returns { [squarespaceUrlSlug]: [imageUrl, ...] } for all products in the store.
 * Fetches shop.jamiesshoes.com/home?format=json — all 51 products return on page 1.
 * Cached for 1 hour via Next.js fetch cache. Gracefully returns {} on any error.
 *
 * SQS V2 note: images live in item.items[].assetUrl, NOT item.additionalImages.
 * Slug comes from item.fullUrl (e.g. "/home/p/{hashId}"), NOT item.url (null in V2).
 */
export async function fetchProductImageMap(): Promise<Record<string, string[]>> {
  const result: Record<string, string[]> = {}

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

        const urls: string[] = []
        for (const img of item.items ?? []) {
          if (img.assetUrl && !urls.includes(img.assetUrl)) urls.push(img.assetUrl)
        }
        if (!urls.length && item.assetUrl) urls.push(item.assetUrl)

        if (urls.length) result[slug] = urls
      }

      if (!data.pagination?.nextPage) break
      page++
    }
  } catch (err) {
    console.error('[squarespace] fetchProductImageMap failed:', err)
  }

  return result
}

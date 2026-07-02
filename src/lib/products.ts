import { fetchSquarespaceProducts } from './squarespace'

export interface Product {
  id: string
  name: string
  full: string
  size: string
  price: number
  cat: string
  tags: string[]
  origPrice?: number
  img: string
  images: string[]
  stock: number
  emoji: string
  description: string
  squarespaceUrl: string
}

export const SQUARESPACE_STORE_URL = 'https://shop.jamiesshoes.com'

const DISPLAY_TAGS = new Set(['VTG', 'NEW', '1/1', 'SALE'])

function inferCategory(title: string, categories: string[]): string {
  const cats = categories.map((c) => c.toLowerCase())
  if (cats.some((c) => c === 'merch' || c === 'merchandise')) return 'merch'
  if (cats.some((c) => c === 'headwear' || c === 'hats')) return 'headwear'
  if (cats.some((c) => c === 'sneakers' || c === 'shoes' || c === 'footwear')) return 'sneakers'
  if (cats.some((c) => c === 'vintage')) return 'vintage'

  const t = title.toUpperCase()
  if (t.startsWith('JAMIESSHOESS ') || t.startsWith('JS ')) {
    return /\b(HAT|BEANIE|CAP)\b/.test(t) ? 'headwear' : 'merch'
  }
  if (/\b(HAT|BEANIE|CAP)\b/.test(t)) return 'headwear'
  if (/\b(NIKE|JORDAN|ADIDAS|YEEZY|NEW BALANCE|VANS|CONVERSE|AIR FORCE|DUNK|RETRO)\b/.test(t))
    return 'sneakers'
  return 'vintage'
}

function inferEmoji(cat: string, title: string): string {
  if (cat === 'sneakers') return '👟'
  if (cat === 'headwear') return '🧢'
  const t = title.toUpperCase()
  if (/\b(HOODIE|JACKET|VEST|COAT|SWEATSUIT|PULLOVER|BUTTON.?UP)\b/.test(t)) return '🧥'
  if (/\b(HAT|BEANIE|CAP)\b/.test(t)) return '🧢'
  return '👕'
}

const DEFAULT_DESCRIPTION =
  'Vintage condition. Minor wear expected. All items are hand-picked and authenticated by JAMIESSHOESS.'

export async function fetchProducts(): Promise<Product[]> {
  const raw = await fetchSquarespaceProducts()
  return raw.map((p) => {
    const cat = inferCategory(p.title, p.categories)
    const tags = p.tags
      .map((t) => t.toUpperCase())
      .filter((t) => DISPLAY_TAGS.has(t))
    return {
      id: p.slug,
      name: p.title,
      full: p.title,
      size: p.size,
      price: p.price,
      cat,
      tags,
      img: p.images[0] ?? '',
      images: p.images,
      stock: p.stock,
      emoji: inferEmoji(cat, p.title),
      description: p.description || DEFAULT_DESCRIPTION,
      squarespaceUrl: p.squarespaceUrl,
    }
  })
}

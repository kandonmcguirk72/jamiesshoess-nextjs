import type { Product } from './products'

// ItemList of in-stock products so Google can show items with prices in search
export function getProductListSchema(products: Product[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'JAMIESSHOESS — Now In-Store',
    itemListElement: products
      .filter((p) => p.stock > 0 && p.price > 0)
      .map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: p.full,
          image: p.img.startsWith('/') ? `https://www.jamiesshoes.com${p.img}` : p.img,
          url: p.squarespaceUrl,
          offers: {
            '@type': 'Offer',
            price: p.price.toFixed(2),
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            seller: { '@type': 'Organization', name: 'JAMIESSHOESS' },
          },
        },
      })),
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ClothingStore'],
    name: 'JAMIESSHOESS',
    url: 'https://www.jamiesshoes.com',
    logo: 'https://www.jamiesshoes.com/brand/logos/logo-circle-badge-transparent.png',
    image: 'https://www.jamiesshoes.com/images/store/exterior-street.jpg',
    description:
      "Springfield's sneaker boutique and vintage clothing store. Hand-picked vintage tees, authenticated sneakers, and in-house merch at 302 Park Central East on Historic Route 66.",
    address: {
      '@type': 'PostalAddress',
      streetAddress: '302 Park Central East',
      addressLocality: 'Springfield',
      addressRegion: 'MO',
      postalCode: '65806',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.209,
      longitude: -93.2923,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Wednesday', 'Thursday'], opens: '12:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday', 'Saturday'], opens: '12:00', closes: '19:00' },
    ],
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card',
    sameAs: [
      'https://instagram.com/JAMIESSHOESS',
      'https://www.tiktok.com/@jamiesshoess417',
      'https://www.facebook.com/p/jamiesshoess-100080011887058/',
      'https://www.youtube.com/@Jamiesshoess417',
    ],
  }
}

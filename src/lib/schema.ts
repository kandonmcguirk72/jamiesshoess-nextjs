export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ClothingStore'],
    name: 'JAMIESSHOESS',
    url: 'https://jamiesshoess.com',
    logo: 'https://jamiesshoess.com/brand/logos/logo-circle-badge-transparent.png',
    image: 'https://jamiesshoess.com/images/store/exterior-street.jpg',
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
      'https://youtube.com/@jamiesshoess',
    ],
  }
}

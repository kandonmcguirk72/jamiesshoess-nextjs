export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: 'JAMIESSHOESS',
    description: "Springfield's premier sneaker boutique and vintage clothing store.",
    url: 'https://jamiesshoess.vercel.app',
    telephone: '',
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
      latitude: 37.2090,
      longitude: -93.2923,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Wednesday', 'Thursday'], opens: '12:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday', 'Saturday'], opens: '12:00', closes: '19:00' },
    ],
    sameAs: [
      'https://instagram.com/JAMIESSHOESS',
      'https://www.tiktok.com/@jamiesshoess417',
      'https://www.facebook.com/p/jamiesshoess-100080011887058/',
    ],
    priceRange: '$–$$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Venmo',
  }
}

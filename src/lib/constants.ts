export const BRAND = {
  name: 'JAMIESSHOESS',
  shortName: 'JS',
  tagline: 'Sneakers & Vintage · Springfield, MO',
  description: "Springfield's premier sneaker boutique and vintage clothing store.",
  founderQuote: "In a world of opportunity, it's your obligation to take action and create something for yourself.",
  founder: 'Jamie',

  address: {
    line1: '302 Park Central East',
    line2: 'Springfield, MO 65806',
    note: '16 doors from the Route 66 Welcome Center',
    badge: 'Historic Route 66',
    mapsUrl: 'https://maps.google.com/?q=302+Park+Central+East+Springfield+MO',
    embedUrl: 'https://maps.google.com/maps?q=302+Park+Central+East+Springfield+MO+65806&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  hours: [
    { day: 'Mon', full: 'Monday',    time: 'Closed',    open: false },
    { day: 'Tue', full: 'Tuesday',   time: 'Closed',    open: false },
    { day: 'Wed', full: 'Wednesday', time: '12 – 6 PM', open: true  },
    { day: 'Thu', full: 'Thursday',  time: '12 – 6 PM', open: true  },
    { day: 'Fri', full: 'Friday',    time: '12 – 7 PM', open: true  },
    { day: 'Sat', full: 'Saturday',  time: '12 – 7 PM', open: true  },
    { day: 'Sun', full: 'Sunday',    time: 'Closed',    open: false },
  ],

  social: {
    instagram:   { url: 'https://instagram.com/JAMIESSHOESS',                           handle: '@JAMIESSHOESS',    label: 'Instagram' },
    tiktok:      { url: 'https://www.tiktok.com/@jamiesshoess417',                      handle: '@JAMIESSHOESS417', label: 'TikTok' },
    facebook:    { url: 'https://www.facebook.com/p/jamiesshoess-100080011887058/',     handle: 'Facebook',         label: 'Facebook' },
    marketplace: { url: 'https://www.facebook.com/marketplace/profile/100080011887058/', handle: 'Shop Now',        label: 'Facebook Marketplace' },
  },

  stats: [
    { value: '50K+', label: 'Items Resold',  desc: 'Vintage pieces rescued and rehomed. Every one matters.' },
    { value: '6.1K', label: 'IG Followers',  desc: 'Follow for first access to new drops.' },
    { value: 'WKLY', label: 'New Drops',     desc: 'Fresh inventory every week without fail.' },
    { value: '100%', label: 'Authenticated', desc: 'Every piece hand-picked. No fakes, ever.' },
  ],

  categories: [
    { id: 'sneakers',  num: '01', name: 'Sneakers',     price: 'From $40', desc: "Jordan 1s to vintage runners. Nike, Adidas, New Balance, Puma — authenticated before the floor.", img: '/images/store-interior-shoes.webp' },
    { id: 'tees',      num: '02', name: 'Vintage Tees', price: 'From $15', desc: "Single stitch, band, AOP, sports. 80s–90s originals you won't find on Depop.", img: '/images/store-interior-vintage.webp' },
    { id: 'outerwear', num: '03', name: 'Outerwear',    price: 'From $25', desc: 'Coaches, windbreakers, flannels, vintage varsity. One of the deepest racks in Springfield.', img: '/images/store-interior-counter.webp' },
    { id: 'hats',      num: '04', name: 'Headwear',     price: 'From $10', desc: 'Deadstock New Era, vintage sports caps, fitted, snapback, buckets.', img: '/images/store-interior-entrance.webp' },
    { id: 'bottoms',   num: '05', name: 'Bottoms',      price: 'From $15', desc: "Vintage Levi's, Dickies, cargo pants, wide-leg denim. The most slept-on section.", img: '/images/store-interior-window.webp' },
  ],

  reviews: [
    { stars: 5, quote: "Best sneaker spot in Springfield. Found a pair I'd been hunting everywhere — they had it. Legit store, legit people.", name: '@sneakerhead_sgf', source: 'Instagram' },
    { stars: 5, quote: "The vintage section is unreal. Walked out with a '98 NASCAR AOP for $40. Nowhere else has this stuff.", name: 'Riley M.', source: 'Springfield, MO' },
    { stars: 5, quote: "Only open Wed–Sat and I plan my whole weekend around going. New stuff every single time.", name: 'Devon K.', source: 'Regular Customer' },
    { stars: 5, quote: "Found a piece in 15 minutes I'd been hunting online for months. Nothing like this in SGF.", name: 'Marcus T.', source: 'Springfield, MO' },
  ],

  faq: [
    { q: 'Are your products authentic?', a: 'Every single item — sneakers, vintage tees, hats, everything — is 100% authentic. We hand-pick every piece ourselves. No fakes. No replicas. Not here.' },
    { q: 'Where are you located?', a: '302 Park Central East, Downtown Springfield MO — right on Historic Route 66. 16 doors from the Route 66 Welcome Center. Look for the sign in the window.' },
    { q: 'Can I try things on before buying?', a: "Yes — come in during store hours and try before you buy. Especially for sneakers. We'd rather you love what you leave with." },
    { q: "What's the price range?", a: 'Sneakers from $40. Vintage tees $15–$75. Outerwear from $25. Hats from $10. Bottoms from $15. We price fairly — nothing padded for markup.' },
    { q: 'Is local pickup free?', a: 'Completely free. Find something online, then swing by Wed–Sat, 12 PM–7 PM. No shipping fees, no wait.' },
    { q: 'Do you buy or trade?', a: "Yes — bring it in during store hours. Clean condition, authentic pieces. Come talk to us." },
    { q: 'How often does new inventory arrive?', a: 'Every week. Follow @JAMIESSHOESS on Instagram — we post every drop there first.' },
    { q: 'What payment methods do you accept?', a: 'Cash, credit/debit card, and Venmo.' },
    { q: 'Do you ship?', a: "Local pickup only for now. Browse Instagram or Facebook Marketplace, then come grab it in-store." },
  ],

  values: [
    { title: 'Ruthless Curation',   desc: "Every item earns its place. Nothing on the floor unless we'd wear it ourselves." },
    { title: 'Always Authentic',    desc: 'No fakes. No replicas. No misleading descriptions. We do the homework so you don\'t have to.' },
    { title: 'Fair Prices',         desc: 'Boutique quality without boutique markup. Springfield is our community — we serve it fairly.' },
    { title: 'Sustainability First',desc: 'Every vintage purchase is a direct action against fast fashion waste. Shop used, shop smart.' },
    { title: 'Real Talk',           desc: "We'll tell you honestly if something isn't right for you. We'd rather earn trust than a quick sale." },
    { title: 'Always Evolving',     desc: 'New drops every week. New categories. JAMIESSHOESS grows because the culture grows.' },
  ],

  images: {
    heroStorefront:    '/images/storefront-hero.webp',
    heroStorefrontFbk: '/images/storefront-hero.jpg',
    sneakersFeature:   '/images/sneakers-feature.webp',
    interiorFisheye:   '/images/store-interior-fisheye.webp',
    interiorShoes:     '/images/store-interior-shoes.webp',
    interiorVintage:   '/images/store-interior-vintage.webp',
    interiorCounter:   '/images/store-interior-counter.webp',
    interiorEntrance:  '/images/store-interior-entrance.webp',
    interiorWindow:    '/images/store-interior-window.webp',
    interiorDark:      '/images/store-interior-dark.webp',
    logoPrimary1:      '/brand/logos/primary-logo-1.png',
    logoPrimary2:      '/brand/logos/primary-logo-2.png',
    illus1:            '/brand/illustrations/illustration-1.png',
    illus2:            '/brand/illustrations/illustration-2.png',
    illus3:            '/brand/illustrations/illustration-3.png',
    illus4:            '/brand/illustrations/illustration-4.png',
  },
  video:       '/videos/store-reel.mp4',
  videoPoster: '/images/store-interior-dark.webp',
}

export const GALLERY_IMAGES = [
  { src: '/images/store-interior-fisheye.webp',  alt: 'JAMIESSHOESS store interior fisheye view',    caption: 'The floor' },
  { src: '/images/store-interior-shoes.webp',    alt: 'Sneaker wall at JAMIESSHOESS',                caption: 'Sneaker wall' },
  { src: '/images/store-interior-vintage.webp',  alt: 'Vintage clothing rack at JAMIESSHOESS',       caption: 'Vintage rack' },
  { src: '/images/store-interior-counter.webp',  alt: 'Counter at JAMIESSHOESS Springfield',         caption: 'The counter' },
  { src: '/images/store-interior-entrance.webp', alt: 'Entrance to JAMIESSHOESS downtown Springfield',caption: 'Entrance' },
  { src: '/images/store-interior-window.webp',   alt: 'Window display at JAMIESSHOESS',              caption: 'Window display' },
]

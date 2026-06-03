export interface Product {
  id: number
  name: string
  full: string
  size: string
  price: number
  cat: string
  tags: string[]
  origPrice?: number
  img: string
  stock: number
  emoji: string
  description: string
}

export const PRODUCTS: Product[] = [
  { id:1, name:'1/1 JAMIESSHOESS HOODIE', full:'1/1 JAMIESSHOESS HOODIE (SIZE XXL)', size:'XXL', price:45, cat:'merch', tags:['1/1'], stock:1, emoji:'👕', description:'One-of-one JAMIESSHOESS custom hoodie. Size XXL.', img:'/images/listings/product-1.jpg' },
  { id:2, name:'1/1 JAMIESSHOESS CREW', full:'1/1 JAMIESSHOESS CREW (SIZE XL)', size:'XL', price:50, cat:'merch', tags:['1/1'], stock:1, emoji:'👕', description:'One-of-one JAMIESSHOESS custom crewneck. Size XL.', img:'/images/listings/product-2.jpg' },
  { id:3, name:'1/1 JAMIESSHOESS CREW', full:'1/1 JAMIESSHOESS CREW (SIZE 2XL)', size:'2XL', price:35, cat:'merch', tags:['1/1'], stock:1, emoji:'👕', description:'One-of-one JAMIESSHOESS custom crewneck. Size 2XL.', img:'/images/listings/product-3.jpg' },
  { id:4, name:'1/1 JAMIESSHOESS CREWNECK', full:'1/1 JAMIESSHOESS CREWNECK (SIZE 3XL)', size:'3XL', price:45, cat:'merch', tags:['1/1'], stock:1, emoji:'👕', description:'One-of-one JAMIESSHOESS custom crewneck. Size 3XL.', img:'/images/listings/product-4.jpg' },
  { id:5, name:'1/1 JAMIESSHOESS HOODIE', full:'1/1 JAMIESSHOESS HOODIE (SIZE M)', size:'M', price:60, cat:'merch', tags:['1/1'], stock:1, emoji:'👕', description:'One-of-one JAMIESSHOESS custom hoodie. Size M.', img:'/images/listings/product-5.jpg' },
  { id:6, name:'JAMIESSHOESS OG TEE', full:'JAMIESSHOESS OG TEE (SIZE S–3XL)', size:'S–3XL', price:30, cat:'merch', tags:['NEW'], stock:10, emoji:'👕', description:'The OG JAMIESSHOESS tee. Available S through 3XL.', img:'/images/listings/product-6.jpg' },
  { id:7, name:'VTG NASCAR AOP', full:'VTG NASCAR AOP (SIZE L)', size:'L', price:100, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage NASCAR all-over print tee. Rare 90s piece.', img:'/images/listings/product-7.jpg' },
  { id:8, name:'VTG MARK MCGWIRE TEE', full:'VTG MARK MCGWIRE TEE (FITS XL)', size:'XL', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage Mark McGwire graphic tee. Fits XL.', img:'/images/listings/product-8.jpg' },
  { id:9, name:'VTG Y2K JIMMY NEUTRON TEE', full:'VTG Y2K JIMMY NEUTRON TEE (SIZE S–M)', size:'S–M', price:30, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Y2K era Jimmy Neutron graphic tee. Fits S–M.', img:'/images/listings/product-9.jpg' },
  { id:10, name:'VTG GUESS TEE', full:'VTG GUESS TEE (SIZE L)', size:'L', price:30, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage Guess graphic tee. Size L.', img:'/images/listings/product-10.jpg' },
  { id:11, name:'VTG GUESS TEE', full:'VTG GUESS TEE (SIZE M)', size:'M', price:30, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage Guess graphic tee. Size M.', img:'/images/listings/product-11.jpg' },
  { id:12, name:'VTG SINGLE STITCH LEVIS TEE', full:'VTG SINGLE STITCH LEVIS TEE (FITS S–M)', size:'S–M', price:30, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:"Vintage single stitch Levi's tee. Fits S–M.", img:'/images/listings/product-12.jpg' },
  { id:13, name:'VTG ELVIS TEE', full:'VTG ELVIS TEE (SIZE M)', size:'M', price:30, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage Elvis Presley graphic tee. Size M.', img:'/images/listings/product-13.jpg' },
  { id:14, name:'VTG TASMANIAN DEVIL TEE', full:'VTG TASMANIAN DEVIL TEE (SIZE XL)', size:'XL', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage Tasmanian Devil Looney Tunes tee. Size XL.', img:'/images/listings/product-14.jpg' },
  { id:15, name:'VTG Y2K SKATE TEE', full:'VTG Y2K SKATE TEE (SIZE S)', size:'S', price:25, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Y2K era skate graphic tee. Size S.', img:'/images/listings/product-15.jpg' },
  { id:16, name:'VTG 1998 JERRY RICE 49ERS TEE', full:'VTG 1998 JERRY RICE 49ERS TEE (SIZE M)', size:'M', price:60, cat:'vintage', tags:['1/1','VTG'], stock:1, emoji:'👕', description:'Vintage 1998 Jerry Rice San Francisco 49ers tee. Size M.', img:'/images/listings/product-16.jpg' },
  { id:17, name:'VTG 1985 WORLD SERIES KC ROYALS TEE', full:'VTG 1985 WORLD SERIES KC ROYALS TEE (SIZE M)', size:'M', price:40, cat:'vintage', tags:['1/1','VTG'], stock:1, emoji:'👕', description:'Vintage 1985 World Series Kansas City Royals tee. Size M.', img:'/images/listings/product-17.jpg' },
  { id:18, name:'VTG 2007 JOHN CENA WRESTLING TEE', full:'VTG 2007 JOHN CENA WRESTLING TEE (SIZE L)', size:'L', price:40, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage 2007 John Cena WWE wrestling tee. Size L.', img:'/images/listings/product-18.jpg' },
  { id:19, name:'VTG FEAR FACTOR TEE', full:'VTG FEAR FACTOR TEE (SIZE XL)', size:'XL', price:40, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage Fear Factor TV show tee. Size XL.', img:'/images/listings/product-19.jpg' },
  { id:20, name:'WMNS HARLEY JACKET', full:'WMNS HARLEY JACKET (SIZE XL)', size:'XL', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:"Women's Harley-Davidson jacket. Size XL.", img:'/images/listings/product-20.jpg' },
  { id:21, name:'VTG ST. LOUIS RAMS PULL OVER', full:'VTG ST. LOUIS RAMS PULL OVER (SIZE L–XL)', size:'L–XL', price:30, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage St. Louis Rams pullover. Fits L–XL.', img:'/images/listings/product-21.jpg' },
  { id:22, name:'VTG 2009 AOP TEE', full:'VTG 2009 AOP TEE (SIZE M)', size:'M', price:60, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage 2009 all-over print tee. Size M.', img:'/images/listings/product-22.jpg' },
  { id:23, name:'VTG WOMENS HARLEY VEST', full:'VTG WOMENS HARLEY VEST (SIZE L)', size:'L', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:"Vintage women's Harley-Davidson vest. Size L.", img:'/images/listings/product-23.jpg' },
  { id:24, name:'VTG HARLEY DENIM TOP', full:'VTG HARLEY DENIM TOP (FITS L)', size:'L', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage Harley-Davidson denim top. Fits L.', img:'/images/listings/product-24.jpg' },
  { id:25, name:'VTG BUM EQUIPMENT TEE', full:'VTG BUM EQUIPMENT TEE (FITS XL)', size:'XL', price:25, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage Bum Equipment tee. Fits XL.', img:'/images/listings/product-25.jpg' },
  { id:26, name:'VTG WOLF TEE', full:'VTG WOLF TEE (SIZE 3XL)', size:'3XL', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage wolf graphic tee. Size 3XL.', img:'/images/listings/product-26.jpg' },
  { id:27, name:'VTG 2008 SUPERMAN THERMAL', full:'VTG 2008 SUPERMAN THERMAL (SIZE L)', size:'L', price:25, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage 2008 Superman thermal long sleeve. Size L.', img:'/images/listings/product-27.jpg' },
  { id:28, name:'VTG 2008 HARLEY TEE', full:'VTG 2008 HARLEY TEE (SIZE XXL)', size:'XXL', price:30, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage 2008 Harley-Davidson tee. Size XXL.', img:'/images/listings/product-28.jpg' },
  { id:29, name:'VTG NOTRE DAME TEE', full:'VTG NOTRE DAME TEE (SIZE L)', size:'L', price:65, cat:'vintage', tags:['1/1','VTG'], stock:1, emoji:'👕', description:'Vintage Notre Dame Fighting Irish tee. Size L.', img:'/images/listings/product-29.jpg' },
  { id:30, name:'VTG JNCO MOTO TEE', full:'VTG JNCO MOTO TEE (FITS S–M)', size:'S–M', price:80, cat:'vintage', tags:['1/1','VTG'], stock:1, emoji:'👕', description:'Vintage JNCO motorcycle graphic tee. Rare find. Fits S–M.', img:'/images/listings/product-30.jpg' },
  { id:31, name:'VTG CHIEFS SINGLE STITCH', full:'VTG CHIEFS SINGLE STITCH (FITS XL)', size:'XL', price:25, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage KC Chiefs single stitch tee. Fits XL.', img:'/images/listings/product-31.jpg' },
  { id:32, name:'VTG JNCO LONG SLEEVE TEE', full:'VTG JNCO LONG SLEEVE TEE (FITS S–M)', size:'S–M', price:80, cat:'vintage', tags:['1/1','VTG'], stock:1, emoji:'👕', description:'Vintage JNCO long sleeve tee. Rare. Fits S–M.', img:'/images/listings/product-32.jpg' },
  { id:33, name:'VTG RAMS JERSEY', full:'VTG RAMS JERSEY (SIZE XL)', size:'XL', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage St. Louis Rams jersey. Size XL.', img:'/images/listings/product-33.jpg' },
  { id:34, name:'JAMIESSHOESS 1/1 CAMO TEE', full:'JAMIESSHOESS 1/1 CAMO TEE (FITS L)', size:'L', price:30, cat:'merch', tags:['1/1'], stock:0, emoji:'👕', description:'One-of-one JAMIESSHOESS camo tee. Fits L.', img:'/images/listings/product-34.jpg' },
  { id:35, name:'JAMIESSHOESS X JOHN DEERE LONG SLEEVE', full:'JAMIESSHOESS X JOHN DEERE 1/1 LONG SLEEVE (SIZE M)', size:'M', price:40, cat:'merch', tags:['1/1'], stock:0, emoji:'👕', description:'JAMIESSHOESS x John Deere one-of-one long sleeve. Size M.', img:'/images/listings/product-35.jpg' },
  { id:36, name:'CARHARTT X JAMIESSHOESS BEANIE', full:'Carhartt X Jamiesshoess Beanie', size:'One Size', price:30, cat:'headwear', tags:['NEW'], stock:3, emoji:'🧢', description:'Limited Carhartt X JAMIESSHOESS collab beanie.', img:'/images/listings/product-36.jpg' },
  { id:37, name:'CARHARTT X JAMIESSHOESS BEANIE (ALT)', full:'Carhartt X Jamiesshoess Beanie (Alt)', size:'One Size', price:30, cat:'headwear', tags:['NEW'], stock:3, emoji:'🧢', description:'Limited Carhartt X JAMIESSHOESS collab beanie — alternate colorway.', img:'/images/listings/product-37.jpg' },
  { id:38, name:'VINTAGE SWEATER', full:'Vintage Sweater (SIZE L)', size:'L', price:22, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage patterned sweater. Size L.', img:'/images/listings/product-38.jpg' },
  { id:39, name:'VINTAGE KU CREWNECK', full:'Vintage KU Crewneck (SIZE XL)', size:'XL', price:20, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage University of Kansas Jayhawks crewneck. Size XL.', img:'/images/listings/product-39.jpg' },
  { id:40, name:'VINTAGE SWEATER', full:'Vintage Sweater (SIZE XXL)', size:'XXL', price:22, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage patterned sweater. Size XXL.', img:'/images/listings/product-40.jpg' },
  { id:41, name:'HARLEY DAVIDSON BUTTON UP', full:'Harley Davidson Button Up (SIZE XL)', size:'XL', price:14.99, cat:'vintage', tags:['VTG'], stock:0, emoji:'👕', description:'Harley-Davidson button-up shirt. Size XL.', img:'/images/listings/product-41.jpg' },
  { id:42, name:'VTG 1996 GRATEFUL DEAD TEE', full:'Vintage 1996 Grateful Dead Tee (SIZE S)', size:'S', price:35, cat:'vintage', tags:['1/1','VTG'], stock:1, emoji:'👕', description:'Authentic 1996 Grateful Dead graphic tee. Size S.', img:'/images/listings/product-42.jpg' },
  { id:43, name:'VTG CARDINALS 3PC LOT', full:'Vintage Cardinals 3pc Lot (SIZE XL)', size:'XL', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕', description:'Vintage St. Louis Cardinals 3-piece lot — jersey, tee, and hat. Size XL.', img:'/images/listings/product-43.jpg' },
]

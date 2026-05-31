'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { useCart } from '@/lib/cart-context'
import type { CartItem } from '@/lib/cart-context'

interface Product extends CartItem {
  cat: string
  tags: string[]
  origPrice?: number
  img: string
  stock: number
  description: string
}

const PRODUCTS: Product[] = [
  { id:1,  name:'1/1 JAMIESSHOESS HOODIE',               full:'1/1 JAMIESSHOESS HOODIE (SIZE XXL)',                    size:'XXL',      price:45,    cat:'merch',    tags:['1/1'],       stock:1, emoji:'👕', description:'One-of-one JAMIESSHOESS custom hoodie. Size XXL.',                                            img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1769025392066-P7XJRKHLPSGAI1VDMF02/911DF987-D9D3-4530-AEB6-B7DE6E422C63.jpeg' },
  { id:2,  name:'1/1 JAMIESSHOESS CREW',                 full:'1/1 JAMIESSHOESS CREW (SIZE XL)',                       size:'XL',       price:50,    cat:'merch',    tags:['1/1'],       stock:1, emoji:'👕', description:'One-of-one JAMIESSHOESS custom crewneck. Size XL.',                                           img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1769024847046-BJB88E0ZLFPGZS3SP5UN/1116CB6B-A048-49C1-8E11-77D173F8652A.jpeg' },
  { id:3,  name:'1/1 JAMIESSHOESS CREW',                 full:'1/1 JAMIESSHOESS CREW (SIZE 2XL)',                      size:'2XL',      price:35,    cat:'merch',    tags:['1/1'],       stock:1, emoji:'👕', description:'One-of-one JAMIESSHOESS custom crewneck. Size 2XL.',                                          img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1769024663976-8D15JYL27GTBO1HC4A82/997994FA-D1F7-4508-8109-881517E79C54.jpeg' },
  { id:4,  name:'1/1 JAMIESSHOESS CREWNECK',             full:'1/1 JAMIESSHOESS CREWNECK (SIZE 3XL)',                  size:'3XL',      price:45,    cat:'merch',    tags:['1/1'],       stock:1, emoji:'👕', description:'One-of-one JAMIESSHOESS custom crewneck. Size 3XL.',                                          img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1769024370224-PMMCNUA3YOXFBDJ5KZ8E/CB419FB3-01A1-42F0-850B-F2796E23F12D.jpeg' },
  { id:5,  name:'1/1 JAMIESSHOESS HOODIE',               full:'1/1 JAMIESSHOESS HOODIE (SIZE M)',                      size:'M',        price:60,    cat:'merch',    tags:['1/1'],       stock:1, emoji:'👕', description:'One-of-one JAMIESSHOESS custom hoodie. Size M.',                                              img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1769023591550-33ZZ1P5XJE7C53DJNLOT/CBE74A86-6092-4F5A-BE46-84D15AAB2699.jpeg' },
  { id:6,  name:'JAMIESSHOESS OG TEE',                   full:'JAMIESSHOESS OG TEE (SIZE S–3XL)',                      size:'S–3XL',    price:30,    cat:'merch',    tags:['NEW'],       stock:10,emoji:'👕', description:'The OG JAMIESSHOESS tee. Available S through 3XL.',                                           img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1769020654352-9W6B5R11ZL6HMRTM1R1S/2CD3764A-32D5-4EA4-9C9F-7EFA3ECEBF1F.jpeg' },
  { id:7,  name:'VTG NASCAR AOP',                        full:'VTG NASCAR AOP (SIZE L)',                               size:'L',        price:100,   cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage NASCAR all-over print tee. Rare 90s piece.',                                          img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1753149401458-JM7FT4UGDGQQ641OHKE5/694048B9-EDAB-4160-A293-B4C3FA6703CD.jpeg' },
  { id:8,  name:'VTG MARK MCGWIRE TEE',                  full:'VTG MARK MCGWIRE TEE (FITS XL)',                        size:'XL',       price:35,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage Mark McGwire graphic tee. Fits XL.',                                                  img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1753117798246-8KKGR7RBKWFPA7QSIPT9/50F1C565-8220-40AC-84FC-33A3CE263E14.jpeg' },
  { id:9,  name:'VTG Y2K JIMMY NEUTRON TEE',             full:'VTG Y2K JIMMY NEUTRON TEE (SIZE S–M)',                  size:'S–M',      price:30,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Y2K era Jimmy Neutron graphic tee. Fits S–M.',                                                img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1753117281561-AU3P5WPH3NBG1I7P0IZP/37AFBC25-CF8A-428D-A993-CC56C7944935.jpeg' },
  { id:10, name:'VTG GUESS TEE',                         full:'VTG GUESS TEE (SIZE L)',                                size:'L',        price:30,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage Guess graphic tee. Size L.',                                                           img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1753117226657-CHY9DGBC9O6GOYZ4UU0V/B791FBC7-0B00-4575-85EA-1D6219D391A3.jpeg' },
  { id:11, name:'VTG GUESS TEE',                         full:'VTG GUESS TEE (SIZE M)',                                size:'M',        price:30,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage Guess graphic tee. Size M.',                                                           img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1753117140602-6IK7F258SRLK3A1K454Y/1C4C52B6-00CE-448D-8A7D-EEB92E9A4E0E.jpeg' },
  { id:12, name:'VTG SINGLE STITCH LEVIS TEE',           full:'VTG SINGLE STITCH LEVIS TEE (FITS S–M)',                size:'S–M',      price:30,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage single stitch Levi\'s tee. Fits S–M.',                                               img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1753117004822-HPWDFU51GKV8AK2VQ7PH/CE033052-D39D-47C2-ACF7-D775B78CCC16.jpeg' },
  { id:13, name:'VTG ELVIS TEE',                         full:'VTG ELVIS TEE (SIZE M)',                                size:'M',        price:30,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage Elvis Presley graphic tee. Size M.',                                                  img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1753116932266-CQESCIOP260HKQMS0CXQ/FCF2B474-E963-4649-B595-D6C64D3DDB96.jpeg' },
  { id:14, name:'VTG TASMANIAN DEVIL TEE',               full:'VTG TASMANIAN DEVIL TEE (SIZE XL)',                     size:'XL',       price:35,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage Tasmanian Devil Looney Tunes tee. Size XL.',                                          img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1753116762718-YA13VRFO92500PLVWV75/81A8A3B8-E7A2-4AB1-864B-FDAD3606F66F.jpeg' },
  { id:15, name:'VTG Y2K SKATE TEE',                     full:'VTG Y2K SKATE TEE (SIZE S)',                            size:'S',        price:25,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Y2K era skate graphic tee. Size S.',                                                          img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1753116484145-5K6A3E7Y8F0HQYPU8N34/F1521EFA-42DE-4750-B1A3-4AC44AAE84D9.jpeg' },
  { id:16, name:'VTG 1998 JERRY RICE 49ERS TEE',         full:'VTG 1998 JERRY RICE 49ERS TEE (SIZE M)',                size:'M',        price:60,    cat:'vintage',  tags:['1/1','VTG'], stock:1, emoji:'👕', description:'Vintage 1998 Jerry Rice San Francisco 49ers tee. Size M.',                                    img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1753116205949-4RW4DXIG5T4G7DXV1UQ2/C1A9A2F0-A17F-4E46-A8D6-65F821E4DBF4.jpeg' },
  { id:17, name:'VTG 1985 WORLD SERIES KC ROYALS TEE',   full:'VTG 1985 WORLD SERIES KC ROYALS TEE (SIZE M)',          size:'M',        price:40,    cat:'vintage',  tags:['1/1','VTG'], stock:1, emoji:'👕', description:'Vintage 1985 World Series Kansas City Royals tee. Size M.',                                   img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1753116015213-BP8R4102HPXSAJTABBG8/2B6F77A3-40DC-41FC-AE58-7F11D1112C74.jpeg' },
  { id:18, name:'VTG 2007 JOHN CENA WRESTLING TEE',      full:'VTG 2007 JOHN CENA WRESTLING TEE (SIZE L)',             size:'L',        price:40,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage 2007 John Cena WWE wrestling tee. Size L.',                                           img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1753115809358-6INNK9ITIUZERX8U3USA/459E939D-0749-4F9A-9556-3CBB3DDB5C0D.jpeg' },
  { id:19, name:'VTG FEAR FACTOR TEE',                   full:'VTG FEAR FACTOR TEE (SIZE XL)',                         size:'XL',       price:40,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage Fear Factor TV show tee. Size XL.',                                                   img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1753115619602-AIKTNPYQLEH1528K8HJ0/8C502257-E357-496A-BC4E-4CB62FE45266.jpeg' },
  { id:20, name:'WMNS HARLEY JACKET',                    full:'WMNS HARLEY JACKET (SIZE XL)',                          size:'XL',       price:35,    cat:'vintage',  tags:[],            stock:1, emoji:'👕', description:"Women's Harley-Davidson jacket. Size XL.",                                                    img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1751748781792-SDULZ9VOLAURQNL5D70B/868A94F3-9F18-4473-972B-31EA4F5A8125.jpeg' },
  { id:21, name:'VTG ST. LOUIS RAMS PULL OVER',          full:'VTG ST. LOUIS RAMS PULL OVER (SIZE L–XL)',              size:'L–XL',     price:30,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage St. Louis Rams pullover. Fits L–XL.',                                                 img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1751748710844-OA89ZPBABWGT1J8AN4X6/8FDACAE4-863F-4046-98F4-29AAF82DF299.jpeg' },
  { id:22, name:'VTG 2009 AOP TEE',                      full:'VTG 2009 AOP TEE (SIZE M)',                             size:'M',        price:60,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage 2009 all-over print tee. Size M.',                                                    img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1751746210051-ANE00GYG2V0A7A3DGQI7/9B431DF9-B072-4E1C-90FE-79428B23C888.jpeg' },
  { id:23, name:'VTG WOMENS HARLEY VEST',                full:'VTG WOMENS HARLEY VEST (SIZE L)',                       size:'L',        price:35,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:"Vintage women's Harley-Davidson vest. Size L.",                                               img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1751746072456-9G7W4ZKR00YHTU8GAGRW/23E017F5-FA3D-450F-871C-58A73F50DF3C.jpeg' },
  { id:24, name:'VTG HARLEY DENIM TOP',                  full:'VTG HARLEY DENIM TOP (FITS L)',                         size:'L',        price:35,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage Harley-Davidson denim top. Fits L.',                                                  img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1751746010264-8NGRPWYMQQ3LG86FG9TA/15D3D2F2-1267-4243-9C08-64FBA7977322.jpeg' },
  { id:25, name:'VTG BUM EQUIPMENT TEE',                 full:'VTG BUM EQUIPMENT TEE (FITS XL)',                       size:'XL',       price:25,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage Bum Equipment tee. Fits XL.',                                                         img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1751745910060-4OC3KK5Q6NRG4PO10M0Z/78BB4CDF-BD39-4055-BBD9-8EB112DE2EFA.jpeg' },
  { id:26, name:'VTG WOLF TEE',                          full:'VTG WOLF TEE (SIZE 3XL)',                               size:'3XL',      price:35,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage wolf graphic tee. Size 3XL.',                                                         img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1751745785367-04A4PT7ECLNVL5Y95P2X/605D6D71-3B14-47BE-8E45-7D225C236A99.jpeg' },
  { id:27, name:'VTG 2008 SUPERMAN THERMAL',             full:'VTG 2008 SUPERMAN THERMAL (SIZE L)',                    size:'L',        price:25,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage 2008 Superman thermal long sleeve. Size L.',                                          img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1751745573026-UQK4HQSRCATTMXM4Y1VD/D4977C5B-A767-40AF-9BDB-6972989E2AD2.jpeg' },
  { id:28, name:'VTG 2008 HARLEY TEE',                   full:'VTG 2008 HARLEY TEE (SIZE XXL)',                        size:'XXL',      price:30,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage 2008 Harley-Davidson tee. Size XXL.',                                                 img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1751745512105-6GM82WYEVZJBJIT2T7IW/E35455F3-CFF7-4EF2-A17C-FEE21EF5B387.jpeg' },
  { id:29, name:'VTG NOTRE DAME TEE',                    full:'VTG NOTRE DAME TEE (SIZE L)',                           size:'L',        price:65,    cat:'vintage',  tags:['1/1','VTG'], stock:1, emoji:'👕', description:'Vintage Notre Dame Fighting Irish tee. Size L.',                                               img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1751744985185-ZJEJBRSSNR9AZ7OVQKXY/7F50FA65-94E1-416F-A4AE-9F2C664E8A30.jpeg' },
  { id:30, name:'VTG JNCO MOTO TEE',                     full:'VTG JNCO MOTO TEE (FITS S–M)',                          size:'S–M',      price:80,    cat:'vintage',  tags:['1/1','VTG'], stock:1, emoji:'👕', description:'Vintage JNCO motorcycle graphic tee. Rare find. Fits S–M.',                                    img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1751745091579-VL5FFKYYY8B2HQL8EE3V/DB845825-E51B-4111-95DA-5414F3C13395.jpeg' },
  { id:31, name:'VTG CHIEFS SINGLE STITCH',              full:'VTG CHIEFS SINGLE STITCH (FITS XL)',                    size:'XL',       price:25,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage KC Chiefs single stitch tee. Fits XL.',                                               img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1751744819157-33TNB42LCX1ABLT4S3W7/AE0D260E-A953-4FDD-8AB2-C76571FF4B0F.jpeg' },
  { id:32, name:'VTG JNCO LONG SLEEVE TEE',              full:'VTG JNCO LONG SLEEVE TEE (FITS S–M)',                   size:'S–M',      price:80,    cat:'vintage',  tags:['1/1','VTG'], stock:1, emoji:'👕', description:'Vintage JNCO long sleeve tee. Rare. Fits S–M.',                                               img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1751745202277-SRS5L4Q1C3RY84IMX550/E16FABA8-D903-478E-A042-F6D5BFC43849.jpeg' },
  { id:33, name:'VTG RAMS JERSEY',                       full:'VTG RAMS JERSEY (SIZE XL)',                             size:'XL',       price:35,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage St. Louis Rams jersey. Size XL.',                                                     img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1751744656229-QG6ZPZ9BLOB2R5YMYF9H/2CDD9922-D9AA-4234-80B8-AFA21FCCF6E0.jpeg' },
  { id:34, name:'JAMIESSHOESS 1/1 CAMO TEE',             full:'JAMIESSHOESS 1/1 CAMO TEE (FITS L)',                    size:'L',        price:30,    cat:'merch',    tags:['1/1'],       stock:0, emoji:'👕', description:'One-of-one JAMIESSHOESS camo tee. Fits L.',                                                   img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1743438158749-HEVGR37TK9XO62F6UBMX/07780A60-56E8-4EE7-9D80-3C9520BA7913.jpeg' },
  { id:35, name:'JAMIESSHOESS X JOHN DEERE LONG SLEEVE', full:'JAMIESSHOESS X JOHN DEERE 1/1 LONG SLEEVE (SIZE M)',    size:'M',        price:40,    cat:'merch',    tags:['1/1'],       stock:0, emoji:'👕', description:'JAMIESSHOESS x John Deere one-of-one long sleeve. Size M.',                                   img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1743438024614-A3V1R79DY01KTZ2BP1SN/E2A42982-F396-4B5E-AED5-3AB4F0C2C8A5.jpeg' },
  { id:36, name:'CARHARTT X JAMIESSHOESS BEANIE',        full:'Carhartt X Jamiesshoess Beanie',                        size:'One Size', price:30,    cat:'headwear', tags:['NEW'],       stock:3, emoji:'🧢', description:'Limited Carhartt X JAMIESSHOESS collab beanie.',                                              img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1737153351329-UDJ7OM6TKE1QZHKFIO4N/A1BB25E7-F661-4053-A3D8-CDC147F3A500.jpeg' },
  { id:37, name:'CARHARTT X JAMIESSHOESS BEANIE (ALT)',  full:'Carhartt X Jamiesshoess Beanie (Alt)',                  size:'One Size', price:30,    cat:'headwear', tags:['NEW'],       stock:3, emoji:'🧢', description:'Limited Carhartt X JAMIESSHOESS collab beanie — alternate colorway.',                        img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1737153522825-XYZHXBJUMJFDO53B7HTG/FC712D36-D939-4A3A-8A21-5D95E0628DAA.jpeg' },
  { id:38, name:'VINTAGE SWEATER',                       full:'Vintage Sweater (SIZE L)',                              size:'L',        price:22,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage patterned sweater. Size L.',                                                          img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1737156943994-VD8F3OIXW21NLNSMU5FE/CCB310B9-E78C-49B8-9932-0703D4E93C26.jpeg' },
  { id:39, name:'VINTAGE KU CREWNECK',                   full:'Vintage KU Crewneck (SIZE XL)',                         size:'XL',       price:20,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage University of Kansas Jayhawks crewneck. Size XL.',                                    img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1737155041819-DXESTAD5RNSAJ6UWBJVE/6B72FD25-8EF6-4D6A-8F9A-7963F63CDF15.jpeg' },
  { id:40, name:'VINTAGE SWEATER',                       full:'Vintage Sweater (SIZE XXL)',                            size:'XXL',      price:22,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage patterned sweater. Size XXL.',                                                        img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1737156830425-CV20QAWZLVGF6Z3M6X7E/C7DD0357-A2FA-4266-9015-48F626A07DC8.jpeg' },
  { id:41, name:'HARLEY DAVIDSON BUTTON UP',             full:'Harley Davidson Button Up (SIZE XL)',                   size:'XL',       price:14.99, cat:'vintage',  tags:['VTG'],       stock:0, emoji:'👕', description:'Harley-Davidson button-up shirt. Size XL.',                                                   img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1737155280959-KPF80J3T23M52NWEWABR/891228DE-32CF-4A37-97A0-3EFCEB92FE6C.jpeg' },
  { id:42, name:'VTG 1996 GRATEFUL DEAD TEE',            full:'Vintage 1996 Grateful Dead Tee (SIZE S)',               size:'S',        price:35,    cat:'vintage',  tags:['1/1','VTG'], stock:1, emoji:'👕', description:'Authentic 1996 Grateful Dead graphic tee. Size S.',                                           img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1737155192386-J6Q6CHOU7CNL6BKQGLG4/A3D386A1-249F-4054-8070-E984E31CAA13.jpeg' },
  { id:43, name:'VTG CARDINALS 3PC LOT',                 full:'Vintage Cardinals 3pc Lot (SIZE XL)',                   size:'XL',       price:35,    cat:'vintage',  tags:['VTG'],       stock:1, emoji:'👕', description:'Vintage St. Louis Cardinals 3-piece lot — jersey, tee, and hat. Size XL.',                   img:'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87/1737233309223-AGZZTOZEJ1HWY2GYO9JR/327E1447-02D0-4A13-8079-C4A21FA93F47.jpeg' },
]

const FILTERS = ['Shop', 'Vintage', 'Merch', 'Headwear']

const TAG_MAP: Record<string, { bg: string; color: string }> = {
  VTG:            { bg:'#E8F9FA', color:'#006B70' },
  'Y2K':          { bg:'#FFF0F8', color:'#B0006E' },
  '1/1':          { bg:'#EDFCE8', color:'#2A7A12' },
  SALE:           { bg:'#FFEAEA', color:'#CC0000' },
  'SINGLE STITCH':{ bg:'#F5F5F5', color:'#555' },
  NEW:            { bg:'#FFF8DC', color:'#FF6B35' },
}

const BADGE_COLOR: Record<string, string> = {
  SALE: '#FF2D2D',
  '1/1': '#00ECF1',
  VTG: '#00ECF1',
  NEW: '#FF6B35',
}


function Tag({ label }: { label: string }) {
  const s = TAG_MAP[label] || { bg:'#F2F2F2', color:'#666' }
  return (
    <span style={{ display:'inline-block', fontFamily:'inherit', fontSize:9, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', padding:'2px 7px', borderRadius:2, marginRight:4, marginBottom:3, background:s.bg, color:s.color }}>
      {label}
    </span>
  )
}

function ProductCard({ product, onQuickView }: { product: Product; onQuickView: (p: Product) => void }) {
  const [hovered, setHovered] = useState(false)
  const soldOut = product.stock === 0
  const firstTag = product.tags.find((t) => ['SALE','1/1','NEW','VTG'].includes(t))
  const badgeColor = firstTag ? BADGE_COLOR[firstTag] : null

  return (
    <div
      onClick={() => !soldOut && onQuickView(product)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#ffffff',
        borderRadius: 6,
        overflow: 'hidden',
        cursor: soldOut ? 'default' : 'pointer',
        border: `1px solid ${hovered && !soldOut ? 'rgba(0,236,241,.35)' : 'rgba(0,0,0,.25)'}`,
        boxShadow: hovered && !soldOut ? '0 0 20px rgba(0,236,241,.1)' : 'none',
        transition: 'border-color .18s, box-shadow .18s',
        opacity: soldOut ? 0.55 : 1,
      }}
    >
      <div style={{ width:'100%', aspectRatio:'1', position:'relative', background:'#F2F2F0' }}>
        <Image
          src={product.img}
          alt={product.full}
          fill
          sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 220px"
          style={{ objectFit:'cover' }}
          loading="lazy"
        />
        {soldOut && (
          <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,.45)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontStyle:'italic', fontWeight:900, fontSize:13, textTransform:'uppercase', letterSpacing:'.12em', color:'#fff', background:'rgba(0,0,0,.6)', padding:'4px 10px', borderRadius:3 }}>Sold Out</span>
          </div>
        )}
        {!soldOut && firstTag && badgeColor && (
          <span style={{ position:'absolute', top:10, left:10, background:badgeColor, color:'#080A09', fontFamily:"'Barlow Condensed',sans-serif", fontStyle:'italic', fontWeight:900, fontSize:11, textTransform:'uppercase', padding:'2px 8px', borderRadius:3 }}>
            {firstTag}
          </span>
        )}
      </div>
      <div style={{ padding:'10px 12px 12px' }}>
        <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:12, textTransform:'uppercase', letterSpacing:'.08em', color:'#111', lineHeight:1.3, marginBottom:4, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{product.name}</div>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontStyle:'italic', fontWeight:900, fontSize:18, color: soldOut ? '#999' : '#080A09' }}>{soldOut ? 'SOLD' : `$${product.price % 1 === 0 ? product.price : product.price.toFixed(2)}`}</span>
          <span style={{ fontFamily:'inherit', fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:'#888' }}>{product.size}</span>
        </div>
      </div>
    </div>
  )
}

function QuickView({ product, onClose }: { product: Product; onClose: () => void }) {
  const { addToCart, openCart } = useCart()

  return (
    <div
      style={{ position:'fixed', inset:0, background:'rgba(8,10,9,.75)', zIndex:500, display:'flex', alignItems:'center', justifyContent:'center', backdropFilter:'blur(4px)', padding:24 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div style={{ background:'#fff', borderRadius:8, overflow:'hidden', width:'100%', maxWidth:700, maxHeight:'90vh', display:'flex', flexDirection:'column', boxShadow:'0 32px 80px rgba(0,0,0,.5)' }}>
        <div style={{ background:'#080A09', padding:'14px 20px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span className="font-display italic font-black uppercase text-minted" style={{ fontSize:18 }}>JAMIESSHOESS</span>
          <button onClick={onClose} style={{ background:'none', border:'none', cursor:'pointer', color:'rgba(255,255,255,.6)', fontSize:22, lineHeight:1, padding:0 }}>×</button>
        </div>
        <div style={{ display:'flex', flex:1, overflow:'hidden' }}>
          <div style={{ width:'50%', position:'relative', background:'#F2F2F0', flexShrink:0, minHeight:280 }}>
            <Image
              src={product.img}
              alt={product.full}
              fill
              sizes="350px"
              style={{ objectFit:'cover' }}
            />
          </div>
          <div style={{ flex:1, padding:28, overflowY:'auto' }}>
            <div style={{ marginBottom:8 }}>{product.tags.map((t) => <Tag key={t} label={t} />)}</div>
            <div className="font-sans font-bold text-[15px] tracking-[0.06em] uppercase text-ink leading-tight mb-3">
              {product.full}
            </div>
            <div className="font-display italic font-black text-[36px] text-ink mb-1" style={{ letterSpacing:'0.01em' }}>
              ${product.price % 1 === 0 ? product.price : product.price.toFixed(2)}
            </div>
            <div className="font-sans font-bold text-[11px] tracking-[0.14em] uppercase text-ink3 mb-3">
              Size: {product.size}
            </div>
            {product.description && (
              <p className="font-sans text-[13px] text-ink3 leading-relaxed mb-5">{product.description}</p>
            )}
            <button
              onClick={() => { addToCart(product); openCart(); onClose() }}
              className="w-full font-display italic font-black uppercase text-leather rounded mb-2.5 transition-colors duration-150 hover:bg-minted-dark"
              style={{ fontSize:20, background:'#00ECF1', padding:'14px 0', letterSpacing:'0.02em', boxShadow:'0 0 18px rgba(0,236,241,.35)' }}
            >
              ADD TO CART
            </button>
            <p className="font-sans font-semibold text-[11px] tracking-[0.1em] uppercase text-ink3 text-center leading-relaxed">
              Pick up at 302 Park Central East, Springfield MO<br />
              We also accept trades — ask in store!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState('shop')
  const [qvProduct, setQvProduct] = useState<Product | null>(null)

  const filtered = useMemo(() => {
    if (activeFilter === 'shop') return PRODUCTS
    return PRODUCTS.filter((p) => p.cat === activeFilter)
  }, [activeFilter])

  return (
    <>
      <section
        id="products"
        className="border-t border-white/[0.07]"
        style={{ background:'#080A09', padding:'clamp(40px,6vw,64px) clamp(16px,4vw,52px)' }}
      >
        <div style={{ maxWidth:1260, margin:'0 auto' }}>
          {/* Heading */}
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="font-sans font-bold text-[10px] tracking-[0.22em] uppercase text-minted/70 mb-2">Now In-Store</p>
              <h2
                className="font-display italic font-black uppercase text-white"
                style={{ fontSize:'clamp(28px,4vw,40px)', letterSpacing:'0.01em', lineHeight:0.95 }}
              >
                Shop the Floor
              </h2>
            </div>
            <span className="font-sans font-bold text-[11px] tracking-[0.14em] uppercase text-white/30">
              {filtered.length} items
            </span>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap mb-7">
            {FILTERS.map((f) => {
              const active = activeFilter === f.toLowerCase()
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f.toLowerCase())}
                  className="font-sans font-bold text-[11px] tracking-[0.14em] uppercase rounded transition-all duration-150"
                  style={{
                    padding:'8px 20px',
                    border: `1px solid ${active ? '#00ECF1' : 'rgba(255,255,255,.15)'}`,
                    background: active ? 'rgba(0,236,241,.1)' : 'none',
                    color: active ? '#00ECF1' : 'rgba(255,255,255,.4)',
                  }}
                >
                  {f}
                </button>
              )
            })}
          </div>

          {/* Grid */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:16 }}>
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onQuickView={setQvProduct} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 font-sans font-bold text-[13px] tracking-[0.12em] uppercase text-white/30">
              No items in this category right now — check back soon
            </div>
          )}
        </div>
      </section>

      {qvProduct && (
        <QuickView product={qvProduct} onClose={() => setQvProduct(null)} />
      )}
    </>
  )
}

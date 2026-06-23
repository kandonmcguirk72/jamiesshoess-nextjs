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
  images?: string[]
  stock: number
  emoji: string
  description: string
  template?: boolean
  squarespaceUrl?: string
}

export const SQUARESPACE_STORE_URL = 'https://shop.jamiesshoes.com'

const CDN = 'https://images.squarespace-cdn.com/content/v1/62fbad74b2e83466d4f8bc87'

export const PRODUCTS: Product[] = [
  // ── JAMIESSHOESS Merch ──────────────────────────────────────────────────────
  {
    id:1, name:'JAMIESSHOESS HOODIE', full:'JAMIESSHOESS HOODIE', size:'XXL', price:45, cat:'merch', tags:[], stock:1, emoji:'🧥',
    description:'Official JAMIESSHOESS hoodie. Heavy-weight premium construction.',
    img:`${CDN}/1769025392066-P7XJRKHLPSGAI1VDMF02/911DF987-D9D3-4530-AEB6-B7DE6E422C63.jpeg`,
    images:[
      `${CDN}/1769025392066-P7XJRKHLPSGAI1VDMF02/911DF987-D9D3-4530-AEB6-B7DE6E422C63.jpeg`,
      `${CDN}/1769025411544-KH2HVTL87X8YYS8ES3YJ/36F9C1EB-C4AD-4D7F-8BD3-094CD204ECDE.jpeg`,
      `${CDN}/1769025416725-0J0R25DCCDP60290TM4A/F0BC8A46-27D7-4353-86AE-AB48AD026E95.jpeg`,
      `${CDN}/1769025400049-5TU0PRG180WBNNC6JGIL/9AA44B8B-661A-4133-B687-DA59533F5179.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/0xj04ne2l137t5yio2187ihsclir14',
  },
  {
    id:2, name:'JAMIESSHOESS CREW', full:'JAMIESSHOESS CREW', size:'XL', price:50, cat:'merch', tags:[], stock:1, emoji:'🧥',
    description:'Official JAMIESSHOESS crewneck sweatshirt.',
    img:`${CDN}/1769024847046-BJB88E0ZLFPGZS3SP5UN/1116CB6B-A048-49C1-8E11-77D173F8652A.jpeg`,
    images:[
      `${CDN}/1769024847046-BJB88E0ZLFPGZS3SP5UN/1116CB6B-A048-49C1-8E11-77D173F8652A.jpeg`,
      `${CDN}/1769024859143-KJMI4OT9M5P8H6737T21/FBD89E1E-D30F-4FED-85B5-51F731E26D86.jpeg`,
      `${CDN}/1769024853226-VUNN4QKJM9TG8QG9O9U3/B9D58C35-F371-4FAB-B9EB-EDB12FD6E55A.jpeg`,
      `${CDN}/1769024849651-0U6A9Y76BPC4CE8OJQ14/C457F99C-D8C0-4732-8CE8-DB8DC5830DD4.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/snwyiuieacqrcickijlbz2tjxvf81o',
  },
  {
    id:3, name:'JAMIESSHOESS CREW', full:'JAMIESSHOESS CREW', size:'2XL', price:35, cat:'merch', tags:[], stock:1, emoji:'🧥',
    description:'Official JAMIESSHOESS crewneck sweatshirt.',
    img:`${CDN}/1769024663976-8D15JYL27GTBO1HC4A82/997994FA-D1F7-4508-8109-881517E79C54.jpeg`,
    images:[
      `${CDN}/1769024663976-8D15JYL27GTBO1HC4A82/997994FA-D1F7-4508-8109-881517E79C54.jpeg`,
      `${CDN}/1769024659670-4YYU7IQ31XYENZBIX72U/BCB8155A-776B-49DC-B26D-EB53FD3968D5.jpeg`,
      `${CDN}/1769024666599-LO6TR2RIPM9OZ6SZD7T0/47351A4E-7668-4EFB-9A4E-1387BF7322F0.jpeg`,
      `${CDN}/1769024689241-IRO922Q0A86UMSR7RBVI/F701D73C-5A94-4ECB-96BC-BFB580816355.jpeg`,
      `${CDN}/1769024692640-LP2PUXEI02258BFG4GYJ/D60E3CE1-AD5C-4112-94C1-6A4BE80F7BA9.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/w306oyuemnhoeo1jf96ter6bqh491k',
  },
  {
    id:4, name:'JAMIESSHOESS CREWNECK', full:'JAMIESSHOESS CREWNECK', size:'3XL', price:45, cat:'merch', tags:[], stock:1, emoji:'🧥',
    description:'Official JAMIESSHOESS crewneck sweatshirt.',
    img:`${CDN}/1769024370224-PMMCNUA3YOXFBDJ5KZ8E/CB419FB3-01A1-42F0-850B-F2796E23F12D.jpeg`,
    images:[
      `${CDN}/1769024370224-PMMCNUA3YOXFBDJ5KZ8E/CB419FB3-01A1-42F0-850B-F2796E23F12D.jpeg`,
      `${CDN}/1769024363512-DU608AI3XFYZQFGPG7K9/7E4E7F94-3C51-401E-8CE2-321947EABF37.jpeg`,
      `${CDN}/1769024377234-0Z8CCQMU43DHEERIGMB6/1AC1E0FB-F169-4F75-9DFB-2DD45594F650.jpeg`,
      `${CDN}/1769024359917-PVO73VDO23AG69IWQ572/CFEE2314-3528-4F9A-A20B-332F12E21D67.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/6j9azp0y88mpnmj3xdfsybhk2vwqec',
  },
  {
    id:5, name:'JAMIESSHOESS CREWNECK', full:'JAMIESSHOESS CREWNECK', size:'OS', price:45, cat:'merch', tags:[], stock:1, emoji:'🧥',
    description:'Official JAMIESSHOESS crewneck sweatshirt.',
    img:`${CDN}/1769024132090-2WE26B70LGVGI5QZ2HU7/2B30247A-27C7-4508-87C1-6FE1A7DAAE4F.jpeg`,
    images:[
      `${CDN}/1769024132090-2WE26B70LGVGI5QZ2HU7/2B30247A-27C7-4508-87C1-6FE1A7DAAE4F.jpeg`,
      `${CDN}/1769024135944-U3BCAFTU3UGI5NEBSKTM/906D272A-6B51-4F2B-95DA-8ED7302A235C.jpeg`,
      `${CDN}/1769024245018-GKF4011GMIGP49FC3E2A/BBAF6E4D-4D0E-4234-9463-D4ADE191027D.jpeg`,
      `${CDN}/1769024126311-TE2TZF1T8DOOOVAID6HV/77CD6E74-F0D9-41E7-91B9-396BE2668C4D.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/athy488akv0e0zzcqgani2qt9683yv',
  },
  {
    id:6, name:'JAMIESSHOESS HOODIE', full:'JAMIESSHOESS HOODIE', size:'M', price:60, cat:'merch', tags:[], stock:1, emoji:'🧥',
    description:'Official JAMIESSHOESS hoodie. Premium heavyweight.',
    img:`${CDN}/1769023591550-33ZZ1P5XJE7C53DJNLOT/CBE74A86-6092-4F5A-BE46-84D15AAB2699.jpeg`,
    images:[
      `${CDN}/1769023591550-33ZZ1P5XJE7C53DJNLOT/CBE74A86-6092-4F5A-BE46-84D15AAB2699.jpeg`,
      `${CDN}/1769023567091-19VVAHX6EQR1OSLL0TF5/E3F9F666-AA18-4383-802A-CB8901DFE0DF.jpeg`,
      `${CDN}/1769023590127-7LWW5GI7KZ3DOPZBYB6I/D1F04E58-5017-42C2-B763-4986875D1EB3.jpeg`,
      `${CDN}/1769023605802-GXV55XAAWD0MYB9E5IW6/D233776F-1704-4A59-88C8-C0A56F73FEA5.jpeg`,
      `${CDN}/1769023571970-KT4IQAQBTSLWH62EHWSV/AAC7043E-32D2-47D1-91F9-F10B7BDFD7EA.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/5i7dijaascf2lgogmz2i56euufkjbx',
  },
  {
    id:7, name:'JAMIESSHOESS OG TEE', full:'JAMIESSHOESS OG TEE', size:'S-3XL', price:30, cat:'merch', tags:['NEW'], stock:1, emoji:'👕',
    description:'The original JAMIESSHOESS tee. Available in multiple sizes.',
    img:`${CDN}/1769020654352-9W6B5R11ZL6HMRTM1R1S/2CD3764A-32D5-4EA4-9C9F-7EFA3ECEBF1F.jpeg`,
    images:[
      `${CDN}/1769020654352-9W6B5R11ZL6HMRTM1R1S/2CD3764A-32D5-4EA4-9C9F-7EFA3ECEBF1F.jpeg`,
      `${CDN}/1769020658637-KEHHDTC3JTXOSRUPLMDL/691C4228-F1CA-4188-B7C5-9781233D1332.jpeg`,
      `${CDN}/1769020804674-A02UZ2251Y8U7K32AJA7/36BE20E3-947A-42D6-9ED4-6678A083DCD8.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/gcay417dhnnx3qeqhjzrazgoqq97jw',
  },
  {
    id:8, name:'JS 1/1 CAMO TEE', full:'JAMIESSHOESS 1/1 CAMO TEE', size:'L', price:30, cat:'merch', tags:['1/1'], stock:1, emoji:'👕',
    description:'One-of-one custom JAMIESSHOESS camo tee. Only one exists.',
    img:`${CDN}/1743438158749-HEVGR37TK9XO62F6UBMX/07780A60-56E8-4EE7-9D80-3C9520BA7913.jpeg`,
    images:[
      `${CDN}/1743438158749-HEVGR37TK9XO62F6UBMX/07780A60-56E8-4EE7-9D80-3C9520BA7913.jpeg`,
      `${CDN}/1743438160602-JO8TXSTZFOM12TKDV3MB/9435514F-0EE0-4F6D-BC1E-96A173C4A7A2.jpeg`,
      `${CDN}/1743438152528-YEA012JBM5OMVN2DT86X/442F7FDC-A265-4EE6-9340-2FAB1D128E24.jpeg`,
      `${CDN}/1743438160204-ABP5V4MOMFNNUQA19T6I/5EF07859-2025-4994-BAFC-7CCD5298DC32.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/cbf56t3z43igg0cfcs8iryrsi28ol3',
  },
  {
    id:9, name:'JS X JOHN DEERE L/S', full:'JAMIESSHOESS X JOHN DEERE 1/1 LONG SLEEVE', size:'M', price:40, cat:'merch', tags:['1/1'], stock:1, emoji:'👕',
    description:'One-of-one JAMIESSHOESS x John Deere collab long sleeve.',
    img:`${CDN}/1743438024614-A3V1R79DY01KTZ2BP1SN/E2A42982-F396-4B5E-AED5-3AB4F0C2C8A5.jpeg`,
    images:[
      `${CDN}/1743438024614-A3V1R79DY01KTZ2BP1SN/E2A42982-F396-4B5E-AED5-3AB4F0C2C8A5.jpeg`,
      `${CDN}/1743438032718-KJ2DU1NHTB286EUPMQHL/C80A3A57-7FC2-48B3-97C9-BB47E8AF1670.jpeg`,
      `${CDN}/1743438031607-3APMWRYM7LAU5SH99LH7/006E07E0-019C-4461-AF93-40E3968093C1.jpeg`,
      `${CDN}/1743438032731-DR2SAEV167A67HZ5V3ZG/D4FD7BAA-5846-481F-8093-41A30700FB7B.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/yuzkztfkdbjmxy1fcowap12ii6cmqn',
  },
  {
    id:10, name:'CARHARTT X JS BEANIE', full:'Carhartt X Jamiesshoess Beanie', size:'OS', price:30, cat:'merch', tags:['NEW'], stock:1, emoji:'🧢',
    description:'JAMIESSHOESS x Carhartt collab beanie. Limited run.',
    img:`${CDN}/1737153351329-UDJ7OM6TKE1QZHKFIO4N/A1BB25E7-F661-4053-A3D8-CDC147F3A500.jpeg`,
    images:[
      `${CDN}/1737153351329-UDJ7OM6TKE1QZHKFIO4N/A1BB25E7-F661-4053-A3D8-CDC147F3A500.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/nk9ggbc4q8zm7nqs55koi0l7crjhto',
  },
  {
    id:11, name:'CARHARTT X JS BEANIE', full:'Carhartt X Jamiesshoess Beanie', size:'OS', price:30, cat:'merch', tags:['NEW'], stock:1, emoji:'🧢',
    description:'JAMIESSHOESS x Carhartt collab beanie. Limited run.',
    img:`${CDN}/1737153522825-XYZHXBJUMJFDO53B7HTG/FC712D36-D939-4A3A-8A21-5D95E0628DAA.jpeg`,
    images:[
      `${CDN}/1737153522825-XYZHXBJUMJFDO53B7HTG/FC712D36-D939-4A3A-8A21-5D95E0628DAA.jpeg`,
      `${CDN}/1737153518901-AEXAEHBG9MSV6YUAFKCF/1EC84929-C1FA-4B14-BC5F-B3F2C09FB990.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/bj4jg214sbq8mzfccgp3occ22hswxn',
  },

  // ── Vintage ─────────────────────────────────────────────────────────────────
  {
    id:12, name:'VTG NASCAR AOP', full:'VTG NASCAR AOP', size:'L', price:100, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage NASCAR all-over print tee. Rare find, hand-picked by JAMIESSHOESS.',
    img:`${CDN}/1753149401458-JM7FT4UGDGQQ641OHKE5/694048B9-EDAB-4160-A293-B4C3FA6703CD.jpeg`,
    images:[
      `${CDN}/1753149401458-JM7FT4UGDGQQ641OHKE5/694048B9-EDAB-4160-A293-B4C3FA6703CD.jpeg`,
      `${CDN}/1753149400827-U5792LGCY4JQ0QBUQOKE/CA91AF8C-7CBB-4224-90B7-CFF42059CCC9.jpeg`,
      `${CDN}/1753149409299-HAE9RSIIIURK20LW55YZ/135E07E5-6701-4903-AF55-514390A6F281.jpeg`,
      `${CDN}/1753149407447-PO7WUIFJ5QZLOY7J14QR/E624AEE6-43F4-422F-A76B-F826E35A6F7F.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/h5j35vvj6ehgomcsmt1m00koexy08g',
  },
  {
    id:13, name:'VTG MARK MCGWIRE TEE', full:'VTG MARK MCGWIRE TEE', size:'XL', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage Mark McGwire graphic tee. Classic sports memorabilia.',
    img:`${CDN}/1753117798246-8KKGR7RBKWFPA7QSIPT9/50F1C565-8220-40AC-84FC-33A3CE263E14.jpeg`,
    images:[
      `${CDN}/1753117798246-8KKGR7RBKWFPA7QSIPT9/50F1C565-8220-40AC-84FC-33A3CE263E14.jpeg`,
      `${CDN}/1753117798396-EUCLQDWX80WXAE1HE3VK/9D77F50D-3176-46D2-B3FA-DE9836DFA89F.jpeg`,
      `${CDN}/1753117799344-10U8XV5F0XSCS0RNJQKZ/C730C3B6-E1C1-4FED-8CC1-C2343362A3BB.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/mn5j23ic8rljndhxb710fqaxa8w2su',
  },
  {
    id:14, name:'VTG Y2K JIMMY NEUTRON', full:'VTG Y2K JIMMY NEUTRON TEE', size:'S-M', price:30, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage Y2K Jimmy Neutron graphic tee. Early 2000s nostalgia.',
    img:`${CDN}/1753117281561-AU3P5WPH3NBG1I7P0IZP/37AFBC25-CF8A-428D-A993-CC56C7944935.jpeg`,
    images:[
      `${CDN}/1753117281561-AU3P5WPH3NBG1I7P0IZP/37AFBC25-CF8A-428D-A993-CC56C7944935.jpeg`,
      `${CDN}/1753117281718-HIJY6TDM6VFUP6QCME9Z/2A5DDA05-B36C-4D08-91E8-406BE6611AC4.jpeg`,
      `${CDN}/1753117282834-VPJL4IV50B6E88PHIA85/06BA5BEE-4401-45BC-BA48-4EF33A4CEAE5.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/vnmiybtkru88iswkgu0weu35gf4cto',
  },
  {
    id:15, name:'VTG GUESS TEE', full:'VTG GUESS TEE', size:'L', price:30, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage GUESS graphic tee. Classic 90s label.',
    img:`${CDN}/1753117226657-CHY9DGBC9O6GOYZ4UU0V/B791FBC7-0B00-4575-85EA-1D6219D391A3.jpeg`,
    images:[
      `${CDN}/1753117226657-CHY9DGBC9O6GOYZ4UU0V/B791FBC7-0B00-4575-85EA-1D6219D391A3.jpeg`,
      `${CDN}/1753117226221-H6YL640LDBAHLECBBYWG/64D2683D-AB3C-4CFC-A739-0674CD89C0DB.jpeg`,
      `${CDN}/1753117228100-2M94AB0TLLFQ3DM8YKSF/88A2C03F-0555-4282-9452-AE04CED7C0FD.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/3j5mr4er6zw80o54kcepuol24t0so2',
  },
  {
    id:16, name:'VTG GUESS TEE', full:'VTG GUESS TEE', size:'M', price:30, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage GUESS graphic tee. Classic 90s label.',
    img:`${CDN}/1753117140602-6IK7F258SRLK3A1K454Y/1C4C52B6-00CE-448D-8A7D-EEB92E9A4E0E.jpeg`,
    images:[
      `${CDN}/1753117140602-6IK7F258SRLK3A1K454Y/1C4C52B6-00CE-448D-8A7D-EEB92E9A4E0E.jpeg`,
      `${CDN}/1753117140130-8O2GT4XSFOAL3OC44ABH/269FECB5-F1C4-4926-A653-ED520929761F.jpeg`,
      `${CDN}/1753117142184-OZ5XQ91VOW6DHW42M6JY/3F1CE9A0-3810-4051-8635-82FFD2D02237.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/u0c8rr7fy0wszips0zfjc39x1pe108',
  },
  {
    id:17, name:'VTG SINGLE STITCH LEVIS', full:'VTG SINGLE STITCH LEVIS TEE', size:'S-M', price:30, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage single stitch Levis tee. Classic denim brand graphic.',
    img:`${CDN}/1753117004822-HPWDFU51GKV8AK2VQ7PH/CE033052-D39D-47C2-ACF7-D775B78CCC16.jpeg`,
    images:[
      `${CDN}/1753117004822-HPWDFU51GKV8AK2VQ7PH/CE033052-D39D-47C2-ACF7-D775B78CCC16.jpeg`,
      `${CDN}/1753117004999-6PM9IF4Q1O6XQ2UZW69W/C0A8E516-05D3-4656-BAF6-CEB8C7C78D2D.jpeg`,
      `${CDN}/1753117006410-POYQW7ETN416TK3TDHDO/93D53E45-EA7D-46FF-B06C-A175FC4730E8.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/ryuxb9dl05nltm1gzlqpz7uwu5hm0f',
  },
  {
    id:18, name:'VTG ELVIS TEE', full:'VTG ELVIS TEE', size:'M', price:30, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage Elvis Presley graphic tee. Classic music icon.',
    img:`${CDN}/1753116932266-CQESCIOP260HKQMS0CXQ/FCF2B474-E964-4649-B595-D6C64D3DDB96.jpeg`,
    images:[
      `${CDN}/1753116932266-CQESCIOP260HKQMS0CXQ/FCF2B474-E964-4649-B595-D6C64D3DDB96.jpeg`,
      `${CDN}/1753116932434-URQJALP9YZR0DIJUPVRK/498D8FC2-8CDF-4ACF-BD19-ACD2E555F4B3.jpeg`,
      `${CDN}/1753116933922-3X8NML8FWEHVSVQ70XI6/CECB180E-9F4B-452F-B83E-5BB8FE54B56F.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/ydt9ptc6fa9iojkrzx4fnbxbo4o7gp',
  },
  {
    id:19, name:'VTG TASMANIAN DEVIL TEE', full:'VTG TASMANIAN DEVIL TEE', size:'XL', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage Tasmanian Devil graphic tee. 90s Looney Tunes era.',
    img:`${CDN}/1753116762718-YA13VRFO92500PLVWV75/81A8A3B8-E7A2-4AB1-864B-FDAD3606F66F.jpeg`,
    images:[
      `${CDN}/1753116762718-YA13VRFO92500PLVWV75/81A8A3B8-E7A2-4AB1-864B-FDAD3606F66F.jpeg`,
      `${CDN}/1753116762552-MOEJWFFK7UQJPPV9UHAQ/0B72DDBB-CF10-41C2-94F4-BF8D6340A433.jpeg`,
      `${CDN}/1753116765434-71YNCGSP5VCO8SCWMBFS/7053DEDE-288B-4B63-B837-A0DE203079A8.jpeg`,
      `${CDN}/1753116765456-YJD98CDZQZ92MROWGZ4D/16587EC0-7F7F-46F2-810B-25E8B26D39C8.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/39zvme5q6quh6rqrj6a6vniqnc18z2',
  },
  {
    id:20, name:'VTG Y2K SKATE TEE', full:'VTG Y2K SKATE TEE', size:'S', price:25, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage Y2K skate graphic tee. Early 2000s skate culture.',
    img:`${CDN}/1753116484145-5K6A3E7Y8F0HQYPU8N34/F1521EFA-42DE-4750-B1A3-4AC44AAE84D9.jpeg`,
    images:[
      `${CDN}/1753116484145-5K6A3E7Y8F0HQYPU8N34/F1521EFA-42DE-4750-B1A3-4AC44AAE84D9.jpeg`,
      `${CDN}/1753116484129-SCNE9Y541MKUV6LVCUBP/26C718FE-459E-4361-8641-7512C7C567B9.jpeg`,
      `${CDN}/1753116485094-TPV273VWVQSABEA72EAH/1E8F4E99-E06C-44C6-B90D-B07F1124C901.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/0pzcfzcsvtodmhuu2496hnxuate6mo',
  },
  {
    id:21, name:'VTG JERRY RICE 49ERS', full:'VTG 1998 JERRY RICE 49ERS TEE', size:'M', price:60, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage 1998 Jerry Rice San Francisco 49ers tee. Hall of Fame collectible.',
    img:`${CDN}/1753116205949-4RW4DXIG5T4G7DXV1UQ2/C1A9A2F0-A17F-4E46-A8D6-65F821E4DBF4.jpeg`,
    images:[
      `${CDN}/1753116205949-4RW4DXIG5T4G7DXV1UQ2/C1A9A2F0-A17F-4E46-A8D6-65F821E4DBF4.jpeg`,
      `${CDN}/1753116205596-5H6CLMVLXYWOS2Q7RNAB/74B14A4A-574A-4D1D-AB8C-80FB61AE09ED.jpeg`,
      `${CDN}/1753116207616-SJZVZSEFKIBQRWZM0BGH/0D042865-6F77-4C95-A5D3-5F653B9DAEB0.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/jmt0ihy2xg00hxmao8nedcbwxfh8cx',
  },
  {
    id:22, name:'VTG 1985 KC ROYALS TEE', full:'VTG 1985 WORLD SERIES KC ROYALS TEE', size:'M', price:40, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage 1985 World Series Kansas City Royals championship tee.',
    img:`${CDN}/1753116015213-BP8R4102HPXSAJTABBG8/2B6F77A3-40DC-41FC-AE58-7F11D1112C74.jpeg`,
    images:[
      `${CDN}/1753116015213-BP8R4102HPXSAJTABBG8/2B6F77A3-40DC-41FC-AE58-7F11D1112C74.jpeg`,
      `${CDN}/1753116015427-QX1ACC43VVHRVZBLL1L8/00567E59-FB77-4DC3-BD31-77413ACF8F4E.jpeg`,
      `${CDN}/1753116018398-WTIZOGZMUO3HXQ427XEH/023016F2-7FDC-465E-BD57-2694F37A1C80.jpeg`,
      `${CDN}/1753116017001-OVV7MTJU7OZXZZ8R1JDR/A3266F9F-6796-495A-AECB-CD07A211B072.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/bp7x3uid4v6rdql067hoey4uvnsefm',
  },
  {
    id:23, name:'VTG JOHN CENA TEE', full:'VTG 2007 JOHN CENA WRESTLING TEE', size:'L', price:40, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage 2007 John Cena WWE wrestling graphic tee.',
    img:`${CDN}/1753115809358-6INNK9ITIUZERX8U3USA/459E939D-0749-4F9A-9556-3CBB3DDB5C0D.jpeg`,
    images:[
      `${CDN}/1753115809358-6INNK9ITIUZERX8U3USA/459E939D-0749-4F9A-9556-3CBB3DDB5C0D.jpeg`,
      `${CDN}/1753115809164-87N4XJ1PSA5X9P86VGCF/F178DC4A-9038-4F38-A556-BC75A3C2EFC8.jpeg`,
      `${CDN}/1753115810273-RX2QLYLT97V67UVQUOR9/2FC1BA67-410A-4F9D-AC72-05C08C8DBD40.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/1x0b5nu4m9ebjvhd9x1viya4lwgahe',
  },
  {
    id:24, name:'VTG FEAR FACTOR TEE', full:'VTG FEAR FACTOR TEE', size:'XL', price:40, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage Fear Factor TV show graphic tee. Early 2000s nostalgia.',
    img:`${CDN}/1753115619602-AIKTNPYQLEH1528K8HJ0/8C502257-E357-496A-BC4E-4CB62FE45266.jpeg`,
    images:[
      `${CDN}/1753115619602-AIKTNPYQLEH1528K8HJ0/8C502257-E357-496A-BC4E-4CB62FE45266.jpeg`,
      `${CDN}/1753115619761-VSUDD4I3404CYXRKA606/E599F405-EF4F-410C-AC55-C651F6610BCF.jpeg`,
      `${CDN}/1753115621066-46IFQ6EP2JTNLJE0M7GW/8EF8F201-2245-4C12-8A9C-7E90B4C7EDC1.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/tk37yrwtk660jzosvglw0582ffqy21',
  },
  {
    id:25, name:'WMNS HARLEY JACKET', full:'WMNS HARLEY JACKET', size:'XL', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'🧥',
    description:"Women's vintage Harley Davidson jacket. Hand-picked condition.",
    img:`${CDN}/1751748781792-SDULZ9VOLAURQNL5D70B/868A94F3-9F18-4473-972B-31EA4F5A8125.jpeg`,
    images:[
      `${CDN}/1751748781792-SDULZ9VOLAURQNL5D70B/868A94F3-9F18-4473-972B-31EA4F5A8125.jpeg`,
      `${CDN}/1751748781577-Q348ACFUYXU4443HXZ8H/C9576E01-3708-4E6B-923A-7C28DD1BE0BD.jpeg`,
      `${CDN}/1751748785891-8WW6ZANS8T1GI7ZOAT20/8D195835-7705-4847-868A-E288344E672D.jpeg`,
      `${CDN}/1751748824231-19C5XBWFE86144HNID0D/2F705A23-3A4F-47BA-83CB-8982A161E053.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/bw6t7wrgi4lo0dq0wpb31m6c8370c0',
  },
  {
    id:26, name:'VTG RAMS PULL OVER', full:'VTG ST. LOUIS RAMS PULL OVER', size:'L-XL', price:30, cat:'vintage', tags:['VTG'], stock:1, emoji:'🧥',
    description:'Vintage St. Louis Rams pullover sweatshirt. Classic NFL era.',
    img:`${CDN}/1751748710844-OA89ZPBABWGT1J8AN4X6/8FDACAE4-863F-4046-98F4-29AAF82DF299.jpeg`,
    images:[
      `${CDN}/1751748710844-OA89ZPBABWGT1J8AN4X6/8FDACAE4-863F-4046-98F4-29AAF82DF299.jpeg`,
      `${CDN}/1751748711105-1J77RUF2URKHXNBGUEWG/C074196F-CB63-4BC2-AE9F-C39A820E15DC.jpeg`,
      `${CDN}/1751748712368-WDT0Y344SYENO43FMAKD/64D76A90-4F76-4216-AC5E-0649DA90D0AF.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/56hpc840x26xro1g5g1s8q7t0knkhl',
  },
  {
    id:27, name:'VTG 2009 AOP TEE', full:'VTG 2009 AOP TEE', size:'M', price:60, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage 2009 all-over print tee. Rare graphic piece.',
    img:`${CDN}/1751746210051-ANE00GYG2V0A7A3DGQI7/9B431DF9-B072-4E1C-90FE-79428B23C888.jpeg`,
    images:[
      `${CDN}/1751746210051-ANE00GYG2V0A7A3DGQI7/9B431DF9-B072-4E1C-90FE-79428B23C888.jpeg`,
      `${CDN}/1751746209743-Q848H38BCTXFI07S0EG0/F43F0EC6-7EE0-4784-8B76-D77AAA17A37C.jpeg`,
      `${CDN}/1751746315699-NI78IIH66VAE02SOXODB/0123CD38-8422-4842-B6ED-1D55122F57B0.jpeg`,
      `${CDN}/1751746214039-VQCA6JUVKX4SSPVIXAZ1/3B1689AE-21F4-4BD4-8C13-B3E5E3E4E79A.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/938a9rcb0qq7o3pkhrnbub8sv19wwn',
  },
  {
    id:28, name:'VTG WOMENS HARLEY VEST', full:'VTG WOMENS HARLEY VEST', size:'L', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'🧥',
    description:"Women's vintage Harley Davidson vest. Hand-picked and authenticated.",
    img:`${CDN}/1751746072456-9G7W4ZKR00YHTU8GAGRW/23E017F5-FA3D-450F-871C-58A73F50DF3C.jpeg`,
    images:[
      `${CDN}/1751746072456-9G7W4ZKR00YHTU8GAGRW/23E017F5-FA3D-450F-871C-58A73F50DF3C.jpeg`,
      `${CDN}/1751746071945-K1TKCVIAZQVB6TSE9XKF/D0D51D81-84EF-4694-9296-BD24D6A0C982.jpeg`,
      `${CDN}/1751746073634-91T5MMYSECR8QXODI5QR/D845A044-E5B8-4522-A272-3F352F6B8664.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/gkya1msk71bbjcl4tzsggub81jx5va',
  },
  {
    id:29, name:'VTG HARLEY DENIM TOP', full:'VTG HARLEY DENIM TOP', size:'L', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'🧥',
    description:'Vintage Harley Davidson denim top. Classic biker aesthetic.',
    img:`${CDN}/1751746010264-8NGRPWYMQQ3LG86FG9TA/15D3D2F2-1267-4243-9C08-64FBA7977322.jpeg`,
    images:[
      `${CDN}/1751746010264-8NGRPWYMQQ3LG86FG9TA/15D3D2F2-1267-4243-9C08-64FBA7977322.jpeg`,
      `${CDN}/1751746011219-2OD3G8D4B7SU4T2WZE0O/8A28ECA9-A37F-48FB-BAA4-B6FA2597C1E9.jpeg`,
      `${CDN}/1751746012704-FPJA5M8K1QJQ3ZOYDZ1G/1C878A19-FCD6-416D-965C-9177BD287192.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/u4qaed1as89z3c172whvdeik00cdef',
  },
  {
    id:30, name:'VTG BUM EQUIPMENT TEE', full:'VTG BUM EQUIPMENT TEE', size:'XL', price:25, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage Bum Equipment tee. Rare 90s sportswear brand.',
    img:`${CDN}/1751745910060-4OC3KK5Q6NRG4PO10M0Z/78BB4CDF-BD39-4055-BBD9-8EB112DE2EFA.jpeg`,
    images:[
      `${CDN}/1751745910060-4OC3KK5Q6NRG4PO10M0Z/78BB4CDF-BD39-4055-BBD9-8EB112DE2EFA.jpeg`,
      `${CDN}/1751745910134-8T7J2T2Z02JY0QDQQYEM/D0D6BE01-A9C5-4AE2-91F0-44393A8E86E5.jpeg`,
      `${CDN}/1751745911402-9GQ4L4ZUWN9WZH3B9NOA/4D1F5ED3-891D-4C8D-9A4A-4EA5B989D0EF.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/df3j6qh80wfllwg2e2u41c2o8if519',
  },
  {
    id:31, name:'VTG WOLF TEE', full:'VTG WOLF TEE', size:'3XL', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage wolf graphic tee. Classic nature print, rare find.',
    img:`${CDN}/1751745785367-04A4PT7ECLNVL5Y95P2X/605D6D71-3B14-47BE-8E45-7D225C236A99.jpeg`,
    images:[
      `${CDN}/1751745785367-04A4PT7ECLNVL5Y95P2X/605D6D71-3B14-47BE-8E45-7D225C236A99.jpeg`,
      `${CDN}/1751745785108-U694FCZC8KB1EX38AZW8/217621E8-01B8-4314-A524-671EE74FB2CD.jpeg`,
      `${CDN}/1751745786636-V901QA3J6HZY1K75S1CJ/99CE2197-B363-4893-A908-21DC9FDBB17E.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/wfsts4c259zc2p0ec527kqn684lwpd',
  },
  {
    id:32, name:'VTG SUPERMAN THERMAL', full:'VTG 2008 SUPERMAN THERMAL', size:'L', price:25, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage 2008 Superman thermal long sleeve. DC Comics nostalgia.',
    img:`${CDN}/1751745573026-UQK4HQSRCATTMXM4Y1VD/D4977C5B-A767-40AF-9BDB-6972989E2AD2.jpeg`,
    images:[
      `${CDN}/1751745573026-UQK4HQSRCATTMXM4Y1VD/D4977C5B-A767-40AF-9BDB-6972989E2AD2.jpeg`,
      `${CDN}/1751745572672-0U7C3KL2POPQWISRAVUS/AEAA9117-016B-45E4-9A2E-2B24D6560B5E.jpeg`,
      `${CDN}/1751745576322-MS24LBIC5ZMBQ6SKP8WY/84454D25-29AE-4F9C-8CFA-94DBF7094157.jpeg`,
      `${CDN}/1751745575871-SY9JDFOCIOPBB0E7RZDK/B82716C0-819B-49FB-ABA7-53F383FE5B12.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/wueeywo86f1eaji23tdu5im2wp59cl',
  },
  {
    id:33, name:'VTG 2008 HARLEY TEE', full:'VTG 2008 HARLEY TEE', size:'XXL', price:30, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage 2008 Harley Davidson graphic tee.',
    img:`${CDN}/1751745512105-6GM82WYEVZJBJIT2T7IW/E35455F3-CFF7-4EF2-A17C-FEE21EF5B387.jpeg`,
    images:[
      `${CDN}/1751745512105-6GM82WYEVZJBJIT2T7IW/E35455F3-CFF7-4EF2-A17C-FEE21EF5B387.jpeg`,
      `${CDN}/1751745511701-QA07JWE97VOHEOH0IMU6/8234B000-E71E-4CF9-98FA-D29681A7EDE7.jpeg`,
      `${CDN}/1751745513835-3KK3CH1QJQEMO33CJ8R5/1E93355B-7E07-4063-B249-743CC46A1D1E.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/8l5ajc77owt7vwxs28w90301623mth',
  },
  {
    id:34, name:'VTG JNCO LONG SLEEVE', full:'VTG JNCO LONG SLEEVE TEE', size:'S-M', price:80, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage JNCO long sleeve tee. Rare Y2K skater brand piece.',
    img:`${CDN}/1751745202277-SRS5L4Q1C3RY84IMX550/E16FABA8-D903-478E-A042-F6D5BFC43849.jpeg`,
    images:[
      `${CDN}/1751745202277-SRS5L4Q1C3RY84IMX550/E16FABA8-D903-478E-A042-F6D5BFC43849.jpeg`,
      `${CDN}/1751745202386-WFZVFMJFNH7KFZO0GCRW/8D79A4A6-F235-4F9B-94D7-2EB61CB2935E.jpeg`,
      `${CDN}/1751745203109-MVUIZ3FI8ZEXRDXDQ3C0/E0FD41FF-0190-4EFB-9B0F-9BD05090144C.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/cz4thvbbylbnksy14r3w2u8g0s8cba',
  },
  {
    id:35, name:'VTG JNCO MOTO TEE', full:'VTG JNCO MOTO TEE', size:'S-M', price:80, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage JNCO moto graphic tee. Rare Y2K skater brand piece.',
    img:`${CDN}/1751745091579-VL5FFKYYY8B2HQL8EE3V/DB845825-E51B-4111-95DA-5414F3C13395.jpeg`,
    images:[
      `${CDN}/1751745091579-VL5FFKYYY8B2HQL8EE3V/DB845825-E51B-4111-95DA-5414F3C13395.jpeg`,
      `${CDN}/1751745091382-DCM2Z2KQXFJEM7EZ3P8P/A136F88C-D206-49F9-9FAA-DD8A3AFE2DDD.jpeg`,
      `${CDN}/1751745092776-O07JWPVYTM0RC1Z9RP6W/529A3F22-91B0-4E17-B102-8A3FFD0882B2.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/3owix0chypiledqx47tgp99e9mpt14',
  },
  {
    id:36, name:'VTG NOTRE DAME TEE', full:'VTG NOTRE DAME TEE', size:'L', price:65, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage Notre Dame Fighting Irish graphic tee. Classic college era.',
    img:`${CDN}/1751744985185-ZJEJBRSSNR9AZ7OVQKXY/7F50FA65-94E1-416F-A4AE-9F2C664E8A30.jpeg`,
    images:[
      `${CDN}/1751744985185-ZJEJBRSSNR9AZ7OVQKXY/7F50FA65-94E1-416F-A4AE-9F2C664E8A30.jpeg`,
      `${CDN}/1751744984896-97O508F9U0MVF8VKZDQD/717CE3D7-2F03-440C-A287-E771D2640E49.jpeg`,
      `${CDN}/1751744986301-JIZSP9Z227C1KZ13NQF3/36E2AC59-648C-4A0C-B590-63C2D676EA62.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/q7qrxluktunihmkg3jft61p9x7m9g7',
  },
  {
    id:37, name:'VTG CHIEFS SINGLE STITCH', full:'VTG CHIEFS SINGLE STITCH', size:'XL', price:25, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage Kansas City Chiefs single stitch tee. Classic NFL piece.',
    img:`${CDN}/1751744819157-33TNB42LCX1ABLT4S3W7/AE0D260E-A953-4FDD-8AB2-C76571FF4B0F.jpeg`,
    images:[
      `${CDN}/1751744819157-33TNB42LCX1ABLT4S3W7/AE0D260E-A953-4FDD-8AB2-C76571FF4B0F.jpeg`,
      `${CDN}/1751744819369-HCF6FNZ9MBIJYQNRY430/B21D902D-EE09-4C77-84BF-F43A24A55CF8.jpeg`,
      `${CDN}/1751744820934-P66F4D2DUGQJC5X9317K/57607A1C-5342-4293-A104-35FB5DB76905.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/kugw2lllzb52un1j1p3tsjywfpw7g0',
  },
  {
    id:38, name:'VTG RAMS JERSEY', full:'VTG RAMS JERSEY', size:'XL', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage St. Louis Rams jersey. Classic NFL throwback.',
    img:`${CDN}/1751744656229-QG6ZPZ9BLOB2R5YMYF9H/2CDD9922-D9AA-4234-80B8-AFA21FCCF6E0.jpeg`,
    images:[
      `${CDN}/1751744656229-QG6ZPZ9BLOB2R5YMYF9H/2CDD9922-D9AA-4234-80B8-AFA21FCCF6E0.jpeg`,
      `${CDN}/1751744655886-2KJO0WOG1VTLFA6VEFET/4D78BEF1-9EA6-45DE-9C11-024CD7DC4A6A.jpeg`,
      `${CDN}/1751744657890-2NQUDOS08QISJ4I3BOT6/610987F4-7E17-4EBA-BA2D-6F5395F4C594.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/nz4aswlw0psmnhf42y5ing1kqk85lm',
  },
  {
    id:39, name:'VTG TEE', full:'VTG TEE', size:'L', price:20, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage graphic tee. Hand-picked by JAMIESSHOESS.',
    img:`${CDN}/1738366598722-VW6IAHGY8MYCKF41A246/56905463-C9D8-42A1-8BEB-FAEE3F2C8102.jpeg`,
    images:[
      `${CDN}/1738366598722-VW6IAHGY8MYCKF41A246/56905463-C9D8-42A1-8BEB-FAEE3F2C8102.jpeg`,
      `${CDN}/1738366599451-PTTCS1ARP2BAPTW7ROCQ/1BDA9AAF-8CF7-49FB-8393-9E13CFB6843B.jpeg`,
      `${CDN}/1738366604074-DJKPM54KBDIJMFPUI4NQ/78A4217A-4223-41C3-A309-BA1A2FB79084.jpeg`,
      `${CDN}/1738366602527-E8XXT1Z0UKBVP3CJT2QR/5ECAFBD1-A66A-4750-9C24-6D2372494B07.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/lvmwnn9wne40i5v8025cm06yzlh7jg',
  },
  {
    id:40, name:'VTG BS PARTY TEE', full:'VTG SINGLE STITCH BS PARTY TEE', size:'XL', price:25, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage single stitch BS Party graphic tee.',
    img:`${CDN}/1738366288031-VF3ZA22VX7ZPT2VTMFTV/CD6161AF-67E3-44A3-9BC4-222BCED1F6E2.jpeg`,
    images:[
      `${CDN}/1738366288031-VF3ZA22VX7ZPT2VTMFTV/CD6161AF-67E3-44A3-9BC4-222BCED1F6E2.jpeg`,
      `${CDN}/1738366305067-0P8OZ6EA5KYHDR4XXLX5/88485E00-4AE6-4F1A-9A5D-ECDEF7FBDEAD.jpeg`,
      `${CDN}/1738366305632-IEN72AGO0AO3IOA0I244/A684B038-86BD-47F0-B0EC-B96FB27A31EA.jpeg`,
      `${CDN}/1738366298265-FT3R15VI8PXZEDPJQER9/6BB0C336-53C2-4D17-9E07-FEA9B4BC5B78.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/ho41gcig1c8lfb8417eucay61gm79x',
  },
  {
    id:41, name:'VTG 1995 EASTBAY TEE', full:'VTG 1995 EASTBAY TEE', size:'XL', price:25, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage 1995 Eastbay catalog tee. Classic 90s sportswear.',
    img:`${CDN}/1738366023450-EIWLW7IF1OUV3RI6NKTG/F279A4B8-9BF4-4F1E-A3AE-7B18229B52DA.jpeg`,
    images:[
      `${CDN}/1738366023450-EIWLW7IF1OUV3RI6NKTG/F279A4B8-9BF4-4F1E-A3AE-7B18229B52DA.jpeg`,
      `${CDN}/1738366020773-7A6K0XFN6ERI2XL8XCYQ/4DE6FCE9-AF00-4AA6-A240-4FB582E2C78E.jpeg`,
      `${CDN}/1738366022895-LP8UBWO1ROFGTUUEB9CL/2A294710-8D78-44BD-8C46-6C4D956D43CA.jpeg`,
      `${CDN}/1738366010473-QCFZF9YPRP8WTDY552TQ/E1F00279-DB87-496B-9534-386D1364441C.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/7o79rgxare9zovvwza24f3eteuh281',
  },
  {
    id:42, name:'DALE #3 LOT (2PC)', full:'Dale #3 LOT (2pc)', size:'LOT', price:25, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Dale Earnhardt #3 two-piece lot. NASCAR legend collectibles.',
    img:`${CDN}/1738365206779-ZPLOA12DEV0PZIV8YHJD/CCDA4A79-2999-4DEE-BD5C-6427ED0EB511.jpeg`,
    images:[
      `${CDN}/1738365206779-ZPLOA12DEV0PZIV8YHJD/CCDA4A79-2999-4DEE-BD5C-6427ED0EB511.jpeg`,
      `${CDN}/1738365207144-CQIK5C8CE0NJE1L7PX2B/1596862E-341B-43A2-B52A-CA33944B8471.jpeg`,
      `${CDN}/1738365205504-HGSQMO2Y4XDUVIXVM38O/5A0DC59F-E492-4543-8793-B06CA270E63A.jpeg`,
      `${CDN}/1738365195144-VCMM1XW9UG7KI3UINPE8/08B16916-B461-4F44-9F87-207A4338CB96.jpeg`,
      `${CDN}/1738365205710-O8PLIFOAD8378R4QED25/B7DA205D-67D9-4639-8C70-0FFBB7668064.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/j79o0jte6gm2qe8qs6vtkbmvxawybz',
  },
  {
    id:43, name:'VTG SWEATSUIT', full:'VTG Sweatsuit', size:'L', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'🧥',
    description:'Vintage matching sweatsuit set. Hand-picked condition.',
    img:`${CDN}/1738360303816-9OUA2LN0EI9V726MZNCX/96D33053-F311-4E87-B1CC-693C1F02B147.jpeg`,
    images:[
      `${CDN}/1738360303816-9OUA2LN0EI9V726MZNCX/96D33053-F311-4E87-B1CC-693C1F02B147.jpeg`,
      `${CDN}/1738360305340-JZ2SF0ZYHUI18MCEWLW7/177F3162-34F7-49D3-AEFC-201961A43A57.jpeg`,
      `${CDN}/1738360305323-B1IV6YE0DIC3OS7SYW9Q/FCAAB633-9A61-4F34-89C4-C67A9F2CD194.jpeg`,
      `${CDN}/1738360291508-XPA78WZ426A96L6TS4YA/A1BDBC3B-AB1A-4BA3-809F-D3904F62EE21.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/h4jzp9kj1cd869q0fy7wfpbfretl3k',
  },
  {
    id:44, name:'VTG CARDINALS 3PC LOT', full:'Vintage Cardinals 3pc lot', size:'XL', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage St. Louis Cardinals three-piece lot. Baseball memorabilia.',
    img:`${CDN}/1737233309223-AGZZTOZEJ1HWY2GYO9JR/327E1447-02D0-4A13-8079-C4A21FA93F47.jpeg`,
    images:[
      `${CDN}/1737233309223-AGZZTOZEJ1HWY2GYO9JR/327E1447-02D0-4A13-8079-C4A21FA93F47.jpeg`,
      `${CDN}/1737233309415-B51ESSTW6SQY6JGK0O0J/D9B202A5-77AB-4E1A-B1AE-64FC822A2C02.jpeg`,
      `${CDN}/1737233309719-GXKPHE8DZ498ER16V7MJ/9ED3E390-F2D2-462F-8F68-1A8BDA2B7458.jpeg`,
      `${CDN}/1737233307621-7CUJ52ZNKU47TG30NQKD/21C38213-E2B3-4DC9-B661-32712553DA22.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/3z7lqsi5dlscfkaa350pt6wv4w8me3',
  },
  {
    id:45, name:'VTG KU CREWNECK', full:'Vintage KU Crewneck', size:'XL', price:20, cat:'vintage', tags:['VTG'], stock:1, emoji:'🧥',
    description:'Vintage University of Kansas crewneck sweatshirt.',
    img:`${CDN}/1737155041819-DXESTAD5RNSAJ6UWBJVE/6B72FD25-8EF6-4D6A-8F9A-7963F63CDF15.jpeg`,
    images:[
      `${CDN}/1737155041819-DXESTAD5RNSAJ6UWBJVE/6B72FD25-8EF6-4D6A-8F9A-7963F63CDF15.jpeg`,
      `${CDN}/1737155055426-XRD4VQOWLL29M13T0NY1/D9FA82C0-2785-4D28-BC3D-9EA6A1F98254.jpeg`,
      `${CDN}/1737155056736-3Y1EVZNGMO7NIA0VN5P8/AE421F01-7417-44C2-804A-32C61366EDA8.jpeg`,
      `${CDN}/1737155059332-8C3B5XLM5UJ2A93O5XIG/958F375A-233D-4FC3-9B3B-92A0209DB5D1.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/mxkat6pzfbbtmtlptt2jmftkajir9w',
  },
  {
    id:46, name:'VTG SWEATER', full:'Vintage Sweater', size:'L', price:22, cat:'vintage', tags:['VTG'], stock:1, emoji:'🧥',
    description:'Vintage sweater. Hand-picked condition.',
    img:`${CDN}/1737156943994-VD8F3OIXW21NLNSMU5FE/CCB310B9-E78C-49B8-9932-0703D4E93C26.jpeg`,
    images:[
      `${CDN}/1737156943994-VD8F3OIXW21NLNSMU5FE/CCB310B9-E78C-49B8-9932-0703D4E93C26.jpeg`,
      `${CDN}/1737156948771-KR7RLJ31RDRDK54MDQJY/0490E7F9-9895-45FD-925F-D6455AACF617.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/xud32r0mjkajzswhn9l20n9td01o2t',
  },
  {
    id:47, name:'VTG SWEATER', full:'Vintage Sweater', size:'XXL', price:22, cat:'vintage', tags:['VTG'], stock:1, emoji:'🧥',
    description:'Vintage sweater. Hand-picked condition.',
    img:`${CDN}/1737156830425-CV20QAWZLVGF6Z3M6X7E/C7DD0357-A2FA-4266-9015-48F626A07DC8.jpeg`,
    images:[
      `${CDN}/1737156830425-CV20QAWZLVGF6Z3M6X7E/C7DD0357-A2FA-4266-9015-48F626A07DC8.jpeg`,
      `${CDN}/1737156824051-3TIVD2USCGL1PG7NNRI5/DF604D41-EF77-4EFC-9BDC-88A025E43F06.jpeg`,
      `${CDN}/1737156828579-LINKWPSM5D28YIK5SZB3/346D9E81-BE26-4066-B588-D90085F29985.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/b6nv11a40p3fv0iwdht4uqxsqjott6',
  },
  {
    id:48, name:'HARLEY DAVIDSON BUTTON UP', full:'Harley Davidson Button Up', size:'XL', price:14.99, cat:'vintage', tags:['VTG'], stock:1, emoji:'🧥',
    description:'Vintage Harley Davidson button-up shirt. Classic biker style.',
    img:`${CDN}/1737155280959-KPF80J3T23M52NWEWABR/891228DE-32CF-4A37-97A0-3EFCEB92FE6C.jpeg`,
    images:[
      `${CDN}/1737155280959-KPF80J3T23M52NWEWABR/891228DE-32CF-4A37-97A0-3EFCEB92FE6C.jpeg`,
      `${CDN}/1737155290623-KIET9DYBN6SJ0H8LL6GV/233796E6-39A8-4403-A5D7-371240160521.jpeg`,
      `${CDN}/1737155294566-RC0QTGJDKSXYYWB3UIYL/28F7C907-616D-48CB-84A7-7EC7A127A935.jpeg`,
      `${CDN}/1737155294500-WFUOMYPGU4B75SDA4GG1/981354EA-B4B5-4D76-B215-3A3EBC2222AE.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/tpxddzao44xcrw2urbs6tddh10co5c',
  },
  {
    id:49, name:'VTG GRATEFUL DEAD TEE', full:'Vintage 1996 Grateful Dead Tee', size:'S', price:35, cat:'vintage', tags:['VTG'], stock:1, emoji:'👕',
    description:'Vintage 1996 Grateful Dead graphic tee. Classic band tee collectible.',
    img:`${CDN}/1737155192386-J6Q6CHOU7CNL6BKQGLG4/A3D386A1-249F-4054-8070-E984E31CAA13.jpeg`,
    images:[
      `${CDN}/1737155192386-J6Q6CHOU7CNL6BKQGLG4/A3D386A1-249F-4054-8070-E984E31CAA13.jpeg`,
      `${CDN}/1737155209177-S4R4JEJNB1TOZ7UTBU60/A6C1CAAB-412E-4B9F-A6C2-D7434CD1CB82.jpeg`,
      `${CDN}/1737155210711-0SCLG1GM9JKXRY8KJBK1/68DA8E3F-16C3-4C5C-B2FE-B42C9D6E1B4C.jpeg`,
      `${CDN}/1737155208508-H1BK03JOZ89FSJGZ72KP/8FABC578-F4D9-4AFB-8B09-54AED314C24A.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/qr74l8q02pdfno9etgdy82yljmiim6',
  },

  // ── Headwear ────────────────────────────────────────────────────────────────
  {
    id:50, name:'DAYTONA 500 HATS (2PC)', full:'2004 Daytona 500 hats (2pc)', size:'LOT', price:30, cat:'headwear', tags:['VTG'], stock:1, emoji:'🧢',
    description:'2004 Daytona 500 two-hat lot. NASCAR collector pieces.',
    img:`${CDN}/1738359447359-51C5CKS1Q251U845BDGA/FB8017F7-3478-4BCF-8674-E2087E330164.jpeg`,
    images:[
      `${CDN}/1738359447359-51C5CKS1Q251U845BDGA/FB8017F7-3478-4BCF-8674-E2087E330164.jpeg`,
      `${CDN}/1738359422906-GBXA5ZICV192IWO7486N/84353DB1-0C02-4681-9D03-CBD939440BCC.jpeg`,
      `${CDN}/1738359446310-QN56NQM4S5DU1NLKXJF6/56572130-B993-477B-8020-F627C8A43E92.jpeg`,
      `${CDN}/1738359445980-ZX8JI052OHUDSBMHXKRL/581407DE-642B-44CF-B790-9ABE81DBAA24.jpeg`,
      `${CDN}/1738359447349-Q8EETLKI0F2XPOPK3RUN/1E736728-F1C5-4D82-A89B-B5C4AC52E73F.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/e2oj85ly58gpe2i3nisnhyy6k3cbjd',
  },
  {
    id:51, name:'VTG HAT LOT (5PC)', full:'VTG HAT LOT (5pc)', size:'LOT', price:45, cat:'headwear', tags:['VTG'], stock:1, emoji:'🧢',
    description:'Vintage hat five-piece lot. Mixed styles, hand-picked by JAMIESSHOESS.',
    img:`${CDN}/1738358851705-VWI9WTB2R15UBUYQ693E/F854D482-FC23-44DC-9642-51B554CEA59C.jpeg`,
    images:[
      `${CDN}/1738358851705-VWI9WTB2R15UBUYQ693E/F854D482-FC23-44DC-9642-51B554CEA59C.jpeg`,
      `${CDN}/1738358845340-7YU7TUR9EPW6MMOXC4AZ/8548C942-C801-49C2-90B0-DBE905DB7D4E.jpeg`,
      `${CDN}/1738358852257-18P0NU59QPYMJIODXLKP/FA518A99-E82F-4C8A-91F6-348BA000816B.jpeg`,
      `${CDN}/1738358853104-F1W1KEK9TULI6N5YK3N4/F5B1909A-F81D-4863-A797-AE192B0D9787.jpeg`,
      `${CDN}/1738358849122-UGP6CCZ4YKXIDQ3DV252/3246A3A8-41A8-4E6F-868C-20608B6E583A.jpeg`,
    ],
    squarespaceUrl:'https://shop.jamiesshoes.com/home/p/l6ohojpr03p1qg6qjlarguiiyfi4h8',
  },
]

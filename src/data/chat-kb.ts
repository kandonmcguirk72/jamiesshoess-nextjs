/**
 * JAMIESSHOESS chat knowledge base.
 *
 * Every phrase in `phrases` gets embedded at build time (scripts/embed-kb.ts)
 * and matched against the visitor's query at runtime. Responses are served
 * randomly from `responses` so repeat questions don't sound canned.
 *
 * Entries marked [PLACEHOLDER] are pending the real policy from Kandon —
 * they still answer safely (route to IG / the shop) without inventing rules.
 */

export interface ChatIntent {
  id: string;
  /** Example user phrasings — slang and typos included on purpose. */
  phrases: string[];
  /** Response variants in the shop's voice. One is picked at random. */
  responses: string[];
}

export const IG = '@JAMIESSHOESS';
export const IG_URL = 'https://instagram.com/JAMIESSHOESS';
export const SHOP_URL = 'https://shop.jamiesshoes.com';
export const ADDRESS = '302 Park Central East, Downtown Springfield, MO';

export const FALLBACK_RESPONSES: string[] = [
  `not 100% sure on that one — DM us on IG ${IG} or pull up to the shop, ${ADDRESS}.`,
  `hmm, don't wanna guess and get it wrong. hit us up ${IG} on IG or come through — ${ADDRESS}.`,
  `that one's above my pay grade. shoot us a DM ${IG} and a real human will get you right.`,
];

export const HEDGE_SUFFIXES: string[] = [
  ` if I got that wrong, hit us on IG ${IG}.`,
  ` (not 100% sure I read that right — DM ${IG} if that's not what you meant.)`,
  ` if that ain't what you were asking, holler at us on IG ${IG}.`,
];

export const CHAT_KB: ChatIntent[] = [
  // ============ HOURS ============
  {
    id: 'hours',
    phrases: [
      'what are your hours',
      'when are you open',
      'yall open rn',
      'are you open right now',
      'what time do you close',
      'what time do yall open',
      'store hours',
      'hours of operation',
      'when do u close today',
      'how late are you open',
    ],
    responses: [
      `we're open Wed–Thu 12–6 PM, Fri–Sat 12–7 PM, and Sunday 12–4 PM. closed Mon–Tue. pull up.`,
      `hours: Wednesday & Thursday 12–6, Friday & Saturday 12–7, Sunday 12–4. Mon–Tue we're closed — but the online shop never sleeps: ${SHOP_URL}`,
      `Wed + Thu: 12–6 PM. Fri + Sat: 12–7 PM. Sun: 12–4 PM. closed Monday and Tuesday.`,
    ],
  },
  {
    id: 'hours-sunday',
    phrases: [
      'are you open sunday',
      'yall open sunday?',
      'open on sundays',
      'sunday hours',
      'can i come by sunday',
      'you open this weekend sunday',
      'what about sunday',
      'sunday afternoon yall around',
    ],
    responses: [
      `yup — Sundays we're open 12–4 PM. Mon and Tue are the only days we're closed.`,
      `Sunday hours: 12–4 PM. we're only closed Mon–Tue. online shop's always open too: ${SHOP_URL}`,
    ],
  },
  {
    id: 'hours-monday',
    phrases: [
      'monday hours',
      'are you open monday or tuesday',
      'yall open on tuesdays',
      'open monday?',
      'can i come in on a tuesday',
      'are you closed mondays',
    ],
    responses: [
      `Mon and Tue are our only days off — we're back Wednesday at noon. online shop's always open: ${SHOP_URL}`,
      `closed Mondays and Tuesdays. catch us Wed–Sat from 12, or Sunday 12–4.`,
    ],
  },
  {
    id: 'hours-saturday',
    phrases: [
      'are you open saturday',
      'saturday hours',
      'what about saturday',
      'open this saturday',
      'yall open sat',
      'how late friday',
      'friday hours',
      'open friday night',
    ],
    responses: [
      `yup — Fri and Sat we're open 12–7 PM. best days to pull up.`,
      `Saturday: 12–7. Friday too. see you there.`,
    ],
  },

  // ============ LOCATION ============
  {
    id: 'location',
    phrases: [
      'where are you located',
      'where u located',
      'wya',
      'whats your address',
      'where is the store',
      'where is the shop at',
      'what part of springfield are you in',
      'are you downtown',
      'where can i find you',
      'location?',
    ],
    responses: [
      `${ADDRESS} — right on the square downtown. can't miss us.`,
      `we're at 302 Park Central East, downtown Springfield MO. on the square.`,
      `downtown Springfield, on Park Central Square — 302 Park Central East.`,
    ],
  },
  {
    id: 'parking',
    phrases: [
      'where do i park',
      'is there parking',
      'parking near the store',
      'parking downtown',
      'where should i park downtown',
      'free parking?',
      'is parking hard down there',
    ],
    responses: [
      `plenty of parking downtown — street spots around the square plus public garages a block or two out. easy.`,
      `there's street parking around Park Central Square and public garages close by. you'll be fine.`,
    ],
  },
  {
    id: 'directions',
    phrases: [
      'how do i get to your store',
      'directions to the shop',
      'how do i find you on the square',
      'is it near park central square',
      'what building are you in',
      'landmarks near the shop',
    ],
    responses: [
      `punch 302 Park Central East into your maps — we're right on the square in downtown Springfield.`,
      `we're on Park Central Square, east side. 302 Park Central East. maps will take you straight to the door.`,
    ],
  },

  // ============ ONLINE / SHOPPING ============
  {
    id: 'shop-online',
    phrases: [
      'can i shop online',
      'do you have a website to buy',
      'online store link',
      'can i order online',
      'do you ship stuff from your website',
      'where do i buy online',
      'link to your shop',
      'do yall sell online',
    ],
    responses: [
      `yessir — ${SHOP_URL}. everything in the shop, from your couch.`,
      `online shop is live: ${SHOP_URL}. go crazy.`,
      `${SHOP_URL} — that's the spot for online orders.`,
    ],
  },
  {
    id: 'inventory-general',
    phrases: [
      'what do you have in stock',
      'whats in the store right now',
      'do you have any heat',
      'what brands do you carry',
      'what kind of shoes do you sell',
      'do you sell clothes too',
      'u got jordans',
      'do you have nikes',
      'got any dunks',
      'what yall got',
    ],
    responses: [
      `inventory moves fast so I can't call it live from here — browse ${SHOP_URL} or check IG ${IG} for the latest. or pull up and see for yourself.`,
      `best way to see what's in stock right now: ${SHOP_URL}. we post fresh pickups on IG ${IG} too.`,
      `can't promise what's on the wall this second — it moves. check ${SHOP_URL} or the IG ${IG} and you'll see the current heat.`,
    ],
  },
  {
    id: 'inventory-specific',
    phrases: [
      'u got any jordans size 11',
      'do you have jordan 4s in a 10',
      'got dunks in size 9',
      'do you have yeezys in my size',
      'any size 12 in stock',
      'do you have this shoe in a 10.5',
      'looking for jordan 1s size 8',
      'got any sb dunks rn',
      'do you have travis scotts',
    ],
    responses: [
      `I can't see live inventory from here — sizes come and go daily. check ${SHOP_URL} or DM us ${IG} and we'll tell you straight up what's on hand.`,
      `stock changes too fast for me to promise a size. hit ${SHOP_URL} to browse what's live, or DM ${IG} for a real-time answer.`,
    ],
  },
  {
    id: 'price-check',
    phrases: [
      'how much are the jordan 4s',
      'whats the price on those',
      'how much do shoes cost there',
      'are your prices good',
      'price check',
      'how much for a pair of dunks',
      'are you cheaper than stockx',
    ],
    responses: [
      `prices are on every listing at ${SHOP_URL} — I don't quote numbers here because they change. what's tagged is what it is.`,
      `check ${SHOP_URL} for live prices. every pair's marked. no games.`,
    ],
  },

  // ============ DROPS / RESTOCKS / IG ============
  {
    id: 'drops-restocks',
    phrases: [
      "when's the next drop",
      'when do you restock',
      'new inventory when',
      'when do new shoes come in',
      'when is the next restock',
      'any drops coming',
      'when yall getting new stuff',
      'restock schedule',
      'do you announce new pickups',
    ],
    responses: [
      `drops and restocks get announced on IG first — follow ${IG} and turn on notifications so you don't miss it.`,
      `everything new hits the IG ${IG} before anywhere else. that's the move.`,
      `no set schedule — new heat comes in all the time. IG ${IG} is where we announce it.`,
    ],
  },
  {
    id: 'instagram',
    phrases: [
      'what is your instagram',
      'do you have an ig',
      'instagram handle',
      'whats ur insta',
      'do you have social media',
      'where can i follow you',
      'ig?',
      'are you on tiktok',
    ],
    responses: [
      `IG is ${IG} — drops, restocks, and pickups all get posted there first.`,
      `follow us: ${IG} on Instagram. that's the main channel.`,
    ],
  },

  // ============ BUY / SELL / TRADE ============
  {
    id: 'sell-to-us',
    phrases: [
      'do you buy shoes',
      'do u buy kicks',
      'can i sell you my shoes',
      'i want to sell my sneakers',
      'do you buy used shoes',
      'will you buy my collection',
      'i got heat to sell',
      'do you pay cash for shoes',
      'selling my jordans, interested?',
      'yall buying rn',
    ],
    responses: [
      // [PLACEHOLDER — real buy policy from Kandon]
      `yeah we buy — bring your pairs by the shop (${ADDRESS}) during open hours or DM pics to ${IG} first and we'll tell you what we're working with.`,
      `we're always looking. easiest move: DM ${IG} with pics + sizes, or just pull up Wed–Sun and we'll check them out in person.`,
    ],
  },
  {
    id: 'trade',
    phrases: [
      'do you do trades',
      'can i trade my shoes',
      'trade ins?',
      'will you trade for store credit',
      'can i swap my dunks for something',
      'do yall take trades',
      'trade my kicks for a different pair',
    ],
    responses: [
      // [PLACEHOLDER — real trade policy]
      `we do trades case by case — bring what you got to the shop or DM ${IG} with pics and we'll talk.`,
      `trades happen, depends on the pair. DM ${IG} pics or come through and let's see it.`,
    ],
  },
  {
    id: 'sell-condition',
    phrases: [
      'do you buy worn shoes',
      'do my shoes need to be deadstock',
      'do you take used pairs',
      'what condition do shoes need to be in to sell',
      'do you buy without the box',
      'my shoes are a little beat, will you still buy',
    ],
    responses: [
      // [PLACEHOLDER — real condition policy]
      `condition matters but it's case by case — DM pics to ${IG} and we'll shoot you straight before you make the trip.`,
      `depends on the pair and the shape it's in. send pics to ${IG} and we'll let you know real quick.`,
    ],
  },
  {
    id: 'sell-payout',
    phrases: [
      'how much will you pay for my shoes',
      'what do you pay for kicks',
      'how do payouts work when selling',
      'do you pay market price',
      'whats your buyout rate',
      'cash or credit when i sell',
    ],
    responses: [
      // [PLACEHOLDER — real payout policy]
      `payouts depend on the pair, condition, and demand — no flat rate. DM ${IG} with what you got and we'll talk numbers.`,
      `every pair's different so I can't quote you here. bring it in or DM ${IG} and we'll make you an offer.`,
    ],
  },

  // ============ SHIPPING ============
  {
    id: 'shipping',
    phrases: [
      'do you ship',
      'how much is shipping',
      'do you ship to my state',
      'how long does shipping take',
      'shipping cost',
      'do you offer free shipping',
      'can you mail me a pair',
      'do you ship nationwide',
    ],
    responses: [
      // [PLACEHOLDER — real shipping policy]
      `online orders through ${SHOP_URL} ship out — rates and times show at checkout. questions on a specific order? DM ${IG}.`,
      `yep, orders from ${SHOP_URL} get shipped. exact cost + timing shows when you check out.`,
    ],
  },
  {
    id: 'pickup',
    phrases: [
      'can i pick up in store',
      'do you do local pickup',
      'can i order online and pick up',
      'buy online pickup in store',
      'can i reserve online and grab it in person',
    ],
    responses: [
      // [PLACEHOLDER — confirm pickup policy]
      `if you're local, easiest thing is DM ${IG} about the pair and we can usually sort out an in-store grab. shop's at ${ADDRESS}.`,
      `local? DM ${IG} before you order and we'll figure out pickup. we're downtown on the square.`,
    ],
  },

  // ============ RETURNS ============
  {
    id: 'returns',
    phrases: [
      'can i return something',
      'what is your return policy',
      'do you accept returns',
      'can i get a refund',
      'i want to return my order',
      'return policy?',
      'can i bring shoes back if they dont fit',
      'exchanges?',
      'can i exchange for a different size',
    ],
    responses: [
      // [PLACEHOLDER — real returns/exchange policy]
      `returns and exchanges are handled case by case — DM ${IG} with your order info and we'll get you sorted.`,
      `hit us on IG ${IG} with your order details and we'll work it out. we're not gonna leave you hanging.`,
    ],
  },

  // ============ AUTHENTICATION ============
  {
    id: 'legit-check',
    phrases: [
      'is this stuff legit',
      'are your shoes authentic',
      'do you sell fakes',
      'how do i know these are real',
      'are these reps',
      'do you authenticate your shoes',
      'legit check?',
      'is everything verified real',
      'you sell replicas?',
    ],
    responses: [
      // [PLACEHOLDER — real authentication process detail]
      `everything we sell is checked before it hits the wall. 100% authentic — no reps, ever. questions about a specific pair? DM ${IG}.`,
      `all real, all verified. we don't touch fakes. if you want the rundown on how we check pairs, ask in the shop or DM ${IG}.`,
    ],
  },
  {
    id: 'legit-check-service',
    phrases: [
      'can you legit check my shoes',
      'will you authenticate shoes i bought somewhere else',
      'can i bring shoes in to verify',
      'legit check service',
      'can you tell me if my jordans are real',
    ],
    responses: [
      // [PLACEHOLDER — confirm LC service offering]
      `bring 'em by the shop during open hours and we'll take a look, or DM clear pics to ${IG}.`,
      `we can eyeball a pair for you — pull up Wed–Sun or DM detailed pics to ${IG}.`,
    ],
  },

  // ============ SIZING ============
  {
    id: 'sizing-help',
    phrases: [
      'how do jordans fit',
      'should i size up or down',
      'do dunks run small',
      'sizing help',
      'what size should i get',
      'true to size?',
      'do these run big',
      'im between sizes what do i do',
    ],
    responses: [
      `fit varies by model — most Jordans and Dunks are true to size, but some run snug. best move: come try pairs on in the shop, or DM ${IG} about the specific shoe.`,
      `depends on the silhouette. tell us which shoe on IG ${IG} and we'll give you the real answer — or pull up and try them on.`,
    ],
  },
  {
    id: 'size-range',
    phrases: [
      'what sizes do you carry',
      'do you have kids sizes',
      'do you carry womens sizes',
      'do you have big sizes like 14',
      'smallest size you carry',
      'gs sizes?',
    ],
    responses: [
      `size runs change with the inventory — browse ${SHOP_URL} and filter, or DM ${IG} for what's on hand in your size.`,
      `we get all kinds of sizes in — best bet is ${SHOP_URL} or a quick DM to ${IG} to check for yours.`,
    ],
  },

  // ============ HOLDS ============
  {
    id: 'holds',
    phrases: [
      'can you hold a pair for me',
      'will you put shoes on hold',
      'can i reserve a pair',
      'hold something til saturday',
      'can you set something aside for me',
      'do you do holds',
    ],
    responses: [
      // [PLACEHOLDER — real hold policy]
      `holds are case by case — DM ${IG} with the pair you want and we'll see what we can do.`,
      `shoot us a DM ${IG} about the pair and we'll talk. can't promise, heat moves fast.`,
    ],
  },

  // ============ PAYMENT ============
  {
    id: 'payment-methods',
    phrases: [
      'what payment do you take',
      'do you take cash',
      'can i pay with card',
      'do you accept apple pay',
      'do you take cashapp or venmo',
      'payment methods',
      'do you do afterpay or klarna',
      'can i finance shoes',
    ],
    responses: [
      // [PLACEHOLDER — confirm exact payment methods]
      `card and cash work in store. for the full list (apple pay, etc.) just ask at the counter or DM ${IG}.`,
      `we take the standard stuff — cash + cards in store, secure checkout online at ${SHOP_URL}. anything specific, DM ${IG}.`,
    ],
  },

  // ============ CONTACT ============
  {
    id: 'contact',
    phrases: [
      'how do i contact you',
      'phone number?',
      'whats your email',
      'can i call the store',
      'best way to reach you',
      'contact info',
      'how do i get ahold of someone',
    ],
    responses: [
      `fastest way to reach us is IG DMs — ${IG}. or just come by: ${ADDRESS}, Wed–Sun.`,
      `DM ${IG} on Instagram — that's the quickest line to a real person.`,
    ],
  },
  {
    id: 'human',
    phrases: [
      'can i talk to a real person',
      'are you a bot',
      'talk to a human',
      'is this automated',
      'i want to speak to someone',
      'get me the owner',
    ],
    responses: [
      `yeah I'm a bot — but a real one runs the IG. DM ${IG} and an actual human will hit you back.`,
      `guilty, I'm the shop bot 🤖 for a human, DM ${IG} or pull up to ${ADDRESS} Wed–Sun.`,
    ],
  },

  // ============ ABOUT / MISC ============
  {
    id: 'about',
    phrases: [
      'what is jamies shoes',
      'tell me about the store',
      'who owns this shop',
      'how long have you been open',
      'what kind of store is this',
      'is this a sneaker store',
      'whats your story',
    ],
    responses: [
      `JAMIESSHOESS is Springfield's spot for sneakers and streetwear — right on Park Central Square downtown. real pairs, real prices, local owned.`,
      `we're a sneaker + streetwear shop in downtown Springfield MO. authentic heat, buy/sell/trade, on the square. come see us.`,
    ],
  },
  {
    id: 'consignment',
    phrases: [
      'do you do consignment',
      'can i consign my shoes',
      'consignment fees',
      'will you sell my shoes for me',
      'how does consignment work there',
    ],
    responses: [
      // [PLACEHOLDER — real consignment policy]
      `for consignment questions, DM ${IG} or ask in the shop — terms depend on the pairs.`,
      `we handle that on a case-by-case basis. hit ${IG} with what you're looking to move.`,
    ],
  },
  {
    id: 'cleaning',
    phrases: [
      'do you clean shoes',
      'shoe cleaning service',
      'can you restore my sneakers',
      'do you sell shoe cleaner',
      'sneaker restoration',
      'do you do repairs',
    ],
    responses: [
      // [PLACEHOLDER — confirm cleaning/restoration offering]
      `not something I can confirm from here — ask us on IG ${IG} or in the shop and we'll point you right.`,
      `DM ${IG} for that one — if we can't do it, we know who in Springfield can.`,
    ],
  },
  {
    id: 'gift-cards',
    phrases: [
      'do you sell gift cards',
      'can i buy a gift certificate',
      'gift card for the store',
      'do yall have gift cards',
    ],
    responses: [
      // [PLACEHOLDER — confirm gift card availability]
      `ask at the counter or DM ${IG} — we'll get you set up for gifting either way.`,
      `hit us up ${IG} and we'll sort out the gift situation.`,
    ],
  },
  {
    id: 'raffles',
    phrases: [
      'do you do raffles',
      'how do i enter the raffle',
      'raffle for the new drop',
      'do you raffle limited pairs',
    ],
    responses: [
      `if a pair's getting raffled, it'll be announced on IG ${IG}. follow + notifications on.`,
      `raffles and limited releases all run through the IG — ${IG}. that's where you enter.`,
    ],
  },
  {
    id: 'streetwear',
    phrases: [
      'do you sell clothing',
      'do you have hoodies',
      'got any vintage tees',
      'do you carry streetwear brands',
      'do you sell hats',
      'any vintage stuff',
      'do you have shirts',
    ],
    responses: [
      `yeah, it's not just kicks — we carry streetwear and vintage pieces too. check ${SHOP_URL} or come dig through the racks.`,
      `shoes are the headline but we've got apparel and vintage as well. IG ${IG} shows off the good stuff.`,
    ],
  },
  {
    id: 'new-vs-used',
    phrases: [
      'do you sell used shoes',
      'is everything brand new',
      'do you have preowned pairs',
      'new or used inventory',
      'deadstock only?',
    ],
    responses: [
      `we carry both — deadstock and clean pre-owned pairs. condition is always listed straight up, no surprises.`,
      `mix of brand new and pre-loved. every pair's condition is tagged honestly. what you see is what you get.`,
    ],
  },
  {
    id: 'greeting',
    phrases: [
      'hi',
      'hey',
      'hello',
      'yo',
      'whats up',
      'sup',
      'hey there',
      'wassup',
      'good morning',
    ],
    responses: [
      `yo! welcome to JAMIESSHOESS. ask me about hours, the shop, selling your kicks — whatever you need.`,
      `what's good 👋 I can help with hours, location, selling/trading, drops — fire away.`,
      `sup! got questions about the shop? I got answers. mostly.`,
    ],
  },
  {
    id: 'thanks',
    phrases: [
      'thanks',
      'thank you',
      'appreciate it',
      'ty',
      'thanks bro',
      'good looks',
      'bet thanks',
    ],
    responses: [
      `bet. come see us — ${ADDRESS}, Wed–Sun.`,
      `anytime. follow ${IG} so you don't miss the next drop 🤝`,
      `you got it. pull up sometime.`,
    ],
  },
  {
    id: 'bye',
    phrases: [
      'bye',
      'later',
      'peace',
      'see ya',
      'im out',
      'gotta go',
    ],
    responses: [
      `later! ${IG} if you need us.`,
      `peace ✌️ come through Wed–Sun.`,
    ],
  },
  {
    id: 'jobs',
    phrases: [
      'are you hiring',
      'can i work there',
      'job application',
      'do you have any openings',
      'how do i apply for a job',
    ],
    responses: [
      `hiring stuff goes through the shop directly — DM ${IG} or come introduce yourself in person. that always lands better.`,
      `best move: pull up in person and ask, or DM ${IG}. showing face counts here.`,
    ],
  },
  {
    id: 'sell-page',
    phrases: [
      'how does selling work on the website',
      'is there a sell form',
      'where do i submit shoes to sell online',
      'sell page on your site',
    ],
    responses: [
      `there's a sell page right on this site — hit "Sell" in the nav and send us what you got. or DM ${IG}, same energy.`,
      `check the Sell page in the site nav — submit pics + details there and we'll get back to you.`,
    ],
  },
];

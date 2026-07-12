import type { Metadata } from 'next'

// The sell page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'Sell or Trade',
  description:
    'Sell or trade your sneakers and vintage clothing at JAMIESSHOESS in downtown Springfield, MO. Send photos first or bring items in-store Wed–Sun.',
  alternates: { canonical: '/sell' },
}

export default function SellLayout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

// The review page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'Leave a Review',
  description: 'Loved your visit to JAMIESSHOESS? Leave us a Google review — it takes 30 seconds.',
  alternates: { canonical: '/review' },
}

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  return children
}

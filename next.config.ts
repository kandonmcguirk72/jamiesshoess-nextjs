import type { NextConfig } from "next";

// React dev mode uses eval() for debugging; allow it only in development so
// production keeps a strict CSP (no 'unsafe-eval').
const isDev = process.env.NODE_ENV === 'development';
const scriptSrc = [
  "script-src 'self' 'unsafe-inline'",
  isDev ? "'unsafe-eval'" : '',
  "https://fonts.googleapis.com https://www.googletagmanager.com",
].filter(Boolean).join(' ');

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    qualities: [75, 85],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.squarespace-cdn.com' },
      { protocol: 'https', hostname: 'static1.squarespace.com' },
    ],
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=()',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Content-Security-Policy',
          value: [
            "default-src 'self'",
            scriptSrc,
            "frame-src 'none'",
            "connect-src 'self' https://www.google-analytics.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com",
            "img-src 'self' data: blob: https:",
          ].join('; '),
        },
      ],
    },
  ],
  rewrites: async () => ({
    afterFiles: [],
  }),
};

export default nextConfig;

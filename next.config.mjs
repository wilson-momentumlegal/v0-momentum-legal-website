const isDev = process.env.NODE_ENV === 'development'

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "font-src 'self' https://fonts.gstatic.com data:",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https:",
      // Allow unsafe-eval in dev for React Refresh (hot reloading), strict in production
      isDev
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vitals.vercel-insights.com https://va.vercel-scripts.com"
        : "script-src 'self' 'unsafe-inline' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
      "connect-src 'self' https://api.emailjs.com https://vitals.vercel-insights.com https://analytics.vercel.com",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'",
    ].join('; '),
  },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  {
    key: 'Permissions-Policy',
    value: [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'fullscreen=(self)',
      'payment=()',
    ].join(', '),
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    qualities: [75, 85],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://momentumlegalpc.com'
  
  // Static routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/services/nil-athlete',
    '/services/brand-sponsor',
    '/services/collective',
    '/services/corporate-venture',
    '/services/university-institutional',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))
}


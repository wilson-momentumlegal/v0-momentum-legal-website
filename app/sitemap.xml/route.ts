import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://momentumlegalpc.com'
  
  // Define all routes
  const routes = [
    { path: '', priority: 1.0 },
    { path: '/about', priority: 0.8 },
    { path: '/contact', priority: 0.8 },
    { path: '/services', priority: 0.8 },
    { path: '/services/nil-athlete', priority: 0.7 },
    { path: '/services/brand-sponsor', priority: 0.7 },
    { path: '/services/collective', priority: 0.7 },
    { path: '/services/corporate-venture', priority: 0.7 },
    { path: '/services/university-institutional', priority: 0.7 },
  ]

  const lastModified = new Date().toISOString()

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
    .map(
      (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  })
}


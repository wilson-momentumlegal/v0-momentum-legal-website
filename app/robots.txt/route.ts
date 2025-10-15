import { NextResponse } from 'next/server'

export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://momentumlegalpc.com/sitemap.xml`

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  })
}


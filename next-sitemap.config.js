/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://momentumlegalpc.com', // main production domain
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404', '/_app', '/_error'], // exclude system pages
  changefreq: 'weekly',
  priority: 0.7,
  // For Next.js 13+ app directory
  generateIndexSitemap: false,
  // Additional configuration for better SEO
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}


import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

// Define your domain
const DOMAIN = 'https://genzeetech.com';

// All your important pages
const pages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: DOMAIN });
  pages.forEach(page => sitemap.write(page));
  sitemap.end();

  const xml = await streamToPromise(sitemap);
  const outputPath = resolve('./dist/sitemap.xml');

  createWriteStream(outputPath).write(xml.toString());
  console.log('✅ Sitemap generated at:', outputPath);
}

generateSitemap().catch(console.error);

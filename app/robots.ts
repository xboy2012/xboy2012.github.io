import type { MetadataRoute } from 'next';
import { BASE_URL } from '../src/config/app';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: '*',
        // crawlDelay: 120,
        // allow: ['/'],
        disallow: ['/_next', '*/index.txt'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
};

export default robots;

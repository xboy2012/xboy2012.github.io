import type { MetadataRoute } from 'next';
import { PROD_BASE_URL } from '../src/config/app';

export const dynamic = 'force-static';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: '*',
        // crawlDelay: 120,
        allow: ['/'],
        // disallow: [],
      },
    ],
    sitemap: `${PROD_BASE_URL}/sitemap.xml`,
  };
};

export default robots;

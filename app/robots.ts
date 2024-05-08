import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: '*',
        // crawlDelay: 120,
        // allow: ['/'],
        disallow: ['/_next/', '/*/index.txt?_rsc=*'],
      },
    ],
    sitemap: 'https://xboy2012.github.io/sitemap.xml',
  };
};

export default robots;

import type { MetadataRoute } from 'next';
import { getBlogsBasic } from '../src/blogs/getBlogsBasic';
import { PROD_BASE_URL } from '../src/config/app';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  // TODO: just refresh lastModified for every build
  const time = new Date();

  return [
    { url: `${PROD_BASE_URL}/`, lastModified: time, priority: 1 },
    { url: `${PROD_BASE_URL}/resume/`, lastModified: time, priority: 0.8 },
    { url: `${PROD_BASE_URL}/portfolio/`, lastModified: time, priority: 0.8 },
    { url: `${PROD_BASE_URL}/blog/`, lastModified: time, priority: 0.8 },

    // all blogs
    ...getBlogsBasic()
      .filter((blog) => !blog.link)
      .map((blog) => {
        return {
          url: `${PROD_BASE_URL}/blog/${blog.id}/`,
          lastModified: time,
          priority: 0.64,
        };
      }),
  ];
};

export default sitemap;

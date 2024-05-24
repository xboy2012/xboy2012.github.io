import type { MetadataRoute } from 'next';
import { getBlogs } from '../src/blogs';
import { BASE_URL } from '../src/config/app';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  // TODO: just refresh lastModified for every build
  const time = new Date();

  return [
    { url: `${BASE_URL}/`, lastModified: time, priority: 1 },
    { url: `${BASE_URL}/resume/`, lastModified: time, priority: 0.8 },
    { url: `${BASE_URL}/portfolio/`, lastModified: time, priority: 0.8 },
    { url: `${BASE_URL}/blog/`, lastModified: time, priority: 0.8 },

    // all blogs
    ...getBlogs()
      .filter((blog) => !blog.link)
      .map((blog) => {
        return {
          url: `${BASE_URL}/blog/${blog.id}/`,
          lastModified: time,
          priority: 0.64,
        };
      }),
  ];
};

export default sitemap;

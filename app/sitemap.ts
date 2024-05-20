import type { MetadataRoute } from 'next';
import { getBlogs } from '../src/blogs';

const BASE_URL = 'https://xboy2012.github.io';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  // TODO: just refresh lastModified for every build
  const time = new Date();

  return [
    { url: `${BASE_URL}/`, lastModified: time },
    { url: `${BASE_URL}/resume/`, lastModified: time },
    { url: `${BASE_URL}/portfolio/`, lastModified: time },
    { url: `${BASE_URL}/blog/`, lastModified: time },

    // all blogs
    ...getBlogs()
      .filter((blog) => !blog.link)
      .map((blog) => {
        return { url: `${BASE_URL}/blog/${blog.id}/`, lastModified: time };
      }),
  ];
};

export default sitemap;

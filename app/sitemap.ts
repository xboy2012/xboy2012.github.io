import type { MetadataRoute } from 'next';
import { getValidBlogIdsForPath } from '../src/utils/getValidBlogIdsForPath';

const BASE_URL = 'https://xboy2012.github.io';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const blogIds = Array.from(getValidBlogIdsForPath());

  // TODO: just refresh lastModified for every build
  const time = new Date();

  return [
    { url: `${BASE_URL}/`, lastModified: time },
    { url: `${BASE_URL}/resume/`, lastModified: time },
    { url: `${BASE_URL}/portfolio/`, lastModified: time },
    { url: `${BASE_URL}/blog/`, lastModified: time },

    // all blogs
    ...blogIds.map((blogId) => {
      return { url: `${BASE_URL}/blog/${blogId}/`, lastModified: time };
    }),
  ];
};

export default sitemap;

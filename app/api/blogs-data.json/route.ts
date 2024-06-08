import { getBlogs } from '../../../src/blogs';
import { getFullUrl } from '../../../src/utils/getFullUrl';
import { outputJSON } from '../../../src/utils/api/outputJSON';
import type { BlogData } from '../../../src/types';

export const GET = async () => {
  const blogs = getBlogs();
  const result: BlogData[] = blogs.map((blog) => {
    const image = getFullUrl(blog.image);
    const link = blog.link || getFullUrl(`/blog/${blog.id}/`);
    return { ...blog, image, link };
  });
  return outputJSON(result);
};

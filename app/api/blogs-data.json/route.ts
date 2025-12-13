import { getBlogs } from '../../../src/blogs/getBlogs';
import { getFullUrl } from '../../../src/utils/getFullUrl';
import { outputJSON } from '../../../src/utils/api/outputJSON';
import type { BlogData, JsonSerializable } from '../../../src/types';

export const dynamic = 'force-static';

export const GET = async () => {
  const blogs = await getBlogs();
  const result: BlogData[] = blogs.map((blog) => {
    const image = getFullUrl(blog.image);
    const link = blog.link || getFullUrl(`/blog/${blog.id}/`);
    return { ...blog, image, link };
  }) satisfies JsonSerializable;
  return outputJSON(result as unknown as JsonSerializable);
};

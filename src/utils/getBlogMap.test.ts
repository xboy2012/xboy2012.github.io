import { getBlogMap } from './getBlogMap';
import { getBlogs } from '../blogs/getBlogs';

describe('getBlogMap test', () => {
  test('should return a map of blog data', async () => {
    const blogMap = await getBlogMap();
    const blogs = await getBlogs();

    // Ensure that each blog in the 'blogs' array is present in the map
    for (const blog of blogs) {
      expect(blogMap.has(blog.id)).toBe(true);

      // Ensure that the value associated with each blog ID is the same as the blog object
      expect(blogMap.get(blog.id)).toEqual(blog);
    }
  });

  test('should return the same promise on subsequent calls', () => {
    const blogMap1 = getBlogMap();
    const blogMap2 = getBlogMap();

    // Ensure that the same map instance is returned on subsequent calls
    expect(blogMap1).toBe(blogMap2);
  });
});

import { getBlogMap } from './getBlogMap';
import { blogs } from '../blogs';

describe('getBlogMap', () => {
  test('should return a map of blog data', () => {
    const blogMap = getBlogMap();

    // Ensure that the returned value is a Map
    expect(blogMap).toBeInstanceOf(Map);

    // Ensure that each blog in the 'blogs' array is present in the map
    blogs.forEach((blog) => {
      expect(blogMap.has(blog.id)).toBe(true);

      // Ensure that the value associated with each blog ID is the same as the blog object
      expect(blogMap.get(blog.id)).toEqual(blog);
    });
  });

  test('should return the same map instance on subsequent calls', () => {
    const blogMap1 = getBlogMap();
    const blogMap2 = getBlogMap();

    // Ensure that the same map instance is returned on subsequent calls
    expect(blogMap1).toBe(blogMap2);
  });
});

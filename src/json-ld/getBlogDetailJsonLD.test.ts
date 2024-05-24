import { getBlogDetailJsonLD } from './getBlogDetailJsonLD';
import { getBlogs } from '../blogs';

describe('JsonLD test', () => {
  test('should return as expected', () => {
    const blog = getBlogs().find((blog) => !blog.link)!;
    const blogId = blog.id;
    const result1 = getBlogDetailJsonLD(blogId);
    const result2 = getBlogDetailJsonLD(blogId);
    expect(result1).toBe(result2);
    expect(result1).toBeTruthy();
  });

  test('invalid blogId', () => {
    const result = getBlogDetailJsonLD('invalid-blog-id');
    expect(result).toBeUndefined();
  });
});

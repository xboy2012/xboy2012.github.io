import { getBlogDetailJsonLD } from './getBlogDetailJsonLD';
import { getBlogs } from '../blogs/getBlogs';

describe('JsonLD test', () => {
  it('should return as expected', async () => {
    const blogs = await getBlogs();
    const blog = blogs.find((blog) => !blog.link)!;
    const result1 = getBlogDetailJsonLD(blog);
    const result2 = getBlogDetailJsonLD(blog);
    expect(result1).toBe(result2);
    expect(result1).toBeTruthy();
  });
});

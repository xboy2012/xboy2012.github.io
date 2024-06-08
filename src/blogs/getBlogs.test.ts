import { getBlogs } from './getBlogs';

describe('getBlogs should work as expected', () => {
  test('should reuse the same promise', async () => {
    const promise1 = getBlogs();
    const promise2 = getBlogs();
    expect(promise1).toBe(promise2);
  });

  test('should contain image', async () => {
    const blogs = await getBlogs();
    const emptyImageBlogs = blogs.filter((blog) => !blog.image);
    expect(emptyImageBlogs).toHaveLength(0);
  });
});

import { getProjects } from './getProjects';

describe('getProjects should work as expected', () => {
  test('should reuse the same promise', async () => {
    const promise1 = getProjects();
    const promise2 = getProjects();
    expect(promise1).toBe(promise2);
  });

  test('should contain image', async () => {
    const blogs = await getProjects();
    const emptyImageBlogs = blogs.filter((project) => !project.image);
    expect(emptyImageBlogs).toHaveLength(0);
  });
});

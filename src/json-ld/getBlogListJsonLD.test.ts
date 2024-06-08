import { getBlogListJsonLD } from './getBlogListJsonLD';
import { getBlogs } from '../blogs/getBlogs';

describe('JsonLD test', () => {
  test('should return as expected', async () => {
    const blogs = await getBlogs();
    const result = getBlogListJsonLD(blogs);
    expect(result).toBeTruthy();
  });
});

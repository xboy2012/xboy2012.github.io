import { getBlogs } from '../blogs/getBlogs';
import { getMetaByBlogId } from './getMetaByBlogId';

describe('getMetaByBlogId', () => {
  test('should return meta data for a valid blog ID', async () => {
    const blogs = await getBlogs();
    const validBlogId = blogs[0].id; // Assuming at least one blog exists
    const metaData = await getMetaByBlogId(validBlogId);

    // Ensure that meta data is returned for a valid blog ID
    expect(metaData).toBeDefined();

    // Ensure that the returned data is correct
    expect(metaData).toEqual(blogs.find((blog) => blog.id === validBlogId));
  });

  test('should return undefined for an invalid blog ID', async () => {
    const invalidBlogId = 'invalid_id';
    const metaData = await getMetaByBlogId(invalidBlogId);

    // Ensure that undefined is returned for an invalid blog ID
    expect(metaData).toBeUndefined();
  });
});

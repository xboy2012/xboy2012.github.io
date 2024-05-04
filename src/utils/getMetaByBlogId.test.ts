import { getMetaByBlogId } from './getMetaByBlogId';
import { blogs } from '../blogs';

describe('getMetaByBlogId', () => {
  test('should return meta data for a valid blog ID', () => {
    const validBlogId = blogs[0].id; // Assuming at least one blog exists
    const metaData = getMetaByBlogId(validBlogId);

    // Ensure that meta data is returned for a valid blog ID
    expect(metaData).toBeDefined();

    // Ensure that the returned data is correct
    expect(metaData).toEqual(blogs.find((blog) => blog.id === validBlogId));
  });

  test('should return undefined for an invalid blog ID', () => {
    const invalidBlogId = 'invalid_id';
    const metaData = getMetaByBlogId(invalidBlogId);

    // Ensure that undefined is returned for an invalid blog ID
    expect(metaData).toBeUndefined();
  });
});

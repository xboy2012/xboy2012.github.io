import { isPageRscPath } from './isPageRscPath';
import { getValidBlogIdsForPath } from './getValidBlogIdsForPath';

describe('isPageRscPath() should work as expected', () => {
  test('valid cases', () => {
    expect(isPageRscPath('/index.txt')).toBe(true);
    expect(isPageRscPath('/resume/index.txt')).toBe(true);
    expect(isPageRscPath('/portfolio/index.txt')).toBe(true);
    expect(isPageRscPath('/blog/index.txt')).toBe(true);
  });

  test('/blog/:blogId', () => {
    const blogIds = getValidBlogIdsForPath();
    for (const blogId of blogIds) {
      expect(isPageRscPath(`/blog/${blogId}/index.txt`)).toBe(true);
    }

    const invalidBlogId = 'invalid-blog-id-not-exist';
    expect(isPageRscPath(`/blog/${invalidBlogId}/index.txt`)).toBe(false);
  });

  test('invalid cases', () => {
    const hash = Math.random().toString(36).substring(2);
    expect(isPageRscPath(`/_next/static/media/img.${hash}.jpg`)).toBe(false);
    expect(isPageRscPath('/')).toBe(false);
    expect(isPageRscPath('/resume')).toBe(false);
    expect(isPageRscPath('/resume/')).toBe(false);
    expect(isPageRscPath('/portfolio')).toBe(false);
    expect(isPageRscPath('/portfolio/')).toBe(false);
    expect(isPageRscPath('/blog')).toBe(false);
    expect(isPageRscPath('/blog/')).toBe(false);
    expect(isPageRscPath('/blog/invalid')).toBe(false);
    expect(isPageRscPath('/blog/invalid/')).toBe(false);
    expect(isPageRscPath('/blog/invalid/index.txt')).toBe(false);
    expect(isPageRscPath('/blog/invalid/invalid/index.txt')).toBe(false);
    expect(isPageRscPath('/invalid/index.txt')).toBe(false);
    expect(isPageRscPath('/favicon.ico')).toBe(false);
    expect(isPageRscPath('/manifest.webmanifest')).toBe(false);
    expect(isPageRscPath('/serviceWorker.js')).toBe(false);
  });
});

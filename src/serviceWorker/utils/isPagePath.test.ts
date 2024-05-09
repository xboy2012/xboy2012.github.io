import { isPagePath } from './isPagePath';
import { getValidBlogIdsForPath } from '../../utils/getValidBlogIdsForPath';

describe('isPagePath() should work as expected', () => {
  beforeAll(() => {
    // @ts-expect-error mock inject value
    global.PRE_BUILT_BLOG_IDS_FOR_PATH = Array.from(getValidBlogIdsForPath());
  });

  test('/', () => {
    expect(isPagePath('/')).toBe(true);
    expect(isPagePath('/index')).toBe(true);
    expect(isPagePath('/index.html')).toBe(true);
  });

  test('/resume', () => {
    expect(isPagePath('/resume')).toBe(true);
    expect(isPagePath('/resume/')).toBe(true);
    expect(isPagePath('/resume/index')).toBe(true);
    expect(isPagePath('/resume/index.html')).toBe(true);
  });

  test('/portfolio', () => {
    expect(isPagePath('/portfolio')).toBe(true);
    expect(isPagePath('/portfolio/')).toBe(true);
    expect(isPagePath('/portfolio/index')).toBe(true);
    expect(isPagePath('/portfolio/index.html')).toBe(true);
  });

  test('/blog', () => {
    expect(isPagePath('/blog')).toBe(true);
    expect(isPagePath('/blog/')).toBe(true);
    expect(isPagePath('/blog/index')).toBe(true);
    expect(isPagePath('/blog/index.html')).toBe(true);
  });

  test('/blog/:blogId', () => {
    const blogIds = getValidBlogIdsForPath();
    for (const blogId of blogIds) {
      expect(isPagePath(`/blog/${blogId}`)).toBe(true);
      expect(isPagePath(`/blog/${blogId}/index`)).toBe(true);
      expect(isPagePath(`/blog/${blogId}/index.html`)).toBe(true);
      expect(isPagePath(`/blog/${blogId}/invalid`)).toBe(false);
    }

    const invalidBlogId = 'invalid-blog-id-not-exist';
    expect(isPagePath(`/blog/${invalidBlogId}`)).toBe(false);
    expect(isPagePath(`/blog/${invalidBlogId}/index`)).toBe(false);
    expect(isPagePath(`/blog/${invalidBlogId}/index.html`)).toBe(false);
    expect(isPagePath(`/blog/${invalidBlogId}/invalid`)).toBe(false);
  });

  test('other', () => {
    const hash = Math.random().toString(36).substring(2);
    expect(isPagePath(`/_next/static/media/img.${hash}.jpg`)).toBe(false);
    expect(isPagePath('/favicon.ico')).toBe(false);
    expect(isPagePath('/manifest.webmanifest')).toBe(false);
    expect(isPagePath('/serviceWorker.js')).toBe(false);
    expect(isPagePath('/index.txt')).toBe(false);
    expect(isPagePath('/resume/index.txt')).toBe(false);
    expect(isPagePath('/portfolio/index.txt')).toBe(false);
    expect(isPagePath('/blog/index.txt')).toBe(false);
    expect(isPagePath('/invalid-path')).toBe(false);
  });
});

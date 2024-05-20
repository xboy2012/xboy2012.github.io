import { isPagePath } from './isPagePath';

describe('isPagePath() should work as expected', () => {
  beforeAll(() => {
    // @ts-expect-error mock inject value
    global.HASH_INFO = [
      [
        ['/', 'aaa', 'bbb'],
        ['/a/', 'ddd', 'eee'],
      ],
      [['/favicon.ico', 'ccc']],
    ];
  });

  test('whitelist page paths', () => {
    expect(isPagePath('/')).toBe(true);
    expect(isPagePath('/index')).toBe(true);
    expect(isPagePath('/index.html')).toBe(true);
    expect(isPagePath('/a')).toBe(true);
    expect(isPagePath('/a/')).toBe(true);
    expect(isPagePath('/a/index')).toBe(true);
    expect(isPagePath('/a/index.html')).toBe(true);
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

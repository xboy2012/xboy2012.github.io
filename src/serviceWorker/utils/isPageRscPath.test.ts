import { isPageRscPath } from './isPageRscPath';

describe('isPageRscPath() should work as expected', () => {
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

  test('valid cases', () => {
    expect(isPageRscPath('/index.txt')).toBe(true);
    expect(isPageRscPath('/a/index.txt')).toBe(true);
  });

  test('invalid cases', () => {
    const hash = Math.random().toString(36).substring(2);
    expect(isPageRscPath(`/_next/static/media/img.${hash}.jpg`)).toBe(false);
    expect(isPageRscPath('/')).toBe(false);
    expect(isPageRscPath('/invalid')).toBe(false);
    expect(isPageRscPath('/invalid/index.txt')).toBe(false);
    expect(isPageRscPath('/favicon.ico')).toBe(false);
    expect(isPageRscPath('/manifest.webmanifest')).toBe(false);
    expect(isPageRscPath('/serviceWorker.js')).toBe(false);
  });
});

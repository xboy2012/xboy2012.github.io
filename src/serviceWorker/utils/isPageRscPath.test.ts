import { isPageRscPath } from './isPageRscPath';

describe('isPageRscPath() should work as expected', () => {
  test('valid cases', () => {
    expect(isPageRscPath('/index.txt')).toBe(true);
    expect(isPageRscPath('/resume/index.txt')).toBe(true);
    expect(isPageRscPath('/portfolio/index.txt')).toBe(true);
    expect(isPageRscPath('/blog/index.txt')).toBe(true);
  });

  test('invalid cases', () => {
    const hash = Math.random().toString(36).substring(2);
    expect(isPageRscPath(`/_next/static/media/img.${hash}.jpg`)).toBe(false);
    expect(isPageRscPath('/')).toBe(false);
    expect(isPageRscPath('/resume')).toBe(false);
    expect(isPageRscPath('/portfolio')).toBe(false);
    expect(isPageRscPath('/blog')).toBe(false);
    expect(isPageRscPath('/favicon.ico')).toBe(false);
    expect(isPageRscPath('/manifest.webmanifest')).toBe(false);
    expect(isPageRscPath('/serviceWorker.js')).toBe(false);
  });
});

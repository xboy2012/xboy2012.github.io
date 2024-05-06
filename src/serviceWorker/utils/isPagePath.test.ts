import { isPagePath } from './isPagePath';

describe('isPagePath() should work as expected', () => {
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
  });
});

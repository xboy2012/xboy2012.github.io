import { isSamePath } from './isSamePath';

describe('isSamePath', () => {
  test('should return true for identical paths', () => {
    expect(isSamePath('/resume', '/resume')).toBe(true);
    expect(isSamePath('/portfolio', '/portfolio')).toBe(true);
    expect(isSamePath('/blog', '/blog')).toBe(true);
  });

  test('should return true for root path and common variants', () => {
    expect(isSamePath('/', '/')).toBe(true);
    expect(isSamePath('/', '/index')).toBe(true);
    expect(isSamePath('/', '/index.html')).toBe(true);
  });

  test('should return true for paths with trailing slash', () => {
    expect(isSamePath('/resume', '/resume/')).toBe(true);
  });

  test('should return true for paths with .html extension', () => {
    expect(isSamePath('/blog', '/blog/index.html')).toBe(true);
  });

  test('should return false for different paths', () => {
    expect(isSamePath('/resume', '/portfolio')).toBe(false);
    expect(isSamePath('/resume', '/blog/post1')).toBe(false);
    expect(isSamePath('/blog/post1', '/blog/post2')).toBe(false);
  });
});

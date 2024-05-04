import { isSamePath } from './isSamePath';

describe('isSamePath', () => {
  test('should return true for identical paths', () => {
    expect(isSamePath('/home', '/home')).toBe(true);
    expect(isSamePath('/about', '/about')).toBe(true);
    expect(isSamePath('/contact', '/contact')).toBe(true);
  });

  test('should return true for root path and common variants', () => {
    expect(isSamePath('/', '/')).toBe(true);
    expect(isSamePath('/', '/index')).toBe(true);
    expect(isSamePath('/', '/index.html')).toBe(true);
  });

  test('should return true for paths with trailing slash', () => {
    expect(isSamePath('/products', '/products/')).toBe(true);
  });

  test('should return true for paths with .html extension', () => {
    expect(isSamePath('/blog/post1', '/blog/post1.html')).toBe(true);
    expect(isSamePath('/blog/post2', '/blog/post2/index.html')).toBe(true);
  });

  test('should return false for different paths', () => {
    expect(isSamePath('/home', '/about')).toBe(false);
    expect(isSamePath('/products', '/products/category')).toBe(false);
    expect(isSamePath('/blog', '/blogs')).toBe(false);
  });
});

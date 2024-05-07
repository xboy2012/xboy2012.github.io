import { getRscPath } from './getRscPath';

describe('getRscPath() should work as expected', () => {
  test('root path "/"', () => {
    expect(getRscPath('/')).toBe('/index.txt');
  });

  test('non-route paths', () => {
    const hash = Math.random().toString(36).substring(2);
    expect(getRscPath('/resume')).toBe('/resume/index.txt');
    expect(getRscPath('/portfolio')).toBe('/portfolio/index.txt');
    expect(getRscPath('/blog')).toBe('/blog/index.txt');
    expect(getRscPath(`/blog/${hash}`)).toBe(`/blog/${hash}/index.txt`);
  });
});

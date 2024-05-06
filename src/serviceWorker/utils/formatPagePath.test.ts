import { formatPagePath } from './formatPagePath';

describe('formatPagePath() should work as expected', () => {
  test('/', () => {
    const expected = '/';
    expect(formatPagePath('/')).toBe(expected);
    expect(formatPagePath('/index')).toBe(expected);
    expect(formatPagePath('/index.html')).toBe(expected);
  });

  test('/resume', () => {
    const expected = '/resume/';
    expect(formatPagePath('/resume')).toBe(expected);
    expect(formatPagePath('/resume/')).toBe(expected);
    expect(formatPagePath('/resume/index')).toBe(expected);
    expect(formatPagePath('/resume/index.html')).toBe(expected);
  });

  test('/portfolio', () => {
    const expected = '/portfolio/';
    expect(formatPagePath('/portfolio')).toBe(expected);
    expect(formatPagePath('/portfolio/')).toBe(expected);
    expect(formatPagePath('/portfolio/index')).toBe(expected);
    expect(formatPagePath('/portfolio/index.html')).toBe(expected);
  });

  test('/blog', () => {
    const expected = '/blog/';
    expect(formatPagePath('/blog')).toBe(expected);
    expect(formatPagePath('/blog/')).toBe(expected);
    expect(formatPagePath('/blog/index')).toBe(expected);
    expect(formatPagePath('/blog/index.html')).toBe(expected);
  });
});

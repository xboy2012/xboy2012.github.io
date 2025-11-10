import src from './getImageUrl';

describe('getImageUrl() should work as expected', () => {
  it('falsy value ""', () => {
    expect(src('')).toBe('');
  });

  for (const value of [null, undefined, true, false, NaN, 0, 100]) {
    it(`falsy value ${value}`, () => {
      expect(src(value)).toBe('');
    });
  }

  it('default export falsy value {}', () => {
    expect(src({ default: {} })).toBe('');
  });

  it('default export falsy value ""', () => {
    expect(src({ default: '' })).toBe('');
  });

  for (const value of [null, undefined, true, false, NaN, 0, 100]) {
    it(`default export falsy value ${value}`, () => {
      expect(src({ default: value })).toBe('');
    });
  }

  const hash = Math.random().toString(36).substring(2);
  const url = `/foo/bar/img-${hash}.jpg`;

  it('valid case: #url', () => {
    expect(src(url)).toBe(url);
  });

  it('valid case: { default: #url }', () => {
    expect(src({ default: url })).toEqual(url);
  });

  it('valid case: { default: { src: #url } }', () => {
    expect(src({ default: { src: url } })).toEqual(url);
  });
});

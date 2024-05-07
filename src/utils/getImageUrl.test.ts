import src from './getImageUrl';

describe('getImageUrl() should work as expected', () => {
  test('empty or falsy values', () => {
    expect(src('')).toEqual('');
    expect(src(null)).toEqual('');
    expect(src(undefined)).toEqual('');
    expect(src(true)).toEqual('');
    expect(src(false)).toEqual('');
    expect(src(NaN)).toEqual('');
    expect(src(0)).toEqual('');
    expect(src(100)).toEqual('');
  });

  test('default export falsy values', () => {
    expect(src({ default: {} })).toEqual('');
    expect(src({ default: '' })).toEqual('');
    expect(src({ default: null })).toEqual('');
    expect(src({ default: undefined })).toEqual('');
    expect(src({ default: true })).toEqual('');
    expect(src({ default: false })).toEqual('');
    expect(src({ default: NaN })).toEqual('');
    expect(src({ default: 0 })).toEqual('');
    expect(src({ default: 100 })).toEqual('');
  });

  test('valid cases', () => {
    const hash = Math.random().toString(36).substring(2);
    const url = `/foo/bar/img-${hash}.jpg`;

    expect(src(url)).toBe(url);
    expect(src({ default: url })).toEqual(url);
    expect(src({ default: { src: url } })).toEqual(url);
  });
});

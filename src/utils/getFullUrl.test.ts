import { getFullUrl } from './getFullUrl';

describe('getFullUrl test', () => {
  test('starts with https://', () => {
    const fileName = Math.random().toString(36).substring(2);
    const url = `https://example.com/foo/${fileName}`;
    expect(getFullUrl(url)).toBe(url);
  });

  test('starts with /', () => {
    const fileName = Math.random().toString(36).substring(2);
    const path = `/foo/${fileName}`;
    const expectedUrl = `https://xboy2012.github.io${path}`;
    expect(getFullUrl(path)).toBe(expectedUrl);
  });

  test('no slash', () => {
    const fileName = Math.random().toString(36).substring(2);
    const segment = `foo/${fileName}`;
    const expectedUrl = `https://xboy2012.github.io/${segment}`;
    expect(getFullUrl(segment)).toEqual(expectedUrl);
  });
});

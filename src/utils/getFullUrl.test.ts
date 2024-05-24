import { getFullUrl } from './getFullUrl';
import { BASE_URL } from '../config/app';

describe('getFullUrl test', () => {
  test('starts with https://', () => {
    const fileName = Math.random().toString(36).substring(2);
    const url = `https://example.com/foo/${fileName}`;
    expect(getFullUrl(url)).toBe(url);
  });

  test('starts with /', () => {
    const fileName = Math.random().toString(36).substring(2);
    const path = `/foo/${fileName}`;
    const expectedUrl = `${BASE_URL}${path}`;
    expect(getFullUrl(path)).toBe(expectedUrl);
  });

  test('no slash', () => {
    const fileName = Math.random().toString(36).substring(2);
    const segment = `foo/${fileName}`;
    const expectedUrl = `${BASE_URL}/${segment}`;
    expect(getFullUrl(segment)).toEqual(expectedUrl);
  });
});

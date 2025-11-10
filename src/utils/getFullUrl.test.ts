import { getFullUrl } from './getFullUrl';
import { BASE_URL } from '../config/app';

describe('getFullUrl test', () => {
  it('starts with https://', () => {
    const fileName = Math.random().toString(36).substring(2);
    const url = `https://example.com/foo/${fileName}`;
    expect(getFullUrl(url)).toBe(url);
  });

  it('starts with /', () => {
    const fileName = Math.random().toString(36).substring(2);
    const path = `/foo/${fileName}`;
    const expectedUrl = `${BASE_URL}${path}`;
    expect(getFullUrl(path)).toBe(expectedUrl);
  });

  it('no slash', () => {
    const fileName = Math.random().toString(36).substring(2);
    const segment = `foo/${fileName}`;
    const expectedUrl = `${BASE_URL}/${segment}`;
    expect(getFullUrl(segment)).toEqual(expectedUrl);
  });
});

import { getBuyMeACoffeeUrl } from './getBuyMeACoffeeUrl';

describe('getBuyMeACoffeeUrl', () => {
  const isValidUrl = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === 'https:';
    } catch {
      return false;
    }
  };

  test('getBuyMeACoffeeUrl', () => {
    const url = getBuyMeACoffeeUrl('test');
    expect(isValidUrl(url)).toBe(true);
  });
});

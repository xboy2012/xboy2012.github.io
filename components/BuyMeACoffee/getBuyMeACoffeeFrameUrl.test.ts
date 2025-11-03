import { getBuyMeACoffeeFrameUrl } from './getBuyMeACoffeeFrameUrl';

describe('getBuyMeACoffeeFrameUrl', () => {
  const isValidUrl = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === 'https:';
    } catch {
      return false;
    }
  };

  test('getBuyMeACoffeeFrameUrl', () => {
    const url = getBuyMeACoffeeFrameUrl({ account: 'test', color: '#000000' });
    expect(isValidUrl(url)).toBe(true);
  });
});

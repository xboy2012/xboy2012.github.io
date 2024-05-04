import { getGoogleMapUrl } from './getGoogleMapUrl';

describe('getGoogleMapUrl', () => {
  test('should return Google Maps URL with location query', () => {
    const location = 'New York';
    const expectedUrl =
      'https://www.google.com/maps/search/?api=1&query=New+York';

    const url = getGoogleMapUrl(location);
    expect(url).toBe(expectedUrl);
  });

  test('should handle empty location correctly', () => {
    const location = '';
    const expectedUrl = '';

    const url = getGoogleMapUrl(location);
    expect(url).toBe(expectedUrl);
  });
});

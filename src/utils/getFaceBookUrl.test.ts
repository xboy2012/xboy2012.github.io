import { getFaceBookUrl } from './getFaceBookUrl';

describe('getFaceBookUrl', () => {
  test('should return empty', () => {
    expect(getFaceBookUrl('')).toBe('');
    expect(getFaceBookUrl(null)).toBe('');
    expect(getFaceBookUrl(undefined)).toBe('');
  });

  test('should return correctly', () => {
    expect(getFaceBookUrl('XYZ')).toBe('https://www.facebook.com/XYZ');
  });
});

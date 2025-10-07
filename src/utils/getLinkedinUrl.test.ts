import { getLinkedinUrl } from './getLinkedinUrl';

describe('getLinkedinUrl', () => {
  test('should return empty', () => {
    expect(getLinkedinUrl('')).toBe('');
    expect(getLinkedinUrl(null)).toBe('');
    expect(getLinkedinUrl(undefined)).toBe('');
  });

  test('should return correctly', () => {
    expect(getLinkedinUrl('XYZ')).toBe('https://linkedin.com/XYZ');
  });
});

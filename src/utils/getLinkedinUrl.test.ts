import { getLinkedinUrl } from './getLinkedinUrl';

describe('getLinkedinUrl', () => {
  it('should return empty', () => {
    expect(getLinkedinUrl('')).toBe('');
    expect(getLinkedinUrl(null)).toBe('');
    expect(getLinkedinUrl(undefined)).toBe('');
  });

  it('should return correctly', () => {
    expect(getLinkedinUrl('XYZ')).toBe('https://linkedin.com/XYZ');
  });
});

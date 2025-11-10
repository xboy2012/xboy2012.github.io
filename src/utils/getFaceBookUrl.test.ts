import { getFaceBookUrl } from './getFaceBookUrl';

describe('getFaceBookUrl', () => {
  it('should return empty', () => {
    expect(getFaceBookUrl('')).toBe('');
    expect(getFaceBookUrl(null)).toBe('');
    expect(getFaceBookUrl(undefined)).toBe('');
  });

  it('should return correctly', () => {
    expect(getFaceBookUrl('XYZ')).toBe('https://www.facebook.com/XYZ');
  });
});

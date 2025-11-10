import { getTwitterUrl } from './getTwitterUrl';

describe('getTwitterUrl', () => {
  it('should return empty', () => {
    expect(getTwitterUrl('')).toBe('');
    expect(getTwitterUrl(null)).toBe('');
    expect(getTwitterUrl(undefined)).toBe('');
  });

  it('should return correctly', () => {
    expect(getTwitterUrl('XYZ')).toBe('https://x.com/XYZ');
  });
});

import { getTwitterUrl } from './getTwitterUrl';

describe('getTwitterUrl', () => {
  test('should return empty', () => {
    expect(getTwitterUrl('')).toBe('');
    expect(getTwitterUrl(null)).toBe('');
    expect(getTwitterUrl(undefined)).toBe('');
  });

  test('should return correctly', () => {
    expect(getTwitterUrl('XYZ')).toBe('https://x.com/XYZ');
  });
});

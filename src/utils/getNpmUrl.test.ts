import { getNpmUrl } from './getNpmUrl';

describe('getNpmUrl', () => {
  test('should return empty', () => {
    expect(getNpmUrl('')).toBe('');
    expect(getNpmUrl(null)).toBe('');
    expect(getNpmUrl(undefined)).toBe('');
  });

  test('should return correctly', () => {
    expect(getNpmUrl('XYZ')).toBe('https://www.npmjs.com/~XYZ');
  });
});

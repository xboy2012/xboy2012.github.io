import { getNpmUrl } from './getNpmUrl';

describe('getNpmUrl', () => {
  it('should return empty', () => {
    expect(getNpmUrl('')).toBe('');
    expect(getNpmUrl(null)).toBe('');
    expect(getNpmUrl(undefined)).toBe('');
  });

  it('should return correctly', () => {
    expect(getNpmUrl('XYZ')).toBe('https://www.npmjs.com/~XYZ');
  });
});

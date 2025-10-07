import { getGitHubUrl } from './getGitHubUrl';

describe('getGitHubUrl', () => {
  test('should return empty', () => {
    expect(getGitHubUrl('')).toBe('');
    expect(getGitHubUrl(null)).toBe('');
    expect(getGitHubUrl(undefined)).toBe('');
  });

  test('should return correctly', () => {
    expect(getGitHubUrl('XYZ')).toBe('https://github.com/XYZ');
  });
});

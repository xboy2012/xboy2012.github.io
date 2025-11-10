import { getGitHubUrl } from './getGitHubUrl';

describe('getGitHubUrl', () => {
  it('should return empty', () => {
    expect(getGitHubUrl('')).toBe('');
    expect(getGitHubUrl(null)).toBe('');
    expect(getGitHubUrl(undefined)).toBe('');
  });

  it('should return correctly', () => {
    expect(getGitHubUrl('XYZ')).toBe('https://github.com/XYZ');
  });
});

import { isUserAgentMobile } from './isUserAgentMobile';

describe('isUserAgentMobile', () => {
  it('should return false when userAgent is undefined', () => {
    expect(isUserAgentMobile(undefined)).toBe(false);
  });

  it('should return false when userAgent is null', () => {
    expect(isUserAgentMobile(null)).toBe(false);
  });

  it('should return false when userAgent is empty string', () => {
    expect(isUserAgentMobile('')).toBe(false);
  });

  it('should return true for iPhone UA', () => {
    const ua =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1';
    expect(isUserAgentMobile(ua)).toBe(true);
  });

  it('should return true for Android UA', () => {
    const ua =
      'Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36';
    expect(isUserAgentMobile(ua)).toBe(true);
  });

  it('should return false for desktop UA', () => {
    const ua =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36';
    expect(isUserAgentMobile(ua)).toBe(false);
  });

  it('should return true for iPad UA', () => {
    const ua =
      'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1';
    expect(isUserAgentMobile(ua)).toBe(true);
  });

  it('should be case insensitive', () => {
    const ua = 'mozilla/5.0 (iphone)';
    expect(isUserAgentMobile(ua)).toBe(true);
  });
});

import { isWindows } from './isWindows';

jest.mock('./singleton', () => ({
  singleton: (fn: () => unknown) => fn,
}));

describe('isWindows', () => {
  const originalPlatform = process.platform;
  const mockPlatform = (platform: typeof process.platform) => {
    Object.defineProperty(process, 'platform', { value: platform });
  };

  afterAll(() => {
    // reset process.platform to original value to avoid affecting other tests
    Object.defineProperty(process, 'platform', { value: originalPlatform });
  });

  it('should return true for windows', () => {
    mockPlatform('win32');
    expect(isWindows()).toBe(true);
  });

  it('should return false for MacOS', () => {
    mockPlatform('darwin');
    expect(isWindows()).toBe(false);
  });

  it('should return false for linux', () => {
    mockPlatform('linux');
    expect(isWindows()).toBe(false);
  });
});

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

  test('should return true for windows', () => {
    mockPlatform('win32');
    expect(isWindows()).toBe(true);
  });

  test('should return false for MacOS', () => {
    mockPlatform('darwin');
    expect(isWindows()).toBe(false);
  });

  test('should return false for linux', () => {
    mockPlatform('linux');
    expect(isWindows()).toBe(false);
  });
});

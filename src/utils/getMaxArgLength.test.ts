import { getMaxArgLength } from './getMaxArgLength';

describe('getMaxArgLength', () => {
  const originalPlatform = process.platform;
  const mockPlatform = (platform: typeof process.platform) => {
    Object.defineProperty(process, 'platform', { value: platform });
  };

  afterAll(() => {
    // reset process.platform to original value to avoid affecting other tests
    Object.defineProperty(process, 'platform', { value: originalPlatform });
  });

  const values: [typeof process.platform, number][] = [
    ['darwin', 262144],
    ['win32', 8191],
    ['linux', 131072],
  ];

  for (const [platform, length] of values) {
    it(`work as expected for '${platform}'`, () => {
      mockPlatform(platform);
      expect(getMaxArgLength()).toBe(length);
    });
  }
});

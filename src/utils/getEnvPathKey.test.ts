import { getEnvPathKey } from './getEnvPathKey';
import { isWindows } from './isWindows';
import { getProcessEnv } from './getProcessEnv';

jest.mock('./isWindows', () => ({
  isWindows: jest.fn(),
}));

jest.mock('./getProcessEnv', () => ({
  getProcessEnv: jest.fn(),
}));

jest.mock('./singleton', () => ({
  singleton: (fn: () => unknown) => fn,
}));

describe('getEnvPathKey', () => {
  let isWin = false;
  let env: Record<string, unknown>;
  beforeAll(() => {
    jest.mocked(isWindows).mockImplementation(() => isWin);
    jest
      .mocked(getProcessEnv)
      .mockImplementation(() => env as typeof process.env);
  });

  test('should return "PATH" for non-windows', () => {
    isWin = false;
    env = { PATH: 'fakePath' };
    expect(getEnvPathKey()).toBe('PATH');
  });

  test('should return case insensitive for windows', () => {
    isWin = true;
    env = { Path: 'fakePath' };
    expect(getEnvPathKey()).toBe('Path');
  });

  test('should return "PATH as fallback for windows', () => {
    isWin = true;
    env = {};
    expect(getEnvPathKey()).toBe('PATH');
  });
});

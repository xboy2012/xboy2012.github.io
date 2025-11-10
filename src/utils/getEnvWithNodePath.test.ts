import { delimiter, join } from 'node:path';
import { getEnvWithNodePath } from './getEnvWithNodePath';
import { getProcessEnv } from './getProcessEnv';

jest.mock('./getRootDir', () => ({
  getRootDir: () => '$ROOT$',
}));

jest.mock('./getEnvPathKey', () => ({
  getEnvPathKey: () => 'PATH',
}));

jest.mock('./getProcessEnv', () => ({
  getProcessEnv: jest.fn(),
}));

describe('getEnvWithNodePath', () => {
  let env: Record<string, unknown>;
  beforeAll(() => {
    jest
      .mocked(getProcessEnv)
      .mockImplementation(() => env as typeof process.env);
  });

  const binDir = join('$ROOT$', 'node_modules', '.bin');

  it('should add new PATH when there is no existing PATH', () => {
    env = {};
    const expectedResult = { PATH: binDir };

    expect(getEnvWithNodePath()).toEqual(expectedResult);
  });

  it('should prepend to existing PATH', () => {
    env = { PATH: 'other' };
    const expectedResult = { PATH: `${binDir}${delimiter}other` };
    expect(getEnvWithNodePath()).toEqual(expectedResult);
  });
});

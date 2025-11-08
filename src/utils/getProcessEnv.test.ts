import { getProcessEnv } from './getProcessEnv';

describe('getProcessEnv', () => {
  test('work as expected', () => {
    expect(getProcessEnv()).toBe(process.env);
  });
});

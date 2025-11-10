import { getProcessEnv } from './getProcessEnv';

describe('getProcessEnv', () => {
  it('work as expected', () => {
    expect(getProcessEnv()).toBe(process.env);
  });
});

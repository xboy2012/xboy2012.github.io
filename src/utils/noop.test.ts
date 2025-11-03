import { noop } from './noop';

describe('noop', () => {
  test('should return undefined', () => {
    expect(noop()).toBeUndefined();
  });
});

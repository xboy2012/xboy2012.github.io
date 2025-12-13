import { recordWithPrefix } from './recordWithPrefix';

describe('recordWithPrefix', () => {
  it('returns correct prefix', () => {
    const prefix = 'X';
    const record = {
      A: 1,
      B: 2,
    };
    const result = recordWithPrefix(record, prefix);
    expect(result).toEqual({
      'X/A': 1,
      'X/B': 2,
    });
  });
});

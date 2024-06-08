import { calculateDataHash } from './calculateDataHash';

describe('calculateDataHash test', () => {
  test('should return the same hash if contents are the same', () => {
    const rand = [Math.random(), Math.random()];
    const hash1 = calculateDataHash({ a: rand[0], b: rand[1] });
    expect(hash1).toHaveLength(8);
    const hash2 = calculateDataHash({ b: rand[1], a: rand[0] });
    expect(hash2).toHaveLength(8);
    expect(hash1).toBe(hash2);
  });

  test('should return different hashes if contents are different', () => {
    const hash1 = calculateDataHash({ a: 123 });
    expect(hash1).toHaveLength(8);
    const hash2 = calculateDataHash({ a: 456 });
    expect(hash2).toHaveLength(8);
    expect(hash1).not.toBe(hash2);
  });
});

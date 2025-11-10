import { delimiter } from 'node:path';
import { parseEnvPath } from './parseEnvPath';

describe('parseEnvPath', () => {
  test('should return empty array for ""', () => {
    expect(parseEnvPath('')).toEqual([]);
  });
  test('should return an empty array for null', () => {
    expect(parseEnvPath(null)).toEqual([]);
  });
  test('should return an empty array for undefined', () => {
    expect(parseEnvPath(undefined)).toEqual([]);
  });
  test('should trim values', () => {
    const path = ['a ', '', ' b', ' c '].join(delimiter);
    expect(parseEnvPath(path)).toEqual(['a', 'b', 'c']);
  });
  test('should deduplicate values', () => {
    const path = ['a', 'a', 'b', ' b', 'c'].join(delimiter);
    expect(parseEnvPath(path)).toEqual(['a', 'b', 'c']);
  });
});

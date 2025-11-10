import { delimiter } from 'node:path';
import { parseEnvPath } from './parseEnvPath';

describe('parseEnvPath', () => {
  it('should return empty array for ""', () => {
    expect(parseEnvPath('')).toEqual([]);
  });
  it('should return an empty array for null', () => {
    expect(parseEnvPath(null)).toEqual([]);
  });
  it('should return an empty array for undefined', () => {
    expect(parseEnvPath(undefined)).toEqual([]);
  });
  it('should trim values', () => {
    const path = ['a ', '', ' b', ' c '].join(delimiter);
    expect(parseEnvPath(path)).toEqual(['a', 'b', 'c']);
  });
  it('should deduplicate values', () => {
    const path = ['a', 'a', 'b', ' b', 'c'].join(delimiter);
    expect(parseEnvPath(path)).toEqual(['a', 'b', 'c']);
  });
});

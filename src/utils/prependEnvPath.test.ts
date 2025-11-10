import { delimiter } from 'node:path';
import { prependEnvPath } from './prependEnvPath';

describe('prependEnvPath', () => {
  it('should prepend new value', () => {
    const envPath = ['a', 'b', 'c'].join(delimiter);
    const path = 'd';
    const expectedResult = ['d', 'a', 'b', 'c'].join(delimiter);

    expect(prependEnvPath(envPath, path)).toBe(expectedResult);
  });

  it('should move existing value', () => {
    const envPath = ['a', 'b', 'c'].join(delimiter);
    const path = 'c';
    const expectedResult = ['c', 'a', 'b'].join(delimiter);

    expect(prependEnvPath(envPath, path)).toBe(expectedResult);
  });
});

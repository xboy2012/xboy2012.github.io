import { collectDuplicateValues } from './collectDuplicateValues';

describe('collectDuplicateValues', () => {
  it('return empty array', () => {
    expect(collectDuplicateValues([])).toEqual([]);
  });

  it('should return all duplicated values', () => {
    expect(collectDuplicateValues([1, 1, 2, 2, 3, 4, 4])).toEqual([1, 2, 4]);
  });

  it('result items should be distinct', () => {
    expect(collectDuplicateValues([1, 1, 1, 2, 3])).toEqual([1]);
  });

  it('should work for Set', () => {
    const set = new Set([1, 2, 3]);
    expect(collectDuplicateValues(set)).toEqual([]);
  });
});

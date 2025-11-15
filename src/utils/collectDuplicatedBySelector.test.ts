import { collectDuplicatedBySelector } from './collectDuplicatedBySelector';

describe('collectDuplicatedBySelector', () => {
  it('returns an empty array for no duplicates', () => {
    const array = [
      { id: 1, text: '1' },
      { id: 2, text: '2' },
    ];
    const duplicates = collectDuplicatedBySelector(array, (o) => o.id);
    expect(duplicates).toEqual([]);
  });

  it('returns duplicated items', () => {
    const array = [
      { id: 1, text: '1_1' },
      { id: 1, text: '1_2' },
      { id: 2, text: '2' },
      { id: 3, text: '3_1' },
      { id: 3, text: '3_2' },
      { id: 3, text: '3_3' },
    ];
    const duplicates = collectDuplicatedBySelector(array, (o) => o.id);
    expect(duplicates).toEqual([
      { id: 1, text: '1_1' },
      { id: 1, text: '1_2' },
      { id: 3, text: '3_1' },
      { id: 3, text: '3_2' },
      { id: 3, text: '3_3' },
    ]);
  });

  it('returns duplicated items for computed', () => {
    const array = [
      { id: 1, text: '1_1' },
      { id: 11, text: '1_2' },
      { id: 2, text: '2' },
      { id: 3, text: '3_1' },
      { id: 13, text: '3_2' },
      { id: 23, text: '3_3' },
    ];
    const duplicates = collectDuplicatedBySelector(array, (o) => o.id % 10);
    expect(duplicates).toEqual([
      { id: 1, text: '1_1' },
      { id: 11, text: '1_2' },
      { id: 3, text: '3_1' },
      { id: 13, text: '3_2' },
      { id: 23, text: '3_3' },
    ]);
  });
});

export const collectDuplicatedBySelector = <T, F>(
  array: readonly T[],
  selector: (item: T) => F,
): readonly T[] => {
  const map = new Map<F, T[]>();
  for (const item of array) {
    const mapKey = selector(item);
    let subArray = map.get(mapKey);
    if (!subArray) {
      subArray = [];
      map.set(mapKey, subArray);
    }
    subArray.push(item);
  }
  const result: T[] = [];
  for (const [, subArray] of map) {
    if (subArray.length > 1) {
      result.push(...subArray);
    }
  }
  return result;
};

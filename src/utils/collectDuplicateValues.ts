export const collectDuplicateValues = <T>(values: Iterable<T>): T[] => {
  const set = new Set<T>();
  const resultSet = new Set<T>();
  for (const value of values) {
    if (set.has(value)) {
      resultSet.add(value);
    } else {
      set.add(value);
    }
  }
  return [...resultSet];
};

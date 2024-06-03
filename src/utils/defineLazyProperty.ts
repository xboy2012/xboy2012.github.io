export const defineLazyProperty = <T, P extends keyof T>(
  obj: T,
  property: P,
  get: () => T[P],
) => {
  Object.defineProperty(obj, property, {
    get() {
      const value = get();
      delete obj[property];
      obj[property] = value;
      return value;
    },
    configurable: true,
    enumerable: true,
  });
};

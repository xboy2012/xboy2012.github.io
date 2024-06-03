import { defineLazyProperty } from './defineLazyProperty';

type Values<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof T]: T[K] extends () => any ? ReturnType<T[K]> : T[K];
};

export const defineLazyObject = <T>(obj: T): Values<T> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const keys = Object.keys(obj as any) as (keyof T)[];
  const result = {} as Values<T>;
  for (const key of keys) {
    const v = obj[key];
    if (typeof v === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      defineLazyProperty(result, key, v as any);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result[key] = v as any;
    }
  }

  return result;
};

import { defineLazyObject } from './defineLazyObject';

export const defineLazyArray = <T>(array: T[]) => {
  return array.map((item) => defineLazyObject(item));
};

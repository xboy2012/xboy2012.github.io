import type { JsonSerializable } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- type guard
const isArray = (value: unknown): value is readonly any[] | any[] => {
  return Array.isArray(value);
};

const replacer = (_key: string, value: JsonSerializable): JsonSerializable => {
  if (!value || typeof value !== 'object') {
    return value;
  }
  if (isArray(value)) {
    return value.map((v, index) => replacer(`${index}`, v));
  }

  const keys = Object.keys(value);
  keys.sort((a, b) => (a < b ? -1 : 1));

  const result: JsonSerializable = {};
  for (const key of keys) {
    result[key] = value[key] as JsonSerializable;
  }

  return result;
};

export const stableJsonStringify = (obj: JsonSerializable): string => {
  return JSON.stringify(obj, replacer, 2);
};

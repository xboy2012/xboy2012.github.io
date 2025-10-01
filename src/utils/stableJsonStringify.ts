import type { JsonSerializable } from '../types';

const replacer = (_key: string, value: JsonSerializable): JsonSerializable => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return value;
  }

  const keys = Object.keys(value);
  keys.sort((a, b) => (a < b ? -1 : 1));

  const result: JsonSerializable = {};
  for (const key of keys) {
    result[key] = value[key];
  }

  return result;
};

export const stableJsonStringify = (obj: JsonSerializable): string => {
  return JSON.stringify(obj, replacer, 2);
};

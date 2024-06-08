// eslint-disable-next-line @typescript-eslint/no-explicit-any
const replacer = (_: string, value: any) => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return value;
  }

  const keys = Object.keys(value);
  keys.sort((a, b) => (a < b ? -1 : 1));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = {};
  for (const key of keys) {
    result[key] = value[key];
  }

  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const stableJsonStringify = (obj: any): string => {
  return JSON.stringify(obj, replacer, 2);
};

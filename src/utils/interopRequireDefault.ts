type Interoped<T> = T extends null | undefined
  ? T
  : T extends { default: infer U }
    ? U
    : T extends { default?: infer U }
      ? U | undefined | Exclude<T, { default?: unknown }>
      : T;

export const interopRequireDefault = <T>(value: T): Interoped<T> => {
  if (!value || typeof value !== 'object') {
    return value as Interoped<T>;
  }
  if ('default' in value) {
    return value.default as Interoped<T>;
  }
  return ((value as unknown as { default?: unknown }).default ||
    value) as Interoped<T>;
};

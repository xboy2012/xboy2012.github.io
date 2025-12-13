export type WithPrefix<R extends Record<string, unknown>, P extends string> = {
  [K in keyof R as K extends string ? `${P}/${K}` : never]: R[K];
};

export const recordWithPrefix = <
  R extends Record<string, unknown>,
  P extends string,
>(
  rules: R,
  prefix: P,
): WithPrefix<R, P> => {
  const result: Record<string, R[keyof R]> = {};
  const keys = Object.keys(rules) as (keyof R & string)[];
  for (const key of keys) {
    result[`${prefix}/${key}`] = rules[key];
  }
  return result as WithPrefix<R, P>;
};

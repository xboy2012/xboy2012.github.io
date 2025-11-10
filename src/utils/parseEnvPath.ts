import { delimiter } from 'node:path';

export const parseEnvPath = (
  value: string | null | undefined,
): readonly string[] => {
  if (!value) {
    return [];
  }
  const set = new Set<string>();
  const result: string[] = [];
  const paths = value
    .split(delimiter)
    .map((path) => path.trim())
    .filter(Boolean);

  for (const path of paths) {
    if (!set.has(path)) {
      set.add(path);
      result.push(path);
    }
  }

  return result;
};

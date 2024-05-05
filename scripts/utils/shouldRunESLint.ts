import { getESLintInstance } from './getESLintInstance';

export const shouldRunESLint = async (file: string) => {
  const ignored = await getESLintInstance().isPathIgnored(file);
  return !ignored;
};

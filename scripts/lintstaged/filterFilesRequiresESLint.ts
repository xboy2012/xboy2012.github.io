import { ESLint } from 'eslint';

export const filterFilesRequiresESLint = async (
  files: string[],
): Promise<string[]> => {
  const eslint = new ESLint();
  const ignores = await Promise.all(
    files.map((file) => eslint.isPathIgnored(file)),
  );
  return files.filter((_, index) => !ignores[index]);
};

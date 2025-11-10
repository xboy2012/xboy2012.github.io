import { ESLint } from 'eslint';
import { singleton } from '../../src/utils/singleton';

const getESLint = singleton(() => new ESLint());

export const filterFilesRequiresESLint = async (
  files: readonly string[],
): Promise<string[]> => {
  const eslint = getESLint();
  const ignores = await Promise.all(
    files.map((file) => eslint.isPathIgnored(file)),
  );
  return files.filter((_, index) => !ignores[index]);
};

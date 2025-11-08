import { getFileInfo } from 'prettier';

export const filterFilesRequiresPrettier = async (
  files: readonly string[],
): Promise<string[]> => {
  const ignores = await Promise.all(
    files.map(async (file) => {
      const { ignored, inferredParser } = await getFileInfo(file);
      return ignored || !inferredParser;
    }),
  );
  return files.filter((_, index) => !ignores[index]);
};

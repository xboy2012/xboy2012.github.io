import { extname } from 'node:path';

export const filterFilesExceptExtensions = (
  files: string[],
  extensions: string[],
): string[] => {
  const extensionSet = new Set(extensions);

  return files.filter((file) => {
    // skipped files that already processed in other rules
    const extension = extname(file);
    return !extensionSet.has(extension);
  });
};

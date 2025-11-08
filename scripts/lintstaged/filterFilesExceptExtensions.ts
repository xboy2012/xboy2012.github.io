import { extname } from 'node:path';

export const filterFilesExceptExtensions = (
  files: readonly string[],
  extensionSet: ReadonlySet<string>,
): string[] => {
  return files.filter((file) => {
    // skipped files that already processed in other rules
    const extension = extname(file);
    return !extensionSet.has(extension);
  });
};

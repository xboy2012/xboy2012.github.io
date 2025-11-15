import { join, relative } from 'node:path';
import { execSync } from 'node:child_process';
import { getRootDir } from './getRootDir';

export const listGitIgnoredFiles = (absoluteDirPath: string): Set<string> => {
  const rootDir = getRootDir();
  const relativeDir = relative(rootDir, absoluteDirPath);

  const result = execSync(
    `git ls-files --others --ignored --exclude-standard "${relativeDir}"`,
    {
      cwd: rootDir,
      stdio: 'pipe',
    },
  ).toString();

  const relativeIgnoredFiles = result
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  const absoluteIgnoredFiles = relativeIgnoredFiles.map((file) =>
    join(rootDir, file),
  );

  return new Set(absoluteIgnoredFiles);
};

import type { Dirent } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { basename, extname, join, relative } from 'node:path';
import { getRootDir } from '../utils/getRootDir';
import { listGitIgnoredFiles } from '../utils/listGitIgnoredFiles';
import { collectDuplicatedBySelector } from '../utils/collectDuplicatedBySelector';

describe('images should follow conventions', () => {
  const rootDir = getRootDir();
  const imagesDir = join(rootDir, 'src', 'blogs', 'images');
  const validExtensions = new Set<string>(['.jpg']);
  const MAX_NAME_LENGTH = 16;

  let entries: Dirent[];
  beforeAll(async () => {
    const ignoredFiles = listGitIgnoredFiles(imagesDir);

    const allEntries = await readdir(imagesDir, {
      withFileTypes: true,
      recursive: true,
    });

    entries = allEntries.filter((entry) => {
      if (!entry.isFile()) {
        return false;
      }
      const { name, parentPath } = entry;
      const fullPath = join(parentPath, name);
      return !ignoredFiles.has(fullPath);
    });
  });

  const dump = (entry: Dirent): string => {
    const { name, parentPath } = entry;
    const fullPath = join(parentPath, name);
    const relativePath = relative(rootDir, fullPath);
    return relativePath;
  };
  const hasSubFolder = ({ parentPath }: Dirent): boolean =>
    parentPath !== imagesDir;
  const noSubFolder = (entry: Dirent): boolean => !hasSubFolder(entry);
  const extensionValid = ({ name }: Dirent): boolean =>
    validExtensions.has(extname(name));
  const extensionInvalid = (entry: Dirent): boolean => !extensionValid(entry);
  const hasUpperCase = ({ name }: Dirent): boolean =>
    name.toLowerCase() !== name;
  const hasLongName = ({ name }: Dirent): boolean =>
    basename(name, extname(name)).length >= MAX_NAME_LENGTH;

  it('should not contain subfolders', () => {
    const invalid = entries.filter(hasSubFolder).map(dump);
    expect(invalid).toHaveLength(0);
  });

  it('should not contain invalid image extensions', () => {
    const invalid = entries
      .filter(noSubFolder)
      .filter(extensionInvalid)
      .map(dump);
    expect(invalid).toHaveLength(0);
  });

  it('should not contain same image name with different extensions', () => {
    const invalid = collectDuplicatedBySelector(
      entries,
      ({ name }) => basename(name, extname(name)), // fileNameWithoutExtension
    ).map(dump);
    expect(invalid).toHaveLength(0);
  });

  it('should not contain upper-case image names', () => {
    const invalid = entries
      .filter(noSubFolder)
      .filter(extensionValid)
      .filter(hasUpperCase)
      .map(dump);
    expect(invalid).toHaveLength(0);
  });

  it(`Length of image name should be less than ${MAX_NAME_LENGTH}`, () => {
    const invalid = entries
      .filter(noSubFolder)
      .filter(extensionValid)
      .filter(hasLongName)
      .map(dump);
    expect(invalid).toHaveLength(0);
  });
});

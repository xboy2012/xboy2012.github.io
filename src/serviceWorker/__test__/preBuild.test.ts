import { join as pathJoin } from 'node:path';
import { globDirContentOccurrence } from './globDirContentOccurrence';
import { getRootDir } from '../../utils/getRootDir';

describe('preBuild related tests', () => {
  const rootDir = getRootDir();

  for (const variableName of ['NEXT_STATIC_FILES', 'HASH_INFO']) {
    it(`predefined [${variableName}] should only occur once`, async () => {
      const dir = pathJoin(rootDir, 'src', 'serviceWorker');
      const results = await globDirContentOccurrence(
        rootDir,
        dir,
        variableName,
      );
      expect(results).toHaveLength(1);
      expect(results[0]).toEqual({ ...results[0], occurrences: 1 });
    });
  }
});

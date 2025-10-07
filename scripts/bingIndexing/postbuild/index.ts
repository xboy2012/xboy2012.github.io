import { writeFile } from 'node:fs/promises';
import { join as pathJoin } from 'node:path';
import { getRootDir } from '../../../src/utils/getRootDir';

(async () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(
      'Skipped generating Bing IndexNow key file in non-production environment',
    );
    return;
  }

  // see https://www.bing.com/indexnow/getstarted#

  const key = process.env.BING_INDEX_NOW_KEY;
  if (!key) {
    throw Error('could not found BING_INDEX_NOW_KEY');
  }

  const rootDir = getRootDir();

  const keyFilePath = pathJoin(rootDir, 'out', `${key}.txt`);
  await writeFile(keyFilePath, key, 'utf-8');
})();

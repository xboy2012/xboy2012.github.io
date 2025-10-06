import { join as pathJoin } from 'node:path';
import { writeFile } from 'node:fs/promises';
import { bundleCode } from './bundleCode';
import { compressCode } from './compressCode';
import { prettierCode } from './prettierCode';
import { getNextStaticFiles } from './getNextStaticFiles';
import { getHashInfo } from './getHashInfo';
import type { JsonSerializable } from '../../src/types';

const wrapJSON = (values: Record<string, JsonSerializable>) => {
  const result: Record<string, string> = {};
  for (const key of Object.keys(values)) {
    result[key] = JSON.stringify(values[key], null, 2);
  }
  return result;
};

export const generateServiceWorker = async (rootDir: string) => {
  console.log('Start building service worker\n');
  const [nextStaticFilesInfo, hashInfo] = await Promise.all([
    getNextStaticFiles(rootDir),
    getHashInfo(rootDir),
  ]);

  const skippedFiles = nextStaticFilesInfo.skippedFiles;
  const staticFiles = nextStaticFilesInfo.files;

  if (skippedFiles.length) {
    console.log(
      `ServiceWorker will skip precaching ${skippedFiles.length} static files with prefix 'ns-'`,
    );
    console.log(skippedFiles.map((p) => `_next/${p}`));
    console.log();
  }

  console.log(`ServiceWorker will precache ${staticFiles.length} static files`);
  console.log(staticFiles.map((p) => `_next/${p}`));
  console.log();

  console.log(
    `Service worker will precache ${hashInfo[0].length} non-hashed page files`,
  );
  console.log(hashInfo[0]);
  console.log();

  console.log(
    `Service worker will precache ${hashInfo[1].length} non-hashed asset files`,
  );
  console.log(hashInfo[1]);
  console.log();

  const rawCode = await bundleCode({
    entry: pathJoin(rootDir, 'src', 'serviceWorker', 'index.ts'),
    inject: wrapJSON({
      'process.env.NODE_ENV': 'production',
      'NEXT_STATIC_FILES': staticFiles,
      'HASH_INFO': hashInfo,
    }),
  });

  const outputProduction = async () => {
    const code = await compressCode(rawCode);
    await writeFile(
      pathJoin(rootDir, 'out', 'serviceWorker.js'),
      code,
      'utf-8',
    );
    console.log('Output serviceWorker.js successfully!');
  };

  const outputDev = async () => {
    const code = await prettierCode(rawCode);
    await writeFile(
      pathJoin(rootDir, 'out', 'serviceWorker.dev.js'),
      code,
      'utf-8',
    );
    console.log('Output serviceWorker.dev.js successfully!');
  };

  await Promise.all([
    outputProduction(),
    process.env.NODE_ENV !== 'production' && outputDev(),
  ]);
};

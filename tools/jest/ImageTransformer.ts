// fileMockTransformer.ts
import type { Transformer } from '@jest/transform';
import { basename, extname } from 'node:path';
import crypto from 'node:crypto';

// in jest mocks, we can assume:
// 1. file never change
// 2. every file has its own unique md5
const getFakeMD5 = (filePath: string) => {
  return crypto.createHash('md5').update(filePath).digest('hex');
};

const processFunction: Transformer['process'] = (_src, absoluteFilePath) => {
  const md5 = getFakeMD5(absoluteFilePath);
  const extension = extname(absoluteFilePath);
  const prefix = basename(absoluteFilePath, extension);
  const url = `https://example.com/assets/${prefix}.${md5.substring(0, 8)}${extension}`;

  const data = {
    blurDataURL: 'data:image/png;base64,imagedata', // TODO: FAKE
    height: 40, // TODO: FAKE
    src: url,
    width: 40, // TODO: FAKE
  };

  return {
    code: `module.exports = ${JSON.stringify(data)};`,
  };
};

export { processFunction as process };

import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

export const getFileMD5 = async (filePath: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const hash = createHash('md5');
    const stream = createReadStream(filePath);
    stream.on('error', (error) => {
      reject(error);
    });
    stream.on('data', (chunk) => {
      hash.update(chunk);
    });
    stream.on('end', () => {
      resolve(hash.digest('hex'));
    });
  });
};

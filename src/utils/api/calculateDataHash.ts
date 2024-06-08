import { createHash } from 'node:crypto';
import { stableJsonStringify } from '../stableJsonStringify';

export const calculateDataHash = (data: unknown) => {
  const json = stableJsonStringify(data);
  const hash = createHash('md5');
  hash.update(json);
  const md5 = hash.digest('hex');
  return md5.substring(0, 8);
};

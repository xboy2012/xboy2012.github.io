import { preNextStaticPaths } from './preNextStaticPaths';
import { preCacheNonHashedPaths } from './preCacheNonHashedPaths';

export const runPreCache = async () => {
  await Promise.all([preCacheNonHashedPaths(), preNextStaticPaths()]);
};

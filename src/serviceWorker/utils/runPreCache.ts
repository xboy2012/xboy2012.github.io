import { preCacheNextStaticPaths } from './preCacheNextStaticPaths';
import { preCacheNonHashedPaths } from './preCacheNonHashedPaths';

export const runPreCache = async () => {
  await Promise.all([preCacheNonHashedPaths(), preCacheNextStaticPaths()]);
};

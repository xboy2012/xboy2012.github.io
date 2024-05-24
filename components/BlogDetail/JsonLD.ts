'use client';

import { getBlogDetailJsonLD } from '../../src/json-ld/getBlogDetailJsonLD';
import { useJsonLD } from '../../src/hooks/useJsonLD';

export const JsonLD = ({ blogId }: { blogId: string }) => {
  /* istanbul ignore next */
  useJsonLD(() => getBlogDetailJsonLD(blogId));
  return null;
};

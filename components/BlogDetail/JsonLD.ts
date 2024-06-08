'use client';

import { getBlogDetailJsonLD } from '../../src/json-ld/getBlogDetailJsonLD';
import { useJsonLD } from '../../src/hooks/useJsonLD';
import type { BlogData } from '../../src/types';

export const JsonLD = ({ meta }: { meta: BlogData }) => {
  useJsonLD(() => getBlogDetailJsonLD(meta));
  return null;
};

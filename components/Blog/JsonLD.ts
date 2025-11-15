'use client';

import { getSideBarJsonLD } from '../../src/json-ld/getSideBarJsonLD';
import { getBlogListJsonLD } from '../../src/json-ld/getBlogListJsonLD';
import { useJsonLD } from '../../src/hooks/useJsonLD';
import type { BlogData } from '../../src/types';

export const JsonLD = ({ blogs }: { blogs: readonly BlogData[] }) => {
  useJsonLD(() => getBlogListJsonLD(blogs));
  useJsonLD(getSideBarJsonLD);
  return null;
};

'use client';

import { getSideBarJsonLD } from '../../src/json-ld/getSideBarJsonLD';
import { getBlogListJsonLD } from '../../src/json-ld/getBlogListJsonLD';
import { useJsonLD } from '../../src/hooks/useJsonLD';

export const JsonLD = () => {
  useJsonLD(getBlogListJsonLD);
  useJsonLD(getSideBarJsonLD);
  return null;
};

'use client';

import { getAboutJsonLD } from '../../src/json-ld/getAboutJsonLD';
import { useJsonLD } from '../../src/hooks/useJsonLD';

export const JsonLD = () => {
  useJsonLD(getAboutJsonLD);
  return null;
};

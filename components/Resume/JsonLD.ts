'use client';

import { getResumeJsonLD } from '../../src/json-ld/getResumeJsonLD';
import { useJsonLD } from '../../src/hooks/useJsonLD';

export const JsonLD = () => {
  useJsonLD(getResumeJsonLD);
  return null;
};

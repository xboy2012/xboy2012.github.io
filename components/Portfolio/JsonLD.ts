'use client';

import { getPortfolioJsonLD } from '../../src/json-ld/getPortfolioJsonLD';
import { getSideBarJsonLD } from '../../src/json-ld/getSideBarJsonLD';
import { useJsonLD } from '../../src/hooks/useJsonLD';

export const JsonLD = () => {
  useJsonLD(getPortfolioJsonLD);
  useJsonLD(getSideBarJsonLD);
  return null;
};

'use client';

import { getPortfolioJsonLD } from '../../src/json-ld/getPortfolioJsonLD';
import { getSideBarJsonLD } from '../../src/json-ld/getSideBarJsonLD';
import { useJsonLD } from '../../src/hooks/useJsonLD';
import type { ProjectData } from '../../src/types';

export const JsonLD = ({ projects }: { projects: ProjectData[] }) => {
  useJsonLD(() => getPortfolioJsonLD(projects));
  useJsonLD(getSideBarJsonLD);
  return null;
};

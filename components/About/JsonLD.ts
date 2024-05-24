'use client';

import { defineJsonLD } from '../../src/utils/defineJsonLD';
import { getAboutJsonLD } from '../../src/json-ld/getAboutJsonLD';

export const JsonLD = defineJsonLD(getAboutJsonLD);

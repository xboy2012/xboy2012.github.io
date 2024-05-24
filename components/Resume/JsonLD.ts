'use client';

import { defineJsonLD } from '../../src/utils/defineJsonLD';
import { getResumeJsonLD } from '../../src/json-ld/getResumeJsonLD';

export const JsonLD = defineJsonLD(getResumeJsonLD);

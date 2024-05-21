'use client';

import type { Person } from 'schema-dts';
import { defineJsonLD } from '../../src/utils/defineJsonLD';
import { getSideBarJsonLD } from '../../src/json-ld/getSideBarJsonLD';
import { getResumeJsonLD } from '../../src/json-ld/getResumeJsonLD';

export const JsonLD = defineJsonLD<Person>(getSideBarJsonLD, getResumeJsonLD);

'use client';

import type { Person } from 'schema-dts';
import { defineJsonLD } from '../../src/utils/defineJsonLD';
import { getSideBarJsonLD } from '../../src/json-ld/getSideBarJsonLD';
import { getAboutJsonLD } from '../../src/json-ld/getAboutJsonLD';

export const JsonLD = defineJsonLD<Person>(getSideBarJsonLD, getAboutJsonLD);

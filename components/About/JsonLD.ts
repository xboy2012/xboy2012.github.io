'use client';

import type { Person } from 'schema-dts';
import { defineJsonLD } from '../../src/utils/defineJsonLD';
import { getAboutJsonLD } from '../../src/json-ld/getAboutJsonLD';

export const JsonLD = defineJsonLD<Person>(getAboutJsonLD);

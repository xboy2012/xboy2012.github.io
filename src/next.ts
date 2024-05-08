import type { NextConfig } from 'next';
import type {
  PHASE_EXPORT,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
  PHASE_DEVELOPMENT_SERVER,
  PHASE_TEST,
  PHASE_INFO,
} from 'next/constants';

export type PHASE =
  | typeof PHASE_EXPORT
  | typeof PHASE_PRODUCTION_BUILD
  | typeof PHASE_PRODUCTION_SERVER
  | typeof PHASE_DEVELOPMENT_SERVER
  | typeof PHASE_TEST
  | typeof PHASE_INFO;

export type NextConfigFn = (
  phase: PHASE,
  options: { defaultConfig: NextConfig },
) => NextConfig | Promise<NextConfig>;

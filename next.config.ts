import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';
import type { NextConfigFn } from './src/next';
import createMDX from '@next/mdx';

const withMDX = createMDX({});

const nextConfigFn: NextConfigFn = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  return withMDX({
    // Configure pageExtensions to include md and mdx
    pageExtensions: ['ts', 'tsx', 'mdx'],
    reactStrictMode: true,
    output: isDev ? undefined : 'export',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
    eslint: {
      dirs: ['.'],
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  });
};

export default nextConfigFn;

// @ts-check
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';
import createMDX from '@next/mdx';

const withMDX = createMDX({});

/** @type {import('./src/next').NextConfigFn} */
const nextConfigFn = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  /** @type {import('next').NextConfig} */
  const nextConfig = {
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
  };
  return withMDX(nextConfig);
};

export default nextConfigFn;

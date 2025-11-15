import type { Config } from 'jest';
import nextJest from 'next/jest.js';
import { join } from 'node:path';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    // 'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'src/**/*.{ts,tsx}',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  coveragePathIgnorePatterns: ['__test__'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  roots: [
    '<rootDir>/components',
    '<rootDir>/src',
    '<rootDir>/app',
    '<rootDir>/tools',
  ],
};

const withEnhancedImageMocks = (
  configFn: ReturnType<typeof createJestConfig>,
): ReturnType<typeof createJestConfig> => {
  const imageTransformerPath = join(
    import.meta.dirname,
    'tools',
    'jest',
    'ImageTransformer.ts',
  );

  return async () => {
    const config = await configFn();

    // delete default mapper
    const moduleNameMapper = { ...config.moduleNameMapper };
    delete moduleNameMapper['^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp)$'];

    // use enhanced transformer
    const transform = {
      ...config.transform,
      '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp)$': imageTransformerPath,
    };

    return {
      ...config,
      moduleNameMapper,
      transform,
    };
  };
};

export default withEnhancedImageMocks(createJestConfig(config));

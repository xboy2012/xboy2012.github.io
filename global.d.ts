declare const PRE_BUILT_BLOG_IDS_FOR_PATH: string[];

declare const ASSETS_HASHES: [import('./src/types').PathString, string][];

// prevent IDE warning for importing 'next/constants.js'
declare module 'next/constants.js' {
  export * from 'next/constants';
}

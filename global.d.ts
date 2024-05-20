declare const NEXT_STATIC_FILES: string[];

declare const HASH_INFO: import('./src/types').HashInfo;

// prevent IDE warning for importing 'next/constants.js'
declare module 'next/constants.js' {
  export * from 'next/constants';
}

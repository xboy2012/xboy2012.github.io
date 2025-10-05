'use client';

import { memo } from 'react';
import { getClassName } from './getClassName';

export const CssObfuscateLongString = memo(({ text }: { text: string }) => {
  return <span className={getClassName(text)} />;
});

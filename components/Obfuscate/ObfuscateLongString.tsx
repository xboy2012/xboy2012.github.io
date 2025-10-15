import { memo } from 'react';
import { InitialObfuscateLongString } from './InitialObfuscateLongString';
import { CssObfuscateLongString } from './CssObfuscateLongString';
import { useMounted } from '../../src/hooks/useMounted';

export const ObfuscateLongString = memo(({ text }: { text: string }) => {
  const mounted = useMounted();

  if (!mounted) {
    return <InitialObfuscateLongString text={text} />;
  }

  return <CssObfuscateLongString text={text} />;
});

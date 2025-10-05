import { memo, useEffect, useState } from 'react';
import { InitialObfuscateLongString } from './InitialObfuscateLongString';
import { CssObfuscateLongString } from './CssObfuscateLongString';

export const ObfuscateLongString = memo(({ text }: { text: string }) => {
  const [cssObfuscate, setCssObfuscate] = useState(false);

  useEffect(() => {
    setCssObfuscate(true);
  }, []);

  if (!cssObfuscate) {
    return <InitialObfuscateLongString text={text} />;
  }

  return <CssObfuscateLongString text={text} />;
});

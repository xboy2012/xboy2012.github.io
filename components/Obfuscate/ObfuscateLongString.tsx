import { memo, useEffect, useRef, useState } from 'react';
import { getInitialMark } from './getInitialMark';
import { getClassName } from './getClassName';

export const ObfuscateLongString = memo(({ text }: { text: string }) => {
  const [cssObfuscate, setCssObfuscate] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setCssObfuscate(true);
  }, [text]);

  useEffect(() => {
    if (!cssObfuscate) {
      return;
    }
    const span = spanRef.current;
    /* istanbul ignore next */
    if (!span) {
      return;
    }
    span.className = getClassName(text);
    const width = span.getBoundingClientRect().width;
    if (!width) {
      setCssObfuscate(false);
    }
  }, [cssObfuscate, text]);

  if (!cssObfuscate) {
    return getInitialMark(text);
  }

  return <span ref={spanRef} />;
});

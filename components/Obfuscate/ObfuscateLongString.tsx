import { memo, useEffect, useRef, useState } from 'react';
import { getInitialMark } from './getInitialMark';
import { getClassName } from './getClassName';

export const ObfuscateLongString = memo(({ text }: { text: string }) => {
  const [className, setClassName] = useState('');
  const [cssObfuscate, setCssObfuscate] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const className = getClassName(text);
    setClassName(className);
    setCssObfuscate(true);

    setTimeout(
      () => {
        const span = spanRef.current;
        // CSS is disabled, so revert cssObfuscate
        if (span && !span.getBoundingClientRect().width) {
          setCssObfuscate(false);
        }
      },
      // give more timeout for dev
      process.env.NODE_ENV === 'production' ? 200 : 5000,
    );
  }, [text]);

  if (!cssObfuscate) {
    return getInitialMark(text);
  }

  return <span ref={spanRef} className={className} />;
});

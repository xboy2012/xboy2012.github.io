import { memo, useMemo, type ReactNode } from 'react';

export const InitialObfuscateLongString = memo(({ text }: { text: string }) => {
  return useMemo(() => {
    const elements: ReactNode[] = [];
    let index = 0;
    const length = text.length;

    for (let i = 0; i < length; i++) {
      elements.push(
        <span key={++index}>{text.charAt(i)}</span>,
        <span key={++index} hidden>
          {text.charAt(length - i - 1)}
        </span>,
      );
    }
    return <span>{elements}</span>;
  }, [text]);
});

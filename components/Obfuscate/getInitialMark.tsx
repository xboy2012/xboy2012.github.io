import type { ReactNode } from 'react';

export const getInitialMark = (text: string): ReactNode => {
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
};

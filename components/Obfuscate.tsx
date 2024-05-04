import { memo, type ReactNode } from 'react';
import styles from './Obfuscate.module.css';

export const Obfuscate = memo(({ text }: { text: string }) => {
  const elements: ReactNode[] = [];
  let index = 0;
  const length = text.length;

  for (let i = 0; i < length; i++) {
    elements.push(
      <span key={++index}>{text.charAt(i)}</span>,
      <span key={++index}>{text.charAt(length - i - 1)}</span>,
    );
  }
  return <span className={styles.wrap}>{elements}</span>;
});

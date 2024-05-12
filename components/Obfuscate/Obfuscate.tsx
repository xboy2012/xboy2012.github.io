import { memo } from 'react';
import { ObfuscateLongString } from './ObfuscateLongString';

export const Obfuscate = memo(({ text }: { text: string }) => {
  if (text.length < 4) {
    return <span>{text}</span>;
  }
  return <ObfuscateLongString text={text} />;
});

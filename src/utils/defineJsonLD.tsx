import type { FC } from 'react';
import type { Thing, WithContext } from 'schema-dts';
import { useServerInsertedHTML } from 'next/navigation';
import { singleton } from './singleton';

export const defineJsonLD = <T extends Thing = Thing>(
  firstFn: () => WithContext<T>,
  ...args: (() => T)[]
): FC => {
  const getJson = singleton(
    () =>
      Object.assign({}, firstFn(), ...args.map((fn) => fn())) as WithContext<T>,
  );
  return () => {
    useServerInsertedHTML(() => {
      return (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getJson()) }}
        />
      );
    });
    return null;
  };
};

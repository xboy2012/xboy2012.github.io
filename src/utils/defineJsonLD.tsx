import type { FC } from 'react';
import type { Thing, WithContext } from 'schema-dts';
import { useServerInsertedHTML } from 'next/navigation';

export const defineJsonLD = <T extends Thing = Thing>(
  getJson: () => WithContext<T>,
): FC => {
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

import type { FC } from 'react';
import type { Thing, WithContext } from 'schema-dts';
import { useServerInsertedHTML } from 'next/navigation';

export const defineJsonLD = ((...getJsons: (() => Thing)[]): FC => {
  return () => {
    useServerInsertedHTML(() => {
      return (
        <>
          {getJsons.map((getJson, index) => {
            return (
              <script
                key={index}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getJson()) }}
              />
            );
          })}
        </>
      );
    });
    return null;
  };
}) as {
  <T1 extends Thing>(f1: () => WithContext<T1>): FC;
  <T1 extends Thing, T2 extends Thing>(
    f1: () => WithContext<T1>,
    f2: () => WithContext<T2>,
  ): FC;
  <T1 extends Thing, T2 extends Thing, T3 extends Thing>(
    f1: () => WithContext<T1>,
    f2: () => WithContext<T2>,
    f3: () => WithContext<T3>,
  ): FC;
  <T1 extends Thing, T2 extends Thing, T3 extends Thing, T4 extends Thing>(
    f1: () => WithContext<T1>,
    f2: () => WithContext<T2>,
    f3: () => WithContext<T3>,
    f4: () => WithContext<T4>,
  ): FC;
  <
    T1 extends Thing,
    T2 extends Thing,
    T3 extends Thing,
    T4 extends Thing,
    T5 extends Thing,
  >(
    f1: () => WithContext<T1>,
    f2: () => WithContext<T2>,
    f3: () => WithContext<T3>,
    f4: () => WithContext<T4>,
    f5: () => WithContext<T5>,
  ): FC;
  <
    T1 extends Thing,
    T2 extends Thing,
    T3 extends Thing,
    T4 extends Thing,
    T5 extends Thing,
    T6 extends Thing,
  >(
    f1: () => WithContext<T1>,
    f2: () => WithContext<T2>,
    f3: () => WithContext<T3>,
    f4: () => WithContext<T4>,
    f5: () => WithContext<T5>,
    f6: () => WithContext<T6>,
  ): FC;
  // intentionally limit the input functions to 6 or less, although technically we support params with any length.
  // instead of using `(...fns: (() => Thing)[]): FC`, we get better type infer.
  // It's possibly a mess for a webpage with over 6 different pieces of JSON-LD data.
};

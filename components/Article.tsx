import type { ReactNode } from 'react';
import { cx } from '../src/utils/cx';

export const Article = ({ children }: { children?: ReactNode }) => {
  return (
    <article
      className={cx(
        'animate-fade',
        'bg-eerieBlack2 border border-solid border-jet rounded-5 p-4 shadow-1 xl:shadow-1xl z-1',
        'md:w-130 md:mx-auto md:p-7.5',
        'lg:w-175 xl:w-237.5 xl:shadow-5 2xl:w-auto 2xl:min-h-full',
        'print:!w-full print:bg-inherit print:border-none print:shadow-none print:p-0',
      )}
    >
      {children}
    </article>
  );
};

import type { ReactNode } from 'react';
import { cx } from '../src/utils/cx';

export const Article = ({ children }: { children?: ReactNode }) => {
  return (
    <article
      className={cx(
        'animate-fade',
        'z-1 rounded-5 border border-solid border-jet bg-eerieBlack2 p-4 shadow-1 xl:shadow-1xl',
        'md:mx-auto md:w-130 md:p-7.5',
        'lg:w-175 xl:w-237.5 xl:shadow-5 2xl:min-h-full 2xl:w-auto',
        'print:!w-full print:border-none print:bg-inherit print:p-0 print:shadow-none',
      )}
    >
      {children}
    </article>
  );
};

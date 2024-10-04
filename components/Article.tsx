import type { ReactNode } from 'react';
import { cx } from '../src/utils/cx';

export const Article = ({ children }: { children?: ReactNode }) => {
  return (
    <article
      className={cx(
        'animate-fade',
        'bg-eerieBlack2 border border-solid border-jet rounded-[20px] p-[15px] shadow-1 z-1',
        'md:w-[520px] md:[margin-inline:auto] md:p-[30px]',
        'lg:w-[700px] xl:w-[950px] xl:shadow-5 2xl:w-auto 2xl:min-h-full',
      )}
    >
      {children}
    </article>
  );
};

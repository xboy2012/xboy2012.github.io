import { cx } from '../src/utils/cx';
import { memo } from 'react';

export const ArticleTitle = memo(({ title }: { title: string }) => {
  return (
    <header>
      <h2
        className={cx(
          'relative text-6 text-white2 capitalize md:text-8',
          'mb-4 pb-2',
          'md:mb-5 md:pb-4 md:font-600',
          'lg:pb-5',
          'print:hidden',
        )}
      >
        {title}
        <div
          className={cx(
            'absolute bottom-0 left-0 rounded-1 bg-textGradientYellow',
            'h-1 w-7.5 md:h-1.25 md:w-10',
            'print:hidden',
          )}
          aria-hidden
        />
      </h2>
    </header>
  );
});

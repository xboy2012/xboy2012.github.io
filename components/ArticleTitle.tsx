import { cx } from '../src/utils/cx';
import { memo } from 'react';

export const ArticleTitle = memo(({ title }: { title: string }) => {
  return (
    <header>
      <h2
        className={cx(
          'relative text-white2 capitalize text-1',
          'pb-2 mb-4',
          'md:font-600 md:pb-4 md:mb-5',
          'lg:pb-5',
          'print:hidden',
        )}
      >
        {title}
        <div
          className={cx(
            'absolute bottom-0 left-0 bg-textGradientYellow rounded-1',
            'w-7.5 h-1 md:w-10 md:h-1.25',
            'print:hidden',
          )}
          aria-hidden
        />
      </h2>
    </header>
  );
});

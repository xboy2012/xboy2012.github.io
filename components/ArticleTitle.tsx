import cx from 'classnames';
import { memo } from 'react';

export const ArticleTitle = memo(({ title }: { title: string }) => {
  return (
    <header>
      <h2
        className={cx(
          'relative text-white2 capitalize text-1',
          'pb-[7px] mb-[15px]',
          'md:font-600 md:pb-[15px] md:mb-[20px]',
          'lg:pb-[20px]',
        )}
      >
        {title}
        <div
          className={cx(
            'absolute bottom-0 left-0 bg-textGradientYellow rounded-[3px]',
            'w-[30px] h-[3px] md:w-[40px] md:h-[5px]',
          )}
          aria-hidden
        />
      </h2>
    </header>
  );
});

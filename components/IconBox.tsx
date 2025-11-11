import { memo } from 'react';
import { cx } from '../src/utils/cx';

export const IconBox = memo(() => {
  return (
    <span
      className={cx(
        'relative flex items-center justify-center',
        'bg-borderGradientOnyx text-orangeYellowCrayola shadow-1 xl:shadow-1xl z-1',
        'h-7.5 w-7.5 rounded-lg text-base',
        'md:h-12 md:w-12 md:rounded-xl md:text-lg',
        'print:hidden',
      )}
      aria-hidden
    >
      <i className="bg-eerieBlack1 rounded-inherit absolute inset-px -z-1 block" />
      <i className="bg-icon-box block h-4 w-4 bg-contain bg-center bg-no-repeat" />
    </span>
  );
});

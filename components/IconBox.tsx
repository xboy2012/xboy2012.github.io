import { memo } from 'react';
import { cx } from '../src/utils/cx';

export const IconBox = memo(() => {
  return (
    <span
      className={cx(
        'flex justify-center items-center relative',
        'bg-borderGradientOnyx text-orangeYellowCrayola shadow-1 z-1',
        'w-[30px] h-[30px] rounded-lg text-base',
        'md:w-[48px] md:h-[48px] md:rounded-xl md:text-lg',
        'print:hidden',
      )}
      aria-hidden
    >
      <i className="block absolute inset-px bg-eerieBlack1 rounded-inherit -z-1" />
      <i className="block w-4 h-4 bg-center bg-no-repeat bg-contain bg-icon-box" />
    </span>
  );
});

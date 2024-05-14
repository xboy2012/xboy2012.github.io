import { memo } from 'react';
import cx from 'classnames';
import styles from './IconBox.module.css';

export const IconBox = memo(() => {
  return (
    <span
      className={cx(
        styles.box,
        'flex justify-center items-center relative',
        'bg-borderGradientOnyx text-orangeYellowCrayola shadow-1 z-1',
        'w-[30px] h-[30px] rounded-lg text-base',
        'md:w-[48px] md:h-[48px] md:rounded-xl md:text-lg',
      )}
      aria-hidden
    >
      <i
        className={cx(
          styles.bg,
          'block w-4 h-4 bg-center bg-no-repeat bg-contain',
        )}
      />
    </span>
  );
});

import { BookOutline } from './Icons/BookOutline';
import cx from 'classnames';

export const IconBox = () => {
  return (
    <div
      className={cx(
        'flex justify-center items-center relative',
        'bg-borderGradientOnyx text-orangeYellowCrayola shadow-1 z-1',
        'w-[30px] h-[30px] rounded-lg text-base',
        'md:w-[48px] md:h-[48px] md:rounded-xl md:text-lg',
      )}
    >
      <div className="absolute inset-px bg-eerieBlack1 rounded-inherit -z-1" />
      <BookOutline />
    </div>
  );
};

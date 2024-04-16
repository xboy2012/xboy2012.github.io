import { LocationOutline } from '../Icons/LocationOutline';
import { userData } from '../../src/data';
import cx from 'classnames';

export const ContactItemLocation = () => {
  const { location } = userData;
  if (!location) {
    return null;
  }

  return (
    <li className="max-w-full flex items-center gap-4">
      <div
        className={cx(
          'relative bg-borderGradientOnyx flex justify-center items-center',
          'text-orangeYellowCrayola shadow-1 z-1',
          'w-[30px] h-[30px] md:w-[48px] md:h-[48px]',
          'rounded-lg md:rounded-xl',
          'text-base md:text-lg',
        )}
      >
        <div className="absolute inset-px bg-eerieBlack1 rounded-inherit -z-1" />
        <LocationOutline />
      </div>

      <div className="w-contact max-w-contact md:w-contact2 md:max-w-contact2">
        <p className="text-lightGray70 text-8 uppercase mb-0.5">Location</p>
        <address
          className={cx(
            'text-white2 text-[13px] md:text-[15px] 2xl:text-[14px]',
            'not-italic 2xl:font-300',
          )}
        >
          {location}
        </address>
      </div>
    </li>
  );
};

import cx from 'classnames';
import { LocationOutline } from '../Icons/LocationOutline';
import { getGoogleMapUrl } from '../../src/utils/getGoogleMapUrl';
import { userData } from '../../src/data';

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
        <a
          className={cx(
            'block text-white2 text-[13px] md:text-[15px] 2xl:text-[14px]',
            '2xl:whitespace-nowrap 2xl:overflow-hidden 2xl:text-ellipsis 2xl:font-300',
          )}
          href={getGoogleMapUrl(location)}
          target="_blank"
        >
          <address className="not-italic">{location}</address>
        </a>
      </div>
    </li>
  );
};

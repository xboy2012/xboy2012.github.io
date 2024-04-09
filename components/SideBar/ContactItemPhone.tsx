import { PhonePortraitOutline } from './Icons/PhonePortraitOutline';
import { displayPhoneCA } from './utils/displayPhoneCA';
import { userData } from '../../src/data';
import cx from 'classnames';

export const ContactItemPhone = () => {
  const { phoneCA } = userData;
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
        <PhonePortraitOutline />
      </div>

      <div className="w-contact max-w-contact md:w-contact2 md:max-w-contact2">
        <p className="text-lightGray70 text-8 uppercase mb-0.5">Phone</p>
        <a
          href={`tel:${phoneCA}`}
          className={cx(
            'text-white2 text-[13px] md:text-[15px] 2xl:text-[14px] font-300',
            '2xl:whitespace-nowrap 2xl:overflow-hidden 2xl:text-ellipsis',
          )}
        >
          {displayPhoneCA(phoneCA)}
        </a>
      </div>
    </li>
  );
};

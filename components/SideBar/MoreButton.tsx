import { ChevronDown } from '../Icons/ChevronDown';
import cx from 'classnames';

interface Props {
  onClick?: () => void;
}

export const MoreButton = ({ onClick }: Props) => {
  return (
    <button
      className={cx(
        'group absolute -top-[15px] -right-[15px] border-none',
        'rounded-tl-0 rounded-br-0 rounded-tr-[15px] rounded-bl-[15px]',
        'text-[13px] text-left text-orangeYellowCrayola',
        'cursor-pointer bg-borderGradientOnyx shadow-2',
        'p-2.5 z-1 transition-all duration-250 ease-default',
        'md:-top-[30px] md:-right-[30px] md:py-[10px] md:px-[15px]',
        '2xl:hidden',
        'hover:bg-bgGradientYellow1 focus:bg-bgGradientYellow1',
      )}
      onClick={onClick}
    >
      <div
        className={cx(
          'absolute -z-1 inset-px rounded-inherit bg-bgGradientJet',
          'transition-all duration-250 ease-default',
          'group-hover:bg-bgGradientYellow2 group-focus:bg-bgGradientYellow2',
        )}
      />
      <span className="hidden md:block md:text-8">Show Contacts</span>
      <ChevronDown className="md:hidden" />
    </button>
  );
};

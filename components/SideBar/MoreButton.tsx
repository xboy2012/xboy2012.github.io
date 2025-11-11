import { type MouseEvent, useCallback } from 'react';
import { cx } from '../../src/utils/cx';
import { ChevronDown } from '../Icons/ChevronDown';
import { useMounted } from '../../src/hooks/useMounted';

interface Props {
  onClick: () => void;
}

export const MoreButton = ({ onClick }: Props) => {
  const mounted = useMounted();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      // auto blur the button to avoid UI inconsistency
      event.currentTarget.blur();
      onClick();
    },
    [onClick],
  );

  return (
    <button
      hidden={!mounted}
      className={cx(
        'no-js:!hidden', // hide the button when javascript is disabled
        'group absolute -top-4 -right-4 block border-none',
        'rounded-tl-0 rounded-br-0 rounded-tr-4 rounded-bl-4',
        'text-3.5 md:text-4 text-orangeYellowCrayola cursor-pointer',
        'bg-borderGradientOnyx shadow-2 cursor-pointer xl:shadow-2xl',
        'ease-default z-1 p-2.5 transition-all duration-250',
        'md:-top-7.5 md:-right-7.5 md:px-4 md:py-2.5',
        '2xl:hidden',
        'hover:bg-bgGradientYellow1 focus:bg-bgGradientYellow1',
        'print:hidden',
      )}
      onClick={handleClick}
    >
      <div
        className={cx(
          'rounded-inherit bg-bgGradientJet absolute inset-px -z-1',
          'ease-default transition-all duration-250',
          'group-hover:bg-bgGradientYellow2 group-focus:bg-bgGradientYellow2',
        )}
      />
      <span className="md:text-3 hidden md:block">Show Contacts</span>
      <ChevronDown className="md:hidden" />
    </button>
  );
};

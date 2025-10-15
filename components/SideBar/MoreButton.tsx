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
    (e: MouseEvent<HTMLButtonElement>) => {
      // auto blur the button to avoid UI inconsistency
      e.currentTarget.blur();
      onClick();
    },
    [onClick],
  );

  return (
    <button
      hidden={!mounted}
      className={cx(
        'no-js:!hidden', // hide the button when javascript is disabled
        'group block absolute -top-4 -right-4 border-none',
        'rounded-tl-0 rounded-br-0 rounded-tr-4 rounded-bl-4',
        'text-3.5 md:text-4 text-orangeYellowCrayola cursor-pointer',
        'cursor-pointer bg-borderGradientOnyx shadow-2',
        'p-2.5 z-1 transition-all duration-250 ease-default',
        'md:-top-7.5 md:-right-7.5 md:py-2.5 md:px-4',
        '2xl:hidden',
        'hover:bg-bgGradientYellow1 focus:bg-bgGradientYellow1',
        'print:hidden',
      )}
      onClick={handleClick}
    >
      <div
        className={cx(
          'absolute -z-1 inset-px rounded-inherit bg-bgGradientJet',
          'transition-all duration-250 ease-default',
          'group-hover:bg-bgGradientYellow2 group-focus:bg-bgGradientYellow2',
        )}
      />
      <span className="hidden md:block md:text-3">Show Contacts</span>
      <ChevronDown className="md:hidden" />
    </button>
  );
};

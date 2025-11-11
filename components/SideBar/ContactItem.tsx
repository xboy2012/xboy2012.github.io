import { type ComponentType, type ReactNode } from 'react';
import { cx } from '../../src/utils/cx';

export const ContactItem = ({
  Icon,
  title,
  children,
}: {
  Icon: ComponentType;
  title: string;
  children: ReactNode;
}) => {
  return (
    <li className="flex max-w-full items-center gap-4">
      <i
        className={cx(
          'bg-borderGradientOnyx relative flex items-center justify-center',
          'text-orangeYellowCrayola shadow-1 xl:shadow-1xl z-1',
          'h-7.5 w-7.5 md:h-12 md:w-12',
          'rounded-lg md:rounded-xl',
          'text-base md:text-lg',
          'print:hidden',
        )}
        aria-hidden
      >
        <span className="bg-eerieBlack1 rounded-inherit absolute inset-px -z-1 block" />
        <Icon />
      </i>

      <span
        className={cx(
          'w-contact max-w-contact md:w-contact2 md:max-w-contact2 text-white2 block',
          'print:flex print:w-auto print:max-w-none print:flex-row print:items-center print:justify-center print:text-inherit',
        )}
      >
        <label
          className={cx(
            'text-lightGray70 text-3 mb-0.5 block uppercase',
            'print:mr-2 print:mb-0 print:text-inherit',
          )}
        >
          {title}
        </label>
        {children}
      </span>
    </li>
  );
};

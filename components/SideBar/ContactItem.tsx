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
          'relative flex items-center justify-center bg-borderGradientOnyx',
          'z-1 text-orangeYellowCrayola shadow-1 xl:shadow-1xl',
          'h-7.5 w-7.5 md:h-12 md:w-12',
          'rounded-lg md:rounded-xl',
          'text-base md:text-lg',
          'print:hidden',
        )}
        aria-hidden
      >
        <span className="absolute inset-px -z-1 block rounded-inherit bg-eerieBlack1" />
        <Icon />
      </i>

      <span
        className={cx(
          'block w-contact max-w-contact text-white2 md:w-contact2 md:max-w-contact2',
          'print:flex print:w-auto print:max-w-none print:flex-row print:items-center print:justify-center print:text-inherit',
        )}
      >
        <label
          className={cx(
            'mb-0.5 block text-3 text-lightGray70 uppercase',
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

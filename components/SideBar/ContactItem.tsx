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
    <li className="max-w-full flex items-center gap-4">
      <i
        className={cx(
          'relative bg-borderGradientOnyx flex justify-center items-center',
          'text-orangeYellowCrayola shadow-1 z-1',
          'w-7.5 h-7.5 md:w-12 md:h-12',
          'rounded-lg md:rounded-xl',
          'text-base md:text-lg',
          'print:hidden',
        )}
        aria-hidden
      >
        <span className="absolute block inset-px bg-eerieBlack1 rounded-inherit -z-1" />
        <Icon />
      </i>

      <span
        className={cx(
          'block w-contact max-w-contact md:w-contact2 md:max-w-contact2 text-white2',
          'print:w-auto print:max-w-none print:flex print:flex-row print:items-center print:justify-center print:text-inherit',
        )}
      >
        <label
          className={cx(
            'block text-lightGray70 text-8 uppercase mb-0.5',
            'print:mb-0 print:mr-2 print:text-inherit',
          )}
        >
          {title}
        </label>
        {children}
      </span>
    </li>
  );
};

import { type ComponentType, type ReactNode } from 'react';
import cx from 'classnames';

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
          'w-[30px] h-[30px] md:w-[48px] md:h-[48px]',
          'rounded-lg md:rounded-xl',
          'text-base md:text-lg',
        )}
      >
        <span className="absolute block inset-px bg-eerieBlack1 rounded-inherit -z-1" />
        <Icon />
      </i>

      <span className="block w-contact max-w-contact md:w-contact2 md:max-w-contact2">
        <label className="block text-lightGray70 text-8 uppercase mb-0.5">
          {title}
        </label>
        {children}
      </span>
    </li>
  );
};

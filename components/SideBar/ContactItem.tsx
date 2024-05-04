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
        <Icon />
      </div>

      <div className="w-contact max-w-contact md:w-contact2 md:max-w-contact2">
        <p className="text-lightGray70 text-8 uppercase mb-0.5">{title}</p>
        {children}
      </div>
    </li>
  );
};

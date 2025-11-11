import { cx } from '../../src/utils/cx';
import type { ServiceId } from '../../src/types';

const classNames: Record<ServiceId, string> = {
  frontend: 'bg-icon-frontend',
  fullstack: 'bg-icon-fullstack',
  arch: 'bg-icon-arch',
  devops: 'bg-icon-devops',
};

export const ServiceItem = ({
  id,
  name,
  desc,
}: {
  id: ServiceId;
  name: string;
  desc: string;
}) => {
  return (
    <li
      className={cx(
        'bg-borderGradientOnyx rounded-3.5 shadow-2 relative z-1 p-5 xl:shadow-2xl',
        'md:flex md:items-start md:justify-start md:gap-5 md:p-7.5',
        'print:!gap-0 print:border-none print:bg-none print:p-0 print:shadow-none',
      )}
    >
      <div className="bg-eerieBlack1 bg-bgGradientJet rounded-inherit absolute inset-px -z-1 print:hidden" />
      <div className="mb-2.5 md:mt-1.25 md:mb-0 print:hidden">
        <div
          className={cx(
            'mx-auto aspect-square h-10 w-10 bg-contain bg-center bg-no-repeat',
            classNames[id],
          )}
          title={name}
        />
      </div>

      <div className="text-center md:text-left">
        <h4
          className={cx(
            'text-white2 text-4.5 md:text-6 mb-2 capitalize',
            'print:text-4.5 print:mb-0 print:text-inherit',
          )}
        >
          {name}
        </h4>
        <p className="text-lightGray text-3.5 md:text-4 font-300 leading-x1.6 print:text-inherit">
          {desc}
        </p>
      </div>
    </li>
  );
};

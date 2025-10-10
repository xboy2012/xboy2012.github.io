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
        'relative bg-borderGradientOnyx p-5 rounded-3.5 shadow-2 z-1',
        'md:flex md:justify-start md:items-start md:gap-5 md:p-7.5',
        'print:bg-none print:border-none print:shadow-none print:p-0 print:!gap-0',
      )}
    >
      <div className="absolute inset-px bg-eerieBlack1 bg-bgGradientJet rounded-inherit -z-1 print:hidden" />
      <div className="mb-2.5 md:mb-0 md:mt-1.25 print:hidden">
        <div
          className={cx(
            'mx-auto aspect-square bg-contain bg-center bg-no-repeat w-10 h-10',
            classNames[id],
          )}
          title={name}
        />
      </div>

      <div className="text-center md:text-left">
        <h4
          className={cx(
            'mb-2 text-white2 capitalize text-4.5 md:text-6',
            'print:text-inherit print:text-4.5 print:mb-0',
          )}
        >
          {name}
        </h4>
        <p className="text-lightGray text-3.5 md:text-4 font-300 leading-[1.6] print:text-inherit">
          {desc}
        </p>
      </div>
    </li>
  );
};

import { cx } from '../../src/utils/cx';
import { companies } from '../../src/companies';
import { ClientItem } from './ClientItem';

export const Clients = () => {
  return (
    <section className="mb-4 break-inside-avoid">
      <h3 className="text-white2 capitalize text-4.5 md:text-6 print:text-inherit print:mb-2">
        Who I work for
      </h3>

      <ul
        className={cx(
          'flex justify-start items-start gap-4 md:gap-8',
          'my-0 -mx-4 md:-mx-7.5 p-6 md:p-11',
          'flex-wrap sm:flex-nowrap',
          'sm:overflow-x-auto scroll-smooth',
          'overscroll-inline-contain snap-inline-mandatory',
          'scroll-px-6 md:scroll-px-11',
          'webkit-scrollbar:w-1.25 webkit-scrollbar:h-1.25',
          'webkit-scrollbar-track:bg-onyx',
          'webkit-scrollbar-track:rounded-1.25',
          'webkit-scrollbar-thumb:bg-orangeYellowCrayola',
          'webkit-scrollbar-thumb:rounded-1.25',
          'webkit-scrollbar-button:w-5',
          'lg:webkit-scrollbar-button:w-25',
          'print:flex-col print:m-0 print:p-0 print:gap-0',
        )}
      >
        {companies.map(({ name, link }) => {
          return <ClientItem key={name} name={name} link={link} />;
        })}
      </ul>
    </section>
  );
};

import { cx } from '../../src/utils/cx';
import { companies } from '../../src/companies';
import { ClientItem } from './ClientItem';

export const Clients = () => {
  return (
    <section className="mb-[15px]">
      <h3 className="text-white2 capitalize text-2">Who I work for</h3>

      <ul
        className={cx(
          'flex justify-start items-start gap-[15px] md:gap-[50px]',
          'my-0 -mx-[15px] md:-mx-[30px] p-[25px] md:p-[45px]',
          'flex-wrap sm:flex-nowrap',
          'sm:overflow-x-auto scroll-smooth',
          '[overscroll-behavior-inline:contain]',
          '[scroll-snap-type:inline_mandatory]',
          '[scroll-padding-inline:25px] md:[scroll-padding-inline:45px]',
          'webkit-scrollbar:w-[5px] webkit-scrollbar:h-[5px]',
          'webkit-scrollbar-track:bg-onyx',
          'webkit-scrollbar-track:rounded-[5px]',
          'webkit-scrollbar-thumb:bg-orangeYellowCrayola',
          'webkit-scrollbar-thumb:rounded-[5px]',
          'webkit-scrollbar-button:w-[20px]',
          'lg:webkit-scrollbar-button:w-[100px]',
        )}
      >
        {companies.map(({ name, link }) => {
          return <ClientItem key={name} name={name} link={link} />;
        })}
      </ul>
    </section>
  );
};

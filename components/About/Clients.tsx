import cx from 'classnames';
import { companies } from '../../src/companies';

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
        {companies.map(({ name, link, Logo }) => {
          return (
            <li
              key={name}
              className={cx(
                'min-w-[calc(50%-8px)] sm:min-w-[calc(33.33%-10px)]',
                'md:min-w-[calc(33.33%-35px)] xl:min-w-[calc(25%-38px)]',
                'snap-start aspect-[1.63] overflow-hidden',
              )}
            >
              <a
                href={link}
                target="_blank"
                title={name}
                className="relative block w-full h-full"
              >
                <Logo />
                <span style={{ display: 'none' }}>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

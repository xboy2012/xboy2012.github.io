import { cx } from '../../src/utils/cx';
import { EyeOutline } from '../Icons/EyeOutline';
import type { ProjectCategory } from '../../src/types';

export const ProjectItem = ({
  category,
  link,
  title,
  image,
}: {
  category: ProjectCategory;
  link: string;
  title: string;
  image: string;
}) => {
  return (
    <li className="group animate-scale-up break-inside-avoid">
      <a
        href={link}
        className="block w-full"
        target="_blank"
        rel="noreferrer noopener"
      >
        <figure
          className={cx(
            'relative mb-4 overflow-hidden rounded-2xl',
            'h-50 w-full sm:aspect-4/3 sm:h-auto',
            'print:border print:border-solid print:border-black',
          )}
        >
          <div
            className={cx(
              'absolute top-0 left-0 z-1 h-full w-full bg-transparent',
              'transition-all duration-250 ease-default',
              'group-hover:bg-black group-hover:opacity-50',
            )}
          />
          <div
            className={cx(
              'bg-jet text-orangeYellowCrayola',
              'absolute top-1/2 left-1/2 z-1 rounded-xl p-5 text-xl',
              'transition-all duration-250 ease-default',
              '-translate-x-1/2 -translate-y-1/2 scale-80 opacity-0',
              'group-hover:scale-100 group-hover:opacity-100',
            )}
          >
            <EyeOutline />
          </div>

          <div
            className={cx(
              'h-full w-full bg-cover bg-center bg-no-repeat',
              'transition-all duration-250 ease-default group-hover:scale-110',
            )}
            style={{
              backgroundImage: `url("${image}")`,
            }}
            title={title}
          />
        </figure>

        <h3 className="ml-2.5 text-4 leading-x1.3 font-400 text-white2 capitalize print:text-inherit">
          {title}
        </h3>

        <p className="ml-2.5 text-3.5 font-300 text-lightGray70 md:text-4 print:text-inherit">
          {category}
        </p>
      </a>
    </li>
  );
};

import cx from 'classnames';
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
    <li className="group animate-scaleUp">
      <a href={link} className="block w-full" target="_blank">
        <figure
          className={cx(
            'relative rounded-2xl overflow-hidden mb-[15px]',
            'w-full h-[200px] sm:h-auto sm:aspect-[4/3]',
          )}
        >
          <div
            className={cx(
              'absolute top-0 left-0 w-full h-full bg-transparent z-1',
              'transition-all duration-250 ease-default',
              'group-hover:bg-black group-hover:opacity-50',
            )}
          />
          <div
            className={cx(
              'bg-jet text-orangeYellowCrayola',
              'absolute top-1/2 left-1/2 text-xl p-[18px] rounded-xl z-1',
              'transition-all duration-250 ease-default',
              '-translate-x-1/2 -translate-y-1/2 scale-80 opacity-0',
              'group-hover:scale-100 group-hover:opacity-100',
            )}
          >
            <EyeOutline />
          </div>

          <div
            className={cx(
              'w-full h-full bg-cover bg-center bg-no-repeat',
              'transition-all duration-250 ease-default group-hover:scale-110',
            )}
            style={{
              backgroundImage: `url("${image}")`,
            }}
            title={title}
          />
        </figure>

        <h3 className="ml-2.5 text-white2 text-5 font-400 capitalize leading-[1.3]">
          {title}
        </h3>

        <p className="ml-2.5 text-lightGray70 text-6 font-300">{category}</p>
      </a>
    </li>
  );
};

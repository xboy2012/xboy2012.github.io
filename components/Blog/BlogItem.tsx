import { cx } from '../../src/utils/cx';
import { formatDateTime } from '../../src/utils/formatDateTime';

interface BlogItemProps {
  id: string;
  link?: string;
  title: string;
  desc: string;
  image: string;
  datetime: `${string}-${string}-${string}`;
  category: string;
}

export const BlogItem = (props: BlogItemProps) => {
  const { id, title, desc, image, datetime, category } = props;

  const link = props.link || `/blog/${id}/`;

  return (
    <li className="group break-inside-avoid">
      <a
        href={link}
        target="_blank"
        className={cx(
          'block relative bg-borderGradientOnyx h-full shadow-4 rounded-2xl z-1',
          'print:flex print:relative print:bg-none print:shadow-none',
        )}
      >
        <div className="absolute inset-px rounded-inherit bg-eerieBlack1 -z-1 print:hidden" />
        <figure
          className={cx(
            'overflow-hidden',
            'w-full h-[200px] sm:h-auto sm:aspect-video xl:h-[230px] xl:aspect-auto',
            'rounded-xl md:rounded-2xl',
            'print:w-[200px] print:h-[200px] print:mr-4 print:border-black print:border-[1px] print:border-solid',
          )}
        >
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

        <div className="p-[15px] md:p-[25px] print:flex-1 print:!p-0">
          <div className="flex justify-start items-center gap-[7px] mb-2.5">
            <span className="text-lightGray70 text-6 font-300 print:text-inherit">
              {category}
            </span>

            <div
              className="bg-lightGray70 w-1 h-1 rounded print:bg-black"
              aria-hidden
            />

            <time
              dateTime={datetime}
              className="block text-lightGray70 text-6 font-300 print:text-inherit"
            >
              {formatDateTime(datetime)}
            </time>
          </div>

          <h3
            className={cx(
              'mb-2.5 leading-[1.3] text-white2 capitalize text-2',
              'transition-all duration-250 ease-default group-hover:text-orangeYellowCrayola',
              'print:text-inherit',
            )}
          >
            {title}
          </h3>

          <p className="text-lightGray text-6 font-300 leading-[1.6] print:text-inherit">
            {desc}
          </p>
        </div>
      </a>
    </li>
  );
};

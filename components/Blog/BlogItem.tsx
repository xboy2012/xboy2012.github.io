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
        rel="noreferrer noopener"
        className={cx(
          'bg-borderGradientOnyx shadow-4 relative z-1 block h-full rounded-2xl',
          'print:relative print:flex print:bg-none print:shadow-none',
        )}
      >
        <div className="rounded-inherit bg-eerieBlack1 absolute inset-px -z-1 print:hidden" />
        <figure
          className={cx(
            'overflow-hidden',
            'h-50 w-full sm:aspect-video sm:h-auto xl:aspect-auto xl:h-57.5',
            'rounded-xl md:rounded-2xl',
            'print:border print:mr-4 print:h-50 print:w-50 print:border-solid print:border-black',
          )}
        >
          <div
            className={cx(
              'h-full w-full bg-cover bg-center bg-no-repeat',
              'ease-default transition-all duration-250 group-hover:scale-110',
            )}
            style={{
              backgroundImage: `url("${image}")`,
            }}
            title={title}
          />
        </figure>

        <div className="p-4 md:p-6 print:flex-1 print:!p-0">
          <div className="mb-2.5 flex items-center justify-start gap-2">
            <span className="text-lightGray70 text-3.5 md:text-4 font-300 print:text-inherit">
              {category}
            </span>

            <div
              className="bg-lightGray70 h-1 w-1 rounded print:bg-black"
              aria-hidden
            />

            <time
              dateTime={datetime}
              className="text-lightGray70 text-3.5 md:text-4 font-300 block print:text-inherit"
            >
              {formatDateTime(datetime)}
            </time>
          </div>

          <h3
            className={cx(
              'leading-x1.3 text-white2 text-4.5 md:text-6 mb-2.5 capitalize',
              'ease-default group-hover:text-orangeYellowCrayola transition-all duration-250',
              'print:text-inherit',
            )}
          >
            {title}
          </h3>

          <p className="text-lightGray text-3.5 md:text-4 font-300 leading-x1.6 print:text-inherit">
            {desc}
          </p>
        </div>
      </a>
    </li>
  );
};

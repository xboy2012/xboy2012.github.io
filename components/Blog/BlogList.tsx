import cx from 'classnames';
import { getBlogs } from '../../src/blogs';
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

const BlogItem = (props: BlogItemProps) => {
  const { id, title, desc, image, datetime, category } = props;

  const link = props.link || `/blog/${id}`;

  return (
    <li className="group">
      <a
        href={link}
        target="_blank"
        className="block relative bg-borderGradientOnyx h-full shadow-4 rounded-2xl z-1"
      >
        <div className="absolute inset-px rounded-inherit bg-eerieBlack1 -z-1" />
        <figure
          className={cx(
            'overflow-hidden',
            'w-full h-[200px] sm:h-auto sm:aspect-video xl:h-[230px] xl:aspect-auto',
            'rounded-xl md:rounded-2xl',
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

        <div className="p-[15px] md:p-[25px]">
          <div className="flex justify-start items-center gap-[7px] mb-2.5">
            <span className="text-lightGray70 text-6 font-300">{category}</span>

            <div className="bg-lightGray70 w-1 h-1 rounded" aria-hidden />

            <time
              dateTime={datetime}
              className="block text-lightGray70 text-6 font-300"
            >
              {formatDateTime(datetime)}
            </time>
          </div>

          <h3
            className={cx(
              'mb-2.5 leading-[1.3] text-white2 capitalize text-2',
              'transition-all duration-250 ease-default group-hover:text-orangeYellowCrayola',
            )}
          >
            {title}
          </h3>

          <p className="text-lightGray text-6 font-300 leading-[1.6]">{desc}</p>
        </div>
      </a>
    </li>
  );
};

export const BlogList = () => {
  return (
    <section className="mb-2.5">
      <ul className="grid grid-cols-1fr gap-5 md:gap-7.5 lg:grid-cols-1fr1fr">
        {getBlogs().map(
          ({ id, link, title, desc, image, datetime, category }) => {
            return (
              <BlogItem
                key={id}
                id={id}
                link={link}
                title={title}
                desc={desc}
                image={image}
                datetime={datetime}
                category={category}
              />
            );
          },
        )}
      </ul>
    </section>
  );
};

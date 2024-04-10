import { ArticleTitle } from '../../../../components/ArticleTitle';
import { formatDateTime } from '../../../../src/utils/formatDateTime';
import { blogs } from '../../../../src/blogs';
import cx from 'classnames';

export default function Blog() {
  return (
    <article className="animate-fade">
      <ArticleTitle title="Blog" />
      <section className="mb-2.5">
        <ul className="grid grid-cols-1fr gap-5 md:gap-7.5 lg:grid-cols-1fr1fr">
          {blogs.map(({ link, title, desc, image, datetime, category }, i) => {
            return (
              <li key={i} className="group">
                <a
                  href={link}
                  target="_blank"
                  className="relative bg-borderGradientOnyx h-full shadow-4 rounded-2xl z-1"
                >
                  <div className="absolute inset-px rounded-inherit bg-eerieBlack1 -z-1" />
                  <figure
                    className={cx(
                      'overflow-hidden',
                      'w-full h-[200px] sm:h-auto xl:h-[230px]',
                      'rounded-xl md:rounded-2xl',
                    )}
                  >
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className={cx(
                        'w-full h-full object-cover',
                        'transition-all duration-250 ease-default group-hover:scale-110',
                      )}
                    />
                  </figure>

                  <div className="p-[15px] md:p-[25px]">
                    <div className="flex justify-start items-center gap-[7px] mb-2.5">
                      <p className="text-lightGray70 text-6 font-300">
                        {category}
                      </p>

                      <span className="bg-lightGray70 w-1 h-1 rounded" />

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

                    <p className="text-lightGray text-6 font-300 leading-[1.6]">
                      {desc}
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}

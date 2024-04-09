import { ArticleTitle } from '../../../../components/ArticleTitle';
import { formatDateTime } from './formatDateTime';
import { blogs } from '../../../../src/blogs';
import cx from 'classnames';
import styles from './index.module.css';

export default function Blog() {
  return (
    <article className="animate-fade">
      <ArticleTitle title="Blog" />
      <section className="mb-2.5">
        <ul className="grid grid-cols-1fr gap-5 md:gap-7.5 lg:grid-cols-1fr1fr">
          {blogs.map(({ link, title, desc, image, datetime, category }, i) => {
            return (
              <li key={i} className={styles.blogPostItem}>
                <a href={link} target="_blank">
                  <figure className={styles.blogBannerBox}>
                    <img src={image} alt={title} loading="lazy" />
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
                        'text-white2 capitalize text-2',
                        styles.blogItemTitle,
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

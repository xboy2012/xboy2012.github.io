import { BlogItem } from './BlogItem';
import type { BlogData } from '../../src/types';

export const BlogList = ({ blogs }: { blogs: BlogData[] }) => {
  return (
    <section className="mb-2.5">
      <ul className="grid-cols-1fr lg:grid-cols-1fr1fr print:!grid-cols-1fr grid gap-5 md:gap-7.5">
        {blogs.map(({ id, link, title, desc, image, datetime, category }) => {
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
        })}
      </ul>
    </section>
  );
};

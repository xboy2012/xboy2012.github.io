import { getBlogs } from '../../src/blogs';
import { BlogItem } from './BlogItem';

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

import type { Blog } from 'schema-dts';
import { userData } from '../data';
import { getBlogs } from '../blogs';

let json: Blog | undefined;

export const getBlogListJsonLD = () => {
  if (!json) {
    json = {
      '@type': 'Blog',
      name: `${userData.name}'s Blogs`,
      url: 'https://xboy2012.github.io/blog',
      blogPost: getBlogs().map((blog) => {
        const blogUrl =
          blog.link || `https://xboy2012.github.io/blog/${blog.id}`;

        return {
          '@type': 'BlogPosting',
          headline: blog.title,
          image: blog.image,
          // TODO: blog with external link is currently used to fill the list, so no author should be exposed.
          author: blog.link
            ? undefined
            : {
                '@type': 'Person',
                name: userData.name,
                '@id': 'https://xboy2012.github.io/#person',
              },
          datePublished: blog.datetime,
          // dateModified: '2023-05-01',
          url: blogUrl,
          mainEntityOfPage: blogUrl,
          description: blog.desc,
        };
      }),
    };
  }
  return json;
};

import type { Blog } from 'schema-dts';
import { userData } from '../data';
import { PERSON_ID } from '../config/json-ld';
import { getFullUrl } from '../utils/getFullUrl';
import type { BlogData } from '../types';

export const getBlogListJsonLD = (blogs: BlogData[]): Blog => {
  return {
    '@type': 'Blog',
    'name': `${userData.name}'s Blogs`,
    'url': getFullUrl('/blog/'),
    'blogPost': blogs.map((blog) => {
      const blogUrl = blog.link || getFullUrl(`/blog/${blog.id}`);

      return {
        '@type': 'BlogPosting',
        'headline': blog.title,
        'image': getFullUrl(blog.image),
        // TODO: blog with external link is currently used to fill the list, so no author should be exposed.
        'author': blog.link
          ? undefined
          : {
              '@type': 'Person',
              'name': userData.name,
              '@id': PERSON_ID,
            },
        'datePublished': blog.datetime,
        // dateModified: '2023-05-01',
        'url': blogUrl,
        'mainEntityOfPage': blogUrl,
        'description': blog.desc,
      };
    }),
  };
};

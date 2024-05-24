import type { BlogPosting } from 'schema-dts';
import { getMetaByBlogId } from '../utils/getMetaByBlogId';
import { getSideBarJsonLD } from './getSideBarJsonLD';

let map: Map<string, BlogPosting> | undefined;

export const getBlogDetailJsonLD = (
  blogId: string,
): BlogPosting | undefined => {
  if (!map) {
    map = new Map();
  }
  let json = map.get(blogId);
  if (!json) {
    const meta = getMetaByBlogId(blogId);
    // in case of invalid blogId, return empty
    if (!meta) {
      return undefined;
    }

    json = {
      '@type': 'BlogPosting',
      headline: meta.title,
      image: 'https://www.example.com/images/blog1.jpg',
      author: getSideBarJsonLD(),
      datePublished: meta.datetime,
      // dateModified: '2023-05-01',
      mainEntityOfPage: `https://xboy2012.github.io/blog/${blogId}`,
      description: meta.desc,
      // keywords: ['blog', 'introduction', 'first post'],
    };
    map.set(blogId, json);
  }
  return json;
};

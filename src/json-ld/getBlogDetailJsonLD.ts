import type { BlogPosting } from 'schema-dts';
import { getMetaByBlogId } from '../utils/getMetaByBlogId';
import { getSideBarJsonLD } from './getSideBarJsonLD';
import { getFullUrl } from '../utils/getFullUrl';

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

    const blogUrl = getFullUrl(`/blog/${blogId}`);

    json = {
      '@type': 'BlogPosting',
      'headline': meta.title,
      'image': getFullUrl(meta.image),
      'author': getSideBarJsonLD(),
      'datePublished': meta.datetime,
      // dateModified: '2023-05-01',
      'mainEntityOfPage': blogUrl,
      'url': blogUrl,
      'description': meta.desc,
      // keywords: ['blog', 'introduction', 'first post'],
    };
    map.set(blogId, json);
  }
  return json;
};

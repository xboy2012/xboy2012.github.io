import type { BlogPosting } from 'schema-dts';
import { getSideBarJsonLD } from './getSideBarJsonLD';
import { getFullUrl } from '../utils/getFullUrl';
import type { BlogData } from '../types';

let map: Map<string, BlogPosting> | undefined;

export const getBlogDetailJsonLD = (
  meta: BlogData,
): BlogPosting | undefined => {
  if (!map) {
    map = new Map();
  }
  const blogId = meta.id;
  let json = map.get(blogId);
  if (!json) {
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

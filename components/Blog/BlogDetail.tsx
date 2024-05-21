import type { ComponentType } from 'react';
import type { BlogData } from '../../src/types';
import { Article } from '../Article';
import { ArticleTitle } from '../ArticleTitle';
import { BlogMeta } from './BlogMeta';

export const BlogDetail = ({
  meta,
  Component,
}: {
  meta: BlogData;
  Component: ComponentType;
}) => {
  const { title, category, datetime } = meta;
  return (
    <Article>
      <ArticleTitle title="Blog" />
      <BlogMeta title={title} category={category} datetime={datetime} />
      <div>
        <Component />
      </div>
    </Article>
  );
};

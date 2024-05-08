import { type ComponentType } from 'react';
import type { BlogData } from '../../src/types';
import { Article } from '../Article';
import { ArticleTitle } from '../ArticleTitle';
import { BlogMeta } from './BlogMeta';

export const BlogDetail = ({
  meta,
  Component,
}: {
  meta: Readonly<BlogData>;
  Component: ComponentType;
}) => {
  const { title, desc, category, datetime } = meta;
  return (
    <Article>
      <ArticleTitle title="Blog" />
      <BlogMeta
        title={title}
        desc={desc}
        category={category}
        datetime={datetime}
      />
      <div>
        <Component />
      </div>
    </Article>
  );
};

import { Article } from '../Article';
import { ArticleTitle } from '../ArticleTitle';
import { BlogList } from './BlogList';
import { JsonLD } from './JsonLD';
import type { BlogData } from '../../src/types';

export const Blog = ({ blogs }: { blogs: readonly BlogData[] }) => {
  return (
    <Article>
      <JsonLD blogs={blogs} />
      <ArticleTitle title="Blog" />
      <BlogList blogs={blogs} />
    </Article>
  );
};

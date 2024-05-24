import { Article } from '../Article';
import { ArticleTitle } from '../ArticleTitle';
import { BlogList } from './BlogList';
import { JsonLD } from './JsonLD';

export const Blog = () => {
  return (
    <Article>
      <JsonLD />
      <ArticleTitle title="Blog" />
      <BlogList />
    </Article>
  );
};

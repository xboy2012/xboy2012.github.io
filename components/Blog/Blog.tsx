import { ArticleTitle } from '../ArticleTitle';
import { BlogList } from './BlogList';
import { Article } from '../Article';

export const Blog = () => {
  return (
    <Article>
      <ArticleTitle title="Blog" />
      <BlogList />
    </Article>
  );
};

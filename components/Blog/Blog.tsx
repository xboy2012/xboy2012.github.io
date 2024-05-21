import { Article } from '../Article';
import { ArticleTitle } from '../ArticleTitle';
import { BlogList } from './BlogList';

export const Blog = () => {
  return (
    <Article>
      <ArticleTitle title="Blog" />
      <BlogList />
    </Article>
  );
};

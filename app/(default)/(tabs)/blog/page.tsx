import { Article } from '../../../../components/Article';
import { ArticleTitle } from '../../../../components/ArticleTitle';
import { BlogList } from './BlogList';

export default function Blog() {
  return (
    <Article>
      <ArticleTitle title="Blog" />
      <BlogList />
    </Article>
  );
}

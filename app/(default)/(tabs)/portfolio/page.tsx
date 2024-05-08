import { Article } from '../../../../components/Article';
import { ArticleTitle } from '../../../../components/ArticleTitle';
import { Projects } from '../../../../components/Portfolio/Projects';

export default function Portfolio() {
  return (
    <Article>
      <ArticleTitle title="Portfolio" />
      <Projects />
    </Article>
  );
}

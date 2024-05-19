import { Article } from '../Article';
import { ArticleTitle } from '../ArticleTitle';
import { Projects } from './Projects';

export const Portfolio = () => {
  return (
    <Article>
      <ArticleTitle title="Portfolio" />
      <Projects />
    </Article>
  );
};

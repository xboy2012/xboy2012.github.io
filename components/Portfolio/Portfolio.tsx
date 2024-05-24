import { Article } from '../Article';
import { ArticleTitle } from '../ArticleTitle';
import { Projects } from './Projects';
import { JsonLD } from './JsonLD';

export const Portfolio = () => {
  return (
    <Article>
      <JsonLD />
      <ArticleTitle title="Portfolio" />
      <Projects />
    </Article>
  );
};

import { Article } from '../Article';
import { ArticleTitle } from '../ArticleTitle';
import { Projects } from './Projects';
import { JsonLD } from './JsonLD';
import type { ProjectData } from '../../src/types';

export const Portfolio = ({
  projects,
}: {
  projects: readonly ProjectData[];
}) => {
  return (
    <Article>
      <JsonLD projects={projects} />
      <ArticleTitle title="Portfolio" />
      <Projects projects={projects} />
    </Article>
  );
};

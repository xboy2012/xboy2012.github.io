import { Article } from '../Article';
import { ArticleTitle } from '../ArticleTitle';
import { Education } from './Education';
import { Experience } from './Experience';
import { Skill } from './Skill';
import { JsonLD } from './JsonLD';

export const Resume = () => {
  return (
    <Article>
      <JsonLD />
      <ArticleTitle title="Resume" />
      <Education />
      <Experience />
      <Skill />
    </Article>
  );
};

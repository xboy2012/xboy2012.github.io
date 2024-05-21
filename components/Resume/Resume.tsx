import { Article } from '../Article';
import { ArticleTitle } from '../ArticleTitle';
import { Education } from './Education';
import { Experience } from './Experience';
import { Skill } from './Skill';

export const Resume = () => {
  return (
    <Article>
      <ArticleTitle title="Resume" />
      <Education />
      <Experience />
      <Skill />
    </Article>
  );
};

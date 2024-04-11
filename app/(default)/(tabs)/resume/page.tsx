import { ArticleTitle } from '../../../../components/ArticleTitle';
import { Article } from '../../../../components/Article';
import { Education } from './Education';
import { Experience } from './Experience';
import { Skill } from './Skill';

export default function Resume() {
  return (
    <Article>
      <ArticleTitle title="Resume" />
      <Education />
      <Experience />
      <Skill />
    </Article>
  );
}

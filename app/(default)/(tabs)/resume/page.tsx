import { Article } from '../../../../components/Article';
import { ArticleTitle } from '../../../../components/ArticleTitle';
import { Education } from '../../../../components/Resume/Education';
import { Experience } from '../../../../components/Resume/Experience';
import { Skill } from '../../../../components/Resume/Skill';

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

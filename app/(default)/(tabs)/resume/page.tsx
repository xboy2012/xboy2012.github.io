import { Article } from '../../../../components/Article';
import { Education } from '../../../../components/Resume/Education';
import { Experience } from '../../../../components/Resume/Experience';
import { Skill } from '../../../../components/Resume/Skill';

export default function Resume() {
  return (
    <Article title="Resume">
      <Education />
      <Experience />
      <Skill />
    </Article>
  );
}

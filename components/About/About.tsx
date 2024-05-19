import { ArticleTitle } from '../ArticleTitle';
import { AboutText } from './AboutText';
import { Service } from './Service';
import { Clients } from './Clients';
import { Article } from '../Article';

export const About = () => {
  return (
    <Article>
      <ArticleTitle title="About Me" />
      <AboutText />
      <Service />
      <Clients />
    </Article>
  );
};

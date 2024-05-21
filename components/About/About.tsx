import { Article } from '../Article';
import { ArticleTitle } from '../ArticleTitle';
import { AboutText } from './AboutText';
import { Service } from './Service';
import { Clients } from './Clients';

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

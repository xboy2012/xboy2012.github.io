import { Article } from '../Article';
import { ArticleTitle } from '../ArticleTitle';
import { AboutText } from './AboutText';
import { Service } from './Service';
import { Clients } from './Clients';
import { JsonLD } from './JsonLD';

export const About = () => {
  return (
    <Article>
      <JsonLD />
      <ArticleTitle title="About Me" />
      <AboutText />
      <Service />
      <Clients />
    </Article>
  );
};

import { AboutText } from './AboutText';
import { Service } from './Service';
import { Testimonials } from './Testimonials';
import { Clients } from './Clients';
import { ArticleTitle } from '../../../../components/ArticleTitle';
import { Article } from '../../../../components/Article';

export default function About() {
  return (
    <Article>
      <ArticleTitle title="About Me" />
      <AboutText />
      <Service />
      <Testimonials />
      <Clients />
    </Article>
  );
}

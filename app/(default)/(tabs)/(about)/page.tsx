import { AboutText } from './AboutText';
import { Service } from './Service';
import { Testimonials } from './Testimonials';
import { TestimonialDialog } from './TestimonialDialog';
import { Clients } from './Clients';
import { ArticleTitle } from '../../../../components/ArticleTitle';

export default function About() {
  return (
    <article className="animate-fade">
      <ArticleTitle title="About Me" />
      <AboutText />
      <Service />
      <Testimonials />
      <TestimonialDialog />
      <Clients />
    </article>
  );
}

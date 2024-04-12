import { AboutText } from '../../../../components/About/AboutText';
import { Service } from '../../../../components/About/Service';
import { Testimonials } from '../../../../components/About/Testimonials';
import { Clients } from '../../../../components/About/Clients';
import { Article } from '../../../../components/Article';

export default function About() {
  return (
    <Article title="About Me">
      <AboutText />
      <Service />
      <Testimonials />
      <Clients />
    </Article>
  );
}

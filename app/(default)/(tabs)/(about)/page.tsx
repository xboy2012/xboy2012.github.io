import { AboutText } from "./AboutText";
import { Service } from "./Service";
import { Testimonials } from "./Testimonials";
import { TestimonialDialog } from "./TestimonialDialog";
import { Clients } from "./Clients";
import styles from "./index.module.css";

export default function Home() {
  return (
    <article className="about active">
      <header>
        <h2 className={`h2 ${styles.articleTitle}`}>About me</h2>
      </header>
      <AboutText />
      <Service />
      <Testimonials />
      <TestimonialDialog />
      <Clients />
    </article>
  );
}

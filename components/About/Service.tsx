import { ServiceItem } from './ServiceItem';
import src from '../../src/utils/getImageUrl';

export const Service = () => {
  return (
    <section className="mb-[35px]">
      <h3 className="mb-[20px] text-white2 capitalize text-2">
        What I Am Doing
      </h3>

      <ul className="grid grid-cols-1fr gap-[20px] xl:grid-cols-1fr1fr xl:gap-y-[20px] xl:gap-x-[25px]">
        <ServiceItem
          name="Frontend Development"
          icon={src(require('./images/icon-frontend.svg'))}
          desc="High-quality frontend development using various frameworks"
        />
        <ServiceItem
          name="Full Stack Development"
          icon={src(require('./images/icon-fullstack.svg'))}
          desc="Isomorphic development for both frontend and backend"
        />
        <ServiceItem
          name="Software Architect"
          icon={src(require('./images/icon-arch.svg'))}
          desc="Design comprehensive and effective system architect for commercial software"
        />
        <ServiceItem
          name="DevOps"
          icon={src(require('./images/icon-devops.svg'))}
          desc="Leverage my expertise in CI/CD, improving efficiency and reducing errors"
        />
      </ul>
    </section>
  );
};

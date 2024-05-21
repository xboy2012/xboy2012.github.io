import { ServiceItem } from './ServiceItem';
import { services } from '../../src/services';

export const Service = () => {
  return (
    <section className="mb-[35px]">
      <h3 className="mb-[20px] text-white2 capitalize text-2">
        What I Am Doing
      </h3>

      <ul className="grid grid-cols-1fr gap-[20px] xl:grid-cols-1fr1fr xl:gap-y-[20px] xl:gap-x-[25px]">
        {services.map(({ name, image, desc }) => {
          return (
            <ServiceItem key={name} name={name} icon={image} desc={desc} />
          );
        })}
      </ul>
    </section>
  );
};

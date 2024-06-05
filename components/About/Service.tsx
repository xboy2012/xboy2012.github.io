import { ServiceItem } from './ServiceItem';
import { services } from '../../src/services';

export const Service = () => {
  return (
    <section className="mb-[35px]">
      <h3 className="mb-[20px] text-white2 capitalize text-2">
        What I Am Doing
      </h3>

      <ul className="grid grid-cols-1fr gap-[20px] xl:grid-cols-1fr1fr xl:gap-y-[20px] xl:gap-x-[25px]">
        {services.map(({ id, name, desc }) => {
          return <ServiceItem key={id} id={id} name={name} desc={desc} />;
        })}
      </ul>
    </section>
  );
};

import { cx } from '../../src/utils/cx';
import { ServiceItem } from './ServiceItem';
import { userData } from '../../src/data';

export const Service = () => {
  return (
    <section className="mb-[35px] print:mb-4">
      <h3 className="mb-[20px] text-white2 capitalize text-2 print:text-inherit print:mb-2">
        What I Am Doing
      </h3>

      <ul
        className={cx(
          'grid grid-cols-1fr gap-[20px] xl:grid-cols-1fr1fr xl:gap-y-[20px] xl:gap-x-[25px]',
          'print:!gap-0',
        )}
      >
        {userData.services.map(({ id, name, desc }) => {
          return <ServiceItem key={id} id={id} name={name} desc={desc} />;
        })}
      </ul>
    </section>
  );
};

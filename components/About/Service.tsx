import { cx } from '../../src/utils/cx';
import { ServiceItem } from './ServiceItem';
import { userData } from '../../src/data';

export const Service = () => {
  return (
    <section className="mb-9 print:mb-4">
      <h3 className="mb-5 text-white2 capitalize text-2 print:text-inherit print:mb-2">
        What I Am Doing
      </h3>

      <ul
        className={cx(
          'grid grid-cols-1fr gap-5 xl:grid-cols-1fr1fr xl:gap-y-5 xl:gap-x-6',
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

import { cx } from '../../src/utils/cx';
import { ServiceItem } from './ServiceItem';
import { userData } from '../../src/data';

export const Service = () => {
  return (
    <section className="mb-9 print:mb-4">
      <h3 className="text-white2 text-4.5 md:text-6 mb-5 capitalize print:mb-2 print:text-inherit">
        What I Am Doing
      </h3>

      <ul
        className={cx(
          'grid-cols-1fr xl:grid-cols-1fr1fr grid gap-5 xl:gap-x-6 xl:gap-y-5',
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

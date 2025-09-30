import { cx } from '../../src/utils/cx';
import { userData } from '../../src/data';

export const AboutText = () => {
  return (
    <section
      className={cx(
        'text-lightGray text-6 font-300 leading-[1.6] md:mb-[40px]',
        'print:text-inherit print:!mb-0',
      )}
    >
      {userData.intro.map((text, index) => {
        return (
          <p className="mb-[15px]" key={index}>
            {text}
          </p>
        );
      })}
    </section>
  );
};

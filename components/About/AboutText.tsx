import { cx } from '../../src/utils/cx';
import { userData } from '../../src/data';

export const AboutText = () => {
  return (
    <section
      className={cx(
        'text-lightGray text-3.5 md:text-4 font-300 leading-[1.6] md:mb-10',
        'print:text-inherit print:!mb-0',
      )}
    >
      {userData.intro.map((text, index) => {
        return (
          <p className="mb-4" key={index}>
            {text}
          </p>
        );
      })}
    </section>
  );
};

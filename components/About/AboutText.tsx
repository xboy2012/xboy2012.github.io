import { cx } from '../../src/utils/cx';
import { userData } from '../../src/data';

export const AboutText = () => {
  return (
    <section
      className={cx(
        'text-3.5 leading-x1.6 font-300 text-lightGray md:mb-10 md:text-4',
        'print:!mb-0 print:text-inherit',
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

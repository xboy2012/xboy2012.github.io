import { userData } from '../../../../src/data';

export const AboutText = () => {
  return (
    <section className="text-lightGray text-6 font-300 leading-[1.6] md:mb-[40px]">
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

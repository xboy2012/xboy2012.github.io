import { cx } from '../../src/utils/cx';
import { userData } from '../../src/data';
import { SkillItem } from './SkillItem';

export const Skill = () => {
  return (
    <section className="break-inside-avoid">
      <h3 className="mb-5 text-4.5 text-white2 capitalize md:text-6 print:mb-4 print:text-inherit">
        My skills
      </h3>

      <ul
        className={cx(
          'relative bg-borderGradientOnyx',
          'px-4 pt-11 pb-4 md:px-7.5 md:pt-6 md:pb-7.5',
          'z-1 cursor-pointer rounded-3.5 shadow-2 xl:shadow-2xl',
          'print:border-none print:bg-none print:p-0 print:shadow-none',
        )}
      >
        <div className="absolute inset-px -z-1 rounded-inherit bg-eerieBlack1 bg-bgGradientJet print:hidden" />
        {userData.skills.map(({ skill, percent }, index) => {
          const isLast = index === userData.skills.length - 1;
          return (
            <SkillItem
              key={skill}
              skill={skill}
              percent={percent}
              isLast={isLast}
            />
          );
        })}
      </ul>
    </section>
  );
};

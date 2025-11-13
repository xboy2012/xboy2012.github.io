import { cx } from '../../src/utils/cx';
import { userData } from '../../src/data';
import { SkillItem } from './SkillItem';

export const Skill = () => {
  return (
    <section className="break-inside-avoid">
      <h3 className="text-white2 text-4.5 md:text-6 mb-5 capitalize print:mb-4 print:text-inherit">
        My skills
      </h3>

      <ul
        className={cx(
          'bg-borderGradientOnyx relative',
          'px-4 pt-11 pb-4 md:px-7.5 md:pt-6 md:pb-7.5',
          'rounded-3.5 shadow-2 z-1 cursor-pointer xl:shadow-2xl',
          'print:border-none print:bg-none print:p-0 print:shadow-none',
        )}
      >
        <div className="bg-bgGradientJet bg-eerieBlack1 rounded-inherit absolute inset-px -z-1 print:hidden" />
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

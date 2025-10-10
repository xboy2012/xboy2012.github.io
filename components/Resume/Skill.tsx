import { cx } from '../../src/utils/cx';
import { userData } from '../../src/data';
import { SkillItem } from './SkillItem';

export const Skill = () => {
  return (
    <section className="skill break-inside-avoid">
      <h3 className="text-white2 capitalize text-4.5 md:text-6 mb-5 print:mb-4 print:text-inherit">
        My skills
      </h3>

      <ul
        className={cx(
          'relative bg-borderGradientOnyx',
          'pt-11 pb-4 px-4 md:pt-6 md:pb-7.5 md:px-7.5',
          'rounded-3.5 shadow-2 cursor-pointer z-1',
          'print:bg-none print:border-none print:p-0 print:shadow-none',
        )}
      >
        <div className="absolute inset-px bg-bgGradientJet bg-eerieBlack1 rounded-inherit -z-1 print:hidden" />
        {userData.skills.map(({ skill, percent }) => {
          return <SkillItem key={skill} skill={skill} percent={percent} />;
        })}
      </ul>
    </section>
  );
};

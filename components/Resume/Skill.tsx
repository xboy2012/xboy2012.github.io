import { cx } from '../../src/utils/cx';
import { userData } from '../../src/data';
import { SkillItem } from './SkillItem';

export const Skill = () => {
  return (
    <section className="skill">
      <h3 className="text-white2 capitalize text-2 mb-5">My skills</h3>

      <ul
        className={cx(
          'relative bg-borderGradientOnyx',
          'pt-[45px] pb-[15px] px-[15px] md:pt-[25px] md:pb-[30px] md:px-[30px]',
          'rounded-[14px] shadow-2 cursor-pointer z-1',
        )}
      >
        <div className="absolute inset-px bg-bgGradientJet bg-eerieBlack1 rounded-inherit -z-1" />
        {userData.skills.map(({ skill, percent }) => {
          return <SkillItem key={skill} skill={skill} percent={percent} />;
        })}
      </ul>
    </section>
  );
};

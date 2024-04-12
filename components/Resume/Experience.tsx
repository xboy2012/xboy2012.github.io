import { userData } from '../../src/data';
import { IconBox } from '../IconBox';
import { TimelineList } from '../TimelineList';

export const Experience = () => {
  return (
    <section className="mb-[30px]">
      <div className="flex items-center gap-[15px] mb-[25px]">
        <IconBox />
        <h3 className="text-white2 capitalize text-2">Experience</h3>
      </div>
      <TimelineList data={userData.workExperiences} />
    </section>
  );
};

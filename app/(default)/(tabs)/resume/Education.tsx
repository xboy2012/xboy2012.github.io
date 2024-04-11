import { userData } from '../../../../src/data';
import { IconBox } from '../../../../components/IconBox';
import { TimelineList } from '../../../../components/TimelineList';

export const Education = () => {
  return (
    <section className="mb-[30px]">
      <div className="flex items-center gap-[15px] mb-[25px]">
        <IconBox />
        <h3 className="text-white2 capitalize text-2">Education</h3>
      </div>
      <TimelineList data={userData.educations} />
    </section>
  );
};

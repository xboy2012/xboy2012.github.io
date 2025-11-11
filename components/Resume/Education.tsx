import { userData } from '../../src/data';
import { IconBox } from '../IconBox';
import { TimelineList } from '../TimelineList';

export const Education = () => {
  return (
    <section className="mb-7.5">
      <div className="mb-6 flex items-center gap-4">
        <IconBox />
        <h3 className="text-4.5 md:text-6 capitalize">Education</h3>
      </div>
      <TimelineList data={userData.educations} />
    </section>
  );
};

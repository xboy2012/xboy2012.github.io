import { userData } from '../../src/data';
import { IconBox } from '../IconBox';
import { TimelineList } from '../TimelineList';

export const Education = () => {
  return (
    <section className="mb-7.5">
      <div className="flex items-center gap-4 mb-6">
        <IconBox />
        <h3 className="capitalize text-2">Education</h3>
      </div>
      <TimelineList data={userData.educations} />
    </section>
  );
};

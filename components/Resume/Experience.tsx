import { useMemo } from 'react';
import type { TimelineItem } from '../../src/types';
import { userData } from '../../src/data';
import { IconBox } from '../IconBox';
import { TimelineList } from '../TimelineList';

export const Experience = () => {
  const data = useMemo(() => {
    return userData.workExperiences.map((o): TimelineItem => {
      return {
        from: o.from,
        to: o.to,
        title: `${o.title} at ${o.company}`,
        desc: o.desc,
      };
    });
  }, []);
  return (
    <section className="mb-7.5">
      <div className="mb-6 flex items-center gap-4">
        <IconBox />
        <h3 className="text-4.5 capitalize md:text-6">Experience</h3>
      </div>
      <TimelineList data={data} />
    </section>
  );
};

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
      <div className="flex items-center gap-4 mb-6">
        <IconBox />
        <h3 className="capitalize text-2">Experience</h3>
      </div>
      <TimelineList data={data} />
    </section>
  );
};

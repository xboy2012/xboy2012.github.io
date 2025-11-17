import type { FC } from 'react';
import { userData } from '../../src/data';
import { IconBox } from '../IconBox';
import {
  TimelineList,
  TimelineListItem,
  TimelineListItemDesc,
  TimelineListItemPeriod,
  TimelineListItemTitle,
} from '../TimelineList';

const ExperienceItem: FC<{
  from: string;
  to: string;
  title: string;
  desc: readonly string[];
  company: string;
  isFirst: boolean;
  isLast: boolean;
}> = ({ from, to, title, company, desc, isFirst, isLast }) => {
  return (
    <TimelineListItem isFirst={isFirst} isLast={isLast}>
      <div className="print:flex">
        <TimelineListItemTitle>{`${title} at ${company}`}</TimelineListItemTitle>
        <TimelineListItemPeriod from={from} to={to} />
      </div>
      {desc.map((text, i) => {
        return (
          <TimelineListItemDesc key={i}>
            <span>•</span> <span>{text}</span>
          </TimelineListItemDesc>
        );
      })}
    </TimelineListItem>
  );
};

export const Experience = () => {
  const lastIndex = userData.workExperiences.length - 1;
  return (
    <section className="mb-7.5">
      <div className="mb-6 flex items-center gap-4">
        <IconBox />
        <h3 className="text-4.5 capitalize md:text-6">Experience</h3>
      </div>
      <TimelineList>
        {userData.workExperiences.map(
          ({ from, to, title, company, desc }, index) => {
            return (
              <ExperienceItem
                key={index}
                isFirst={index === 0}
                isLast={index === lastIndex}
                from={from}
                to={to}
                title={title}
                company={company}
                desc={desc}
              />
            );
          },
        )}
      </TimelineList>
    </section>
  );
};

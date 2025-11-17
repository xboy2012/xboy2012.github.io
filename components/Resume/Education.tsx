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

const EducationItem: FC<{
  from: string;
  to: string;
  title: string;
  desc: string;
  isFirst: boolean;
  isLast: boolean;
}> = ({ from, to, title, desc, isFirst, isLast }) => {
  return (
    <TimelineListItem isFirst={isFirst} isLast={isLast}>
      <div className="print:flex">
        <TimelineListItemTitle>{title}</TimelineListItemTitle>
        <TimelineListItemPeriod from={from} to={to} />
      </div>
      <TimelineListItemDesc>{desc}</TimelineListItemDesc>
    </TimelineListItem>
  );
};

export const Education = () => {
  const lastIndex = userData.educations.length - 1;
  return (
    <section className="mb-7.5">
      <div className="mb-6 flex items-center gap-4">
        <IconBox />
        <h3 className="text-4.5 capitalize md:text-6">Education</h3>
      </div>
      <TimelineList>
        {userData.educations.map(({ from, to, title, desc }, index) => {
          return (
            <EducationItem
              key={index}
              isFirst={index === 0}
              isLast={index === lastIndex}
              from={from}
              to={to}
              title={title}
              desc={desc}
            />
          );
        })}
      </TimelineList>
    </section>
  );
};

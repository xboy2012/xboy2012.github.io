import { ProjectItem } from './ProjectItem';
import type { ProjectData } from '../../src/types';

export const ProjectList = ({ data }: { data: ReadonlyArray<ProjectData> }) => {
  return (
    <ul className="grid-cols-1fr lg:grid-cols-1fr1fr xl:grid-cols-r3_1fr print:!grid-cols-r3_1fr mb-2.5 grid gap-7.5">
      {data.map(({ id, category, link, title, image }) => {
        return (
          <ProjectItem
            key={id}
            category={category}
            link={link}
            title={title}
            image={image}
          />
        );
      })}
    </ul>
  );
};

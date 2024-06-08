'use client';
import { useMemo, useState } from 'react';
import type { Category } from './types';
import type { ProjectData } from '../../src/types';
import { ProjectList } from './ProjectList';
import { ProjectFilterFlat } from './ProjectFilterFlat';
import { ProjectFilterDropDown } from './ProjectFilterDropDown';

export const Projects = ({ projects }: { projects: ProjectData[] }) => {
  const [curCategory, setCurCategory] = useState<Category>('All');

  const filteredProjects = useMemo<ReadonlyArray<ProjectData>>(() => {
    if (curCategory === 'All') {
      return projects;
    }
    return projects.filter((project) => project.category === curCategory);
  }, [curCategory, projects]);

  return (
    <section className="projects">
      <ProjectFilterFlat category={curCategory} onChange={setCurCategory} />
      <ProjectFilterDropDown category={curCategory} onChange={setCurCategory} />
      <ProjectList data={filteredProjects} />
    </section>
  );
};

'use client';
import { useMemo, useState } from 'react';
import type { Category } from './types';
import { projects } from '../../src/projects';
import { ProjectList } from './ProjectList';
import { ProjectFilterFlat } from './ProjectFilterFlat';
import { ProjectFilterDropDown } from './ProjectFilterDropDown';

export const Projects = () => {
  const [curCategory, setCurCategory] = useState<Category>('All');

  const filteredProjects = useMemo(() => {
    if (curCategory === 'All') {
      return projects;
    }
    return projects.filter((project) => project.category === curCategory);
  }, [curCategory]);

  return (
    <section className="projects">
      <ProjectFilterFlat category={curCategory} onChange={setCurCategory} />
      <ProjectFilterDropDown category={curCategory} onChange={setCurCategory} />
      <ProjectList data={filteredProjects} />
    </section>
  );
};

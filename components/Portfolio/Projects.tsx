'use client';
import { useMemo, useState } from 'react';
import type { Category } from './types';
import { projects } from '../../src/projects';
import { ProjectList } from './ProjectList';
import { ProjectFilter } from './ProjectFilter';

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
      <ProjectFilter category={curCategory} onChange={setCurCategory} />
      <ProjectList data={filteredProjects} />
    </section>
  );
};

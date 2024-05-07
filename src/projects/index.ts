import type { ProjectData } from '../types';
import src from '../utils/getImageUrl';

export const projects: ProjectData[] = [
  {
    id: 1,
    category: 'Web development',
    link: '#',
    title: 'Finance',
    image: src(require('./images/project-1.jpg')),
  },
  {
    id: 2,
    category: 'Web design',
    link: '#',
    title: 'ABC',
    image: src(require('./images/project-2.png')),
  },
  {
    id: 3,
    category: 'Web design',
    link: '#',
    title: 'Fundo',
    image: src(require('./images/project-3.jpg')),
  },
  {
    id: 4,
    category: 'Applications',
    link: '#',
    title: 'Brawlhalla',
    image: src(require('./images/project-4.png')),
  },
  {
    id: 5,
    category: 'Web design',
    link: '#',
    title: 'DSM.',
    image: src(require('./images/project-5.png')),
  },
  {
    id: 6,
    category: 'Web design',
    link: '#',
    title: 'MetaSpark',
    image: src(require('./images/project-6.png')),
  },
  {
    id: 7,
    category: 'Web development',
    link: '#',
    title: 'Summary',
    image: src(require('./images/project-7.png')),
  },
  {
    id: 8,
    category: 'Applications',
    link: '#',
    title: 'Task Manager',
    image: src(require('./images/project-8.jpg')),
  },
  {
    id: 9,
    category: 'Web development',
    link: '#',
    title: 'Arrival',
    image: src(require('./images/project-9.png')),
  },
];

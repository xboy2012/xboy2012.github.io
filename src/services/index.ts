import type { ServiceData } from '../types';
import src from '../utils/getImageUrl';

export const services: ServiceData[] = [
  {
    name: 'Frontend Development',
    image: src(require('./images/icon-frontend.svg')),
    desc: 'High-quality frontend development using various frameworks',
  },
  {
    name: 'Full Stack Development',
    image: src(require('./images/icon-fullstack.svg')),
    desc: 'Isomorphic development for both frontend and backend',
  },
  {
    name: 'Software Architect',
    image: src(require('./images/icon-arch.svg')),
    desc: 'Design comprehensive and effective system architect for commercial software',
  },
  {
    name: 'DevOps',
    image: src(require('./images/icon-devops.svg')),
    desc: 'Leverage my expertise in CI/CD, improving efficiency and reducing errors',
  },
];

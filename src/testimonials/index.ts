import type { TestimonialData } from '../types';
import src from '../utils/getImageUrl';

// TODO: FAKE DATA
export const testimonials: TestimonialData[] = [
  {
    name: 'Daniel lewis',
    avatar: src(require('./images/avatar-1.png')),
    datetime: '2024-01-01',
    text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
  },
  {
    name: 'Jessica miller',
    avatar: src(require('./images/avatar-2.png')),
    datetime: '2024-01-02',
    text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
  },
  {
    name: 'Emily evans',
    avatar: src(require('./images/avatar-3.png')),
    datetime: '2024-04-03',
    text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
  },
  {
    name: 'Henry william',
    avatar: src(require('./images/avatar-4.png')),
    datetime: '2023-12-31',
    text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
  },
];

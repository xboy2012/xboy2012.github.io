import type { BlogData } from '../types';
import src from '../utils/getImageUrl';

export const blogs: ReadonlyArray<Readonly<BlogData>> = [
  {
    id: 'design-conferences-2022',
    title: 'Design conferences in 2022',
    desc: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
    image: src(require('./images/blog-1.jpg')),
    datetime: '2022-02-23',
    category: 'Design',
  },
  {
    id: 'best-fonts-every-designer',
    title: 'Best fonts every designer',
    desc: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
    image: src(require('./images/blog-2.jpg')),
    datetime: '2022-02-23',
    category: 'Design',
  },
  {
    id: 'design-digest-80',
    link: '#',
    title: 'Design digest #80',
    desc: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.',
    image: src(require('./images/blog-3.jpg')),
    datetime: '2022-02-23',
    category: 'Design',
  },
  {
    id: 'ui-interactions-of-the-week',
    link: '#',
    title: 'UI interactions of the week',
    desc: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.',
    image: src(require('./images/blog-4.jpg')),
    datetime: '2022-02-23',
    category: 'Design',
  },
  {
    id: 'the-forgotten-art-of-spacing',
    link: '#',
    title: 'The forgotten art of spacing',
    desc: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.',
    image: src(require('./images/blog-5.jpg')),
    datetime: '2022-02-23',
    category: 'Design',
  },
  {
    id: 'design-digest-79',
    link: '#',
    title: 'Design digest #79',
    desc: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.',
    image: src(require('./images/blog-6.jpg')),
    datetime: '2022-02-23',
    category: 'Design',
  },
];

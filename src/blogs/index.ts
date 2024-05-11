import type { BlogData } from '../types';
import src from '../utils/getImageUrl';

let _blogs: ReadonlyArray<BlogData>;

export const getBlogs = () => {
  if (!_blogs) {
    _blogs = [
      {
        id: 'learn-react-js',
        link: 'https://react.dev/learn',
        title: 'Learn ReactJS',
        desc: 'Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.',
        image: src(require('./images/learn-react-js.jpg')),
        datetime: '2024-05-10',
        category: 'Development',
      },
      {
        id: 'start-building-with-next-js',
        link: 'https://nextjs.org/learn',
        title: 'Start building with Next.js',
        desc: 'Go from beginner to expert by learning the foundations of Next.js and building a fully functional demo website that uses all the latest features.',
        image: src(require('./images/next-js.jpg')),
        datetime: '2024-05-10',
        category: 'Development',
      },
      {
        id: 'intro-to-service-worker',
        title: 'Service Worker – What SEOs Need to Know',
        desc: 'A service worker is a Javascript process that runs in the browser background. The service worker runs in the background and acts as a kind of proxy between the website and the Internet and can intercept and manipulate network requests.',
        image: src(require('./images/service-worker.png')),
        datetime: '2024-05-10',
        category: 'Development',
      },
      {
        id: 'typescript-handbook',
        link: 'https://www.typescriptlang.org/docs/handbook/intro.html',
        title: 'The TypeScript Handbook',
        desc: 'The TypeScript Handbook is intended to be a comprehensive document that explains TypeScript to everyday programmers. You can read the handbook by going from top to bottom in the left-hand navigation.',
        image: src(require('./images/typescript.jpg')),
        datetime: '2024-05-10',
        category: 'Development',
      },
    ];
  }
  return _blogs;
};

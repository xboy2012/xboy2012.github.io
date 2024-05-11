import type { ProjectData } from '../types';
import src from '../utils/getImageUrl';

export const projects: ProjectData[] = [
  {
    id: 1,
    category: 'Business',
    link: 'https://www.bing.com/search?q=adventure+books&qs=n&form=QBRE&sp=-1&lq=0&pq=adventure+books',
    title: 'Bing',
    image: src(require('./images/bing.jpg')),
  },
  {
    id: 2,
    category: 'Web development',
    link: 'https://www.nio.com',
    title: 'NIO',
    image: src(require('./images/nio.jpg')),
  },
  {
    id: 3,
    category: 'Business',
    link: 'https://mobile.yangkeduo.com',
    title: 'Pinduoduo',
    image: src(require('./images/pdd.jpg')),
  },
  {
    id: 4,
    category: 'Game',
    link: 'https://lol.qq.com',
    title: 'League of Legends (英雄联盟)',
    image: src(require('./images/lol.jpg')),
  },
  {
    id: 5,
    category: 'Game',
    link: 'https://pvp.qq.com',
    title: 'Honor Of Kings (王者荣耀)',
    image: src(require('./images/pvp.jpg')),
  },
  {
    id: 6,
    category: 'Game',
    link: 'https://bns.qq.com/neo/index.html',
    title: 'Blade & Soul (剑灵)',
    image: src(require('./images/bns.jpg')),
  },
  {
    id: 7,
    category: 'AI',
    link: 'https://app.myshell.ai',
    title: 'MyShell',
    image: src(require('./images/myshell.jpg')),
  },
  {
    id: 8,
    category: 'Web development',
    link: 'https://leetcode.com',
    title: 'LeetCode',
    image: src(require('./images/leetcode.jpg')),
  },
  {
    id: 9,
    category: 'Applications',
    link: 'https://apps.apple.com/ca/app/%E6%8C%96%E8%B4%A2%E5%9F%BA%E7%B1%B3-%E5%9F%BA%E9%87%91%E7%90%86%E8%B4%A2%E6%8A%95%E8%B5%84%E4%BC%98%E8%B4%A8%E5%B9%B3%E5%8F%B0/id1290764730',
    title: 'Wacai(挖财基米)',
    image: src(require('./images/wacai.jpg')),
  },
];

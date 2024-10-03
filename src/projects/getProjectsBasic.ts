import type {
  ImportedImage,
  ProjectCategory,
  WithLooseDefault,
} from '../types';

type ProjectDataBasic = Readonly<{
  id: string;
  category: ProjectCategory;
  link: string;
  title: string;
  image: () =>
    | WithLooseDefault<ImportedImage>
    | Promise<WithLooseDefault<ImportedImage>>;
}>;

let _projects: ProjectDataBasic[] | undefined;
export const getProjectsBasic = () => {
  if (!_projects) {
    _projects = [
      {
        id: 'teams',
        category: 'Business',
        link: 'https://www.microsoft.com/en-ca/microsoft-teams/group-chat-software',
        title: 'Microsoft Teams',
        image: () => import('./images/teams.jpg'),
      },
      {
        id: 'bing',
        category: 'Business',
        link: 'https://www.bing.com/search?q=adventure+books&qs=n&form=QBRE&sp=-1&lq=0&pq=adventure+books',
        title: 'Microsoft Bing',
        image: () => import('./images/bing.jpg'),
      },
      {
        id: 'nio',
        category: 'Web development',
        link: 'https://www.nio.com',
        title: 'NIO',
        image: () => import('./images/nio.jpg'),
      },
      {
        id: 'pdd',
        category: 'Business',
        link: 'https://mobile.yangkeduo.com',
        title: 'Pinduoduo',
        image: () => import('./images/pdd.jpg'),
      },
      {
        id: 'lol',
        category: 'Game',
        link: 'https://lol.qq.com',
        title: 'League of Legends (英雄联盟)',
        image: () => import('./images/lol.jpg'),
      },
      {
        id: 'pvp',
        category: 'Game',
        link: 'https://pvp.qq.com',
        title: 'Honor Of Kings (王者荣耀)',
        image: () => import('./images/pvp.jpg'),
      },
      {
        id: 'bns',
        category: 'Game',
        link: 'https://bns.qq.com/neo/index.html',
        title: 'Blade & Soul (剑灵)',
        image: () => import('./images/bns.jpg'),
      },
      {
        id: 'myshell',
        category: 'AI',
        link: 'https://app.myshell.ai',
        title: 'MyShell',
        image: () => import('./images/myshell.jpg'),
      },
      {
        id: 'leetcode',
        category: 'Web development',
        link: 'https://leetcode.com',
        title: 'LeetCode',
        image: () => import('./images/leetcode.jpg'),
      },
      {
        id: 'wacai',
        category: 'Applications',
        link: 'https://apps.apple.com/ca/app/%E6%8C%96%E8%B4%A2%E5%9F%BA%E7%B1%B3-%E5%9F%BA%E9%87%91%E7%90%86%E8%B4%A2%E6%8A%95%E8%B5%84%E4%BC%98%E8%B4%A8%E5%B9%B3%E5%8F%B0/id1290764730',
        title: 'Wacai(挖财基米)',
        image: () => import('./images/wacai.jpg'),
      },
    ];
  }
  return _projects;
};

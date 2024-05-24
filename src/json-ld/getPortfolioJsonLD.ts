import type { ItemList, ListItem } from 'schema-dts';
import { userData } from '../data';
import { getProjects } from '../projects';

let json: ItemList | undefined;

export const getPortfolioJsonLD = () => {
  if (!json) {
    json = {
      '@type': 'ItemList',
      name: `${userData.name}'s Portfolio`,
      description: `A list of projects developed by ${userData.name}.`,
      url: 'https://xboy2012.github.io/portfolio/',
      itemListElement: getProjects().map((project, index): ListItem => {
        return {
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'WebSite',
            name: project.title,
            url: project.link,

            // TODO:
            // description:
            //   'An e-commerce site developed for selling products online.',

            image: project.image,
            creator: {
              '@type': 'Person',
              name: userData.name,
              '@id': 'https://xboy2012.github.io/#person',
            },
          },
        };
      }),
    };
  }
  return json;
};

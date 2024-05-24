import type { ItemList, ListItem } from 'schema-dts';
import { userData } from '../data';
import { getProjects } from '../projects';
import { getFullUrl } from '../utils/getFullUrl';
import { PERSON_ID } from '../config/json-ld';

let json: ItemList | undefined;

export const getPortfolioJsonLD = () => {
  if (!json) {
    json = {
      '@type': 'ItemList',
      name: `${userData.name}'s Portfolio`,
      description: `A list of projects developed by ${userData.name}.`,
      url: getFullUrl('/portfolio/'),
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

            image: getFullUrl(project.image),
            creator: {
              '@type': 'Person',
              name: userData.name,
              '@id': PERSON_ID,
            },
          },
        };
      }),
    };
  }
  return json;
};

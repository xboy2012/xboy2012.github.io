import type { Person } from 'schema-dts';
import { userData } from '../data';
import { services } from '../services';
import { companies } from '../companies';
import { getSideBarJsonLD } from './getSideBarJsonLD';

let json: Person | undefined;

export const getAboutJsonLD = (): Person => {
  if (!json) {
    json = Object.assign(
      <Person>{
        '@type': 'Person',
        name: userData.name,
        hasOccupation: services.map((service) => {
          return {
            '@type': 'Occupation',
            name: service.name,
            description: service.desc,
          };
        }),
        worksFor: companies.map((company) => {
          return {
            '@type': 'Organization',
            name: company.name,
            url: company.link,
          };
        }),
      },
      getSideBarJsonLD(),
    );
  }
  return json!;
};

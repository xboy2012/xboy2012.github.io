import type { Person, WithContext } from 'schema-dts';
import { userData } from '../data';
import { services } from '../services';
import { companies } from '../companies';
import { getSideBarJsonLD } from './getSideBarJsonLD';

let json: WithContext<Person> | undefined;

export const getAboutJsonLD = (): WithContext<Person> => {
  if (!json) {
    json = Object.assign({}, getSideBarJsonLD(), <WithContext<Person>>{
      '@context': 'https://schema.org',
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
    });
  }
  return json;
};

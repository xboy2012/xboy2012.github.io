import type { Person, WithContext } from 'schema-dts';
import { userData } from '../data';
import { getSideBarJsonLD } from './getSideBarJsonLD';

let json: WithContext<Person> | undefined;

export const getResumeJsonLD = (): WithContext<Person> => {
  if (!json) {
    json = Object.assign({}, getSideBarJsonLD(), <WithContext<Person>>{
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: userData.name,
      alumniOf: userData.educations.map((education) => {
        return {
          '@type': 'CollegeOrUniversity',
          name: education.title,
          // sameAs: 'https://www.universityofexample.com',
        };
      }),
      hasOccupation: userData.workExperiences.map((o) => {
        return {
          '@type': 'EmployeeRole',
          startDate: o.from,
          endDate: o.to,
          name: o.title,
          description: o.desc,
          hasOccupation: {
            '@type': 'Occupation',
            occupationLocation: {
              '@type': 'OrganizationRole',
              name: o.company,
              occupationLocation: o.location,
            },
          },
        };
      }),
    });
  }
  return json;
};

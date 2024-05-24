import type { Person } from 'schema-dts';
import { userData } from '../data';
import { getSideBarJsonLD } from './getSideBarJsonLD';

let json: Person | undefined;

export const getResumeJsonLD = (): Person => {
  if (!json) {
    json = Object.assign(
      <Person>{
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
      },
      getSideBarJsonLD(),
    );
  }
  return json!;
};

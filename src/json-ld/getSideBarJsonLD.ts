import type { Person } from 'schema-dts';
import { userData } from '../data';
import { getFullUrl } from '../utils/getFullUrl';
import { PERSON_ID } from '../config/json-ld';
import { getFaceBookUrl } from '../utils/getFaceBookUrl';
import { getGitHubUrl } from '../utils/getGitHubUrl';
import { getLinkedinUrl } from '../utils/getLinkedinUrl';
import { getNpmUrl } from '../utils/getNpmUrl';
import { getTwitterUrl } from '../utils/getTwitterUrl';

let json: Person | undefined;

export const getSideBarJsonLD = (): Person => {
  if (!json) {
    json = {
      // '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': PERSON_ID,
      'name': userData.name,
      'email': /* istanbul ignore next */ userData.email || undefined,
      'telephone': /* istanbul ignore next */ userData.phoneCA || undefined,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Richmond',
        'addressRegion': 'BC',
        'addressCountry': 'CA',
      },
      'jobTitle': userData.title,
      'description': userData.intro,
      'url': getFullUrl('/'),
      'sameAs': [
        getFaceBookUrl(userData.facebook),
        getGitHubUrl(userData.github),
        getLinkedinUrl(userData.linkedin),
        getNpmUrl(userData.npm),
        getTwitterUrl(userData.twitter),
      ].filter(Boolean),
    };
  }
  return json!;
};

import type { Person } from 'schema-dts';
import { userData } from '../data';
import { getFullUrl } from '../utils/getFullUrl';
import { PERSON_ID } from '../config/json-ld';

let json: Person | undefined;

export const getSideBarJsonLD = (): Person => {
  if (!json) {
    const { facebook, github, linkedin, npm, twitter } = userData;
    json = {
      // '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': PERSON_ID,
      name: userData.name,
      email: /* istanbul ignore next */ userData.email || undefined,
      telephone: /* istanbul ignore next */ userData.phoneCA || undefined,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Richmond',
        addressRegion: 'BC',
        addressCountry: 'CA',
      },
      jobTitle: userData.title,
      description: userData.intro,
      url: getFullUrl('/'),
      sameAs: [
        /* istanbul ignore next */ facebook
          ? `https://www.facebook.com/${facebook}`
          : '',
        /* istanbul ignore next */ github ? `https://github.com/${github}` : '',
        /* istanbul ignore next */ linkedin
          ? `https://linkedin.com/${linkedin}`
          : '',
        /* istanbul ignore next */ npm ? `https://www.npmjs.com/~${npm}` : '',
        /* istanbul ignore next */ twitter
          ? `https://twitter.com/${twitter}`
          : '',
      ].filter(Boolean),
    };
  }
  return json!;
};

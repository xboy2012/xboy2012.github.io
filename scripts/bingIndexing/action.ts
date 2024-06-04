import sitemap from '../../app/sitemap';
import { BASE_DOMAIN, BASE_URL } from '../../src/config/app';

export const action = async () => {
  // see https://www.bing.com/indexnow/getstarted#

  const key = process.env.BING_INDEX_NOW_KEY;
  if (!key) {
    throw Error('No key provided');
  }

  const sitemapObjs = await sitemap();
  const urls = sitemapObjs.map((o) => o.url);

  const response = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      host: BASE_DOMAIN,
      key: key,
      keyLocation: `${BASE_URL}/${key}.txt`,
      urlList: urls,
    }),
  });

  if (response.status >= 400) {
    throw Error('Failed to request indexing');
  }
};

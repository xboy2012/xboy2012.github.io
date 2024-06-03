import sitemap from '../../app/sitemap';
import { getSaKeyInput } from './getSaKeyInput';
import { getAccessToken } from './getAccessToken';
import { shouldRequestIndexing } from './shouldRequestIndexing';
import { requestIndexing } from './requestIndexing';

export const action = async () => {
  const key = getSaKeyInput();
  const accessToken = await getAccessToken(key);
  const sitemapObjs = await sitemap();

  const promises = sitemapObjs.map(async ({ url }) => {
    if (await shouldRequestIndexing(accessToken, url)) {
      await requestIndexing(accessToken, url);
    }
  });
  await Promise.all(promises);
};

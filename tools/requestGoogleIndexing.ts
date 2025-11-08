import { getSaKeyInput } from './googleIndexing/getSaKeyInput';
import { getAccessToken } from './googleIndexing/getAccessToken';
import sitemap from '../app/sitemap';
import { shouldRequestIndexing } from './googleIndexing/shouldRequestIndexing';
import { requestIndexing } from './googleIndexing/requestIndexing';

export const requestGoogleIndexing = async () => {
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

import type { UrlOrSrc, ImageDefinition } from '../types';
import { getFullUrl } from './getFullUrl';
import src from './getImageUrl';

const getUrl = async (value: UrlOrSrc) => {
  const urlObj = await (typeof value === 'function' ? value() : value);
  return getFullUrl(src(urlObj));
};

export const makeAbsoluteSrc = <
  K extends string,
  T extends { [P in K]: string },
>(
  field: K,
  icons: readonly ImageDefinition<K, T>[],
): Promise<readonly T[]> => {
  const promises = icons.map(async (icon) => {
    const fullUrl = await getUrl(icon[field]);
    return { ...icon, [field]: fullUrl } as T;
  });
  return Promise.all(promises);
};

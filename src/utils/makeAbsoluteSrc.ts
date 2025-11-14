import type { ImportedImage, WithLooseDefault } from '../types';
import { getFullUrl } from './getFullUrl';
import src from './getImageUrl';

type UrlOrSrc =
  | WithLooseDefault<ImportedImage>
  | Promise<WithLooseDefault<ImportedImage>>
  | (() =>
      | WithLooseDefault<ImportedImage>
      | Promise<WithLooseDefault<ImportedImage>>);

type ImageDefinition<
  K extends 'src' | 'url',
  T extends { [P in K]: string },
> = Omit<T, K> & {
  [P in K]: UrlOrSrc;
};

const getUrl = async (value: UrlOrSrc) => {
  const urlObj = await (typeof value === 'function' ? value() : value);
  return getFullUrl(src(urlObj));
};

export const makeAbsoluteSrc = <
  K extends 'src' | 'url',
  T extends { [P in K]: string },
>(
  field: K,
  icons: ImageDefinition<K, T>[],
): Promise<T[]> => {
  const promises = icons.map(async (icon) => {
    const fullUrl = await getUrl(icon[field]);
    return { ...icon, [field]: fullUrl } as T;
  });
  return Promise.all(promises);
};

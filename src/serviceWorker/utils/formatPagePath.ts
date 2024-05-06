import { getPagePathFormatMap } from './getPagePathFormatMap';

export const formatPagePath = (pagePath: string) => {
  return getPagePathFormatMap().get(pagePath) || pagePath;
};

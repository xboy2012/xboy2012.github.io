import { buildQueryString } from './buildQueryString';

export const getGoogleMapUrl = (location: string) => {
  const queryString = buildQueryString({ api: '1', query: location });
  // @see https://developers.google.com/maps/documentation/urls/get-started#forming-the-search-url
  return `https://www.google.com/maps/search/?${queryString}`;
};

import { BASE_URL } from '../config/app';

export const getFullUrl = (url: string) => {
  if (url.startsWith('https://')) {
    return url;
  }
  const path = url.startsWith('/') ? url : `/${url}`;
  return `${BASE_URL}${path}`;
};

export const getFullUrl = (url: string) => {
  if (url.startsWith('https://')) {
    return url;
  }
  const path = url.startsWith('/') ? url : `/${url}`;
  return `https://xboy2012.github.io${path}`;
};

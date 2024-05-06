export const getRscPath = (pagePath: string) => {
  return `${pagePath === '/' ? '' : pagePath}/index.txt`;
};

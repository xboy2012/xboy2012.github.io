export const getNpmUrl = (account: string | null | undefined): string => {
  if (!account) {
    return '';
  }
  return `https://www.npmjs.com/~${account}`;
};

export const getTwitterUrl = (account: string | null | undefined): string => {
  if (!account) {
    return '';
  }
  return `https://x.com/${account}`;
};

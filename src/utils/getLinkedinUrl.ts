export const getLinkedinUrl = (account: string | null | undefined): string => {
  if (!account) {
    return '';
  }
  return `https://linkedin.com/${account}`;
};

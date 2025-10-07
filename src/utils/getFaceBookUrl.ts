export const getFaceBookUrl = (account: string | null | undefined): string => {
  if (!account) {
    return '';
  }
  return `https://www.facebook.com/${account}`;
};

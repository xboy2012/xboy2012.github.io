export const getGitHubUrl = (account: string | null | undefined): string => {
  if (!account) {
    return '';
  }
  return `https://github.com/${account}`;
};

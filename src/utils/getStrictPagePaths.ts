let strictPagePaths: Set<string> | undefined;

export const getStrictPagePaths = (): Set<string> => {
  if (!strictPagePaths) {
    strictPagePaths = new Set(['/', '/resume', '/portfolio', '/blog']);
  }
  return strictPagePaths;
};

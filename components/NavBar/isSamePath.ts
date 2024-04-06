/**
 * Determine whether two paths are the same, considering potential transforms
 * @param simplePath the simplePath, must start with /
 * @param path the actual path
 * @return {boolean} true if the same, false otherwise.
 */
export const isSamePath = (simplePath: `/${string}`, path: `/${string}`): boolean => {
  if (simplePath === path) {
    return true;
  }
  if (simplePath === "/") {
    return path === "/index" || path === "/index.html";
  }
  return (
    path === `${simplePath}/` ||
    path === `${simplePath}/index` ||
    path === `${simplePath}/index.html` ||
    path === `${simplePath}.html`
  );
};

export const cx = (...classNames: unknown[]) => {
  return classNames.filter(Boolean).join(' ');
};

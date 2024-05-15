export const preventDefault = (e: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- generic function
  preventDefault: (...args: any[]) => any;
}) => {
  e.preventDefault();
};

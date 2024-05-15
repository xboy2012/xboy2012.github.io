export const interopRequireDefault = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- generic value
  value: any,
) => {
  if (!value || typeof value !== 'object') {
    return value;
  }
  if ('default' in value) {
    return value.default;
  }
  return value.default || value;
};

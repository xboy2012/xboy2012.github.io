export const interopRequireDefault = (value: any) => {
  if (!value || typeof value !== 'object') {
    return value;
  }
  if ('default' in value) {
    return value.default;
  }
  return value.default || value;
};

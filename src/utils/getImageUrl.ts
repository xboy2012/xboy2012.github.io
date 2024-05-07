import { interopRequireDefault } from './interopRequireDefault';

const getImageUrl = (value: any): string => {
  const defaultValue = interopRequireDefault(value);
  if (!defaultValue) {
    return '';
  }
  if (typeof defaultValue === 'string') {
    return defaultValue;
  }
  if (typeof defaultValue !== 'object') {
    return '';
  }
  return defaultValue.src || '';
};

export default getImageUrl;

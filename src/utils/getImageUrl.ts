import { interopRequireDefault } from './interopRequireDefault';

const getImageUrl = (value: unknown): string => {
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
  return (defaultValue as { src?: string }).src || '';
};

export default getImageUrl;

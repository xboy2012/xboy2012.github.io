import { format } from 'prettier';

export const prettierCode = (code: string): Promise<string> => {
  return format(code, { parser: 'babel' });
};

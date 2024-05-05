import { getFileInfo as prettierGetFileInfo } from 'prettier';

export const shouldRunPrettier = async (file: string) => {
  const { ignored, inferredParser } = await prettierGetFileInfo(file);
  return !ignored && !!inferredParser;
};

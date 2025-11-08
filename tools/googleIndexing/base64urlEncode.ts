export const base64urlEncode = (
  value: unknown,
  encoding: 'binary' | 'utf8',
): string => {
  return Buffer.from(JSON.stringify(value), encoding)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
};

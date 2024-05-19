/* istanbul ignore file */

export const replaceRequestUrl = (request: Request, newUrl: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- exclude url
  const { url, ...options } = request.clone();
  return new Request(newUrl, options);
};

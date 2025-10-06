/* istanbul ignore file */

export const replaceRequestUrl = (request: Request, newUrl: string) => {
  const options = { ...request.clone() } as RequestInit & { url?: string };
  delete options.url;
  return new Request(newUrl, options);
};

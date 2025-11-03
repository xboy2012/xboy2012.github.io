export const isUserAgentMobile = (userAgent: string | null | undefined) => {
  if (!userAgent) {
    return false;
  }
  return /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
};

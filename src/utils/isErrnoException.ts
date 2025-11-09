export const isErrnoException = (
  error: unknown,
): error is NodeJS.ErrnoException => {
  return !!error && typeof error === 'object' && !Array.isArray(error);
};

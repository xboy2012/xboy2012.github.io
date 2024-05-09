let files: string[] | undefined;

export const getNextStaticFiles = () => {
  if (!files) {
    files = NEXT_STATIC_FILES;
  }
  return files;
};

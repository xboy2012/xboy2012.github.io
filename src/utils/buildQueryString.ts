export const buildQueryString = (
  query: Record<string, string | null | undefined>,
) => {
  const params = new URLSearchParams();
  for (const key of Object.keys(query)) {
    if (key === '') {
      continue;
    }
    const value = query[key];
    if (value === undefined || value === null || value === '') {
      continue;
    }
    params.append(key, value);
  }
  return params.toString();
};

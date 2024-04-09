const Months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const;

export const formatDateTime = (
  str: `${string}-${string}-${string}`,
): string => {
  const [yyyy, mm, dd] = str.split('-');
  const month = Months[+mm - 1];
  return `${month} ${dd}, ${yyyy}`;
};

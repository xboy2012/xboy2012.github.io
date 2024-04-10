export const displayPhoneCA = (phone: string) => {
  const country = phone.substring(0, 2);
  const p1 = phone.substring(2, 5);
  const p2 = phone.substring(5, 8);
  const p3 = phone.substring(8);
  return `${country}(${p1})${p2}-${p3}`;
};

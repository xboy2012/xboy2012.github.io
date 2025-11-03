export const getBuyMeACoffeeFrameUrl = ({
  account,
  color,
}: {
  account: string;
  color: string;
}) => {
  return `https://buymeacoffee.com/widget/page/${account}?color=${encodeURIComponent(color)}`;
};

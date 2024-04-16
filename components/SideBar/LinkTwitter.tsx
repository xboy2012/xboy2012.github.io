import { LogoTwitter } from '../Icons/LogoTwitter';
import { userData } from '../../src/data';

export const LinkTwitter = () => {
  const { twitter } = userData;
  if (!twitter) {
    return null;
  }

  return (
    <li>
      <a
        title={`Twitter:${twitter}`}
        href={`https://twitter.com/${twitter}`}
        target="_blank"
        className="block text-lightGray70 text-lg hover:text-lightGray"
      >
        <LogoTwitter />
      </a>
    </li>
  );
};

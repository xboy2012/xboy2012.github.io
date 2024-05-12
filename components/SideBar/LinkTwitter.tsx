import { LogoTwitter } from '../Icons/LogoTwitter';
import { userData } from '../../src/data';

export const LinkTwitter = () => {
  const { twitter } = userData;
  if (!twitter) {
    return null;
  }

  const title = `Twitter:${twitter}`;

  return (
    <li>
      <a
        title={title}
        href={`https://twitter.com/${twitter}`}
        target="_blank"
        className="block text-lightGray70 text-lg hover:text-lightGray"
      >
        <LogoTwitter />
        <span style={{ display: 'none' }}>{title}</span>
      </a>
    </li>
  );
};

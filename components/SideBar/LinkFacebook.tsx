import { LogoFacebook } from '../Icons/LogoFacebook';
import { userData } from '../../src/data';

export const LinkFacebook = () => {
  const { facebook } = userData;
  if (!facebook) {
    return null;
  }

  const title = `Facebook:${facebook}`;

  return (
    <li>
      <a
        title={title}
        href={`https://www.facebook.com/${facebook}`}
        target="_blank"
        rel="noreferrer noopener"
        className="text-lightGray70 hover:text-lightGray block text-lg"
      >
        <LogoFacebook />
        <span style={{ display: 'none' }}>{title}</span>
      </a>
    </li>
  );
};

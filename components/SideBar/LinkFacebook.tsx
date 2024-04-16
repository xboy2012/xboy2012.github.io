import { LogoFacebook } from '../Icons/LogoFacebook';
import { userData } from '../../src/data';

export const LinkFacebook = () => {
  const { facebook } = userData;
  if (!facebook) {
    return null;
  }

  return (
    <li>
      <a
        title={`Facebook:${facebook}`}
        href={`https://www.facebook.com/${facebook}`}
        target="_blank"
        className="block text-lightGray70 text-lg hover:text-lightGray"
      >
        <LogoFacebook />
      </a>
    </li>
  );
};

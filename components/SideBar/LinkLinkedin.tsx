import { LogoLinkedin } from '../Icons/LogoLinkedin';
import { userData } from '../../src/data';

export const LinkLinkedin = () => {
  const { linkedin } = userData;
  if (!linkedin) {
    return null;
  }

  return (
    <li>
      <a
        title={`LinkedIn:${linkedin}`}
        href={`https://linkedin.com/${linkedin}`}
        target="_blank"
        className="block text-lightGray70 text-lg hover:text-lightGray"
      >
        <LogoLinkedin />
      </a>
    </li>
  );
};

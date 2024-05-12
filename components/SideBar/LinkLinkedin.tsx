import { LogoLinkedin } from '../Icons/LogoLinkedin';
import { userData } from '../../src/data';

export const LinkLinkedin = () => {
  const { linkedin } = userData;
  if (!linkedin) {
    return null;
  }

  const title = `LinkedIn:${linkedin}`;

  return (
    <li>
      <a
        title={title}
        href={`https://linkedin.com/${linkedin}`}
        target="_blank"
        className="block text-lightGray70 text-lg hover:text-lightGray"
      >
        <LogoLinkedin />
        <span style={{ display: 'none' }}>{title}</span>
      </a>
    </li>
  );
};

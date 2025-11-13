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
        rel="noreferrer noopener"
        className="block text-lg text-lightGray70 hover:text-lightGray"
      >
        <LogoLinkedin />
        <span style={{ display: 'none' }}>{title}</span>
      </a>
    </li>
  );
};

import { LogoGithub } from '../Icons/LogoGithub';
import { userData } from '../../src/data';

export const LinkGithub = () => {
  const { github } = userData;
  if (!github) {
    return null;
  }

  const title = `GitHub:${github}`;

  return (
    <li>
      <a
        title={title}
        href={`https://github.com/${github}`}
        target="_blank"
        rel="noreferrer noopener"
        className="block text-lightGray70 text-lg hover:text-lightGray"
      >
        <LogoGithub />
        <span style={{ display: 'none' }}>{title}</span>
      </a>
    </li>
  );
};

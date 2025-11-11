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
        className="text-lightGray70 hover:text-lightGray block text-lg"
      >
        <LogoGithub />
        <span style={{ display: 'none' }}>{title}</span>
      </a>
    </li>
  );
};

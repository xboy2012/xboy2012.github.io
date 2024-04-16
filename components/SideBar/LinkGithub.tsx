import { LogoGithub } from '../Icons/LogoGithub';
import { userData } from '../../src/data';

export const LinkGithub = () => {
  const { github } = userData;
  if (!github) {
    return null;
  }

  return (
    <li>
      <a
        title={`GitHub:${github}`}
        href={`https://github.com/${github}`}
        target="_blank"
        className="block text-lightGray70 text-lg hover:text-lightGray"
      >
        <LogoGithub />
      </a>
    </li>
  );
};

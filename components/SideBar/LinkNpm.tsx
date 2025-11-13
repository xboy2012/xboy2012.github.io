import { LogoNpm } from '../Icons/LogoNpm';
import { userData } from '../../src/data';

export const LinkNpm = () => {
  const { npm } = userData;
  if (!npm) {
    return null;
  }

  const title = `Npm:${npm}`;

  return (
    <li>
      <a
        title={title}
        href={`https://www.npmjs.com/~${npm}`}
        target="_blank"
        rel="noreferrer noopener"
        className="block text-lg text-lightGray70 hover:text-lightGray"
      >
        <LogoNpm />
        <span style={{ display: 'none' }}>{npm}</span>
      </a>
    </li>
  );
};

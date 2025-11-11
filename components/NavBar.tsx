import { cx } from '../src/utils/cx';
import { NavBarItem } from './NavBarItem';

export const NavBar = () => {
  return (
    <nav
      className={cx(
        'bg-navbar backdrop-blur-2.5 border-jet shadow-2 fixed bottom-0 left-0 z-5 w-full border border-solid xl:shadow-none',
        'xl:absolute xl:top-0 xl:right-0 xl:bottom-auto xl:left-auto xl:w-max xl:px-5',
        'rounded-t-xl',
        'md:rounded-t-2.5xl',
        'xl:rounded-tr-2.5xl xl:rounded-bl-2.5xl xl:rounded-tl-none xl:rounded-br-none',
        'print:hidden',
      )}
    >
      <ul className="flex flex-wrap items-center justify-center px-2.5 py-0 md:gap-5 xl:gap-7.5 xl:px-7.5">
        <NavBarItem title="About" path="/" />
        <NavBarItem title="Resume" path="/resume" />
        <NavBarItem title="Portfolio" path="/portfolio" />
        <NavBarItem title="Blog" path="/blog" />
      </ul>
    </nav>
  );
};

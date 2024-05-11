import cx from 'classnames';
import { NavBarItem } from './NavBarItem';

export const NavBar = () => {
  return (
    <nav
      className={cx(
        'fixed bottom-0 left-0 w-full bg-[#2B2B2CBF] backdrop-blur-[10px] border border-solid border-jet shadow-2 xl:shadow-none z-5',
        'xl:absolute xl:bottom-auto xl:top-0 xl:left-auto xl:right-0 xl:w-max xl:px-5',
        'rounded-t-xl',
        'md:rounded-t-2.5xl',
        'xl:rounded-tr-2.5xl xl:rounded-bl-2.5xl xl:rounded-tl-none xl:rounded-br-none',
      )}
    >
      <ul className="flex flex-wrap justify-center items-center md:gap-5 xl:gap-7.5 py-0 px-2.5 xl:px-7.5">
        <NavBarItem title="About" path="/" />
        <NavBarItem title="Resume" path="/resume" />
        <NavBarItem title="Portfolio" path="/portfolio" />
        <NavBarItem title="Blog" path="/blog" />
      </ul>
    </nav>
  );
};

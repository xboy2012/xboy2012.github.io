import { useCallback, useMemo, type MouseEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import cx from 'classnames';
import { isSamePath } from '../src/utils/isSamePath';

interface NavBarItemProps {
  path: '/' | '/resume' | '/portfolio' | '/blog';
  title: string;
}

const preventClick = (e: MouseEvent) => {
  e.preventDefault();
};

export const NavBarItem = ({ path, title }: NavBarItemProps) => {
  const currentPath = usePathname() as `/${string}`;
  const router = useRouter();
  const handleClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      router.push(path);
    },
    [path, router],
  );
  const isActive = useMemo(() => {
    return isSamePath(path, currentPath);
  }, [path, currentPath]);

  return (
    <li>
      <a
        className={cx(
          'block px-2 py-5 text-8 md:text-6 lg:text-5 xl:font-500',
          isActive
            ? 'text-orangeYellowCrayola'
            : 'text-lightGray hover:text-lightGray70 focus:text-lightGray70',
        )}
        onClick={!isActive ? handleClick : preventClick}
        href={path}
      >
        {title}
      </a>
    </li>
  );
};

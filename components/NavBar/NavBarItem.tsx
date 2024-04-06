import { useCallback, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isSamePath } from "./isSamePath";
import styles from "./NavBarItem.module.css";

interface NavBarItemProps {
  path: '/' | '/resume' | '/portfolio' | '/blog';
  title: string;
}

export const NavBarItem = ({ path, title }: NavBarItemProps) => {
  const currentPath = usePathname() as `/${string}`;
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push(path);
  }, [path, router]);
  const isActive = useMemo(() => {
    return isSamePath(path, currentPath);
  }, [path, currentPath]);
  return (
    <li>
      <button
        className={`${styles.navbarLink} ${isActive ? styles.active : ""}`}
        onClick={!isActive ? handleClick : undefined}
      >
        {title}
      </button>
    </li>
  );
};

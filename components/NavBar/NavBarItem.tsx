import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./NavBarItem.module.css";

interface NavBarItemProps {
  path: string;
  title: string;
}

export const NavBarItem = ({ path, title }: NavBarItemProps) => {
  const currentPath = usePathname();
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push(path);
  }, [path, router]);
  const isActive = path === currentPath;
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

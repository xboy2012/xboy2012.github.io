import { NavBarItem } from "./NavBarItem";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <NavBarItem title="About" path="/" />
        <NavBarItem title="Resume" path="/resume/" />
        <NavBarItem title="Portfolio" path="/portfolio/" />
        <NavBarItem title="Blog" path="/blog/" />
      </ul>
    </nav>
  );
};

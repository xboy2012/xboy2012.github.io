import { ChevronDown } from "../Icons/ChevronDown";
import styles from "./MoreButton.module.css";

interface Props {
  onClick?: () => void;
}

export const MoreButton = ({ onClick }: Props) => {
  return (
    <button className={styles.btnMore} onClick={onClick}>
      <span className={styles.btnMoreText}>Show Contacts</span>
      <ChevronDown className={styles.chevronDown} />
    </button>
  );
};

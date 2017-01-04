import { LocationOutline } from "./Icons/LocationOutline";
import styles from "./ContactItem.module.css";

export const ContactItemLocation = ({ location }: { location: string }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.iconBox}>
        <LocationOutline />
      </div>

      <div className={styles.contactInfo}>
        <p className={styles.contactTitle}>Location</p>
        <address className={styles.contactAddress}>{location}</address>
      </div>
    </li>
  );
};

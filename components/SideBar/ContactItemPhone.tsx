import { PhonePortraitOutline } from "./Icons/PhonePortraitOutline";
import { displayPhoneCA } from "./utils/displayPhoneCA";
import styles from "./ContactItem.module.css";

export const ContactItemPhone = ({ phoneCA }: { phoneCA: string }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.iconBox}>
        <PhonePortraitOutline />
      </div>

      <div className={styles.contactInfo}>
        <p className={styles.contactTitle}>Phone</p>

        <a href={`tel:${phoneCA}`} className={styles.contactLink}>
          {displayPhoneCA(phoneCA)}
        </a>
      </div>
    </li>
  );
};

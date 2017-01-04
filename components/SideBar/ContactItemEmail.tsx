import { MailOutline } from "./Icons/MailOutline";
import styles from "./ContactItem.module.css";

export const ContactItemEmail = ({ email }: { email: string }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.iconBox}>
        <MailOutline />
      </div>

      <div className={styles.contactInfo}>
        <p className={styles.contactTitle}>Email</p>

        <a href={`mailto:${email}`} className={styles.contactLink}>
          {email}
        </a>
      </div>
    </li>
  );
};

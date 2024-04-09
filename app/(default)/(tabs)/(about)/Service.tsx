import styles from './Service.module.css';

export const Service = () => {
  return (
    <section className={styles.service}>
      <h3 className={styles.serviceTitle}>What i am doing</h3>

      <ul className={styles.serviceList}>
        <li className={styles.serviceItem}>
          <div className={styles.serviceIconBox}>
            <img src="/assets/icon-design.svg" width="40" />
          </div>

          <div className={styles.serviceContentBox}>
            <h4 className={styles.serviceItemTitle}>Web design</h4>

            <p className={styles.serviceItemText}>
              The most modern and high-quality design made at a professional
              level.
            </p>
          </div>
        </li>

        <li className={styles.serviceItem}>
          <div className={styles.serviceIconBox}>
            <img src="/assets/icon-dev.svg" width="40" />
          </div>

          <div className={styles.serviceContentBox}>
            <h4 className={styles.serviceItemTitle}>Web development</h4>

            <p className={styles.serviceItemText}>
              High-quality development of sites at the professional level.
            </p>
          </div>
        </li>

        <li className={styles.serviceItem}>
          <div className={styles.serviceIconBox}>
            <img src="/assets/icon-app.svg" width="40" />
          </div>

          <div className={styles.serviceContentBox}>
            <h4 className={styles.serviceItemTitle}>Mobile apps</h4>

            <p className={styles.serviceItemText}>
              Professional development of applications for iOS and Android.
            </p>
          </div>
        </li>

        <li className={styles.serviceItem}>
          <div className={styles.serviceIconBox}>
            <img src="/assets/icon-photo.svg" width="40" />
          </div>

          <div className={styles.serviceContentBox}>
            <h4 className={styles.serviceItemTitle}>Photography</h4>

            <p className={styles.serviceItemText}>
              I make high-quality photos of any category at a professional
              level.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

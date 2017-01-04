"use client";

import { useCallback, useState } from "react";
import { ContactItemEmail } from "./ContactItemEmail";
import { ContactItemPhone } from "./ContactItemPhone";
import { ContactItemLocation } from "./ContactItemLocation";
import { LogoFacebook } from "./Icons/LogoFacebook";
import { LogoTwitter } from "./Icons/LogoTwitter";
import { LogoGithub } from "./Icons/LogoGithub";
import { LogoLinkedin } from "./Icons/LogoLinkedin";
import { InfoCard } from "./InfoCard";
import { userData } from "../../src/data";
import styles from "./SideBar.module.css";

export const SideBar = () => {
  const { email, phoneCA, location, facebook, twitter, github, linkedin } =
    userData;
  const [showSideBar, setShowSideBar] = useState(false);

  const handleOpen = useCallback(() => {
    setShowSideBar((v) => !v);
  }, []);

  return (
    <aside className={`${styles.sideBar} ${showSideBar ? styles.active : ""}`}>
      <InfoCard onMoreClick={handleOpen} />
      <div className={styles.sideBarInfoMore}>
        <div className={styles.separator}></div>

        <ul className={styles.contactsList}>
          <ContactItemEmail email={email} />
          <ContactItemPhone phoneCA={phoneCA} />
          <ContactItemLocation location={location} />
        </ul>

        <div className={styles.separator} />

        <ul className={styles.socialList}>
          {!!facebook && (
            <li>
              <a
                title={`Facebook:${facebook}`}
                href={`https://www.facebook.com/${facebook}`}
                target="_blank"
                className={styles.socialLink}
              >
                <LogoFacebook />
              </a>
            </li>
          )}

          {!!twitter && (
            <li>
              <a
                title={`Twitter:${twitter}`}
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                className={styles.socialLink}
              >
                <LogoTwitter />
              </a>
            </li>
          )}

          {!!github && (
            <li>
              <a
                title={`GitHub:${github}`}
                href={`https://github.com/${github}`}
                target="_blank"
                className={styles.socialLink}
              >
                <LogoGithub />
              </a>
            </li>
          )}

          {!!linkedin && (
            <li>
              <a
                title={`LinkedIn:${linkedin}`}
                href={`https://linkedin.com/${linkedin}`}
                target="_blank"
                className={styles.socialLink}
              >
                <LogoLinkedin />
              </a>
            </li>
          )}
        </ul>
      </div>
    </aside>
  );
};

import styles from "./AvatarBox.module.css";

export const AvatarBox = ({ avatar, alt }: { avatar: string; alt: string }) => {
  return (
    <figure className={styles.avatarBox}>
      <img src={avatar} alt={alt} width="80" />
    </figure>
  );
};

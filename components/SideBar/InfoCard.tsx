import { AvatarBox } from "./AvatarBox";
import { MoreButton } from "./MoreButton";
import { userData } from "../../src/data";
import styles from "./InfoCard.module.css";

interface Props {
  onMoreClick?: () => void;
}

export const InfoCard = ({ onMoreClick }: Props) => {
  const { avatar, name, title } = userData;
  return (
    <div className={styles.sideBarInfo}>
      <AvatarBox avatar={avatar} alt={name} />
      <div>
        <h1 className={styles.name} title={name}>
          {name}
        </h1>
        <p className={styles.title}>{title}</p>
      </div>
      <MoreButton onClick={onMoreClick} />
    </div>
  );
};

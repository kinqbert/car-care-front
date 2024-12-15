import { User } from "../../../types/User";

import styles from "./styles.module.scss";

interface Props {
  user: User;
}

export const UserItem = ({ user }: Props) => {
  return (
    <div className={styles.userItem}>
      <img className={styles.userAvatar} src={user.avatarUrl} />
      <div className={styles.userInfo}>
        <div className={styles.userInfoItem}>
          <span className={styles.userInfoItemTitle}>ID</span>
          <span>{user.id}</span>
        </div>
        <div className={styles.userInfoItem}>
          <span className={styles.userInfoItemTitle}>Name</span>
          <span>{user.name}</span>
        </div>
        <div className={styles.userInfoItem}>
          <span className={styles.userInfoItemTitle}>Surname</span>
          <span>{user.surname}</span>
        </div>
        <div className={styles.userInfoItem}>
          <span className={styles.userInfoItemTitle}>License Number</span>
          <span>{user.licenseNumber}</span>
        </div>
      </div>
    </div>
  );
};

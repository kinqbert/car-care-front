import { UserOwnership } from "../../../types/User";

import styles from "./styles.module.scss";

interface Props {
  userOwnership: UserOwnership;
}

export const UserOwnershipItem = ({ userOwnership }: Props) => {
  return (
    <div className={styles.userOwnershipItem}>
      <div className={styles.leftContent}>
        <img
          className={styles.ownerAvatar}
          src={userOwnership.avatarUrl}
          alt={userOwnership.name}
        />
        <span className={styles.ownerName}>
          {userOwnership.name} {userOwnership.surname}
        </span>
      </div>
      <span className={styles.ownershipPeriod}>
        {new Date(userOwnership.from).toLocaleString()} -{" "}
        {new Date(userOwnership.to).toLocaleString()}
      </span>
    </div>
  );
};

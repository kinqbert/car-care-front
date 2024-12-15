import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { User } from "../../../types/User";
import { getUsers } from "../../../api/user";
import { UserItem } from "../../common/UserItem";

export const UsersPageContent = () => {
  const [currentUsers, setCurrentUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((users) => {
      setCurrentUsers(users);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Users</h1>
      <ul className={styles.usersList}>
        {currentUsers.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

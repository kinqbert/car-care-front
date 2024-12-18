import styles from "./styles.module.scss";
import { LogoWithText } from "../../../assets/svg/logo";
import { Button } from "../../common/Button";
import { useAuthStore } from "../../../store/useAuthStore";

export const HomePageContent = () => {
  const isAuth = useAuthStore((state) => state.isAuth);

  const getButtonPath = () => {
    if (isAuth) {
      return "/garage";
    }
    return "/login";
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.logoImage} src={LogoWithText} />
        <div className={styles.headerButtons}>
          <Button title="Login" to="/login" variant="outline" />
          <Button title="Register" to="/register" />
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.calloutText}>New level of</h1>
          <h1 className={styles.calloutText}>vehicle management</h1>
          <p className={styles.calloutDescription}>
            Any time, any action, any car.
          </p>
          <Button title="Go to Garage" to={getButtonPath()} />
        </div>
      </div>
    </div>
  );
};

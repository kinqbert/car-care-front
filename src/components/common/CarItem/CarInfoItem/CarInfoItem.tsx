import styles from "./styles.module.scss";

interface Props {
  icon: string;
  text: string | number;
}

export const CarInfoItem = ({ icon, text }: Props) => {
  return (
    <div className={styles.carInfoItem}>
      <div className={styles.iconWrapper}>
        <img className={styles.icon} src={icon} alt="icon" />
      </div>
      <span className={styles.text}>{text.toString()}</span>
    </div>
  );
};

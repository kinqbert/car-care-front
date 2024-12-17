import { Repair } from "../../../../assets/svg";
import { RepairWithDamageDetails } from "../../../../types/Repair";

import styles from "./styles.module.scss";

interface Props {
  repair: RepairWithDamageDetails;
}

export const RepairItem = ({ repair }: Props) => {
  const { damages, date } = repair;

  return (
    <div className={styles.carRepairItem}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <img className={styles.icon} src={Repair} alt="icon" />
        </div>
        <div className={styles.headerContent}>
          <span className={styles.text}>{damages.length} damages repaired</span>
          <span className={styles.text}>{new Date(date).toDateString()}</span>
        </div>
      </div>
      <ul className={styles.damagesDetails}>
        {damages.map((damage) => (
          <li key={damage._id} className={styles.damageDetail}>
            {damage.severity} - {damage.shortDescription}
          </li>
        ))}
      </ul>
    </div>
  );
};

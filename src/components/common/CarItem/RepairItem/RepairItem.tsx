import { ExclamationIcon, TickIcon } from "../../../../assets/misc-icons";
import { RepairSeverity } from "../../../../enums/RepairSeverity";
import { Repair } from "../../../../types/Repair";

import styles from "./styles.module.scss";

interface Props {
  repair?: Repair;
  isNeutral?: boolean;
  iconText?: string;
  text?: string;
  showFullDescription?: boolean;
}

export const RepairItem = ({
  repair,
  isNeutral,
  iconText,
  text,
  showFullDescription,
}: Props) => {
  if (!repair && !isNeutral) {
    return null;
  }

  if (isNeutral) {
    return (
      <div className={styles.carInfoItem}>
        <div className={styles.iconWrapper}>
          {iconText ? (
            <span className={styles.iconText}>{iconText}</span>
          ) : (
            <img className={styles.icon} src={TickIcon} alt="icon" />
          )}
        </div>
        <span className={styles.text}>{text || "No issues found!"}</span>
      </div>
    );
  }

  const carInfoItemStyles = [styles.carInfoItem];
  const iconWrapperStyles = [styles.iconWrapper];

  if (repair?.severity === RepairSeverity.HIGH) {
    carInfoItemStyles.push(styles.highSeverityCarInfo);
    iconWrapperStyles.push(styles.highSeverityIconWrapper);
  } else if (repair?.severity === RepairSeverity.MEDIUM) {
    carInfoItemStyles.push(styles.mediumSeverityCarInfo);
    iconWrapperStyles.push(styles.mediumSeverityIconWrapper);
  }

  return (
    <div className={carInfoItemStyles.join(" ")}>
      <div className={styles.header}>
        <div className={iconWrapperStyles.join(" ")}>
          {iconText ? (
            <span className={styles.iconText}>{iconText}</span>
          ) : (
            <img className={styles.icon} src={ExclamationIcon} alt="icon" />
          )}
        </div>
        <span className={styles.text}>{text || repair?.shortDescription}</span>
      </div>
      {showFullDescription && (
        <p className={styles.repairDescription}>{repair?.description || ""}</p>
      )}
    </div>
  );
};

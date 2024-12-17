import { ExclamationIcon, TickIcon } from "../../../../assets/misc-icons";
import { DamageSeverity } from "../../../../enums/DamageSeverity";
import { Damage } from "../../../../types/Damage";

import styles from "./styles.module.scss";

interface Props {
  damage?: Damage;
  isNeutral?: boolean;
  iconText?: string;
  text?: string;
  showFullDescription?: boolean;
}

export const DamageItem = ({
  damage,
  isNeutral,
  iconText,
  text,
  showFullDescription,
}: Props) => {
  if (!damage && !isNeutral) {
    return null;
  }

  if (isNeutral) {
    return (
      <div className={styles.carInfoItem}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            {iconText ? (
              <span className={styles.iconText}>{iconText}</span>
            ) : (
              <img className={styles.icon} src={TickIcon} alt="icon" />
            )}
          </div>
          <span className={styles.text}>{text || "No issues found!"}</span>
        </div>
      </div>
    );
  }

  const carInfoItemStyles = [styles.carInfoItem];
  const iconWrapperStyles = [styles.iconWrapper];

  if (damage?.severity === DamageSeverity.HIGH) {
    carInfoItemStyles.push(styles.highSeverityCarInfo);
    iconWrapperStyles.push(styles.highSeverityIconWrapper);
  } else if (damage?.severity === DamageSeverity.MEDIUM) {
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
        <span className={styles.text}>{text || damage?.shortDescription}</span>
      </div>
      {showFullDescription && (
        <p className={styles.damageDescription}>{damage?.description || ""}</p>
      )}
    </div>
  );
};

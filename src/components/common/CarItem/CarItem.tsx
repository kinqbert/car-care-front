import { SteeringWheel } from "../../../assets/svg";
import { Car } from "../../../types/Cars";
import { Button } from "../Button";
import { CarInfoItem } from "./CarInfoItem";

import styles from "./styles.module.scss";

interface Props {
  car: Car;
}

export const CarItem = ({ car }: Props) => {
  return (
    <div className={styles.carItem}>
      <div className={styles.header}>
        <div className={styles.leftHeaderContent}>
          <div className={styles.logoImageWrapper}>
            <img
              className={styles.logoImage}
              src={car.logoImageUrl}
              alt={car.make + car.model}
            />
          </div>
          <div className={styles.headerTextContent}>
            <span className={styles.make}>{car.make + " " + car.model}</span>
            <span className={styles.model}>Car Type</span>
          </div>
        </div>
        <div className={styles.rightHeaderContent}>
          <Button title="Sell" />
          <Button title="Details" variant="outlined" />
        </div>
      </div>
      <div className={styles.carItemContent}>
        <div className={styles.leftContent}>
          <div className={styles.price}>
            <span className={styles.priceText}>
              ${car.price.toLocaleString()}
            </span>
            <span className={styles.priceLabel}>Declared price</span>
          </div>
          <div className={styles.carItemsInfo}>
            <CarInfoItem icon={SteeringWheel} text={car.maxSpeed.toString()} />
            <CarInfoItem icon={SteeringWheel} text={car.maxSpeed.toString()} />
            <CarInfoItem icon={SteeringWheel} text={car.maxSpeed.toString()} />
            <CarInfoItem icon={SteeringWheel} text={car.maxSpeed.toString()} />
            <CarInfoItem icon={SteeringWheel} text={car.maxSpeed.toString()} />
            <CarInfoItem icon={SteeringWheel} text={car.maxSpeed.toString()} />
          </div>
        </div>
        <div
          className={styles.rightContent}
          style={{ backgroundImage: `url(${car.sideImageUrl})` }}
        ></div>
      </div>
    </div>
  );
};

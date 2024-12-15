import { purchaseCar } from "../../../api/cars";
import { useCarsStore } from "../../../store/useCarsStore";
import { useUserStore } from "../../../store/useUserStore";
import { CarWithOwnerDetails } from "../../../types/Cars";
import { Button } from "../Button";

import styles from "./styles.module.scss";

interface Props {
  car: CarWithOwnerDetails;
}

export const CarSellItem = ({ car }: Props) => {
  const userImage = car.owner.avatarUrl;
  const removeCar = useCarsStore((state) => state.removeCar);
  const incrementVehiclesOwned = useUserStore(
    (state) => state.incrementVehiclesOwned
  );

  const handlePurchase = async () => {
    await purchaseCar(car._id);

    removeCar(car._id);
    incrementVehiclesOwned();
  };

  return (
    <div className={styles.carSellItem}>
      <div className={styles.header}>
        <div className={styles.carInfo}>
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
        <div className={styles.carInfo}>
          <div className={styles.logoImageWrapper}>
            <img
              className={styles.logoImage}
              src={userImage}
              alt={car.make + car.model}
              style={{ borderRadius: "100px", objectFit: "cover" }}
            />
          </div>
          <div className={styles.headerTextContent}>
            <span className={styles.make}>{car.owner.email}</span>
            <span className={styles.model}>Owner</span>
          </div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img
          className={styles.carImage}
          src={car.sideImageUrl}
          alt={car.make + car.model}
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.footerButtons}>
          <Button title="Purchase" onClick={handlePurchase} />
          <Button title="Details" variant="outlined" />
        </div>
        <span className={styles.price}>${car.price.toLocaleString()}</span>
      </div>
    </div>
  );
};

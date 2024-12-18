import {
  cancelSellCar,
  getCarById,
  repairCar,
  sellCar,
} from "../../../api/cars";
import {
  CalendarIcon,
  DoubleCircleIcon,
  EngineIcon,
  FuelPumpIcon,
  SpeedometerIcon,
  WeightIcon,
} from "../../../assets/car-item-icons";
import { useCarsStore } from "../../../store/useCarsStore";
import { CarWithDamages } from "../../../types/Cars";
import { Button } from "../Button";
import { CarInfoItem } from "./CarInfoItem";
import { DamageItem } from "./DamageItem";

import styles from "./styles.module.scss";

interface Props {
  car: CarWithDamages;
  showDamages?: boolean;
}

export const CarItem = ({ car, showDamages }: Props) => {
  const setUserCar = useCarsStore((state) => state.setUserCar);

  const ActionButton = () => {
    if (showDamages) {
      if (car.damages.length === 0) {
        return null;
      }

      const handleRepair = async () => {
        await repairCar(car._id);

        const updatedCar = await getCarById(car._id);

        setUserCar(car._id, updatedCar);
      };

      return <Button title="Repair" onClick={handleRepair} />;
    }

    const sellButtonVariant = car.isPurchaseAvailable ? "outline" : "filled";
    const sellButtonText = car.isPurchaseAvailable ? "Cancel sell" : "Sell";
    const handleSell = async () => {
      let updatedCar = car;
      if (car.isPurchaseAvailable) {
        updatedCar = await cancelSellCar(car._id);
      } else {
        updatedCar = await sellCar(car._id);
      }

      setUserCar(car._id, updatedCar);
    };

    return (
      <Button
        title={sellButtonText}
        onClick={handleSell}
        variant={sellButtonVariant}
      />
    );
  };

  const CarItemLeftContent = () => {
    if (showDamages) {
      const damagessCount = car.damages.length;

      if (damagessCount === 0) {
        return (
          <div className={styles.damageItems}>
            <DamageItem isNeutral={true} />
          </div>
        );
      }

      if (damagessCount <= 3) {
        return (
          <div className={styles.damageItems}>
            {car.damages.map((damage) => (
              <DamageItem key={damage._id} damage={damage} />
            ))}
          </div>
        );
      }

      const damagesToShow = car.damages.slice(0, 2);
      const damagesCountIconText = `+${damagessCount - 2}`;
      const damagesCountText = "Other issues";

      return (
        <div className={styles.damageItems}>
          {damagesToShow.map((damage) => (
            <DamageItem key={damage._id} damage={damage} />
          ))}
          <DamageItem
            isNeutral={true}
            iconText={damagesCountIconText}
            text={damagesCountText}
          />
        </div>
      );
    }

    return (
      <>
        <div className={styles.price}>
          <span className={styles.priceText}>
            ${car.price.toLocaleString()}
          </span>
          <span className={styles.priceLabel}>Declared price</span>
        </div>
        <div className={styles.carItemsInfo}>
          <CarInfoItem icon={DoubleCircleIcon} text={car.color} />
          <CarInfoItem
            icon={WeightIcon}
            text={car.weight.toLocaleString() + " KG"}
          />
          <CarInfoItem icon={CalendarIcon} text={car.year} />
          <CarInfoItem icon={FuelPumpIcon} text={car.fuelType} />
          <CarInfoItem icon={EngineIcon} text={car.horsePower + " HP"} />
          <CarInfoItem icon={SpeedometerIcon} text={car.maxSpeed + " KM/H"} />
        </div>
      </>
    );
  };

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
            <span className={styles.model}>Car Model</span>
          </div>
        </div>
        <div className={styles.rightHeaderContent}>
          {car.isPurchaseAvailable && (
            <span className={styles.model}>On sell</span>
          )}

          <ActionButton />
          <Button
            title="Details"
            variant="outline"
            to={`/vehicle/${car._id}`}
          />
        </div>
      </div>
      <div className={styles.carItemContent}>
        <div className={styles.leftContent}>
          <CarItemLeftContent />
        </div>
        <div className={styles.rightContent}>
          <img
            className={styles.carImage}
            src={car.sideImageUrl}
            alt={car.make + " " + car.model}
          />
        </div>
      </div>
    </div>
  );
};

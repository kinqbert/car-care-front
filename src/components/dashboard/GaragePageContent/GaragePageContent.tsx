import { useEffect, useState } from "react";
import { Car } from "../../../types/Cars";
import { getUserCars } from "../../../api/cars";
import { CarItem } from "../../common/CarItem";

import styles from "./styles.module.scss";
import { useUserStore } from "../../../store/useUserStore";

export const GaragePageContent = () => {
  const userName = useUserStore((state) => state.userName);
  const [currentCars, setCurrentCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserCars();
      setCurrentCars(response);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Garage of {userName}</h1>
      <ul className={styles.carsList}>
        {currentCars.map((car) => (
          <CarItem key={car._id} car={car} />
        ))}
      </ul>
    </div>
  );
};

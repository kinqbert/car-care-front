import { useEffect } from "react";
import { getUserCars } from "../../../api/cars";
import { CarItem } from "../../common/CarItem";

import styles from "./styles.module.scss";
import { useUserStore } from "../../../store/useUserStore";
import { useCarsStore } from "../../../store/useCarsStore";

export const GaragePageContent = () => {
  const userName = useUserStore((state) => state.userName);
  const currentCars = useCarsStore((state) => state.userCars);
  const setUserCars = useCarsStore((state) => state.setUserCars);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserCars();
      setUserCars(response);
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

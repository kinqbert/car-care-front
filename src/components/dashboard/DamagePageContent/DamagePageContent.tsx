import { useEffect } from "react";
import { getUserCars } from "../../../api/cars";
import { CarItem } from "../../common/CarItem";

import styles from "./styles.module.scss";
import { useUserStore } from "../../../store/useUserStore";
import { useCarsStore } from "../../../store/useCarsStore";
import { Button } from "../../common/Button";

export const RepairsPageContent = () => {
  const getUserFullName = useUserStore((state) => state.getUserFullName);
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
      <header className={styles.header}>
        <h1 className={styles.headerText}>Garage of {getUserFullName()}</h1>
        <Button title="Add damage" to="/add-damage" />
      </header>
      <ul className={styles.carsList}>
        {currentCars.map((car) => (
          <CarItem key={car._id} car={car} showDamages={true} />
        ))}
      </ul>
      {currentCars.length === 0 && (
        <p className={styles.noCarsMessage}>No cars - no repairs!</p>
      )}
    </div>
  );
};

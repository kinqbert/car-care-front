import { useEffect } from "react";
import { getAllCars } from "../../../api/cars";

import styles from "./styles.module.scss";
import { useCarsStore } from "../../../store/useCarsStore";
import { CarSellItem } from "../../common/CarSellItem";
import { Button } from "../../common/Button";

export const VehiclesPageContent = () => {
  const currentCars = useCarsStore((state) => state.allCars);
  const setCurrentCars = useCarsStore((state) => state.setAllCars);

  useEffect(() => {
    const fetchData = async () => {
      const carsResponse = await getAllCars();
      setCurrentCars(carsResponse);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerText}>Vehicles for sale</h1>
        {/* <Button title="Add car" to="/add-vehicle" /> */}
      </header>
      <ul className={styles.carsList}>
        {currentCars.map((car) => (
          <CarSellItem key={car._id} car={car} />
        ))}
      </ul>
      {currentCars.length === 0 && (
        <p className={styles.noCarsMessage}>
          There are no cars available for sale.
        </p>
      )}
    </div>
  );
};

import { useEffect, useState } from "react";
import { getAllCars } from "../../../api/cars";

import styles from "./styles.module.scss";
import { useCarsStore } from "../../../store/useCarsStore";
import { CarSellItem } from "../../common/CarSellItem";
import { Button } from "../../common/Button";
import { vehicleMakeOptions } from "../../../constants/carSelectOptions";
import { Select } from "../../common/Select";
import { getUsers } from "../../../api/user";
import { User } from "../../../types/User";

export const VehiclesPageContent = () => {
  const currentCars = useCarsStore((state) => state.allCars);
  const setCurrentCars = useCarsStore((state) => state.setAllCars);

  const [currentUsers, setCurrentUsers] = useState<User[]>([]);

  const fullVehicleMakeOptions = [
    { value: "All", label: "All" },
    ...vehicleMakeOptions,
  ];

  const fullCarOwnerOptions = [
    { value: "All", label: "All" },
    ...currentUsers.map((user) => ({
      value: user.id,
      label: (user.name + " " + user.surname).trim(),
    })),
  ];

  const [vehicleMakeFilter, setVehicleCarMakeFilter] = useState(
    fullVehicleMakeOptions[0].value
  );
  const [ownerFilter, setOwnerFilter] = useState(fullCarOwnerOptions[0].value);

  useEffect(() => {
    const fetchData = async () => {
      const carsResponse = await getAllCars();
      setCurrentCars(carsResponse);

      const usersResponse = await getUsers();
      setCurrentUsers(usersResponse);
    };
    fetchData();
  }, []);

  const filteredCars = currentCars.filter((car) => {
    let fits = true;

    if (vehicleMakeFilter !== "All") {
      fits = fits && car.make === vehicleMakeFilter;
    }

    if (ownerFilter !== "All") {
      fits = fits && car.ownerId.toString() === ownerFilter;
    }

    return fits;
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerText}>Vehicles for sale</h1>
        <Button title="My garage" to="/garage" />
      </header>
      <div className={styles.filters}>
        <Select
          label="Car make"
          options={fullVehicleMakeOptions}
          value={vehicleMakeFilter}
          onChange={setVehicleCarMakeFilter}
        />
        <Select
          label="Car Owner"
          options={fullCarOwnerOptions}
          value={ownerFilter}
          onChange={setOwnerFilter}
        />
      </div>
      <ul className={styles.carsList}>
        {filteredCars.map((car) => (
          <CarSellItem key={car._id} car={car} />
        ))}
        {filteredCars.length === 0 && (
          <p className={styles.noCarsMessage}>
            There are no such cars available with such filters.
          </p>
        )}
      </ul>
      {currentCars.length === 0 && (
        <p className={styles.noCarsMessage}>
          There are no cars available for sale.
        </p>
      )}
    </div>
  );
};

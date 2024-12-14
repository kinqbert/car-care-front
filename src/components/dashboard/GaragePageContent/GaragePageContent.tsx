import { useEffect, useState } from "react";
import { Car } from "../../../types/Cars";
import { getUserCars } from "../../../api/cars";

export const GaragePageContent = () => {
  const [currentCars, setCurrentCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserCars();
      setCurrentCars(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Dashboardf</h1>
      <ul>
        {currentCars.map((car) => (
          <li key={car._id}>{car.make}</li>
        ))}
      </ul>
    </>
  );
};

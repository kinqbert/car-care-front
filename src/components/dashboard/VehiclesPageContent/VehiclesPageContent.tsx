import { useEffect, useState } from "react";
import { useUserStore } from "../../../store/useUserStore";
import { CarWithOwnerDetails } from "../../../types/Cars";
import { getAllCars, purchaseCar } from "../../../api/cars";

export const VehiclesPageContent = () => {
  const userId = useUserStore((state) => state.id);
  const [currentCars, setCurrentCars] = useState<CarWithOwnerDetails[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const carsResponse = await getAllCars();
      setCurrentCars(carsResponse);
    };
    fetchData();
  }, []);

  const handlePurchase = async (carId: string) => {
    await purchaseCar(carId);

    const carsResponse = await getAllCars();

    setCurrentCars(carsResponse);
  };

  return (
    <>
      <h1>Dashboardf</h1>
      <ul>
        {currentCars.map((car) => (
          <li key={car._id}>
            <p>
              {car.make}, {car.owner.email}
            </p>
            {car.isPurchaseAvailable && car.ownerId !== userId && (
              <button onClick={() => handlePurchase(car._id)}>Purchase</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

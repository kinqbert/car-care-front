"use client";

import { getUserCars } from "@/api/cars";
import { useAuthStore } from "@/store/useAuthStore";
import { Car } from "@/types/Cars";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const isAuth = useAuthStore((state) => state.isAuth);
  const [currentCars, setCurrentCars] = useState<Car[]>([]);

  useEffect(() => {
    if (!isAuth) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetUserCars = async () => {
    const response = await getUserCars();
    setCurrentCars(response);
  };

  return (
    <>
      <h1>Dashboardf</h1>
      <button onClick={handleGetUserCars}>Get user cars</button>
      <ul>
        {currentCars.map((car) => (
          <li key={car.id}>{car.make}</li>
        ))}
      </ul>
    </>
  );
}

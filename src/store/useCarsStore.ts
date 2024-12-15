import { create } from "zustand";
import { CarsState } from "../types/Cars";

export const useCarsStore = create<CarsState>((set) => ({
  userCars: [],
  allCars: [],
  setUserCars: (data) => set((state) => ({ ...state, userCars: data })),
  setAllCars: (data) => set((state) => ({ ...state, allCars: data })),
  setUserCar: (id, data) =>
    set((state) => ({
      ...state,
      userCars: state.userCars.map((car) => (car._id === id ? data : car)),
    })),
  addUserCar: (data) =>
    set((state) => ({ ...state, userCars: [...state.userCars, data] })),
  removeCar: (id) =>
    set((state) => ({
      ...state,
      allCars: state.allCars.filter((car) => car._id !== id),
    })),
}));

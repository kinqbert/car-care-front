import { create } from "zustand";
import { CarsState } from "../types/Cars";

export const useCarsStore = create<CarsState>((set, get) => ({
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
  removeUserCar: (id) =>
    set((state) => ({
      ...state,
      userCars: get().userCars.filter((car) => car._id !== id),
    })),
  removeCar: (id) =>
    set((state) => ({
      ...state,
      allCars: state.allCars.filter((car) => car._id !== id),
    })),
}));

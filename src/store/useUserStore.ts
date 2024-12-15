import { create } from "zustand";
import { UserState } from "../types/User";

export const useUserStore = create<UserState>((set, get) => ({
  email: "",
  id: "",
  surname: "",
  name: "",
  licenseNumber: "",
  avatarUrl: "",
  vehiclesOwned: 0,
  vehiclesSold: 0,
  setUser: (data) => {
    set({ ...data });
  },
  clearUser: () => {
    set({
      email: "",
      id: "",
      surname: "",
      name: "",
      licenseNumber: "",
      avatarUrl: "",
      vehiclesOwned: 0,
      vehiclesSold: 0,
    });
  },
  incrementVehiclesOwned: () => {
    set((state) => ({ vehiclesOwned: state.vehiclesOwned + 1 }));
  },
  getUserFullName: () => {
    return `${get().name} ${get().surname}`;
  },
}));

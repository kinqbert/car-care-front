import { create } from "zustand";
import { UserState } from "../types/User";

export const useUserStore = create<UserState>((set) => ({
  email: "",
  id: "",
  userName: "El Gato",
  vehiclesOwned: 0,
  vehiclesSold: 0,
  setUser: (data) => {
    set({ ...data });
  },
  clearUser: () => {
    set({ email: "", id: "", userName: "", vehiclesOwned: 0, vehiclesSold: 0 });
  },
  incrementVehiclesOwned: () => {
    set((state) => ({ vehiclesOwned: state.vehiclesOwned + 1 }));
  },
}));

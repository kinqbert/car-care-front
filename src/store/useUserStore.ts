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
}));

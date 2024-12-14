import { create } from "zustand";
import { UserState } from "../types/User";

export const useUserStore = create<UserState>((set) => ({
  email: "",
  id: "",
  vehiclesOwned: 0,
  setUser: (data) => {
    set({ ...data });
  },
}));

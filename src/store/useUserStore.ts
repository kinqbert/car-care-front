import { create } from "zustand";
import { UserState } from "../types/User";

export const useUserStore = create<UserState>((set, get) => ({
  email: "",
  id: "",
  surname: "",
  name: "",
  licenseNumber: "",
  avatarUrl: "",
  vehiclesSold: 0,
  setUser: (data) => {
    set({ ...data });
  },
  setUserPartial: (data) => {
    set((state) => ({ ...state, ...data }));
  },
  clearUser: () => {
    set({
      email: "",
      id: "",
      surname: "",
      name: "",
      licenseNumber: "",
      avatarUrl: "",
      vehiclesSold: 0,
    });
  },
  getUserFullName: () => {
    return `${get().name} ${get().surname}`;
  },
}));

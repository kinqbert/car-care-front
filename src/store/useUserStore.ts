import { create } from "zustand";
import { UserState } from "../types/User";

export const useUserStore = create<UserState>((set) => ({
  email: "",
  id: "",
  setUser: (data) => {
    set({ ...data });
  },
}));

import { create } from "zustand";
import { AuthState } from "../types/Auth";

export const useAuthStore = create<AuthState>((set) => ({
  isAuth: false,
  setIsAuth: (data: boolean) => {
    set({ isAuth: data });
  },
}));

import { create } from "zustand";
import { AuthState } from "../types/Auth";

export const useAuthStore = create<AuthState>((set) => ({
  isAuth: !!localStorage.getItem("access-token"),
  setIsAuth: (data: boolean) => {
    set({ isAuth: data });
  },
}));

import { AuthState } from "@/types/Auth";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    isAuth: false,
    setIsAuth: (data: boolean) => {
      set({ isAuth: data }, false, "auth/setIsAuth");
    },
  }))
);

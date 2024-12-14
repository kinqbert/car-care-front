import { AuthState } from "@/types/Auth";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isAuth: false,
      setIsAuth: (data: boolean) => {
        set({ isAuth: data });
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

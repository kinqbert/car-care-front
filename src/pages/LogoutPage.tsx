import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useUserStore } from "../store/useUserStore";

export const LogoutPage = () => {
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const clearUser = useUserStore((state) => state.clearUser);

  localStorage.removeItem("refresh-token");
  localStorage.removeItem("access-token");

  setIsAuth(false);
  clearUser();

  return <Navigate to="/" />;
};

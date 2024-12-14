import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export const LogoutPage = () => {
  const setIsAuth = useAuthStore((state) => state.setIsAuth);

  localStorage.removeItem("refresh-token");
  localStorage.removeItem("access-token");

  setIsAuth(false);

  return <Navigate to="/login" />;
};

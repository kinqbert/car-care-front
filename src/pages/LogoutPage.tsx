import { Navigate } from "react-router-dom";

export const LogoutPage = () => {
  localStorage.removeItem("refresh-token");
  localStorage.removeItem("access-token");

  return <Navigate to="/login" />;
};

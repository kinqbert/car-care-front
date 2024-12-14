import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { GaragePage } from "./pages/GaragePage";
import { useEffect } from "react";
import { VehiclesPage } from "./pages/VehiclesPage";
import { getCurrentUser } from "./api/user";
import { useUserStore } from "./store/useUserStore";
import { useAuthStore } from "./store/useAuthStore";
import { Layout } from "./components/Layout";
import "./App.scss";
import { RepairsPage } from "./pages/RepairsPage";
import { LogoutPage } from "./pages/LogoutPage";

function App() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (isAuth) {
      getCurrentUser().then((user) => {
        setUser(user);
      });
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/logout" element={<LogoutPage />} />

        <Route element={<Layout />}>
          <Route path="/garage" element={<GaragePage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/repairs" element={<RepairsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

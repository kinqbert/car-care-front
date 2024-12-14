import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { GaragePage } from "./pages/GaragePage";
import { useEffect } from "react";
import { VehiclesPage } from "./pages/VehiclesPage";
import { getCurrentUser } from "./api/user";
import { useUserStore } from "./store/useUserStore";

function App() {
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/garage" element={<GaragePage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

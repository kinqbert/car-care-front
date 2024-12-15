import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { GaragePage } from "./pages/GaragePage";
import { VehiclesPage } from "./pages/VehiclesPage";
import { Layout } from "./components/Layout";
import "./App.scss";
import { RepairsPage } from "./pages/RepairsPage";
import { LogoutPage } from "./pages/LogoutPage";

function App() {
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

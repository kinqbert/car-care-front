import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { GaragePage } from "./pages/GaragePage";
import { VehiclesPage } from "./pages/VehiclesPage";
import { Layout } from "./components/Layout";
import { RepairsPage } from "./pages/RepairsPage";
import { LogoutPage } from "./pages/LogoutPage";
import { UsersPage } from "./pages/UsersPage";
import { AddVehiclePage } from "./pages/AddVehiclePage";

import "./App.scss";
import { EditUserPage } from "./pages/EditUserPage";
import { VehiclePage } from "./pages/VehiclePage";
import { AddRepairPage } from "./pages/AddRepairPage";
import { TransactionsPage } from "./pages/TransactionsPage";

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
          <Route path="/users" element={<UsersPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/add-vehicle" element={<AddVehiclePage />} />
          <Route path="/add-repair" element={<AddRepairPage />} />
          <Route path="/edit-user" element={<EditUserPage />} />
          <Route path="/vehicle/:vehicleId" element={<VehiclePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

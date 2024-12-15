import { useState } from "react";
import styles from "./styles.module.scss";
import { Input } from "../../common/Input";

export const AddVehiclePageContent = () => {
  const [vehicleNameValue, setVehicleNameValue] = useState("");

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Register new vehicle</h1>
      <Input
        label="Vehicle name"
        value={vehicleNameValue}
        onChange={(value) => setVehicleNameValue(value)}
      />
    </div>
  );
};

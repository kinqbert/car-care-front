import styles from "./styles.module.scss";

import { Button } from "../../common/Button";
import { useNavigate } from "react-router-dom";
import { useCarsStore } from "../../../store/useCarsStore";
import { RepairCreateData } from "../../../types/Repair";
import { useEffect, useState } from "react";
import { Select } from "../../common/Select";
import { Input } from "../../common/Input";
import { vehicleRepairSeverityOptions } from "../../../constants/carSelectOptions";
import { createRepair } from "../../../api/repairs";
import { RepairSeverity } from "../../../enums/RepairSeverity";
import { getUserCars } from "../../../api/cars";

export const AddRepairPageContent = () => {
  const navigate = useNavigate();

  const { userCars, setUserCars, setUserCar } = useCarsStore();

  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const carsOptions = userCars.map((car) => ({
    value: car._id,
    label: car.make + " " + car.model,
  }));

  useEffect(() => {
    getUserCars().then((response) => {
      setUserCars(response);
      setIsLoading(false);
      setSelectedCarId(response[0]._id);
    });
  }, []);

  const [selectedCarId, setSelectedCarId] = useState("");

  const [shortDescription, setShortDescription] = useState("");
  const [shortDescriptionError, setShortDescriptionError] = useState("");

  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const [severity, setSeverity] = useState(
    vehicleRepairSeverityOptions[0].value
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isError = false;

    setShortDescriptionError("");

    if (!shortDescription) {
      setShortDescriptionError("Short description is required");
      isError = true;
    }

    if (!description) {
      setDescriptionError("Description is required");
      isError = true;
    }

    if (isError) {
      return;
    }

    const repairData: RepairCreateData = {
      carId: selectedCarId,
      shortDescription,
      description,
      severity,
    };

    createRepair(repairData).then((response) => {
      const updatedCar = userCars.find((car) => car._id === selectedCarId);

      if (!updatedCar) {
        return;
      }

      setUserCar(selectedCarId, {
        ...updatedCar,
        repairs: [...updatedCar.repairs, response],
      });

      navigate("/repairs");
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Register new vehicle</h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
      >
        <Select
          label="Select car"
          options={carsOptions}
          value={selectedCarId}
          onChange={setSelectedCarId}
        />
        <Input
          label="Short description"
          value={shortDescription}
          onChange={setShortDescription}
          error={shortDescriptionError}
        />
        <Input
          label="Short description"
          value={description}
          onChange={setDescription}
          error={descriptionError}
        />
        <Select
          label="Severity"
          options={vehicleRepairSeverityOptions}
          value={severity}
          onChange={(value) => setSeverity(value as RepairSeverity)}
        />

        <Button title="Submit" type="submit" />
      </form>
    </div>
  );
};

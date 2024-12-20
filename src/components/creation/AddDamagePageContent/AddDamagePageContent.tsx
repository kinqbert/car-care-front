import styles from "./styles.module.scss";

import { Button } from "../../common/Button";
import { useNavigate } from "react-router-dom";
import { useCarsStore } from "../../../store/useCarsStore";
import { DamageCreateData } from "../../../types/Damage";
import { useEffect, useState } from "react";
import { Select } from "../../common/Select";
import { Input } from "../../common/Input";
import { vehicleDamageSeverityOptions } from "../../../constants/carSelectOptions";
import { createDamage } from "../../../api/damage";
import { DamageSeverity } from "../../../enums/DamageSeverity";
import { getUserCars } from "../../../api/cars";

export const AddDamagePageContent = () => {
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
    vehicleDamageSeverityOptions[0].value
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

    const damageData: DamageCreateData = {
      car: selectedCarId,
      shortDescription,
      description,
      severity,
    };

    createDamage(damageData).then((response) => {
      const updatedCar = userCars.find((car) => car._id === selectedCarId);

      if (!updatedCar) {
        return;
      }

      setUserCar(selectedCarId, {
        ...updatedCar,
        damages: [...updatedCar.damages, response],
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
      <h1 className={styles.header}>Register new damage</h1>
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
          label="Description"
          value={description}
          onChange={setDescription}
          error={descriptionError}
        />
        <Select
          label="Severity"
          options={vehicleDamageSeverityOptions}
          value={severity}
          onChange={(value) => setSeverity(value as DamageSeverity)}
        />

        <Button title="Submit" type="submit" />
      </form>
    </div>
  );
};

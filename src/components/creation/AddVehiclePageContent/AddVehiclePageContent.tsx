import { useMemo, useState } from "react";
import styles from "./styles.module.scss";
import { Input } from "../../common/Input";
import {
  getRandomManufactureYear,
  getRandomVehicleModel,
} from "../../../utils/getRandomVehicleDetails";
import { Select } from "../../common/Select";
import { NumberInput } from "../../common/NumberInput";
import {
  carMakes,
  vahicleColorOptions,
  vehicleFuelTypeOptions,
  vehicleMakeOptions,
} from "../../../constants/carSelectOptions";
import { Button } from "../../common/Button";
import { imageExists } from "../../../utils/imageExists";
import { CarsCreateData, CarWithRepairs } from "../../../types/Cars";
import { createCar } from "../../../api/cars";
import { useNavigate } from "react-router-dom";
import { useCarsStore } from "../../../store/useCarsStore";

export const AddVehiclePageContent = () => {
  const navigate = useNavigate();

  const addUserCar = useCarsStore((state) => state.addUserCar);

  const randomVehicleModel = useMemo(getRandomVehicleModel, []);
  const randomManufactureYear = useMemo(getRandomManufactureYear, []);

  const [vehicleMakeValue, setVehicleMakeValue] = useState(
    vehicleMakeOptions[0].value
  );
  const [vehicleColorValue, setVehicleColorValue] = useState(
    vahicleColorOptions[0].value
  );

  const [vehicleYearValue, setVehicleYearValue] = useState(2000);

  const [vehicleFuelTypeValue, setVehicleFuelTypeValue] = useState(
    vehicleFuelTypeOptions[0].value
  );

  const [vehicleModelValue, setVehicleModelValue] = useState("");
  const [vehicleModelError, setVehicleModelError] = useState("");

  const [vehicleImageValue, setVehicleImageValue] = useState("");
  const [vehicleImageError, setVehicleImageError] = useState("");

  const [vehicleWeightValue, setVehicleWeightValue] = useState(0);
  const [vehicleWeightError, setVehicleWeightError] = useState("");

  const [vehicleMaxSpeedValue, setVehicleMaxSpeedValue] = useState(0);
  const [vehicleMaxSpeedError, setVehicleMaxSpeedError] = useState("");

  const [vehiclePriceValue, setVehiclePriceValue] = useState(0);
  const [vehiclePriceError, setVehiclePriceError] = useState("");

  const [vehicleHorsePowerValue, setVehicleHorsePowerValue] = useState(0);
  const [vehicleHorsePowerError, setVehicleHorsePowerError] = useState("");

  const currentVehicleMake = carMakes.find(
    (make) => make.name === vehicleMakeValue
  );

  const handleCheckImage = () => {
    if (vehicleImageValue.trim().endsWith(".svg")) {
      return setVehicleImageError(
        "SVG images are not supported. Please use PNG or JPG."
      );
    }

    if (vehicleImageValue.trim()) {
      imageExists(vehicleImageValue).then((result) => {
        if (!result) {
          setVehicleImageError("Image does not exist.");
        } else {
          setVehicleImageError("");
        }
      });
    } else {
      setVehicleImageError("Please provide an image URL.");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isError = false;

    if (!vehicleModelValue.trim()) {
      setVehicleModelError("Model is required");
      isError = true;
    } else {
      setVehicleModelError("");
    }

    if (!vehicleImageValue.trim()) {
      setVehicleImageError("Image link is required");
      isError = true;
    } else {
      imageExists(vehicleImageValue).then((result) => {
        if (!result) {
          setVehicleImageError("Image does not exist.");
          isError = true;
        } else {
          setVehicleImageError("");
        }
      });
    }

    if (vehicleWeightValue <= 0) {
      setVehicleWeightError("Weight must be greater than 0");
      isError = true;
    }

    if (vehicleMaxSpeedValue <= 0) {
      setVehicleMaxSpeedError("Max speed must be greater than 0");
      isError = true;
    }

    if (vehiclePriceValue <= 0) {
      setVehiclePriceError("Price must be greater than 0");
      isError = true;
    }

    if (vehicleHorsePowerValue <= 0) {
      setVehicleHorsePowerError("Horse power must be greater than 0");
      isError = true;
    }

    if (!currentVehicleMake) {
      return;
    }

    if (isError) {
      return;
    }

    const carData: CarsCreateData = {
      make: vehicleMakeValue,
      model: vehicleModelValue,
      logoImageUrl: currentVehicleMake.logoUrl,
      color: vehicleColorValue,
      year: vehicleYearValue,
      fuelType: vehicleFuelTypeValue,
      weight: vehicleWeightValue,
      maxSpeed: vehicleMaxSpeedValue,
      price: vehiclePriceValue,
      horsePower: vehicleHorsePowerValue,
      sideImageUrl: vehicleImageValue,
    };

    createCar(carData).then((response) => {
      alert("Car created successfully");

      addUserCar(response as CarWithRepairs);

      navigate("/garage");
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
        <div className={styles.vehicleMakeField}>
          <Select
            label="Make"
            options={vehicleMakeOptions}
            value={vehicleMakeValue}
            onChange={setVehicleMakeValue}
          />
          <div className={styles.vehicleMakeLogoWrapper}>
            <img
              className={styles.vehicleMakeLogo}
              src={currentVehicleMake?.logoUrl}
            />
          </div>
        </div>
        <Input
          label="Model"
          value={vehicleModelValue}
          onChange={setVehicleModelValue}
          placeholder={randomVehicleModel}
          error={vehicleModelError}
        />
        <div
          className={styles.vehicleMakeField}
          style={{ alignItems: "center" }}
        >
          <Input
            label="Image Link"
            value={vehicleImageValue}
            onChange={setVehicleImageValue}
            error={vehicleImageError}
          />
          <Button title="Check image" onClick={handleCheckImage} />
        </div>
        <NumberInput
          label="Year"
          value={vehicleYearValue}
          onChange={setVehicleYearValue}
          min={1900}
          max={new Date().getFullYear()}
          placeholder={randomManufactureYear.toString()}
        />
        <Select
          label="Color"
          options={vahicleColorOptions}
          value={vehicleColorValue}
          onChange={setVehicleColorValue}
        />
        <NumberInput
          label="Weight"
          value={vehicleWeightValue}
          onChange={setVehicleWeightValue}
          step={100}
          min={0}
          error={vehicleWeightError}
        />
        <Select
          label="Fuel Type"
          options={vehicleFuelTypeOptions}
          value={vehicleFuelTypeValue}
          onChange={setVehicleFuelTypeValue}
        />
        <NumberInput
          label="Max speed"
          value={vehicleMaxSpeedValue}
          onChange={setVehicleMaxSpeedValue}
          step={10}
          min={0}
          error={vehicleMaxSpeedError}
        />
        <NumberInput
          label="Declared price"
          value={vehiclePriceValue}
          onChange={setVehiclePriceValue}
          step={1000}
          min={0}
          error={vehiclePriceError}
        />
        <NumberInput
          label="Horse power"
          value={vehicleHorsePowerValue}
          onChange={setVehicleHorsePowerValue}
          step={100}
          min={0}
          error={vehicleHorsePowerError}
        />
        <Button title="Submit" type="submit" />
      </form>
    </div>
  );
};

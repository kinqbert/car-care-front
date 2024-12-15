import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { CarWithOwnerDetailsAndRepairs } from "../../../types/Cars";
import { getCarById } from "../../../api/cars";

import styles from "./styles.module.scss";
import { RepairItem } from "../../common/CarItem/RepairItem";

export const VehiclePageContent = () => {
  const navigate = useNavigate();

  const { vehicleId } = useParams();

  const [currentVehicle, setCurrentVehicle] =
    useState<CarWithOwnerDetailsAndRepairs | null>(null);

  useEffect(() => {
    if (!vehicleId) {
      navigate("/vehicles");
      return;
    }

    getCarById(vehicleId).then((car) => {
      setCurrentVehicle(car);
    });
  }, []);

  if (!currentVehicle) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        {" "}
        {currentVehicle.make + " " + currentVehicle.model}
      </h1>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <div className={styles.carOwnerBlock}>
            <img
              className={styles.carOwnerImage}
              src={currentVehicle.owner.avatarUrl}
            />
            <div className={styles.carOwnerInfoBlockWrapper}>
              <div className={styles.carOwnerInfoWrapper}>
                <span className={styles.carOwnerInfoLabel}>Owner</span>
                <span className={styles.carOwnerInfoValue}>
                  {currentVehicle.owner.name +
                    " " +
                    currentVehicle.owner.surname}
                </span>
              </div>
              <div className={styles.carOwnerInfoWrapper}>
                <span className={styles.carOwnerInfoLabel}>License Number</span>
                <span className={styles.carOwnerInfoValue}>
                  {currentVehicle.owner.licenseNumber}
                </span>
              </div>
              <div className={styles.carOwnerInfoWrapper}>
                <span className={styles.carOwnerInfoLabel}>ID</span>
                <span className={styles.carOwnerInfoValue}>
                  {currentVehicle.owner.id}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.carInfoBlock}>
            <h2>Car Info</h2>
            <div className={styles.carInfoItem}>
              <span className={styles.carInfoItemLabel}>Color</span>
              <div className={styles.carInfoItemLine}></div>
              <span className={styles.carInfoItemValue}>
                {currentVehicle.color}
              </span>
            </div>
            <div className={styles.carInfoItem}>
              <span className={styles.carInfoItemLabel}>Weight</span>
              <div className={styles.carInfoItemLine}></div>
              <span className={styles.carInfoItemValue}>
                {currentVehicle.weight.toLocaleString() + " KG"}
              </span>
            </div>
            <div className={styles.carInfoItem}>
              <span className={styles.carInfoItemLabel}>Year</span>
              <div className={styles.carInfoItemLine}></div>
              <span className={styles.carInfoItemValue}>
                {currentVehicle.year}
              </span>
            </div>
            <div className={styles.carInfoItem}>
              <span className={styles.carInfoItemLabel}>Fuel Type</span>
              <div className={styles.carInfoItemLine}></div>
              <span className={styles.carInfoItemValue}>
                {currentVehicle.fuelType}
              </span>
            </div>
            <div className={styles.carInfoItem}>
              <span className={styles.carInfoItemLabel}>Horse Power</span>
              <div className={styles.carInfoItemLine}></div>
              <span className={styles.carInfoItemValue}>
                {currentVehicle.horsePower + " HP"}
              </span>
            </div>
            <div className={styles.carInfoItem}>
              <span className={styles.carInfoItemLabel}>Max Speed</span>
              <div className={styles.carInfoItemLine}></div>
              <span className={styles.carInfoItemValue}>
                {currentVehicle.maxSpeed + " KM/H"}
              </span>
            </div>
          </div>
          <div className={styles.carRepairsBlock}>
            <h2>Repairs</h2>
            {currentVehicle.repairs.length === 0 && (
              <span className={styles.noRepairsMessage}>
                No repairs registered.
              </span>
            )}
            {currentVehicle.repairs.map((repair) => (
              <RepairItem key={repair._id} repair={repair} />
            ))}
          </div>
        </div>
        <div className={styles.rightContent}>
          <img className={styles.carImage} src={currentVehicle.sideImageUrl} />
        </div>
      </div>
    </div>
  );
};

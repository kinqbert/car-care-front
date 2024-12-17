import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { CarWithDetails } from "../../../types/Cars";
import { deleteCar, getCarById, repairCar } from "../../../api/cars";

import styles from "./styles.module.scss";
import { DamageItem } from "../../common/CarItem/DamageItem";
import { useUserStore } from "../../../store/useUserStore";
import { Button } from "../../common/Button";
import { useCarsStore } from "../../../store/useCarsStore";
import { RepairItem } from "../../common/CarItem/RepairItem";
import { UserOwnershipItem } from "../../common/UserOwnershipItem";

export const VehiclePageContent = () => {
  const navigate = useNavigate();

  const { vehicleId } = useParams();
  const userId = useUserStore((state) => state.id);
  const removeUserCar = useCarsStore((state) => state.removeUserCar);

  const [isRemovingCar, setIsRemovingCar] = useState(false);
  const [isRemoveCarLoading, setIsRemoveCarLoading] = useState(false);

  const [currentVehicle, setCurrentVehicle] = useState<CarWithDetails | null>(
    null
  );

  const handleRemoveCar = async () => {
    if (!currentVehicle) {
      return;
    }

    if (!isRemovingCar) {
      setIsRemovingCar(true);
      return;
    }
    setIsRemoveCarLoading(true);

    try {
      await deleteCar(currentVehicle._id);

      removeUserCar(currentVehicle._id);

      navigate("/garage");
    } catch (error) {
      console.error(error);
    }

    setIsRemoveCarLoading(false);
  };

  const handleRepairCar = async () => {
    if (!currentVehicle) {
      return;
    }

    try {
      const updatedCar = await repairCar(currentVehicle._id);

      setCurrentVehicle(updatedCar);
    } catch (error) {
      console.error(error);
    }
  };

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
          <div className={styles.carDamagesBlock}>
            <h2>Damages</h2>
            {currentVehicle.damages.length === 0 && (
              <span className={styles.noDamagesMessage}>
                No damages registered.
              </span>
            )}
            {currentVehicle.damages.map((damage) => (
              <DamageItem
                key={damage._id}
                damage={damage}
                showFullDescription
              />
            ))}
          </div>
          <div className={styles.carRepairsBlock}>
            <h2>Repairs</h2>
            {currentVehicle.repairs.length === 0 && (
              <span className={styles.noDamagesMessage}>
                No repairs registered.
              </span>
            )}
            {currentVehicle.repairs.map((repair) => (
              <RepairItem key={repair._id} repair={repair} />
            ))}
          </div>
          <div className={styles.carOwnershipsBlock}>
            <h2>Ownership history</h2>
            {currentVehicle.owners.length === 1 && (
              <span className={styles.noDamagesMessage}>
                You are registered as the only owner of this car.
              </span>
            )}
            {currentVehicle.owners.map((ownership) => (
              <UserOwnershipItem key={ownership.id} userOwnership={ownership} />
            ))}
          </div>
          {currentVehicle.owner.id === userId && (
            <div className={styles.carActionsBlock}>
              <h2>Car Actions</h2>
              <div className={styles.carActionsItems}>
                <Button
                  title={isRemovingCar ? "Are you sure?" : "Remove car"}
                  onClick={handleRemoveCar}
                  variant={isRemovingCar ? "error" : "outline"}
                  isLoading={isRemoveCarLoading}
                />
                {isRemovingCar && (
                  <Button
                    title="Cancel"
                    onClick={() => setIsRemovingCar(false)}
                    variant="outline"
                  />
                )}
                {currentVehicle.damages.length > 0 && (
                  <Button
                    title="Repair car"
                    onClick={handleRepairCar}
                    variant="outline"
                  />
                )}
              </div>
            </div>
          )}
        </div>
        <div className={styles.rightContent}>
          <img className={styles.carImage} src={currentVehicle.sideImageUrl} />
        </div>
      </div>
    </div>
  );
};

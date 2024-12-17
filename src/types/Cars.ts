import { Damage } from "./Damage";
import { User } from "./User";

export interface Car {
  _id: string;
  make: string;
  model: string;
  year: number;
  ownerId: string;
  logoImageUrl: string;
  sideImageUrl: string;
  color: string;
  weight: number;
  fuelType: string;
  maxSpeed: number;
  price: number;
  horsePower: number;
  isPurchaseAvailable: boolean;
}

export interface CarWithOwnerDetails extends Car {
  owner: User;
}

export interface CarWithDamages extends Car {
  damages: Damage[];
}

export interface CarWithOwnerDetailsAndDamagess extends Car {
  owner: User;
  damages: Damage[];
}

export interface CarMake {
  name: string;
  logoUrl: string;
}

export interface CarsState {
  userCars: CarWithDamages[];
  allCars: CarWithOwnerDetails[];
  setUserCars: (data: CarWithDamages[]) => void;
  setUserCar: (id: string, data: CarWithDamages) => void;
  addUserCar: (data: CarWithDamages) => void;
  removeUserCar: (id: string) => void;
  setAllCars: (data: CarWithOwnerDetails[]) => void;
  removeCar: (id: string) => void;
}

export interface CarsCreateData {
  make: string;
  model: string;
  year: number;
  logoImageUrl: string;
  sideImageUrl: string;
  color: string;
  weight: number;
  fuelType: string;
  maxSpeed: number;
  price: number;
  horsePower: number;
}

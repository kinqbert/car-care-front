import { Repair } from "./Repair";
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

export interface CarWithRepairs extends Car {
  repairs: Repair[];
}

export interface CarsState {
  userCars: CarWithRepairs[];
  allCars: CarWithOwnerDetails[];
  setUserCars: (data: Car[]) => void;
  setAllCars: (data: CarWithOwnerDetails[]) => void;
  setUserCar: (id: string, data: Car) => void;
  removeCar: (id: string) => void;
}

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

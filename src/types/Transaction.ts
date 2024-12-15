import { Car } from "./Cars";
import { User } from "./User";

export interface Transaction {
  _id: string;
  car: Car;
  seller: User;
  buyer: User;
  date: string;
}

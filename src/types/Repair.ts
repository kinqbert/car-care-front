import { Damage } from "./Damage";

export interface Repair {
  _id: string;
  car: string;
  damages: string[];
  date: Date;
}

export interface RepairWithDamageDetails {
  _id: string;
  car: string;
  damages: Damage[];
  date: Date;
}

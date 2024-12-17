import { DamageSeverity } from "../enums/DamageSeverity";

export interface Damage {
  _id: string;
  car: string;
  shortDescription: string;
  description: string;
  severity: DamageSeverity;
}

export interface DamageCreateData {
  car: string;
  shortDescription: string;
  description: string;
  severity: DamageSeverity;
}

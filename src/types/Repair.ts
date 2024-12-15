import { RepairSeverity } from "../enums/RepairSeverity";

export interface Repair {
  _id: string;
  carId: string;
  shortDescription: string;
  description: string;
  severity: RepairSeverity;
}

export interface RepairCreateData {
  carId: string;
  shortDescription: string;
  description: string;
  severity: RepairSeverity;
}

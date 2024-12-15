import { RepairSeverity } from "../enums/RepairSeverity";

export interface Repair {
  _id: string;
  car: string;
  shortDescription: string;
  description: string;
  severity: RepairSeverity;
}

export interface RepairCreateData {
  car: string;
  shortDescription: string;
  description: string;
  severity: RepairSeverity;
}

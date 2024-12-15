import { RepairCreateData } from "../../types/Repair";
import API from "../api";
import { API_ROUTES } from "../routes";

export const createRepair = async (data: RepairCreateData) =>
  (await API.post(API_ROUTES.REPAIRS.CREATE, data)).data;

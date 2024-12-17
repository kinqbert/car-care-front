import { DamageCreateData } from "../../types/Damage";
import API from "../api";
import { API_ROUTES } from "../routes";

export const createDamage = async (data: DamageCreateData) =>
  (await API.post(API_ROUTES.DAMAGE.CREATE, data)).data;
